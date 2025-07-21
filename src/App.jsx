import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import profile from "./assets/sowmya.jpg";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) setDark(storedTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const skillsWithLevel = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "React.js", level: 80 },
    { name: "SQL", level: 75 },
  ];

  const dashboardStats = [
    { title: "Projects Completed", value: 4 },
    { title: "Hackathons Attended", value: 2 },
    { title: "Certifications", value: 5 },
    
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20 space-y-24 bg-white dark:bg-black text-gray-900 dark:text-white transition duration-300">
     

        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 to-black text-white text-4xl font-bold">
          Welcome to My Portfolio
        </section>

        <section id="about" className="min-h-screen p-10" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">👩‍💻 About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img src="/profile.jpg" alt="Sowmya Kumari" className="rounded-full w-40 h-40 object-cover border-4 border-blue-400 shadow-[0_0_15px_#3b82f6] dark:shadow-[0_0_15px_#60a5fa]" />
            <p className="text-lg">
              I’m a tech enthusiast who enjoys solving problems with Java, Python, React, and data science tools. Passionate about building intuitive web interfaces and analyzing data meaningfully.
            </p>
          </div>
        </section>

        <section id="skills" className="min-h-screen p-10 bg-gray-100 dark:bg-gray-800" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">🛠️ Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {["Java", "React.js", "Python", "Data Analysis and Visualization", "Power BI", "SQL", "HTML & CSS"].map(skill => (
              <div key={skill} className="card bg-white dark:bg-gray-700 p-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-[0_0_15px_#3b82f6] dark:hover:shadow-[0_0_15px_#60a5fa]">
                {skill}
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold mb-4">Progress</h3>
          {skillsWithLevel.map((skill, index) => (
            <div key={index} className="mb-4">
              <p className="mb-1 text-sm font-medium">{skill.name}</p>
              <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4">
                <div className="h-4 bg-blue-500 dark:bg-blue-300 rounded-full" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </section>

        <section id="dashboard" className="min-h-screen p-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">📊 Dashboard</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {dashboardStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 text-center transform transition duration-300 hover:scale-105"
              >
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-300">{stat.value}</p>
                <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{stat.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="min-h-screen p-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">🚀 Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["SmartTemp Urban", "Furniture Shop UI", "IPL Data Analyzer", "Chatbot with LLM"].map(project => (
              <div key={project} className="card bg-white dark:bg-gray-700 p-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-[0_0_15px_#3b82f6] dark:hover:shadow-[0_0_15px_#60a5fa]">
                {project}
              </div>
            ))}
          </div>
        </section>

        <section id="certifications" className="min-h-screen p-10 bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6">🎓 Certifications & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'IBM Data Science Professional Certificate', desc: 'Covered data analysis, visualization, Python, SQL, and ML foundations via Coursera.' },
              { title: 'NPTEL Programming in Java', desc: '12-week course by IIT Kharagpur on OOP, multithreading, Swing, Servlets, etc.' },
              { title: 'NPTEL DSA in Java', desc: 'Focused on complexity, recursion, arrays, lists, trees, graphs, and algorithms.' },
              { title: 'Power BI Certification', desc: 'Visualization, dashboards, and analytics using Microsoft Power BI.' },
              { title: 'Mentor at EDAM', desc: 'Guided juniors on projects and hosted technical events in the EDAM community.' },
              { title: '🌟 5-Star Golden Badge Holder', desc: 'Recognized for consistent excellence in coding and engagement.' }
            ].map(({ title, desc }) => (
              <div key={title} className="card bg-white dark:bg-gray-700 p-4 rounded shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-800 hover:shadow-[0_0_15px_#3b82f6] dark:hover:shadow-[0_0_15px_#60a5fa]">
                <h3 className="font-semibold text-lg">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <Contact />

        <footer className="text-center text-sm text-gray-500 py-6">
          &copy; {new Date().getFullYear()} Sowmya Kumari. All rights reserved.
        </footer>

        <style>{`
          .glow {
            text-shadow: 0 0 5px #0f0f0f, 0 0 10px #0f0f0f, 0 0 15px #0f0f0f;
          }
        `}</style>
      </main>
    </>
  );
}
