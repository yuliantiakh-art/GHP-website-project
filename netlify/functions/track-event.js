import crypto from 'crypto';

// Helper to hash user data with SHA-256 as required by Meta
function hash(value) {
  if (!value) return undefined;
  const normalized = value.trim().toLowerCase();
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

// Normalize phone number to include country code (e.g. 62...)
function normalizePhone(phone) {
  if (!phone) return undefined;
  let cleaned = phone.replace(/\D/g, '');
  if (cleaned.startsWith('0')) {
    cleaned = '62' + cleaned.slice(1);
  }
  return cleaned;
}

export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body || '{}');
    const { eventName, eventId, eventTime, eventSourceUrl, userData = {}, customData = {} } = body;

    // Get Meta Pixel credentials from environment variables (configured in Netlify)
    const pixelId = process.env.META_PIXEL_ID || '981635738248481';
    const accessToken = process.env.META_ACCESS_TOKEN;
    const testEventCode = process.env.META_TEST_EVENT_CODE;

    if (!accessToken) {
      console.warn('Meta Access Token is not configured. Server-side tracking skipped.');
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Meta Access Token not configured. Event skipped.' }),
      };
    }

    // Retrieve client IP and User Agent from headers
    const clientIp = event.headers['x-nf-client-connection-ip'] ||
      event.headers['x-forwarded-for']?.split(',')[0].trim();
    const clientUserAgent = event.headers['user-agent'] || userData.clientUserAgent;

    // Retrieve fbp and fbc cookies passed from frontend
    const fbp = userData.fbp;
    const fbc = userData.fbc;

    // Normalize and hash user details
    const ph = normalizePhone(userData.phone);
    const hashedPhone = ph ? hash(ph) : undefined;
    const hashedName = userData.name ? hash(userData.name) : undefined;

    // Build the Meta Conversions API Payload
    const payload = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime || Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || '',
          action_source: 'website',
          user_data: {
            client_ip_address: clientIp,
            client_user_agent: clientUserAgent,
            fbp: fbp || undefined,
            fbc: fbc || undefined,
            ph: hashedPhone ? [hashedPhone] : undefined,
            fn: hashedName ? [hashedName] : undefined,
          },
          custom_data: customData,
        },
      ],
      // If test event code is provided in Netlify config, include it so the events show up in Test Events tab
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
    };

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    const resData = await response.json();

    if (!response.ok) {
      console.error('Error sending event to Meta CAPI:', resData);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to send event to Meta CAPI', details: resData }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ success: true, data: resData }),
    };
  } catch (error) {
    console.error('CAPI handler error:', error);
