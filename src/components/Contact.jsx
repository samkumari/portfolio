
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-black text-black dark:text-white py-16" data-aos="fade-up">
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form
        action="https://formspree.io/f/mzzvdazn"
        method="POST"
        className="flex flex-col w-full max-w-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
      >
        <input type="text" name="name" placeholder="Your Name" required className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:text-white" />
        <input type="email" name="email" placeholder="Your Email" required className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:text-white" />
        <textarea name="message" placeholder="Your Message" rows="6" required className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:text-white" />
        <button type="submit" className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded hover:bg-pink-600 dark:hover:bg-pink-400">Send</button>
      </form>
    </section>
  );
}
