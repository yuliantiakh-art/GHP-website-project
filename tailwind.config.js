/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#466800",
        "primary-container": "#76a02d",
        "primary-fixed": "#c3f275",
        "primary-fixed-dim": "#a8d55c",
        "on-primary": "#ffffff",
        "on-primary-container": "#1f3100",
        "on-primary-fixed": "#121f00",
        "on-primary-fixed-variant": "#344e00",
        "inverse-primary": "#a8d55c",
        
        "secondary": "#78583a",
        "secondary-container": "#fed2ac",
        "secondary-fixed": "#ffdcc0",
        "secondary-fixed-dim": "#e9be99",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#79583a",
        "on-secondary-fixed": "#2c1601",
        "on-secondary-fixed-variant": "#5e4124",
        
        "tertiary": "#933c8b",
        "tertiary-container": "#d071c4",
        "tertiary-fixed": "#ffd7f4",
        "tertiary-fixed-dim": "#ffabf0",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#540052",
        "on-tertiary-fixed": "#380037",
        "on-tertiary-fixed-variant": "#772271",
        
        "background": "#f9fbec",
        "on-background": "#1a1d14",
        
        "surface": "#f9fbec",
        "surface-bright": "#f9fbec",
        "surface-dim": "#d9dbce",
        "surface-warm": "#FAF7F2",
        "surface-variant": "#e2e4d6",
        "on-surface": "#1a1d14",
        "on-surface-variant": "#434939",
        "inverse-surface": "#2f3128",
        "inverse-on-surface": "#f0f2e4",
        "surface-tint": "#466800",
        
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f3f5e7",
        "surface-container": "#edefe1",
        "surface-container-high": "#e8e9dc",
        "surface-container-highest": "#e2e4d6",
        
        "outline": "#747967",
        "outline-variant": "#c4c9b4",
        
        "text-main": "#2D3227",
        "text-muted": "#5F6659",
        
        "success": "#4CAF50",
        "warning": "#FF9800",
        "error": "#E53935",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "margin-desktop": "auto",
        "margin-mobile": "16px",
        "xs": "4px",
        "base": "8px",
        "sm": "12px",
        "md": "24px",
        "lg": "48px",
        "xl": "80px",
        "gutter": "24px",
        "max-width": "1280px",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}
