import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mzzvdazn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setIsSubmitted(true);
      alert("Your message has been sent!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-white dark:bg-black text-black dark:text-white py-16"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          value={formData.message}
          onChange={handleChange}
          className="p-3 rounded border border-gray-300 dark:bg-gray-700 dark:text-white"
        />
        <button
          type="submit"
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded hover:bg-pink-600 dark:hover:bg-pink-400"
        >
          Send
        </button>
      </form>
    </section>
  );
}

