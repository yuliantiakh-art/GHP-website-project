import React, { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'distribusi',
    motivation: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="/IMG_20241006_073612.jpg"
            alt="Hasan Peduli volunteer activities"
          />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-gutter w-full text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-fixed/20 border border-primary-fixed/30 backdrop-blur-sm text-primary-fixed font-semibold text-caption mb-6 uppercase tracking-wider">
              Membangun Harapan Bersama
            </span>
            <h1 className="font-display text-4xl md:text-[56px] leading-tight mb-6 font-extrabold">
              Menjadi Bagian dari Gerakan Kebaikan
            </h1>
            <p className="font-sans text-lg text-white/90 mb-10 max-w-xl">
              Hasan Peduli bukan sekadar lembaga, tapi wadah bagi setiap hati yang ingin melayani. Mari salurkan tenaga dan cinta untuk mereka yang membutuhkan.
            </p>
            <a 
              href="#daftar" 
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold text-label-md text-center transition-all inline-block shadow-xl hover:-translate-y-0.5"
            >
              Daftar Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-xl bg-surface-warm">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-headline-lg text-on-surface mb-4">Mengapa Bergabung Bersama Kami?</h2>
            <p className="text-on-surface-variant">
              Lebih dari sekadar membantu, menjadi relawan di Hasan Peduli adalah perjalanan menemukan makna dan kebahagiaan sejati melalui pelayanan.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-secondary-container/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl">favorite</span>
              </div>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Dampak Nyata</h3>
              <p className="text-on-surface-variant">Lihat langsung senyuman dan perubahan hidup dari setiap paket makanan atau bantuan yang Anda salurkan.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-primary-fixed/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">groups</span>
              </div>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Komunitas Hangat</h3>
              <p className="text-on-surface-variant">Bertemu dengan orang-orang baik yang memiliki frekuensi yang sama untuk saling mendukung dalam kebaikan.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-tertiary-fixed/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-3xl">volunteer_activism</span>
              </div>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Pengalaman Berharga</h3>
              <p className="text-on-surface-variant">Asah empati, kepemimpinan, dan keterampilan sosial melalui berbagai tantangan di lapangan.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Gallery Activities */}
      <section className="py-xl bg-surface">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-on-surface">Dokumentasi Aksi Relawan</h2>
            <p className="text-on-surface-variant mt-4">Kilas balik keseruan dan dedikasi teman-teman relawan di lapangan.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-sm">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/IMG_20241006_055250.jpg" alt="Aksi 1" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white">
                <p className="text-sm font-semibold">Distribusi Makanan Sehat untuk Lansia</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-sm">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/IMG_20260326_193721.jpg" alt="Aksi 2" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white">
                <p className="text-sm font-semibold">Tebar Al-Qur'an di TPA Pelosok Bandung</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-sm">
              <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="/IMG_20241006_073529.jpg" alt="Aksi 3" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 text-white">
                <p className="text-sm font-semibold">Program Kakak Mengajar Kreatif</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Sidebar */}
      <section id="daftar" className="py-xl bg-surface-warm">
        <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-xl">
          
          {/* Form */}
          <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-outline-variant shadow-sm">
            <h2 className="font-display text-headline-lg text-on-surface mb-6">Formulir Pendaftaran</h2>
            
            {submitted ? (
              <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl text-center text-primary">
                <span className="material-symbols-outlined text-5xl mb-4">check_circle</span>
                <h3 className="font-bold text-xl mb-2">Pendaftaran Diterima!</h3>
                <p className="text-on-surface-variant">Terima kasih atas niat baik Anda. Tim koordinasi relawan kami akan menghubungi Anda melalui WhatsApp dalam waktu 1-2 hari kerja.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Nama Lengkap</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Masukkan nama lengkap" 
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="nama@email.com" 
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">No. WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="081234567890" 
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Minat Bidang Aksi</label>
                    <select 
                      value={formData.interest}
                      onChange={e => setFormData({...formData, interest: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                    >
                      <option value="distribusi">Distribusi Bantuan & Logistik</option>
                      <option value="mengajar">Pendidikan / Kakak Mengajar</option>
                      <option value="kesehatan">Layanan Kesehatan & Medis</option>
                      <option value="dokumentasi">Dokumentasi & Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">Mengapa Anda Ingin Bergabung?</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.motivation}
                    onChange={e => setFormData({...formData, motivation: e.target.value})}
                    placeholder="Tuliskan motivasi singkat Anda..." 
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:bg-primary/95 transition-colors shadow-lg"
                >
                  Kirim Formulir Pendaftaran
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-gutter">
            
            <div className="bg-white p-6 rounded-3xl border border-outline-variant shadow-sm text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border border-outline-variant">
                <img src="/DSC00032.JPG" alt="Aisyah Nurhaliza" className="w-full h-full object-cover" />
              </div>
              <p className="italic text-on-surface-variant mb-4">"Menjadi relawan di GHP memberikan sudut pandang baru tentang arti bersyukur. Senyum mereka saat menerima mushaf Al-Qur'an baru sungguh tak ternilai harganya."</p>
              <h5 className="font-bold text-on-surface">Aisyah Nurhaliza</h5>
              <p className="text-caption text-text-muted">Relawan GHP Bandung</p>
            </div>

            <div className="bg-white rounded-3xl border border-outline-variant shadow-sm overflow-hidden group">
              <img className="w-full h-48 object-cover" src="/DSC00027.JPG" alt="Interaction" />
              <div className="p-6">
                <h4 className="font-bold text-lg text-on-surface mb-2">Punya Pertanyaan?</h4>
                <p className="text-on-surface-variant text-sm mb-4">Butuh informasi lebih lanjut mengenai jadwal orientasi atau detail kegiatan relawan kami?</p>
                <a href="https://wa.me/6285159630057" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                  Tanya via WhatsApp <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
