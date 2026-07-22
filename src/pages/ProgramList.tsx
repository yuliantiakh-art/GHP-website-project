import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramList() {
  const programs = [
    {
      id: 'cahaya-quran',
      title: "Cahaya Qur'an Nusantara",
      desc: "Bantu menghadirkan mushaf Al-Qur'an untuk masjid, mushala, TPA, dan santri di daerah yang masih memiliki keterbatasan.",
      img: "/IMG_20241005_182203.jpg",
      raised: 5000000,
      target: 50000000,
      category: "Religi & Pendidikan"
    },
    {
      id: 'jejak-amal-quran',
      title: "Jejak Amal Qur'an",
      desc: "Setiap mushaf yang Anda titipkan menjadi bagian dari amal jariyah yang terus hidup melalui setiap ayat yang dibaca.",
      img: "/IMG_20241005_172025.jpg",
      raised: 10000000,
      target: 50000000,
      category: "Sosial Kemanusiaan"
    },
    {
      id: 'quran-pelosok',
      title: "Tebar Cahaya Qur'an",
      desc: "Bersama kita hadirkan Al-Qur'an untuk daerah yang masih memiliki keterbatasan sehingga semakin banyak generasi tumbuh dekat dengan Al-Qur'an.",
      img: "/IMG_20260326_193721.jpg",
      raised: 15000000,
      target: 50000000,
      category: "Dakwah & Pendidikan"
    }
  ];

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface-warm py-xl md:py-32">
        <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
          <div className="z-10 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary-container/20 text-primary font-semibold text-caption rounded-full mb-6 uppercase tracking-wider">
              Gerakan Kemanusiaan
            </span>
            <h1 className="font-display text-[48px] md:text-[56px] leading-tight mb-6 font-extrabold text-text-main">
              Program Kebaikan
            </h1>
            <p className="font-sans text-lg text-text-muted mb-10 max-w-xl">
              Bersama Hasan Peduli, setiap bantuan kecil yang Anda berikan menjadi langkah nyata untuk memulihkan harapan dan membangun masa depan yang lebih bermartabat bagi sesama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/checkout" 
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-primary/95 transition-colors"
              >
                Titipkan Kebaikan
                <span className="material-symbols-outlined text-lg">volunteer_activism</span>
              </Link>
              <a 
                href="https://wa.me/6285159630057" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-surface-container-high text-on-surface px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors"
              >
                Tanya Lewat WhatsApp
              </a>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl transform rotate-1">
              <img className="w-full h-full object-cover" alt="Volunteer GHP" src="/IMG_20241006_071916.jpg" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-container p-6 rounded-xl shadow-lg transform -rotate-2 hidden sm:block border border-white/20">
              <div className="text-on-secondary-container font-bold text-headline-md mb-1">5.000+</div>
              <div className="text-on-secondary-container/85 text-label-md font-semibold">Penerima Manfaat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Listing Grid */}
      <section className="py-xl bg-surface" id="daftar-program">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-text-main mb-4">Program Unggulan</h2>
            <p className="text-text-muted">Inisiatif utama kami untuk menciptakan perubahan positif di masyarakat.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {programs.map(program => {
              const progress = Math.round((program.raised / program.target) * 100);
              return (
                <div 
                  key={program.id} 
                  className="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col transition-all duration-300 border border-outline-variant/30 hover:shadow-lg w-full"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src={program.img} alt={program.title} />
                    <span className="absolute top-4 left-4 bg-primary-container text-on-primary-container font-semibold text-caption px-3 py-1 rounded-full">
                      {program.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-headline-md text-on-surface mb-2">{program.title}</h3>
                    <p className="text-on-surface-variant mb-6 text-sm flex-grow leading-relaxed">{program.desc}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-end">
                        <div className="text-primary font-bold text-label-md">
                          Rp {program.raised.toLocaleString('id-ID')} <span className="text-on-surface-variant font-normal">Terkumpul</span>
                        </div>
                        <div className="text-on-surface-variant font-bold text-label-md">{progress}%</div>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000" 
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Link 
                      to={`/program/${program.id}`}
                      className="block text-center w-full border-2 border-primary text-primary hover:bg-primary hover:text-on-primary py-3 rounded-full font-bold text-label-md transition-all"
                    >
                      Pelajari Program
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jejak Kebaikan / Impact Summary */}
      <section className="py-xl bg-primary-container/10">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-text-main mb-4">Jejak Kebaikan Anda</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Setiap rupiah yang Anda donasikan dipertanggungjawabkan secara transparan dan disalurkan tepat sasaran.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-outline-variant/20 relative group">
              <div className="w-12 h-12 bg-primary/10 text-primary flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="material-symbols-outlined">loyalty</span>
              </div>
              <div className="font-display text-display-lg text-primary mb-1 font-bold">15+</div>
              <div className="text-on-surface-variant text-caption font-semibold uppercase tracking-wider">Program Berjalan</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-outline-variant/20 relative group">
              <div className="w-12 h-12 bg-secondary/10 text-secondary flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <div className="font-display text-display-lg text-secondary mb-1 font-bold">100+</div>
              <div className="text-on-surface-variant text-caption font-semibold uppercase tracking-wider">Donatur Terlibat</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-outline-variant/20 relative group">
              <div className="w-12 h-12 bg-tertiary/10 text-tertiary flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="material-symbols-outlined">groups</span>
              </div>
              <div className="font-display text-display-lg text-tertiary mb-1 font-bold">20+</div>
              <div className="text-on-surface-variant text-caption font-semibold uppercase tracking-wider">Relawan Aktif</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-outline-variant/20 relative group">
              <div className="w-12 h-12 bg-success/10 text-success flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="material-symbols-outlined">mood</span>
              </div>
              <div className="font-display text-display-lg text-success mb-1 font-bold">350+</div>
              <div className="text-on-surface-variant text-caption font-semibold uppercase tracking-wider">Penerima Manfaat</div>
            </div>
          </div>
          <div className="mt-16 p-8 bg-white rounded-xl border border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h4 className="font-bold text-headline-md text-text-main mb-2">Ingin berkolaborasi lebih jauh?</h4>
              <p className="text-text-muted text-sm">Jadilah mitra strategis kami dalam menyebarkan kebaikan lebih luas lagi.</p>
            </div>
            <a 
              href="https://wa.me/6285159630057?text=Assalamu'alaikum%20Admin%20GHP,%20saya%20ingin%20berdiskusi%20mengenai%20kemitraan." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-label-md shadow-sm active:scale-95 duration-100 whitespace-nowrap inline-block text-center"
            >
              Hubungi Kemitraan
            </a>
          </div>
        </div>
      </section>

      {/* Floating Donation FAB for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Link 
          to="/program" 
          className="bg-primary text-on-primary w-14 h-14 rounded-full shadow-xl flex items-center justify-center active:scale-90 transition-all"
        >
          <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
        </Link>
      </div>

    </div>
  );
}
