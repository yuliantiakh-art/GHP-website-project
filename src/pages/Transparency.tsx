import React from 'react';

export default function Transparency() {
  const reports = [
    {
      title: "Laporan Dampak Tahunan 2025",
      desc: "Laporan lengkap pencapaian program, data audit keuangan independen, dan statistik penerima manfaat di seluruh Indonesia selama tahun 2025.",
      img: "/DSC00027.JPG",
      type: "Tahunan"
    },
    {
      title: "Laporan Bulanan - Januari 2026",
      desc: "Ikhtisar bulanan mengenai jumlah pengumpulan donasi, rincian pengeluaran operasional, serta titik-titik distribusi Al-Qur'an terdekat.",
      img: "/IMG_20241005_172025.jpg",
      type: "Bulanan"
    },
    {
      title: "Laporan Program Tebar Qur'an Nusantara",
      desc: "Dokumentasi audit khusus untuk alokasi dana dan mushaf dalam program andalan Tebar Qur'an di pelosok Jawa Barat dan NTB.",
      img: "/IMG_20260326_193721.jpg",
      type: "Khusus"
    }
  ];

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="/DSC00032.JPG"
            alt="Akuntabilitas dan Dampak Sosial GHP"
          />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-gutter w-full text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/20 border border-primary-fixed/30 backdrop-blur-sm text-primary-fixed font-semibold text-caption mb-6">
              Transparansi Keuangan
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Akuntabilitas &amp; Dampak Sosial
            </h1>
            <p className="font-sans text-lg text-white/90 mb-10 max-w-xl">
              Setiap donasi yang Anda percayakan adalah amanah besar. Kami berkomitmen untuk melaporkan secara rutin dan berkala setiap rupiah yang dikelola demi kemaslahatan bersama.
            </p>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-xl bg-surface-warm">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-on-surface">Laporan Dampak &amp; Audit</h2>
            <p className="text-on-surface-variant mt-4">Unduh berkas PDF laporan resmi kami yang telah diaudit secara profesional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {reports.map((report, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/30 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={report.img} alt={report.title} />
                  <span className="absolute top-4 left-4 bg-primary text-on-primary font-semibold text-caption px-3 py-1 rounded-full">
                    {report.type}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg text-on-surface mb-2">{report.title}</h3>
                  <p className="text-on-surface-variant text-sm mb-6 flex-grow">{report.desc}</p>
                  <button className="w-full bg-primary text-on-primary py-3 rounded-xl hover:bg-primary/95 transition-all font-bold text-label-md flex justify-center items-center gap-2">
                    <span className="material-symbols-outlined">download</span> Unduh PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Documentation Photos */}
      <section className="py-xl bg-surface">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-on-surface">Aktivitas &amp; Penyerahan Bantuan</h2>
            <p className="text-on-surface-variant mt-4">Kompilasi dokumentasi serah terima program kemanusiaan di lapangan.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square group relative">
              <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="/DSC00027.JPG" alt="Dokumentasi 1" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs">Serah Terima Mushaf</div>
            </div>
            <div className="rounded-xl overflow-hidden aspect-square group relative">
              <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="/IMG_20260326_193721.jpg" alt="Dokumentasi 2" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs">Penerima Manfaat Santri</div>
            </div>
            <div className="rounded-xl overflow-hidden aspect-square group relative">
              <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="/IMG_20241006_071916.jpg" alt="Dokumentasi 3" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs">Peninjauan Lapangan</div>
            </div>
            <div className="rounded-xl overflow-hidden aspect-square group relative">
              <img className="w-full h-full object-cover transition-transform group-hover:scale-105" src="/IMG_20241006_071831.jpg" alt="Dokumentasi 4" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white text-xs">Layanan Medis &amp; Dhuafa</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
