import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black text-black dark:text-white flex justify-between items-center px-6 py-4 shadow-md">
      <div className="flex items-center space-x-3">
        <img
          src="/profile.jpg" // place your image inside /public folder
          alt="Sowmya"
          className="w-10 h-10 rounded-full border-2 border-blue-400 dark:border-blue-300 shadow"
        />
        <h1 className="font-bold text-xl">Sowmya</h1>
      </div>

      <ul className="flex gap-4 text-sm">
        {['home', 'about', 'projects', 'skills', 'certifications', 'contact'].map((section) => (
          <li key={section}>
            <div
              className="px-4 py-2 rounded-xl transition-all duration-300 border border-transparent
                         hover:border-blue-500 hover:shadow-lg hover:scale-105 cursor-pointer
                         hover:bg-blue-100 hover:text-blue-600
                         dark:hover:bg-blue-900 dark:hover:text-blue-300"
            >
              <Link
                to={section}
                smooth
                duration={500}
                className="block capitalize"
              >
                {section}
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setDark(!dark)}
        className="ml-4 border px-3 py-1 rounded text-xs hover:shadow-md transition duration-300"
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </nav>
  );
}
