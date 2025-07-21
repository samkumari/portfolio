
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
      <h1 className="font-bold text-xl">Sowmya</h1>
      <ul className="flex gap-6 text-sm">
        <li><Link to="home" smooth duration={500} className="cursor-pointer hover:text-pink-500">Home</Link></li>
        <li><Link to="about" smooth duration={500} className="cursor-pointer hover:text-pink-500">About</Link></li>
        <li><Link to="projects" smooth duration={500} className="cursor-pointer hover:text-pink-500">Projects</Link></li>
        <li><Link to="skills" smooth duration={500} className="cursor-pointer hover:text-pink-500">Skills</Link></li>
        <li><Link to="contact" smooth duration={500} className="cursor-pointer hover:text-pink-500">Contact</Link></li>
      </ul>
      <button onClick={() => setDark(!dark)} className="border px-2 py-1 rounded text-xs">
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}
