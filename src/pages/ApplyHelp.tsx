import React, { useState } from 'react';

export default function ApplyHelp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'tpa',
    address: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Banner */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>
          <img 
            className="w-full h-full object-cover" 
            src="/IMG_20260326_191429.jpg"
            alt="Dokumentasi peninjauan bantuan"
          />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-gutter w-full text-white">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold text-caption mb-6">
              Kemitraan Kemanusiaan
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Ajukan Dukungan &amp; Bantuan
            </h1>
            <p className="font-sans text-lg text-white/90 mb-10 max-w-xl">
              Apakah lembaga, masjid, TPA, atau komunitas Anda di pelosok memerlukan bantuan pengadaan Al-Qur'an? Silakan ajukan permohonan Anda kepada kami.
            </p>
          </div>
        </div>
      </section>

      {/* Guide & Steps */}
      <section className="py-xl bg-surface-warm">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg text-on-surface">Alur Pengajuan Bantuan</h2>
            <p className="text-on-surface-variant mt-4">Proses verifikasi dan distribusi kami lakukan secara cermat dan bertanggung jawab.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
            
            <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">1</span>
              <h3 className="font-bold text-lg text-on-surface mt-4 mb-2">Isi Formulir</h3>
              <p className="text-on-surface-variant text-sm">Lengkapi data diri pemohon, profil lembaga/alamat penerima, dan deskripsi kebutuhan secara jelas.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">2</span>
              <h3 className="font-bold text-lg text-on-surface mt-4 mb-2">Survei &amp; Verifikasi</h3>
              <p className="text-on-surface-variant text-sm">Tim relawan kami di daerah terdekat akan melakukan peninjauan/kontak untuk memvalidasi kebutuhan di lapangan.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-outline-variant shadow-sm relative">
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-lg">3</span>
              <h3 className="font-bold text-lg text-on-surface mt-4 mb-2">Distribusi</h3>
              <p className="text-on-surface-variant text-sm">Setelah disetujui, paket Al-Qur'an baru akan segera kami kirim atau antarkan langsung ke lokasi target.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-xl bg-surface">
        <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-xl">
          
          {/* Form */}
          <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-outline-variant shadow-sm">
            <h2 className="font-display text-headline-lg text-on-surface mb-6">Formulir Pengajuan</h2>
            
            {submitted ? (
              <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl text-center text-primary">
                <span className="material-symbols-outlined text-5xl mb-4">check_circle</span>
                <h3 className="font-bold text-xl mb-2">Pengajuan Terkirim!</h3>
                <p className="text-on-surface-variant">Terima kasih atas laporan Anda. Tim Program Hasan Peduli akan meninjau dan menghubungi Anda kembali dalam waktu maksimal 5-7 hari kerja.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Nama Pemohon / Penanggung Jawab</label>
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
                    <label className="block text-sm font-bold text-text-main mb-2">No. Telepon / WhatsApp</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      placeholder="Contoh: 08123456789" 
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Alamat Email</label>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      placeholder="nama@email.com" 
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-main mb-2">Kategori Sasaran Bantuan</label>
                    <select 
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white"
                    >
                      <option value="tpa">TPA / TPQ / Sekolah Ngaji</option>
                      <option value="masjid">Masjid / Musala Pelosok</option>
                      <option value="pesantren">Pondok Pesantren Dhuafa</option>
                      <option value="perorangan">Santri / Perorangan</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">Alamat Lengkap Tujuan Distribusi</label>
                  <input 
                    type="text" 
                    required
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    placeholder="Nama jalan, RT/RW, Dusun, Desa, Kecamatan, Kabupaten/Kota" 
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-text-main mb-2">Detail Kondisi &amp; Alasan Kebutuhan Bantuan</label>
                  <textarea 
                    rows={4}
                    required
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    placeholder="Ceritakan kondisi mushaf di lokasi, jumlah santri/jamaah, dan mengapa mendesak membutuhkan mushaf baru..." 
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-on-primary font-bold py-4 rounded-xl hover:bg-primary/95 transition-colors shadow-lg"
                >
                  Kirim Pengajuan Bantuan
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-gutter">
            
            <div className="bg-white rounded-3xl border border-outline-variant shadow-sm overflow-hidden">
              <img className="w-full h-48 object-cover" src="/IMG_20241006_072157.jpg" alt="Relawan" />
              <div className="p-6">
                <h4 className="font-bold text-lg text-on-surface mb-2">Butuh Bantuan Cepat?</h4>
                <p className="text-on-surface-variant text-sm mb-4">Jika lokasi pengajuan mengalami musibah kebakaran atau bencana alam dan membutuhkan pasokan Al-Qur'an darurat, silakan langsung menghubungi hotline kami.</p>
                <a href="https://wa.me/6285159630057" target="_blank" rel="noopener noreferrer" className="text-primary font-bold inline-flex items-center gap-2 hover:underline">
                  Hubungi Hotline GHP <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
