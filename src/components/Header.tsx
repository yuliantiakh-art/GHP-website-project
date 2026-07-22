import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Program', path: '/program' },
    { name: 'Relawan', path: '/relawan' },
    { name: 'Transparansi', path: '/transparansi' },
    { name: 'Bantuan', path: '/bantuan' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm bg-surface/95 backdrop-blur-md py-2">
      <div className="flex justify-between items-center px-gutter max-w-max-width mx-auto h-20">
        <Link to="/" className="flex items-center gap-3">
          <img 
            alt="Hasan Peduli Logo" 
            className="h-12 w-12 object-contain rounded-full" 
            src="/logo_ghp.png"
          />
          <span className="font-display text-headline-md font-extrabold text-primary">
            Gerakan Hasan Peduli
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-semibold text-label-md ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary pb-1' 
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA and Burger Menu */}
        <div className="flex items-center gap-4">
          <Link 
            to="/checkout"
            className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full hover:shadow-lg active:scale-95 transition-all duration-200"
          >
            Titipkan Kebaikan
          </Link>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-on-surface flex items-center"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant px-gutter py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 font-semibold text-lg ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
