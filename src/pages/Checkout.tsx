import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

// Generate a unique Event ID for deduplication
const generateEventId = () => {
  return 'event_' + Date.now() + '_' + Math.random().toString(36).substring(2, 11);
};

// Twin track function: Browser Meta Pixel + Server-side Conversions API (CAPI)
const sendMetaEvent = (
  eventName: string,
  eventId: string,
  customData: any,
  userData: { phone?: string; name?: string } = {}
) => {
  // 1. Browser Meta Pixel (using eventID for deduplication)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, customData, { eventID: eventId });
  }

  // 2. Server-side CAPI via Netlify Function
  fetch('/.netlify/functions/track-event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      eventName,
      eventId,
      eventTime: Math.floor(Date.now() / 1000),
      eventSourceUrl: window.location.href,
      userData: {
        clientUserAgent: navigator.userAgent,
        phone: userData.phone,
        name: userData.name,
      },
      customData,
    }),
  }).catch((err) => {
    console.error('Error sending CAPI event:', err);
  });
};

export default function Checkout() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Program details can be passed via query or default to Cahaya Quran
  const programTitle = searchParams.get('program') || "Cahaya Qur'an Nusantara";
  
  const [mushafCount, setMushafCount] = useState<number>(1);
  const [paymentTab, setPaymentTab] = useState<'qris' | 'bsi'>('qris');
  const [donorName, setDonorName] = useState<string>('');
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [doa, setDoa] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const pricePerMushaf = 50000;
  const totalPrice = mushafCount * pricePerMushaf;

  // Track InitiateCheckout event on page load (mount)
  useEffect(() => {
    const eventId = generateEventId();
    sendMetaEvent(
      'InitiateCheckout',
      eventId,
      {
        content_name: programTitle,
        value: totalPrice,
        currency: 'IDR'
      }
    );
  }, []);

  const handleAdjustMushaf = (delta: number) => {
    setMushafCount((prev) => Math.max(1, prev + delta));
  };

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('7327221552');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formattedTotal = `Rp ${totalPrice.toLocaleString('id-ID')}`;
  const displayName = isAnonymous ? 'Hamba Allah' : donorName || 'Hamba Allah';

  const handleConfirmWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    // Track Purchase event on WhatsApp confirmation button click
    const eventId = generateEventId();
    sendMetaEvent(
      'Purchase',
      eventId,
      {
        value: totalPrice,
        currency: 'IDR',
        content_name: programTitle,
        content_category: 'Donation',
        num_items: mushafCount
      },
      {
        phone: whatsapp || undefined,
        name: isAnonymous ? undefined : donorName || undefined
      }
    );

    const waText = encodeURIComponent(
      `Assalamu'alaikum Admin Gerakan Hasan Peduli,\n\n` +
      `Saya ingin mengonfirmasi amanah donasi/wakaf:\n` +
      `📌 *Program*: ${programTitle}\n` +
      `👤 *Nama Donatur*: ${displayName}\n` +
      `📱 *No. WA*: ${whatsapp || '-'}\n` +
      `📖 *Jumlah Wakaf*: ${mushafCount} Mushaf (${formattedTotal})\n` +
      `💳 *Metode Pembayaran*: ${paymentTab === 'qris' ? 'QRIS (E-Wallet/Bank)' : 'Transfer Bank BSI'}\n` +
      (doa ? `🤲 *Doa/Pesan*: "${doa}"\n\n` : `\n`) +
      `Mohon diinfokan rekening/QRIS untuk penyelesaian transaksi. Terima kasih.`
    );
    window.open(`https://wa.me/6285159630057?text=${waText}`, '_blank');
  };

  return (
    <div className="fade-in pt-24 pb-16 bg-surface min-h-screen">
      <div className="max-w-max-width mx-auto px-gutter">
        
        {/* Navigation back */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-bold transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span>Kembali</span>
          </button>
          <div className="flex items-center gap-2 text-primary text-xs font-semibold bg-primary-container/20 px-3 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            <span>Transaksi Aman &amp; Terverifikasi</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Checkout Area */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Header Card */}
            <section className="relative rounded-3xl overflow-hidden shadow-md bg-inverse-surface text-white p-8">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none" 
                style={{ backgroundImage: "url('/IMG_20241005_182203.jpg')" }}
              ></div>
              <div className="relative z-10">
                <span className="inline-block bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
                  1 Mushaf = Rp 50.000
                </span>
                <h1 className="font-display text-2xl md:text-3xl font-extrabold mb-2 leading-tight">
                  📖 {programTitle}
                </h1>
                <p className="text-sm md:text-base text-white/80 max-w-xl">
                  Bantu hadirkan cahaya Al-Qur'an untuk masjid, mushala, TPA, dan santri di pelosok nusantara yang membutuhkan.
                </p>
              </div>
            </section>

            {/* Selection of Amount */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">favorite</span>
                </div>
                <h2 className="font-display text-xl font-bold text-on-surface">Pilih Jumlah Wakaf</h2>
              </div>

              {/* Presets */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {[1, 2, 5, 10].map((count) => {
                  const isSelected = mushafCount === count;
                  return (
                    <button
                      key={count}
                      type="button"
                      onClick={() => setMushafCount(count)}
                      className={`p-4 rounded-2xl border-2 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-primary bg-primary/5 shadow-md scale-[1.02]'
                          : 'border-outline-variant/50 hover:border-primary/50 bg-surface-container-lowest'
                      }`}
                    >
                      <div className="text-xs font-bold text-on-surface-variant mb-1">
                        {count} Mushaf
                      </div>
                      <div className="text-base font-extrabold text-primary">
                        Rp {(count * pricePerMushaf).toLocaleString('id-ID')}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Counter Manual */}
              <div className="bg-surface-container-low p-4 rounded-2xl flex items-center justify-between border border-outline-variant/30">
                <span className="font-bold text-sm text-on-surface">Jumlah Mushaf Kustom:</span>
                <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-xl border border-outline-variant/50 shadow-sm">
                  <button
                    type="button"
                    onClick={() => handleAdjustMushaf(-1)}
                    disabled={mushafCount <= 1}
                    className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high disabled:opacity-40"
                  >
                    <span className="material-symbols-outlined text-sm">remove</span>
                  </button>
                  <span className="font-extrabold text-lg w-8 text-center text-primary">{mushafCount}</span>
                  <button
                    type="button"
                    onClick={() => handleAdjustMushaf(1)}
                    className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-primary/90"
                  >
                    <span className="material-symbols-outlined text-sm">add</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Donor Information Form */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-outline-variant/30 shadow-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <h2 className="font-display text-xl font-bold text-on-surface">Data Donatur</h2>
              </div>

              <form onSubmit={handleConfirmWhatsApp} className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-text-main">Nama Donatur</label>
                    <label className="flex items-center gap-2 text-xs text-on-surface-variant cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span>Sembunyikan nama (Hamba Allah)</span>
                    </label>
                  </div>
                  <input
                    type="text"
                    disabled={isAnonymous}
                    value={isAnonymous ? 'Hamba Allah' : donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Masukkan nama Anda..."
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary disabled:bg-surface-container-low disabled:opacity-70"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">No. WhatsApp (opsional)</label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="081234567890"
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">Doa / Harapan Kebaikan (opsional)</label>
                  <textarea
                    rows={3}
                    value={doa}
                    onChange={(e) => setDoa(e.target.value)}
                    placeholder="Tuliskan doa atau niat kebaikan Anda..."
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary text-sm"
                  ></textarea>
                </div>

                {/* Payment Options Selection */}
                <div className="pt-4 border-t border-outline-variant/30">
                  <h3 className="font-bold text-sm text-text-main mb-3">Metode Pembayaran</h3>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setPaymentTab('qris')}
                      className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all cursor-pointer ${
                        paymentTab === 'qris'
                          ? 'border-primary bg-primary/5 text-primary font-bold'
                          : 'border-outline-variant/40 bg-white text-on-surface-variant'
                      }`}
                    >
                      <span className="material-symbols-outlined">qr_code_2</span>
                      <span>QRIS (E-Wallet)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentTab('bsi')}
                      className={`p-4 rounded-2xl border-2 flex items-center gap-3 transition-all cursor-pointer ${
                        paymentTab === 'bsi'
                          ? 'border-primary bg-primary/5 text-primary font-bold'
                          : 'border-outline-variant/40 bg-white text-on-surface-variant'
                      }`}
                    >
                      <span className="material-symbols-outlined">account_balance</span>
                      <span>Bank BSI Transfer</span>
                    </button>
                  </div>

                  {paymentTab === 'qris' ? (
                    <div className="p-6 bg-surface-container-low rounded-2xl text-center space-y-4 border border-outline-variant/30">
                      <div className="flex flex-col items-center">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs rounded-full mb-3">
                          NMID: ID1026538687769
                        </span>
                        <p className="text-xs text-on-surface-variant font-medium mb-4">
                          Scan QRIS ini menggunakan GoPay, OVO, ShopeePay, DANA, BCA, BSI, atau m-Banking Anda:
                        </p>
                        <div className="max-w-xs bg-white p-3 rounded-2xl shadow-md border border-outline-variant/40 overflow-hidden">
                          <img 
                            src="/qris_ghp.jpg" 
                            alt="QRIS Resmi Gerakan Hasan Peduli" 
                            className="w-full h-auto rounded-xl object-contain"
                          />
                        </div>
                        <p className="text-caption text-text-muted mt-3 font-semibold">
                          a.n. GERAKAN HASAN PEDULI
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-6 bg-surface-container-low rounded-2xl space-y-4 border border-outline-variant/30">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-on-surface-variant">Bank Syariah Indonesia (BSI)</p>
                          <p className="font-display font-extrabold text-lg text-primary">7327221552</p>
                          <p className="text-xs font-semibold text-text-main">a.n. YAYASAN GERAKAN HASAN PEDULI</p>
                        </div>
                        <button
                          type="button"
                          onClick={handleCopyAccount}
                          className="px-4 py-2 bg-white rounded-xl border border-outline-variant/50 text-xs font-bold text-primary hover:bg-primary/10 flex items-center gap-1 transition-all"
                        >
                          <span className="material-symbols-outlined text-sm">{copied ? 'check' : 'content_copy'}</span>
                          <span>{copied ? 'Tersalin!' : 'Salin Rekening'}</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-6"
                >
                  <span className="material-symbols-outlined">chat</span>
                  <span>Konfirmasi Donasi via WhatsApp ({formattedTotal})</span>
                </button>
              </form>
            </section>
          </div>

          {/* Right Summary Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-outline-variant/30 shadow-sm sticky top-28 space-y-6">
              <h3 className="font-display text-lg font-bold text-on-surface border-b border-outline-variant/30 pb-4">
                Ringkasan Donasi
              </h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-on-surface-variant">
                  <span>Program</span>
                  <span className="font-bold text-on-surface text-right max-w-[180px]">{programTitle}</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Harga / Mushaf</span>
                  <span className="font-bold text-on-surface">Rp 50.000</span>
                </div>
                <div className="flex justify-between text-on-surface-variant">
                  <span>Jumlah Paket</span>
                  <span className="font-bold text-on-surface">{mushafCount} Mushaf</span>
                </div>
                <div className="pt-3 border-t border-outline-variant/30 flex justify-between items-center">
                  <span className="font-extrabold text-base text-on-surface">Total Wakaf</span>
                  <span className="font-display text-xl font-extrabold text-primary">{formattedTotal}</span>
                </div>
              </div>

              <div className="p-4 bg-primary-container/10 rounded-2xl border border-primary/20 space-y-2">
                <div className="flex items-center gap-2 text-primary font-bold text-xs">
                  <span className="material-symbols-outlined text-base">auto_awesome</span>
                  <span>Keutamaan Wakaf Al-Qur'an</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  "Apabila cucu Adam meninggal dunia, terputuslah amalnya kecuali tiga perkara: sedekah jariyah, ilmu yang bermanfaat, atau anak shaleh yang mendoakannya." (HR. Muslim)
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
