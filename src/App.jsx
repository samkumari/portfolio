
import React from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 space-y-24">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-black text-white text-4xl font-bold">
          Welcome to My Portfolio
        </section>
        
<section id="about" className="min-h-screen p-10" data-aos="fade-up">
  <h2 className="text-4xl font-bold mb-4">👩‍💻 About Me</h2>
  <div className="flex flex-col md:flex-row items-center gap-10">
    <img src="/profile.jpg" alt="Sowmya Kumari" className="rounded-full w-40 h-40 object-cover border-4 border-pink-400 shadow-lg" />
    <p className="text-lg">
      I’m a tech enthusiast who enjoys solving problems with Java, Python, React, and data science tools. Passionate about building intuitive web interfaces and analyzing data meaningfully.
    </p>
  </div>
</section>

        

<section id="skills" classNam className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-4">🛠️ Skills</h2>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">Java</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">React.js</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">Python</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">Data Analysis and Visualization</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">Power BI</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">SQL</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">HTML & CSS</div>
  </div>
</section>

        
<section id="projects" className="min-h-screen p-10" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-4">🚀 Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">SmartTemp Urban</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">Furniture Shop UI</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">IPL Data Analyzer</div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">Chatbot with LLM</div>
  </div>
</section>

        
<section id="certifications" className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
  <h2 className="text-3xl font-bold mb-6">🎓 Certifications & Achievements</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="font-semibold text-lg">IBM Data Science Professional Certificate</h3>
      <p>Covered data analysis, visualization, Python, SQL, and ML foundations via Coursera.</p>
    </div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="font-semibold text-lg">NPTEL Programming in Java</h3>
      <p>12-week course by IIT Kharagpur on OOP, multithreading, Swing, Servlets, etc.</p>
    </div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="font-semibold text-lg">NPTEL DSA in Java</h3>
      <p>Focused on complexity, recursion, arrays, lists, trees, graphs, and algorithms.</p>
    </div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="font-semibold text-lg">Power BI Certification</h3>
      <p>Visualization, dashboards, and analytics using Microsoft Power BI.</p>
    </div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="font-semibold text-lg">Mentor at EDAM</h3>
      <p>Guided juniors on projects and hosted technical events in the EDAM community.</p>
    </div>
    <div className="card bg-white dark:bg-gray-700 p-4 rounded shadow">
      <h3 className="font-semibold text-lg">🌟 5-Star Golden Badge Holder</h3>
      <p>Recognized for consistent excellence in coding and engagement.</p>
    </div>
  </div>
</section>

        <Contact />
        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; 2025 Sowmya Kumari
        </footer>
      </main>
    </>
  );
}

export default App;
