import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const navItems = ['home', 'about', 'projects', 'skills', 'certifications', 'achievements', 'contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black text-black dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Profile */}
        <div className="flex items-center space-x-3">
          <img
            src="/profile.jpg"
            alt="Sowmya"
            className="w-10 h-10 rounded-full border-2 border-blue-400 dark:border-blue-300 shadow"
          />
          <h1 className="font-bold text-xl">Sowmya</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-4 text-sm">
          {navItems.map((section) => (
            <li key={section}>
              <div
                className="px-4 py-2 rounded-xl transition-all duration-300 border border-transparent
                           hover:border-blue-500 hover:shadow-lg hover:scale-105 cursor-pointer
                           hover:bg-blue-100 hover:text-blue-600
                           dark:hover:bg-blue-900 dark:hover:text-blue-300"
              >
                <Link to={section} smooth duration={500} className="block capitalize">
                  {section}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* Toggle & Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="border px-3 py-1 rounded text-xs hover:shadow-md transition duration-300
                       dark:text-white text-black"
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black dark:text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <ul className="md:hidden px-6 py-4 space-y-2 bg-white dark:bg-black text-black dark:text-white">
          {navItems.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="block capitalize px-4 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-800"
              >
                {section}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
