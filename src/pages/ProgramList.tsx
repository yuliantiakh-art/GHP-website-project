import React from 'react';
import { Link } from 'react-router-dom';

export default function ProgramList() {
  const programs = [
    {
      id: 'cahaya-quran',
      title: "Cahaya Qur'an Nusantara",
      desc: "Bantu menghadirkan mushaf Al-Qur'an untuk masjid, mushala, TPA, dan santri di daerah yang masih memiliki keterbatasan.",
      img: "/IMG_20241005_182203.jpg",
      progress: 10,
      raised: 5000000,
      target: 50000000,
      category: "Dakwah & Pendidikan"
    },
    {
      id: 'jejak-amal-quran',
      title: "Jejak Amal Qur'an",
      desc: "Setiap mushaf yang Anda titipkan menjadi bagian dari amal jariyah yang terus hidup melalui setiap ayat yang dibaca.",
      img: "/IMG_20241005_172025.jpg",
      progress: 20,
      raised: 10000000,
      target: 50000000,
      category: "Sosial Kemanusiaan"
    },
    {
      id: 'quran-pelosok',
      title: "Tebar Cahaya Qur'an",
      desc: "Bersama kita hadirkan Al-Qur'an untuk daerah yang masih memiliki keterbatasan sehingga semakin banyak generasi tumbuh dekat dengan Al-Qur'an.",
      img: "/IMG_20260326_193721.jpg",
      progress: 20,
      raised: 10000000,
      target: 50000000,
      category: "Dakwah & Pendidikan"
    }
  ];

  return (
    <div className="fade-in pt-20">
      
      {/* Hero Banner */}
      <section className="relative bg-primary text-on-primary py-16">
        <div className="px-gutter max-w-max-width mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-semibold text-caption mb-4">
            #MariBerbagi
          </span>
          <h1 className="font-display text-headline-lg mb-4">Program Kemanusiaan</h1>
          <p className="max-w-2xl text-surface-variant text-lg">
            Salurkan kepedulian Anda untuk mendukung berbagai program dakwah, pendidikan, dan aksi kemanusiaan yang terarah dan berkelanjutan.
          </p>
        </div>
      </section>

      {/* Program Listing Grid */}
      <section className="py-xl bg-surface-warm">
        <div className="px-gutter max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {programs.map(program => (
              <div 
                key={program.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group border border-outline-variant/30"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105" 
                    style={{ backgroundImage: `url('${program.img}')` }}
                  ></div>
                  <span className="absolute top-4 left-4 bg-primary-container text-on-primary-container font-semibold text-caption px-3 py-1 rounded-full">
                    {program.category}
                  </span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display text-headline-md text-on-surface mb-2">{program.title}</h3>
                  <p className="text-on-surface-variant mb-6 text-sm flex-grow">{program.desc}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-end">
                      <div className="text-primary font-bold text-label-md">
                        Rp {program.raised.toLocaleString('id-ID')} <span className="text-on-surface-variant font-normal">Terkumpul</span>
                      </div>
                      <div className="text-on-surface-variant font-bold text-label-md">{program.progress}%</div>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-1000" 
                        style={{ width: `${program.progress}%` }}
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
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
