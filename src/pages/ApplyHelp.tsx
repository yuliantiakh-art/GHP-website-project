import React, { useState } from 'react';

export default function ApplyHelp() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    category: '',
    description: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-surface-warm via-surface-warm/80 to-transparent z-10"></div>
          <img 
            alt="Dokumentasi peninjauan bantuan bersama penerima manfaat" 
            className="w-full h-full object-cover" 
            src="/IMG_20260326_191429.jpg"
          />
        </div>
        <div className="relative z-20 max-w-max-width mx-auto px-gutter w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/20 text-primary font-semibold text-sm mb-6 uppercase tracking-wider">
              Layanan Bantuan
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-on-surface">
              Kami Siap Mendengarkan dan Membantu
            </h1>
            <p className="font-sans text-lg text-on-surface-variant mb-10 leading-relaxed">
              Kami memahami bahwa setiap tantangan hidup adalah unik. Tim GHP berkomitmen untuk meninjau setiap permohonan bantuan secara personal dengan penuh empati dan rasa hormat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#request-form" 
                className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-center hover:shadow-lg hover:-translate-y-0.5 transition-all text-label-md"
              >
                Ajukan Permohonan Bantuan
              </a>
              <div className="flex items-center gap-3 px-4 py-4 text-primary font-semibold text-sm">
                <span className="material-symbols-outlined">verified_user</span>
                <span>Proses Terbuka &amp; Transparan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-xl bg-surface">
        <div className="max-w-max-width mx-auto px-gutter text-center mb-16">
          <h2 className="font-display text-headline-lg text-on-surface mb-4">Bagaimana Kami Memproses Bantuan Anda</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Transparansi adalah inti dari Gerakan Hasan Peduli. Berikut adalah langkah-langkah yang akan kita lalui bersama.
          </p>
        </div>
        <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="relative group text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">1</div>
            </div>
            <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-outline-variant"></div>
            <h3 className="font-bold text-lg mb-2">Isi Formulir</h3>
            <p className="text-on-surface-variant text-sm">Lengkapi data diri dan ceritakan kebutuhan Anda secara detail melalui formulir di bawah.</p>
          </div>
          {/* Step 2 */}
          <div className="relative group text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">2</div>
            </div>
            <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-outline-variant"></div>
            <h3 className="font-bold text-lg mb-2">Tim GHP Meninjau</h3>
            <p className="text-on-surface-variant text-sm">Tim internal kami akan mempelajari permohonan Anda dalam waktu 2-3 hari kerja.</p>
          </div>
          {/* Step 3 */}
          <div className="relative group text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">3</div>
            </div>
            <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-64px)] h-0.5 bg-outline-variant"></div>
            <h3 className="font-bold text-lg mb-2">Hubungi via WA</h3>
            <p className="text-on-surface-variant text-sm">Kami akan menghubungi Anda langsung melalui WhatsApp untuk koordinasi lebih lanjut.</p>
          </div>
          {/* Step 4 */}
          <div className="relative group text-center">
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">4</div>
            </div>
            <h3 className="font-bold text-lg mb-2">Verifikasi &amp; Aksi</h3>
            <p className="text-on-surface-variant text-sm">Setelah verifikasi lapangan selesai, bantuan akan segera diproses sesuai urgensi.</p>
          </div>
        </div>
      </section>

      {/* Kategori Bantuan Bento */}
      <section className="py-xl bg-surface-warm">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-xl text-left">
              <h2 className="font-display text-headline-lg text-on-surface mb-4">Kategori Bantuan Kami</h2>
              <p className="text-on-surface-variant">Kami memfokuskan sumber daya kami pada pilar-pilar penting untuk kesejahteraan masyarakat.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <a href="#request-form" onClick={() => setFormData(prev => ({ ...prev, category: 'Pendidikan' }))} className="p-8 rounded-3xl bg-white border border-outline-variant hover:bg-primary-container/10 transition-colors cursor-pointer group block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">school</span>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Pendidikan</h3>
              <p className="text-on-surface-variant text-sm">Dukungan biaya sekolah, perlengkapan belajar, hingga renovasi ruang kelas di pelosok.</p>
            </a>
            <a href="#request-form" onClick={() => setFormData(prev => ({ ...prev, category: 'Kesehatan' }))} className="p-8 rounded-3xl bg-white border border-outline-variant hover:bg-primary-container/10 transition-colors cursor-pointer group block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">medical_services</span>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Kesehatan</h3>
              <p className="text-on-surface-variant text-sm">Bantuan biaya pengobatan bagi yang kurang mampu dan penyediaan alat bantu medis.</p>
            </a>
            <a href="#request-form" onClick={() => setFormData(prev => ({ ...prev, category: 'Tanggap Darurat' }))} className="p-8 rounded-3xl bg-white border border-outline-variant hover:bg-primary-container/10 transition-colors cursor-pointer group block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">emergency</span>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Tanggap Darurat</h3>
              <p className="text-on-surface-variant text-sm">Aksi cepat tanggap untuk daerah terdampak bencana alam di seluruh Indonesia.</p>
            </a>
            <a href="#request-form" onClick={() => setFormData(prev => ({ ...prev, category: 'Kebutuhan Mendesak' }))} className="p-8 rounded-3xl bg-white border border-outline-variant hover:bg-primary-container/10 transition-colors cursor-pointer group block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">priority_high</span>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Kebutuhan Mendesak</h3>
              <p className="text-on-surface-variant text-sm">Intervensi langsung untuk kebutuhan pangan dan papan yang bersifat krusial.</p>
            </a>
            <a href="#request-form" onClick={() => setFormData(prev => ({ ...prev, category: 'Pemberdayaan Masyarakat' }))} className="p-8 rounded-3xl bg-white border border-outline-variant hover:bg-primary-container/10 transition-colors cursor-pointer group block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">groups</span>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Pemberdayaan Masyarakat</h3>
              <p className="text-on-surface-variant text-sm">Program pelatihan keahlian dan bantuan modal usaha mikro kemasyarakatan.</p>
            </a>
            <a href="#request-form" onClick={() => setFormData(prev => ({ ...prev, category: 'Lainnya' }))} className="p-8 rounded-3xl bg-white border border-outline-variant hover:bg-primary-container/10 transition-colors cursor-pointer group block">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform">more_horiz</span>
              <h3 className="font-display text-headline-md mb-3 text-on-surface">Lainnya</h3>
              <p className="text-on-surface-variant text-sm">Permohonan bantuan di luar kategori di atas yang memenuhi syarat kemanusiaan kami.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Help Request Form Section */}
      <section className="py-xl bg-white scroll-mt-20" id="request-form">
        <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-display text-headline-lg text-on-surface mb-6">Formulir Permohonan Bantuan</h2>
            <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
              Mohon isi formulir ini dengan informasi yang sebenar-benarnya. Data Anda akan kami simpan dengan aman dan hanya digunakan untuk keperluan verifikasi bantuan.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">chat</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Respon WhatsApp</h4>
                  <p className="text-sm text-on-surface-variant">Kami akan menghubungi Anda melalui nomor WhatsApp yang terdaftar.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">Verifikasi Aman</h4>
                  <p className="text-sm text-on-surface-variant">Setiap bantuan melewati proses verifikasi ketat untuk menjamin ketepatan sasaran.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 rounded-2xl overflow-hidden shadow-lg aspect-video">
              <img alt="Relawan Hasan Peduli saat proses verifikasi" className="w-full h-full object-cover" src="/IMG_20241006_072157.jpg" />
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-low p-8 md:p-12 rounded-[2rem]">
            {submitted ? (
              <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl text-center text-primary h-full flex flex-col justify-center items-center py-20">
                <span className="material-symbols-outlined text-5xl mb-4">check_circle</span>
                <h3 className="font-bold text-xl mb-2">Pengajuan Terkirim!</h3>
                <p className="text-on-surface-variant">Terima kasih atas laporan Anda. Tim Program Hasan Peduli akan meninjau dan menghubungi Anda kembali dalam waktu maksimal 5-7 hari kerja.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-sm block text-text-main ml-1">Nama Lengkap</label>
                    <input 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-on-surface" 
                      placeholder="Contoh: Ahmad Sulaiman" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-sm block text-text-main ml-1">Nomor WhatsApp</label>
                    <input 
                      required
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-on-surface" 
                      placeholder="0812-XXXX-XXXX" 
                      type="tel" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-sm block text-text-main ml-1">Kota/Kabupaten</label>
                    <input 
                      required
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-on-surface" 
                      placeholder="Masukkan lokasi saat ini" 
                      type="text" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-sm block text-text-main ml-1">Kategori Bantuan</label>
                    <select 
                      required
                      value={formData.category}
                      onChange={e => setFormData({...formData, category: e.target.value})}
                      className="w-full px-6 py-4 rounded-2xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-on-surface appearance-none"
                    >
                      <option value="" disabled>Pilih Kategori</option>
                      <option value="Pendidikan">Pendidikan</option>
                      <option value="Kesehatan">Kesehatan</option>
                      <option value="Tanggap Darurat">Tanggap Darurat</option>
                      <option value="Kebutuhan Mendesak">Kebutuhan Mendesak</option>
                      <option value="Pemberdayaan Masyarakat">Pemberdayaan Masyarakat</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-sm block text-text-main ml-1">Ceritakan Kebutuhan Anda</label>
                  <textarea 
                    required
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl border border-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white text-on-surface" 
                    placeholder="Jelaskan situasi Anda dan bentuk bantuan yang dibutuhkan..." 
                    rows={5}
                  ></textarea>
                </div>

                <div className="flex items-start gap-3 py-4">
                  <input required className="mt-1 rounded border-outline-variant text-primary focus:ring-primary h-5 w-5" id="consent" type="checkbox" />
                  <label className="text-sm text-on-surface-variant leading-tight" htmlFor="consent">
                    Saya setuju untuk dihubungi oleh Tim Hasan Peduli melalui WhatsApp untuk keperluan verifikasi dan tindak lanjut permohonan ini.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-5 bg-primary text-on-primary font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
                >
                  Kirim Permohonan
                </button>
                <p className="text-center text-caption text-on-surface-variant italic">
                  Kami berusaha merespon semua permohonan dalam waktu 3x24 jam kerja.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl bg-surface-container">
        <div className="max-w-3xl mx-auto px-gutter">
          <h2 className="font-display text-headline-lg text-center mb-12">Pertanyaan Umum (FAQ)</h2>
          <div className="space-y-4">
            {[
              {
                q: "Siapa saja yang berhak menerima bantuan GHP?",
                a: "GHP mengutamakan masyarakat prasejahtera, anak yatim, kaum dhuafa, dan mereka yang terdampak musibah mendadak tanpa dukungan finansial yang cukup. Penilaian dilakukan berdasarkan urgensi dan ketersediaan sumber daya kami."
              },
              {
                q: "Berapa lama proses dari pengajuan hingga realisasi?",
                a: "Standar respon awal adalah 3 hari kerja. Untuk realisasi bantuan, durasinya bervariasi antara 7-14 hari tergantung pada tingkat kesulitan verifikasi lapangan dan jenis bantuan yang dibutuhkan."
              },
              {
                q: "Apakah ada biaya yang dipungut dalam proses ini?",
                a: "Tidak sama sekali. Seluruh proses pengajuan bantuan di Gerakan Hasan Peduli adalah 100% GRATIS. Kami tidak pernah meminta biaya admin atau imbalan apa pun dalam bentuk uang."
              },
              {
                q: "Bagaimana jika data saya tidak lolos verifikasi?",
                a: "Kami akan memberikan penjelasan singkat mengenai alasan permohonan belum dapat dipenuhi. Dalam beberapa kasus, kami akan mencoba mereferensikan Anda ke lembaga mitra yang mungkin memiliki program yang lebih sesuai dengan kebutuhan Anda."
              }
            ].map((faq, idx) => (
              <div key={idx} className="accordion-item bg-white rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-on-surface text-label-md">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-40 opacity-100 px-6 pb-6 pt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-on-surface-variant text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
