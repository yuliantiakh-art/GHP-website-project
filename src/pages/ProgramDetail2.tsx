import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramDetail2() {
  return (
    <div className="fade-in pt-20">
      
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="h-[60vh] md:h-[70vh] w-full relative">
          <img 
            alt="Gerakan Qur'an Pelosok Hero" 
            className="w-full h-full object-cover" 
            src="/IMG_20260326_193721.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-margin-mobile md:p-xl">
            <div className="max-w-max-width mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-label-md mb-4">
                Dakwah &amp; Pendidikan
              </span>
              <h1 className="font-display text-[36px] md:text-5xl text-white font-extrabold mb-4 max-w-3xl">
                Tebar Cahaya Qur'an
              </h1>
              <p className="text-white/90 font-sans text-lg max-w-2xl">
                Bersama kita hadirkan Al-Qur'an untuk daerah yang masih memiliki keterbatasan sehingga semakin banyak generasi tumbuh dekat dengan Al-Qur'an.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target & Progress bar card */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-gutter -mt-12 relative z-10">
        <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-gutter items-center border border-outline-variant/30">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-text-muted font-bold text-caption uppercase tracking-wider">Terkumpul</p>
                <h3 className="font-display text-headline-lg text-primary">Rp 10.000.000</h3>
              </div>
              <div className="text-right">
                <p className="text-text-muted font-bold text-caption uppercase tracking-wider">Target</p>
                <p className="font-display text-headline-md text-text-main">Rp 50.000.000</p>
              </div>
            </div>
            <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden mb-2">
              <div className="h-full bg-primary progress-glow transition-all duration-1000 ease-out" style={{ width: '20%' }}></div>
            </div>
            <div className="flex justify-between text-text-muted font-semibold text-caption">
              <span>20% dari target</span>
              <span>12 hari tersisa</span>
            </div>
          </div>
          <div className="lg:border-l border-outline-variant lg:pl-gutter flex flex-col gap-3">
            <button className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:bg-primary/95 transition-colors shadow-lg active:scale-98">
              Mari Berbagi Sekarang
            </button>
            <p className="text-center font-semibold text-caption text-text-muted">
              Sedekah jariyah Anda akan disalurkan 100% untuk pengadaan &amp; distribusi Al-Qur'an.
            </p>
          </div>
        </div>
      </section>

      {/* Program Story */}
      <section className="py-xl max-w-max-width mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-12 gap-xl">
        <div className="md:col-span-8">
          <div className="space-y-6">
            <h2 className="font-display text-headline-lg text-text-main border-l-4 border-primary pl-4">Cerita Program</h2>
            <div className="prose prose-lg text-text-muted font-sans text-lg space-y-4">
              <p>Di setiap sudut negeri, selalu ada orang-orang yang menjaga cahaya Al-Qur'an tetap hidup. Anak-anak yang tekun belajar mengaji, para santri yang menghafal ayat demi ayat, hingga masyarakat yang menjadikan masjid sebagai tempat bertumbuh dalam iman.</p>
              <p>Namun, tidak semua dari mereka memiliki mushaf Al-Qur'an yang layak untuk belajar.</p>
              <p>Melalui Program Tebar Cahaya Qur'an, Gerakan Hasan Peduli mengajak Anda menghadirkan lebih dari sekadar mushaf. Kita bersama menghadirkan kesempatan untuk belajar, menghafal, memahami, dan mengamalkan firman Allah.</p>
              <p>Setiap Al-Qur'an yang tersalurkan akan menjadi teman belajar, saksi lahirnya generasi Qur'ani, dan insyaAllah menjadi amal jariyah yang terus mengalir selama ayat-ayat-Nya dibaca.</p>
              <p>Mari bersama menebarkan cahaya Al-Qur'an hingga ke pelosok Indonesia. Karena setiap mushaf yang kita titipkan hari ini, dapat menerangi banyak hati untuk waktu yang sangat panjang.</p>
            </div>

            {/* Impact Metrics */}
            <div className="pt-lg">
              <h3 className="font-display text-headline-md text-text-main mb-6">Target Dampak</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-surface-container-low p-4 rounded-xl text-center group hover:bg-primary-container hover:text-on-primary-container transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mb-2 group-hover:text-on-primary-container text-4xl">auto_stories</span>
                  <p className="font-display text-headline-md block">1.000</p>
                  <p className="text-caption font-semibold opacity-80 uppercase">Mushaf Tersalur</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl text-center group hover:bg-primary-container hover:text-on-primary-container transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mb-2 group-hover:text-on-primary-container text-4xl">location_on</span>
                  <p className="font-display text-headline-md block">50</p>
                  <p className="text-caption font-semibold opacity-80 uppercase">Desa Pelosok</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl text-center group hover:bg-primary-container hover:text-on-primary-container transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mb-2 group-hover:text-on-primary-container text-4xl">groups</span>
                  <p className="font-display text-headline-md block">15</p>
                  <p className="text-caption font-semibold opacity-80 uppercase">Relawan Terlibat</p>
                </div>
                <div className="bg-surface-container-low p-4 rounded-xl text-center group hover:bg-primary-container hover:text-on-primary-container transition-all duration-300">
                  <span className="material-symbols-outlined text-primary mb-2 group-hover:text-on-primary-container text-4xl">public</span>
                  <p className="font-display text-headline-md block">5</p>
                  <p className="text-caption font-semibold opacity-80 uppercase">Kabupaten</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 space-y-gutter">
          <div className="bg-surface-container-high rounded-xl p-6">
            <h4 className="font-bold text-caption text-primary uppercase mb-4 tracking-widest">Informasi Yayasan</h4>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-on-primary text-2xl">verified_user</span>
              </div>
              <div>
                <p className="font-bold text-label-md text-text-main">Gerakan Hasan Peduli</p>
                <p className="text-caption font-semibold text-text-muted">Terverifikasi</p>
              </div>
            </div>
            <div className="space-y-3 pt-3 border-t border-outline-variant">
              <div className="flex items-center gap-2 text-text-muted font-semibold text-caption">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                <span>Mulai: 01 Jan 2026</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted font-semibold text-caption">
                <span className="material-symbols-outlined text-lg">update</span>
                <span>Berakhir: 31 Des 2026</span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6">
            <h4 className="font-bold text-label-md text-text-main mb-4">Bagikan Kebaikan</h4>
            <div className="flex gap-2">
              <button className="flex-1 p-2.5 bg-[#1877F2] text-white rounded-lg hover:opacity-90 flex justify-center items-center">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button className="flex-1 p-2.5 bg-[#25D366] text-white rounded-lg hover:opacity-90 flex justify-center items-center">
                <span className="material-symbols-outlined">chat</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-xl bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-gutter">
          <h2 className="font-display text-headline-lg text-text-main mb-8">Galeri Kondisi Lapangan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="relative rounded-xl overflow-hidden group aspect-[4/3]">
              <img alt="Distribusi Mushaf" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/IMG_20241006_071916.jpg" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-caption font-semibold">Distribusi Mushaf di Dusun Terpencil</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden group aspect-[4/3]">
              <img alt="Santri Belajar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="/IMG_20241006_072157.jpg" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-caption font-semibold">Kebahagiaan Santri Menerima Al-Qur'an Baru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
