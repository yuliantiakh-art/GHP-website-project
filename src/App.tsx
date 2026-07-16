import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import ProgramList from './pages/ProgramList.tsx';
import ProgramDetail1 from './pages/ProgramDetail1.tsx';
import ProgramDetail2 from './pages/ProgramDetail2.tsx';
import Volunteer from './pages/Volunteer.tsx';
import ApplyHelp from './pages/ApplyHelp.tsx';
import Transparency from './pages/Transparency.tsx';

function ScrollToTop() {
  const { pathname } = window.location;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-surface">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<ProgramList />} />
            <Route path="/program/cahaya-quran" element={<ProgramDetail1 />} />
            <Route path="/program/quran-pelosok" element={<ProgramDetail2 />} />
            <Route path="/program/jejak-amal-quran" element={<ProgramDetail1 />} />
            <Route path="/relawan" element={<Volunteer />} />
            <Route path="/bantuan" element={<ApplyHelp />} />
            <Route path="/transparansi" element={<Transparency />} />
          </Routes>
        </main>
        <Footer />

        {/* Floating WhatsApp Widget */}
        <a
          href="https://wa.me/6285159630057"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-[#25D366] text-white px-4 py-3.5 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 z-50 flex items-center gap-2 hover:shadow-green-500/30 font-bold"
          aria-label="WhatsApp Admin"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.864-9.83.002-2.623-1.01-5.092-2.859-6.944C16.628 1.98 14.154.965 11.53.965c-5.438 0-9.863 4.414-9.867 9.83-.001 1.97 1.508 5.617l-.99 3.619 3.708-.973c1.554.848 3.125 1.298 4.768 1.302zM17.43 14.77c-.318-.16-1.884-.93-2.176-1.037-.291-.106-.503-.16-.716.16-.212.32-.823 1.037-1.009 1.25-.186.213-.372.24-.69.08-1.547-.775-2.698-1.353-3.784-3.22-.288-.496.288-.46.825-1.53.09-.18.044-.338-.022-.471-.066-.134-.503-1.21-.69-1.662-.182-.438-.367-.378-.503-.385-.13-.006-.279-.007-.428-.007-.15 0-.393.056-.6.283-.206.227-.788.771-.788 1.882 0 1.11.808 2.182.92 2.336.113.153 1.59 2.43 3.85 3.41.538.232.957.371 1.285.476.54.172 1.03.148 1.417.09.431-.064 1.884-.77 2.15-.515.267.256.267.476.2.637-.067.16-.319.24-.637.08z" />
          </svg>
          <span className="hidden sm:inline text-sm">WhatsApp Admin</span>
        </a>
      </div>
    </Router>
  );
}
