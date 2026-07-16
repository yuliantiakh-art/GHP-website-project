import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="fade-in pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: "url('/IMG_20241006_072157.jpg')" }}
          ></div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 px-gutter max-w-max-width mx-auto w-full text-white">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-container text-on-primary-container font-semibold text-label-md mb-6">
              #GerakanHasanPeduli
            </span>
            <h1 className="font-display text-[48px] md:text-[64px] font-extrabold leading-tight mb-6">
              Bersama Menghadirkan Manfaat untuk Sesama
            </h1>
            <p className="font-sans text-lg text-surface-variant mb-10 max-w-lg">
              Menggerakkan kepedulian melalui aksi nyata untuk memberdayakan masyarakat dan memberikan harapan bagi mereka yang membutuhkan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/program" 
                className="bg-primary text-on-primary font-bold px-8 py-4 rounded-full text-lg shadow-xl hover:translate-y-[-2px] transition-all duration-300 text-center"
              >
                Mulai Berbagi Sekarang
              </Link>
              <Link 
                to="/transparansi" 
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-2xl">play_circle</span>
                Lihat Dampak Kami
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-caption font-medium mb-2">Gulir untuk eksplorasi</span>
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </section>

      {/* Bento Grid Action Choices */}
      <section className="py-xl bg-surface-warm">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-on-surface mb-4">Pilih Cara Anda Berkontribusi</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">Setiap langkah kecil membawa perubahan besar. Pilih peran yang paling sesuai dengan hati Anda.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            
            {/* Donate Bento */}
            <Link 
              to="/program"
              className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-primary-container h-80 flex flex-col justify-end p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-multiply" 
                style={{ backgroundImage: "url('/IMG_20241005_182203.jpg')" }}
              ></div>
              <div className="absolute inset-0 bg-black/40 z-0"></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-white mb-4">volunteer_activism</span>
                <h3 className="font-display text-headline-md text-white mb-2">Ikut Berdonasi</h3>
                <p className="text-white/90 mb-4 max-w-md">Salurkan bantuan finansial Anda untuk mendukung berbagai program kemanusiaan kami.</p>
                <span className="inline-flex items-center gap-2 font-bold text-white">Donasi Sekarang <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </Link>

            {/* Volunteer Bento */}
            <Link 
              to="/relawan"
              className="md:col-span-5 group relative overflow-hidden rounded-3xl h-80 flex flex-col justify-end p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-white border border-outline-variant"
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">groups</span>
                <h3 className="font-display text-headline-md text-on-surface mb-2">Menjadi Relawan</h3>
                <p className="text-on-surface-variant mb-4">Bergabung dengan ribuan relawan lainnya di lapangan untuk membantu sesama.</p>
                <span className="inline-flex items-center gap-2 font-bold text-primary">Daftar Relawan <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </Link>

            {/* Request Bento */}
            <Link 
              to="/bantuan"
              className="md:col-span-5 group relative overflow-hidden rounded-3xl bg-white border border-outline-variant h-80 flex flex-col justify-end p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">handshake</span>
                <h3 className="font-display text-headline-md text-on-surface mb-2">Ajukan Bantuan</h3>
                <p className="text-on-surface-variant mb-4">Apakah Anda atau komunitas Anda membutuhkan dukungan? Kami siap mendengarkan.</p>
                <span className="inline-flex items-center gap-2 font-bold text-primary">Formulir Pengajuan <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </Link>

            {/* Corporate Bento */}
            <div 
              className="md:col-span-7 group relative overflow-hidden rounded-3xl bg-inverse-surface h-80 flex flex-col justify-end p-8 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-30" 
                style={{ backgroundImage: "url('/Screenshot 2026-07-16 102214.png')" }}
              ></div>
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary-fixed mb-4">business_center</span>
                <h3 className="font-display text-headline-md text-white mb-2">Kolaborasi CSR</h3>
                <p className="text-surface-variant mb-4 max-w-md">Kemitraan strategis untuk perusahaan yang ingin menciptakan dampak sosial yang berkelanjutan.</p>
                <span className="inline-flex items-center gap-2 font-bold text-primary-fixed">Jalin Kemitraan <span className="material-symbols-outlined">arrow_forward</span></span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About GHP Section */}
      <section className="py-xl bg-surface">
        <div className="px-gutter max-w-max-width mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10 aspect-[4/5]">
              <img 
                alt="Relawan Hasan Peduli" 
                className="w-full h-full object-cover" 
                src="/IMG_20260326_193721.jpg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-container rounded-2xl -z-0 hidden lg:block"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 border-4 border-secondary-container rounded-full -z-0 hidden lg:block animate-float"></div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h4 className="text-primary font-bold mb-4 uppercase tracking-widest text-caption">Tentang Hasan Peduli</h4>
            <h2 className="font-display text-headline-lg text-on-surface mb-6">Mewujudkan Masyarakat Mandiri &amp; Berdaya</h2>
            <p className="text-lg text-on-surface-variant mb-8">
              Gerakan Hasan Peduli lahir dari keinginan tulus untuk menjembatani antara mereka yang ingin berbagi dengan mereka yang berjuang di garda depan kemiskinan dan keterbatasan.
            </p>
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">visibility</span>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface mb-1">Visi Kami</h5>
                  <p className="text-on-surface-variant">Menjadi penggerak utama dalam transformasi sosial kemasyarakatan yang inklusif dan berkelanjutan.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">rocket_launch</span>
                </div>
                <div>
                  <h5 className="font-bold text-on-surface mb-1">Misi Kami</h5>
                  <p className="text-on-surface-variant">Mengoptimalkan potensi sumber daya lokal untuk solusi kemanusiaan yang cepat, tepat, dan bermartabat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-xl bg-surface-container-low">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-headline-lg text-on-surface mb-2">Program Unggulan</h2>
              <p className="text-on-surface-variant">Fokus utama kami dalam menghadirkan perubahan nyata.</p>
            </div>
            <Link 
              to="/program" 
              className="bg-surface-container-high text-on-surface font-bold px-6 py-3 rounded-full hover:bg-surface-container-highest transition-colors"
            >
              Lihat Semua Program
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            {/* Program Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  alt="Program Tebar Quran" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="/IMG_20241005_182203.jpg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-headline-md text-on-surface mb-2">Cahaya Qur'an Nusantara</h3>
                <p className="text-on-surface-variant mb-6 text-sm line-clamp-2">Bantu menghadirkan mushaf Al-Qur'an untuk masjid, mushala, TPA, dan santri di daerah yang masih memiliki keterbatasan akses agar lebih banyak masyarakat dapat belajar dan mengamalkan Al-Qur'an.</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-caption text-on-surface-variant">Terkumpul: <span className="font-bold text-on-surface">Rp 5Jt</span></span>
                    <span className="text-caption text-primary font-bold">10%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-primary w-[10%] rounded-full"></div>
                  </div>
                  <Link 
                    to="/program/cahaya-quran" 
                    className="block text-center w-full bg-primary/10 text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* Program Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  alt="Program Kesehatan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="/IMG_20241005_172025.jpg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-headline-md text-on-surface mb-2">Jejak Amal Qur'an</h3>
                <p className="text-on-surface-variant mb-6 text-sm line-clamp-2">Setiap mushaf yang Anda titipkan menjadi bagian dari amal jariyah yang terus hidup melalui setiap ayat yang dibaca, dipelajari, dan diamalkan.</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-caption text-on-surface-variant font-bold">Terkumpul: Rp 10Jt</span>
                    <span className="text-caption text-primary font-bold">20%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-primary w-[20%] rounded-full"></div>
                  </div>
                  <Link 
                    to="/program" 
                    className="block text-center w-full bg-primary/10 text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* Program Card 3 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  alt="Program Ekonomi" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  src="/IMG_20260326_193721.jpg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display text-headline-md text-on-surface mb-2">Tebar Cahaya Qur'an</h3>
                <p className="text-on-surface-variant mb-6 text-sm line-clamp-2">Bersama kita hadirkan Al-Qur'an untuk daerah yang masih memiliki keterbatasan sehingga semakin banyak generasi tumbuh dekat dengan Al-Qur'an.</p>
                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-caption text-on-surface-variant font-bold">Terkumpul: Rp 10 Jt</span>
                    <span className="text-caption text-primary font-bold">20%</span>
                  </div>
                  <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-primary w-[20%] rounded-full"></div>
                  </div>
                  <Link 
                    to="/program/quran-pelosok" 
                    className="block text-center w-full bg-primary/10 text-primary font-bold py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all duration-300"
                  >
                    Donasi Sekarang
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-xl bg-primary text-on-primary">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            <div className="p-6">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-70">task_alt</span>
              <div className="font-display text-display-lg mb-1">124</div>
              <div className="font-semibold text-caption uppercase tracking-wider opacity-80">Program Berjalan</div>
            </div>
            <div className="p-6">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-70">volunteer_activism</span>
              <div className="font-display text-display-lg mb-1">8,540+</div>
              <div className="font-semibold text-caption uppercase tracking-wider opacity-80">Total Donatur</div>
            </div>
            <div className="p-6">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-70">diversity_3</span>
              <div className="font-display text-display-lg mb-1">1,200</div>
              <div className="font-semibold text-caption uppercase tracking-wider opacity-80">Relawan Aktif</div>
            </div>
            <div className="p-6">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-70">sentiment_satisfied</span>
              <div className="font-display text-display-lg mb-1">25,600</div>
              <div className="font-semibold text-caption uppercase tracking-wider opacity-80">Penerima Manfaat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Stories */}
      <section className="py-xl bg-surface">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Transparency */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-3xl">verified_user</span>
                <h2 className="font-display text-headline-md font-bold">Laporan Transparansi</h2>
              </div>
              
              <div className="bg-surface-container p-8 rounded-3xl border border-outline-variant relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-display text-headline-md mb-4 text-text-main">Laporan Dampak Tahunan 2025</h3>
                  <p className="text-on-surface-variant mb-8">Setiap rupiah yang Anda amanahkan dikelola secara profesional dan diaudit secara berkala untuk memastikan manfaat maksimal bagi penerima.</p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="#" 
                      className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-md transition-all"
                    >
                      <span className="material-symbols-outlined">download</span> Unduh PDF
                    </a>
                    <Link 
                      to="/transparansi" 
                      className="text-primary font-bold px-6 py-3 rounded-full border border-primary hover:bg-primary/5 transition-all text-center"
                    >
                      Lihat Audit
                    </Link>
                  </div>
                </div>
                <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-primary/5 -rotate-12 transition-transform duration-500 group-hover:scale-110">analytics</span>
              </div>
            </div>

            {/* Latest Stories */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 text-secondary">
                <span className="material-symbols-outlined text-3xl">auto_stories</span>
                <h2 className="font-display text-headline-md font-bold">Kisah Dampak Terbaru</h2>
              </div>
              
              <div className="space-y-6">
                
                <div className="flex gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img alt="Kisah Sukses Pak Aris" className="w-full h-full object-cover" src="/DSC00027.JPG" />
                  </div>
                  <div>
                    <span className="text-caption text-secondary font-bold">Kisah Sukses</span>
                    <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Pak Aris: Dari Keterbatasan Menjadi Pelopor Tani</h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2">Bagaimana bantuan modal usaha mengubah kehidupan satu keluarga di Desa Sukamaju...</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-2xl hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img alt="Inspirasi Relawan" className="w-full h-full object-cover" src="/IMG_20241006_071916.jpg" />
                  </div>
                  <div>
                    <span className="text-caption text-secondary font-bold">Inspirasi Relawan</span>
                    <h4 className="font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">Membangun Perpustakaan di Atas Bukit</h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2">Perjalanan 10 relawan membawa 500 buku melintasi medan sulit demi literasi anak bangsa...</p>
                  </div>
                </div>

              </div>
              
              <Link 
                to="/transparansi" 
                className="text-on-surface-variant font-bold flex items-center gap-2 group ml-4 hover:text-primary transition-colors"
              >
                Lihat Semua Cerita <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-xl bg-surface-container-highest/30">
        <div className="px-gutter max-w-max-width mx-auto text-center">
          <p className="font-semibold text-caption text-on-surface-variant uppercase tracking-widest mb-10">Didukung Oleh Mitra &amp; Kolaborator Kami</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity">
            <div className="p-4 flex justify-center"><div className="h-12 w-32 bg-on-surface/20 rounded-lg"></div></div>
            <div className="p-4 flex justify-center"><div className="h-12 w-32 bg-on-surface/20 rounded-lg"></div></div>
            <div className="p-4 flex justify-center"><div className="h-12 w-32 bg-on-surface/20 rounded-lg"></div></div>
            <div className="p-4 flex justify-center"><div className="h-12 w-32 bg-on-surface/20 rounded-lg"></div></div>
            <div className="p-4 flex justify-center"><div className="h-12 w-32 bg-on-surface/20 rounded-lg"></div></div>
            <div className="p-4 flex justify-center"><div className="h-12 w-32 bg-on-surface/20 rounded-lg"></div></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-xl">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="bg-inverse-surface rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none bg-cover bg-center" 
              style={{ backgroundImage: "url('/DSC00032.JPG')" }}
            ></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-display-lg mb-6">Siap Menjadi Bagian dari Perubahan?</h2>
              <p className="font-sans text-lg text-surface-variant mb-10">Tindakan kecil Anda hari ini adalah awal dari keajaiban bagi orang lain. Mari bergabung dalam misi kemanusiaan Hasan Peduli.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/program" className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300 text-center">
                  Donasi Sekarang
                </Link>
                <Link to="/relawan" className="bg-white text-on-surface font-bold px-10 py-4 rounded-full text-lg hover:bg-surface-variant transition-all duration-300 text-center">
                  Daftar Relawan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
