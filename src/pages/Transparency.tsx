import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Transparency() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'tahunan' | 'bulanan' | 'program'>('tahunan');

  const reports = [
    {
      title: "Laporan Tahunan 2024",
      desc: "Ringkasan menyeluruh perjalanan Hasan Peduli sepanjang tahun 2024, data audit keuangan independen, dan statistik penerima manfaat.",
      img: "/DSC00027.JPG",
      type: "tahunan"
    },
    {
      title: "Laporan Januari 2025",
      desc: "Detil penyaluran dana dan aktivitas program selama bulan Januari 2025 termasuk rincian pengeluaran operasional.",
      img: "/IMG_20241005_172025.jpg",
      type: "bulanan"
    },
    {
      title: "Laporan Program Mushaf",
      desc: "Laporan khusus distribusi 5000 Mushaf Al-Qur'an ke daerah pelosok dan dokumentasi audit khusus alokasi dana.",
      img: "/IMG_20260326_193721.jpg",
      type: "program"
    }
  ];

  const filteredReports = reports.filter(r => r.type === activeTab);

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-surface-warm px-gutter">
        <div className="relative z-10 max-w-max-width mx-auto grid md:grid-cols-2 gap-lg items-center w-full">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-caption">
              Open Stewardship
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight text-on-background">
              Transparansi Adalah Bentuk Amanah Kami
            </h1>
            <p className="font-sans text-lg text-on-surface-variant max-w-xl">
              Setiap donasi adalah amanah. Kami berkomitmen untuk menyajikan laporan yang jujur, terbuka, dan dapat dipertanggungjawabkan kepada seluruh donatur dan mitra.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all flex items-center gap-2 text-label-md" href="#reports">
                Lihat Laporan Akuntabilitas
                <span className="material-symbols-outlined text-lg">arrow_downward</span>
              </a>
              <a className="border border-outline text-on-surface-variant px-8 py-3 rounded-full font-bold hover:bg-surface-container transition-all text-label-md" href="#documentation">
                Galeri Dokumentasi
              </a>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" alt="Hasan Peduli team and volunteers Quran distribution program" src="/DSC00032.JPG" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-[240px] border border-white/30">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <span className="font-display text-headline-md font-bold text-primary">100%</span>
              </div>
              <p className="text-caption text-on-surface-variant font-medium">Terverifikasi oleh auditor independen untuk akurasi data finansial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ringkasan Dampak */}
      <section className="py-xl max-w-max-width mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-display text-headline-lg text-on-surface mb-4">Ringkasan Dampak Kebaikan</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Visualisasi nyata dari kontribusi Anda selama periode 2023-2024.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          <div className="p-8 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed flex items-center justify-center text-on-primary-fixed mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
            </div>
            <h3 className="font-display text-headline-lg text-on-surface mb-1 font-bold">15+</h3>
            <p className="text-on-surface-variant font-bold text-label-md">Program Berjalan</p>
          </div>
          <div className="p-8 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">groups</span>
            </div>
            <h3 className="font-display text-headline-lg text-on-surface mb-1 font-bold">100+</h3>
            <p className="text-on-surface-variant font-bold text-label-md">Total Donatur</p>
          </div>
          <div className="p-8 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">handshake</span>
            </div>
            <h3 className="font-display text-headline-lg text-on-surface mb-1 font-bold">20+</h3>
            <p className="text-on-surface-variant font-bold text-label-md">Relawan Aktif</p>
          </div>
          <div className="p-8 rounded-3xl bg-surface-container hover:bg-surface-container-high transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-primary-fixed-dim flex items-center justify-center text-on-primary-fixed-variant mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">diversity_1</span>
            </div>
            <h3 className="font-display text-headline-lg text-on-surface mb-1 font-bold">350+</h3>
            <p className="text-on-surface-variant font-bold text-label-md">Penerima Manfaat</p>
          </div>
        </div>
      </section>

      {/* Distribusi Manfaat */}
      <section className="py-xl bg-white/50 border-y border-surface-container-high overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="flex flex-col md:flex-row gap-lg items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <div>
                <h2 className="font-display text-headline-lg mb-4 text-on-surface">Distribusi Manfaat</h2>
                <p className="text-on-surface-variant">Bagaimana kontribusi Anda didistribusikan ke berbagai sektor pengabdian kami.</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-label-md">Pendidikan &amp; Mushaf</span>
                    <span className="font-bold text-primary">45%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-label-md">Kesehatan Masyarakat</span>
                    <span className="font-bold text-secondary">30%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary rounded-full transition-all duration-1000" style={{ width: '30%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-bold text-label-md">Tanggap Bencana</span>
                    <span className="font-bold text-tertiary">25%</span>
                  </div>
                  <div className="h-3 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary rounded-full transition-all duration-1000" style={{ width: '25%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-80 h-80 flex flex-col items-center justify-center">
                <div className="absolute inset-0 rounded-full border-[24px] border-surface-container"></div>
                <div className="absolute inset-0 rounded-full border-[24px] border-primary border-r-transparent border-b-transparent border-l-transparent transform -rotate-45"></div>
                <span className="font-display text-[48px] font-extrabold text-primary">8.5M+</span>
                <p className="text-caption text-on-surface-variant font-semibold mt-1">Dana Tersalurkan (IDR)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-xl max-w-max-width mx-auto px-gutter" id="reports">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="font-display text-headline-lg text-on-surface mb-2">Laporan Akuntabilitas</h2>
            <p className="text-on-surface-variant">Unduh laporan resmi kami dalam format PDF.</p>
          </div>
          <div className="flex gap-2 bg-surface-container p-1 rounded-full text-sm">
            {(['tahunan', 'bulanan', 'program'] as const).map(tab => (
              <button 
                key={tab}
                className={`px-6 py-2 rounded-full font-bold capitalize transition-all ${activeTab === tab ? 'bg-white shadow-sm text-primary' : 'text-on-surface-variant hover:text-primary'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter justify-center">
          {filteredReports.map((report, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-outline-variant/30 flex flex-col group max-w-sm mx-auto w-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={report.img} alt={report.title} />
                <span className="absolute top-4 left-4 bg-primary text-on-primary font-semibold text-caption px-3 py-1 rounded-full uppercase">
                  {report.type}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-on-surface mb-2">{report.title}</h3>
                <p className="text-on-surface-variant text-sm mb-6 flex-grow">{report.desc}</p>
                <a 
                  href={`https://wa.me/6285159630057?text=Assalamu'alaikum%20Admin%20GHP,%20saya%20minta%20dikirimkan%20${encodeURIComponent(report.title)}%20PDF.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-on-primary py-3 rounded-xl hover:bg-primary/95 transition-all font-bold text-label-md flex justify-center items-center gap-2"
                >
                  <span className="material-symbols-outlined">download</span> Minta PDF via WA
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bukti Nyata / Gallery */}
      <section className="py-xl bg-surface-container-lowest" id="documentation">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-display text-headline-lg text-on-surface mb-4">Bukti Nyata di Lapangan</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Kami mengabadikan setiap momen penyaluran sebagai bentuk pertanggungjawaban visual.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-gutter">
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/DSC00027.JPG" alt="Distribusi 1" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Distribusi Mushaf di Masjid Desa</div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-square group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20260326_193721.jpg" alt="Distribusi 2" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Penerima Manfaat Program Al-Qur'an</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden aspect-square group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20241006_071916.jpg" alt="Distribusi 3" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Program Tebar Quran Pelosok</div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20241006_071831.jpg" alt="Distribusi 4" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Serah Terima Amanah Donatur</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20241005_182203.jpg" alt="Distribusi 5" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Touring Amal Sholeh - Garut Selatan</div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-square group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20241005_172025.jpg" alt="Distribusi 6" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Kegiatan Pemberdayaan di Pelosok</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-3xl overflow-hidden aspect-square group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20241006_073529.jpg" alt="Distribusi 7" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Layanan Kesehatan Gratis</div>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/4] group cursor-pointer relative shadow-sm">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="/IMG_20260326_191429.jpg" alt="Distribusi 8" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white text-xs">Program Pemberdayaan Ekonomi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl max-w-3xl mx-auto px-gutter">
        <div className="text-center mb-12">
          <h2 className="font-display text-headline-lg text-on-surface mb-4">Pertanyaan Seputar Transparansi</h2>
          <p className="text-on-surface-variant">Segala hal yang perlu Anda ketahui tentang cara kami mengelola amanah Anda.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "Bagaimana saya bisa memverifikasi penggunaan donasi saya?",
              a: "Setiap donatur mendapatkan nomor referensi unik. Anda dapat memasukkan nomor tersebut di halaman 'Cek Donasi' untuk melihat status penyaluran dana Anda secara spesifik ke program yang Anda pilih."
            },
            {
              q: "Apakah Hasan Peduli diaudit oleh lembaga independen?",
              a: "Ya, laporan keuangan tahunan kami diaudit oleh Kantor Akuntan Publik (KAP) independen untuk memastikan standar akuntansi yang berlaku dan integritas data finansial kami."
            },
            {
              q: "Berapa persentase donasi yang digunakan untuk operasional?",
              a: "Kami berkomitmen menjaga biaya operasional di bawah 12.5% dari total donasi, memastikan porsi terbesar manfaat langsung dirasakan oleh mereka yang membutuhkan."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-surface-container-high overflow-hidden">
              <button 
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-surface-container transition-colors"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <span className="font-bold text-label-md text-on-surface">{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-40 opacity-100 px-6 pb-5 pt-2' : 'max-h-0 opacity-0'}`}>
                <p className="text-on-surface-variant text-sm">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-xl px-gutter">
        <div className="max-w-max-width mx-auto rounded-[40px] bg-primary relative overflow-hidden p-8 md:p-20 text-center text-white">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="font-display text-display-lg">Mari Bertumbuh Bersama dalam Gerakan Kebaikan</h2>
            <p className="text-primary-fixed text-body-lg">Kontribusi Anda adalah energi bagi kami untuk terus melayani. Mari berkolaborasi menciptakan dampak yang lebih luas.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/checkout" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all block text-center">Titipkan Kebaikan</Link>
              <a href="https://wa.me/6285159630057?text=Assalamu'alaikum%20Admin%20GHP,%20saya%20ingin%20berdiskusi%20mengenai%20kemitraan." target="_blank" rel="noopener noreferrer" className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all block text-center">Hubungi Kemitraan</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
