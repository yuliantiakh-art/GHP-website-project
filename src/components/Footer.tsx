import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-surface-container-highest w-full pt-xl pb-md border-t border-outline-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-gutter max-w-max-width mx-auto">
        
        {/* Info Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-headline-md font-bold text-on-surface">
              Hasan Peduli
            </span>
          </div>
          <p className="text-on-surface-variant text-sm mb-6">
            Lembaga filantropi yang berfokus pada pemberdayaan masyarakat dan aksi kemanusiaan yang transparan dan akuntabel.
          </p>
          <div className="flex gap-4">
            <a 
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary transition-colors" 
              href="#"
            >
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a 
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface hover:text-primary transition-colors" 
              href="#"
            >
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
          </div>
        </div>

        {/* Action Column */}
        <div>
          <h4 className="font-bold text-on-surface mb-6">Program &amp; Aksi</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/program" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Program Utama
              </Link>
            </li>
            <li>
              <Link to="/relawan" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Gabung Relawan
              </Link>
            </li>
            <li>
              <Link to="/transparansi" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Laporan Dampak
              </Link>
            </li>
            <li>
              <Link to="/bantuan" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Ajukan Bantuan
              </Link>
            </li>
          </ul>
        </div>

        {/* GHP Links Column */}
        <div>
          <h4 className="font-bold text-on-surface mb-6">Tentang Kami</h4>
          <ul className="space-y-4">
            <li>
              <Link to="/" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Visi &amp; Misi
              </Link>
            </li>
            <li>
              <Link to="/transparansi" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Laporan Transparansi
              </Link>
            </li>
            <li>
              <a href="#" className="text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-all inline-block">
                Syarat &amp; Ketentuan
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="font-bold text-on-surface mb-6">Kontak &amp; Alamat</h4>
          <ul className="space-y-4 text-on-surface-variant text-sm">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
              <span>Jl. Sukaati VII No.1b Pasirluyu, Kec. Regol, Kota Bandung, Jawa Barat 40254</span>
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">mail</span>
              <span>gerakanhasanpeduli26@gmail.com</span>
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-primary text-sm mt-0.5">call</span>
              <a href="https://wa.me/6285159630057" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary transition-colors">+6285159630057</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-outline-variant/30 px-gutter max-w-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-caption text-on-surface-variant">
        <p>© 2026 Gerakan Hasan Peduli. Memberi dengan Hati, Melayani dengan Nyata.</p>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">Kebijakan Privasi</a>
          <a className="hover:text-primary transition-colors" href="#">Syarat &amp; Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
