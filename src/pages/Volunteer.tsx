import React, { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    domicile: '',
    interest: 'distribusi',
    motivation: ''
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
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#daftar" 
                className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold text-label-md text-center transition-all inline-block shadow-xl hover:-translate-y-1"
              >
                Gabung Gerakan
              </a>
              <a 
                href="#kegiatan" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-label-md text-center transition-all inline-block"
              >
                Lihat Kegiatan
              </a>
            </div>
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

      {/* Nilai Relawan */}
      <section className="py-xl overflow-hidden relative">
        <div className="max-w-max-width mx-auto px-gutter relative z-10">
          <div className="flex flex-col lg:flex-row gap-xl items-center">
            <div className="lg:w-1/3">
              <h2 className="font-display text-headline-lg mb-6">Nilai Relawan Hasan Peduli</h2>
              <p className="text-on-surface-variant mb-8">Kami memegang teguh lima nilai utama dalam setiap aksi kemanusiaan yang kami lakukan.</p>
              <img className="rounded-3xl shadow-xl w-full aspect-square object-cover" alt="Community and interaction among volunteers" src="/IMG_20241006_071916.jpg" />
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-surface-container-low rounded-2xl flex gap-4 items-start border border-transparent hover:border-primary/20 transition-all">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-label-md text-on-surface mb-1">Amanah</h4>
                  <p className="text-caption text-on-surface-variant">Menjaga kepercayaan publik dengan integritas tinggi.</p>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl flex gap-4 items-start border border-transparent hover:border-primary/20 transition-all">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <span className="material-symbols-outlined">heart_check</span>
                </div>
                <div>
                  <h4 className="font-bold text-label-md text-on-surface mb-1">Peduli</h4>
                  <p className="text-caption text-on-surface-variant">Peka terhadap kesulitan sesama dan bergerak membantu.</p>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl flex gap-4 items-start border border-transparent hover:border-primary/20 transition-all">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <span className="material-symbols-outlined">handshake</span>
                </div>
                <div>
                  <h4 className="font-bold text-label-md text-on-surface mb-1">Kolaboratif</h4>
                  <p className="text-caption text-on-surface-variant">Bekerja sama untuk mencapai dampak yang lebih besar.</p>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl flex gap-4 items-start border border-transparent hover:border-primary/20 transition-all">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <span className="material-symbols-outlined">stars</span>
                </div>
                <div>
                  <h4 className="font-bold text-label-md text-on-surface mb-1">Profesional</h4>
                  <p className="text-caption text-on-surface-variant">Memberikan pelayanan terbaik dengan standar tinggi.</p>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl flex gap-4 items-start border border-transparent hover:border-primary/20 transition-all md:col-span-2">
                <div className="bg-white p-3 rounded-lg shadow-sm text-primary">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <h4 className="font-bold text-label-md text-on-surface mb-1">Ikhlas</h4>
                  <p className="text-caption text-on-surface-variant">Melayani dengan ketulusan hati tanpa mengharap imbalan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kegiatan Relawan */}
      <section className="py-xl bg-surface-container-lowest" id="kegiatan">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-headline-lg mb-2">Kegiatan Relawan</h2>
              <p className="text-on-surface-variant">Pilih program yang paling sesuai dengan minatmu.</p>
            </div>
            <a href="#daftar" className="hidden md:flex items-center gap-2 text-primary font-bold">
              Lihat Semua Jadwal <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full border border-outline-variant">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt="Volunteer distribution activities" src="/IMG_20241005_172025.jpg" />
                <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full text-caption font-semibold uppercase tracking-wider">Mingguan</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-caption font-medium">Kabupaten Cianjur</span>
                </div>
                <h3 className="font-display text-headline-md mb-3">Berbagi Makan Jumat</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-3 text-sm">Menyiapkan dan mendistribusikan nasi kotak sehat untuk para pejuang jalanan dan dhuafa di setiap hari Jumat.</p>
                <div className="mt-auto pt-6 border-t border-outline-variant flex justify-between items-center">
                  <span className="text-on-surface-variant text-caption font-bold">12 Relawan Dibutuhkan</span>
                  <a 
                    className="text-primary font-bold text-label-md hover:underline cursor-pointer" 
                    href="#daftar"
                    onClick={() => setFormData(prev => ({ ...prev, interest: 'distribusi' }))}
                  >
                    Gabung
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full border border-outline-variant">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt="Distribusi Al-Quran program" src="/IMG_20241005_182203.jpg" />
                <span className="absolute top-4 left-4 bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-caption font-semibold uppercase tracking-wider">Bulanan</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-caption font-medium">Pelosok Jawa Barat</span>
                </div>
                <h3 className="font-display text-headline-md mb-3">Distribusi Al-Quran</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-3 text-sm">Membantu penyaluran Al-Quran layak ke mushola dan pesantren di daerah terpencil yang minim akses literasi agama.</p>
                <div className="mt-auto pt-6 border-t border-outline-variant flex justify-between items-center">
                  <span className="text-on-surface-variant text-caption font-bold">5 Relawan Dibutuhkan</span>
                  <a 
                    className="text-primary font-bold text-label-md hover:underline cursor-pointer" 
                    href="#daftar"
                    onClick={() => setFormData(prev => ({ ...prev, interest: 'distribusi' }))}
                  >
                    Gabung
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full border border-outline-variant">
              <div className="h-56 relative overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" alt="Kakak Mengajar program" src="/IMG_20260326_193721.jpg" />
                <span className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-caption font-semibold uppercase tracking-wider">Fleksibel</span>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-caption font-medium">Kabupaten Garut</span>
                </div>
                <h3 className="font-display text-headline-md mb-3">Kakak Mengajar</h3>
                <p className="text-on-surface-variant mb-6 line-clamp-3 text-sm">Menjadi mentor bagi anak-anak yatim dalam belajar mata pelajaran sekolah maupun keterampilan kreatif di akhir pekan.</p>
                <div className="mt-auto pt-6 border-t border-outline-variant flex justify-between items-center">
                  <span className="text-on-surface-variant text-caption font-bold">8 Relawan Dibutuhkan</span>
                  <a 
                    className="text-primary font-bold text-label-md hover:underline cursor-pointer" 
                    href="#daftar"
                    onClick={() => setFormData(prev => ({ ...prev, interest: 'mengajar' }))}
                  >
                    Gabung
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimoni Relawan */}
      <section className="py-xl bg-primary text-white overflow-hidden">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="flex flex-col md:flex-row items-center gap-xl">
            <div className="md:w-1/2 order-2 md:order-1">
              <span className="material-symbols-outlined text-5xl text-primary-fixed mb-8">format_quote</span>
              <blockquote className="font-display text-headline-lg md:text-[36px] leading-snug mb-8">
                "Bergabung dengan Hasan Peduli membuka mata saya bahwa kebahagiaan sejati tidak ditemukan saat kita menerima, tapi saat kita mampu memberikan sedikit yang kita punya untuk orang lain."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-primary-fixed overflow-hidden">
                  <img className="w-full h-full object-cover" alt="Portrait of volunteer Hanafi" src="/IMG_20241006_071916.jpg" />
                </div>
                <div>
                  <p className="font-bold text-label-md">Hanafi</p>
                  <p className="text-white/70 text-caption font-medium">Relawan Aktif - Sejak 2024</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/5] bg-white/10 rounded-[40px] p-4 rotate-3">
                <img className="w-full h-full object-cover rounded-[32px] -rotate-3 transition-transform hover:rotate-0 duration-500 shadow-2xl" alt="Volunteer group story" src="/DSC00027.JPG" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-xl">
        <div className="max-w-3xl mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-display text-headline-lg mb-4">Pertanyaan Populer</h2>
            <p className="text-on-surface-variant">Segala hal yang perlu Anda ketahui sebelum melangkah bersama kami.</p>
          </div>
          <div className="space-y-4">
            {[
              {
                q: "Apakah ada biaya pendaftaran untuk menjadi relawan?",
                a: "Sama sekali tidak ada biaya. Menjadi relawan di Hasan Peduli sepenuhnya gratis. Kami hanya mengharapkan komitmen waktu dan ketulusan hati Anda dalam melayani."
              },
              {
                q: "Berapa lama komitmen waktu yang dibutuhkan?",
                a: "Kami sangat fleksibel. Anda bisa memilih program harian, mingguan, atau hanya pada event-event tertentu sesuai ketersediaan waktu Anda."
              },
              {
                q: "Apakah relawan mendapatkan pelatihan?",
                a: "Ya, setiap relawan baru akan mendapatkan sesi induksi dan pelatihan singkat terkait protokol keamanan, komunikasi lapangan, dan nilai-nilai gerakan sebelum terjun langsung."
              }
            ].map((faq, idx) => (
              <div key={idx} className="accordion-item border border-outline-variant rounded-2xl bg-white overflow-hidden">
                <button 
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-surface-container-low transition-colors"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-label-md text-on-surface">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${activeFaq === idx ? 'max-h-40 opacity-100 px-6 pb-5 pt-2' : 'max-h-0 opacity-0'}`}>
                  <p className="text-on-surface-variant text-sm">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-xl bg-surface-container" id="daftar">
        <div className="max-w-max-width mx-auto px-gutter">
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-outline-variant">
            
            {/* Left green sidebar */}
            <div className="lg:w-2/5 bg-primary p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="font-display text-headline-lg mb-6">Mulai Langkah Pertamamu</h2>
                <p className="text-white/80 mb-8">Isi formulir singkat di samping. Tim kami akan menghubungi Anda melalui WhatsApp dalam 2x24 jam untuk proses selanjutnya.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full"><span className="material-symbols-outlined text-primary-fixed">check_circle</span></div>
                    <p className="font-bold text-label-md">Proses seleksi cepat &amp; transparan</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full"><span className="material-symbols-outlined text-primary-fixed">check_circle</span></div>
                    <p className="font-bold text-label-md">Asuransi perlindungan relawan</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/10 p-3 rounded-full"><span className="material-symbols-outlined text-primary-fixed">check_circle</span></div>
                    <p className="font-bold text-label-md">Sertifikat apresiasi relawan</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                <p className="text-caption text-white/60 mb-2 italic">"Kebaikan yang kamu tanam hari ini akan menjadi peneduhmu di masa depan."</p>
              </div>
            </div>

            {/* Right form container */}
            <div className="lg:w-3/5 p-8 md:p-12">
              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 p-6 rounded-2xl text-center text-primary h-full flex flex-col justify-center items-center">
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-text-main mb-2">Kota Domisili</label>
                      <input 
                        type="text" 
                        required
                        value={formData.domicile || ''}
                        onChange={e => setFormData({...formData, domicile: e.target.value})}
                        placeholder="Masukkan kota domisili" 
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

                  <div className="flex items-center gap-3">
                    <input required className="rounded text-primary focus:ring-primary h-5 w-5 border-outline-variant" id="terms" type="checkbox" />
                    <label className="text-caption text-on-surface-variant font-medium" htmlFor="terms">Saya setuju dengan kode etik relawan Hasan Peduli.</label>
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
          </div>
        </div>
      </section>

    </div>
  );
}
