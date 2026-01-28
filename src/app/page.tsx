"use client"

import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Linkedin, Globe, Github, ExternalLink, Download } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900 dark:text-slate-100 transition-colors duration-300">
      <motion.div 
        initial="initial"
        animate="animate"
        variants={stagger}
        className="max-w-4xl mx-auto bg-white dark:bg-slate-900 shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none"
      >
        {/* Header Section */}
        <motion.header 
          variants={fadeIn}
          className="bg-slate-900 dark:bg-slate-950 text-white p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{resumeData.name}</h1>
              <p className="mt-2 text-xl text-slate-300 font-medium">{resumeData.title}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <Mail size={16} className="group-hover:scale-110 transition-transform" /> {resumeData.contact.email}
              </a>
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <Phone size={16} className="group-hover:scale-110 transition-transform" /> {resumeData.contact.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} /> {resumeData.contact.location}
              </div>
              <a href={`https://${resumeData.contact.linkedin}`} target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
              <a href={`https://${resumeData.contact.website}`} target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <Globe size={16} className="group-hover:scale-110 transition-transform" /> Website
              </a>
              <a href={`https://${resumeData.contact.github}`} target="_blank" className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                <Github size={16} className="group-hover:scale-110 transition-transform" /> GitHub
              </a>
            </div>
          </div>
          
          <button 
            onClick={handlePrint}
            className="mt-8 flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm transition-all print:hidden"
          >
            <Download size={16} /> Download PDF
          </button>
        </motion.header>

        <main className="p-8 md:p-12 space-y-12">
          {/* Summary */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-4 uppercase tracking-wider text-slate-900 dark:text-slate-100">Professional Summary</h2>
            <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-lg italic">
              "{resumeData.summary}"
            </p>
          </motion.section>

          {/* Core Competencies */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-4 uppercase tracking-wider text-slate-900 dark:text-slate-100">Core Competencies</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData.competencies.map((skill, index) => (
                <span key={index} className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3 py-1 rounded-full text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Experience */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-6 uppercase tracking-wider text-slate-900 dark:text-slate-100">Professional Experience</h2>
            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-700 group">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 dark:bg-slate-400 group-hover:bg-blue-500 transition-colors" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                    <span className="text-slate-600 dark:text-slate-400 font-semibold">{exp.period}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 italic text-slate-700 dark:text-slate-400">
                    <span>{exp.company}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-2 text-gray-700 dark:text-slate-300">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Projects */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-6 uppercase tracking-wider text-slate-900 dark:text-slate-100">Technical Projects</h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      {project.name}
                      <a href={project.link} target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.stack.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={project.github} target="_blank" className="flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                    <Github size={16} /> Source Code
                  </a>
                </div>
                <p className="text-gray-700 dark:text-slate-300 mb-4">{project.description}</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-sm text-gray-600 dark:text-slate-400">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="leading-tight">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.section>

          {/* Skills Grid */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-6 uppercase tracking-wider text-slate-900 dark:text-slate-100">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(resumeData.skills).map(([category, skills], index) => (
                <div key={index} className="space-y-2 group">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 border-b border-slate-100 dark:border-slate-800 pb-1 group-hover:border-blue-500 transition-colors">{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill, idx) => (
                      <span key={idx} className="text-sm text-gray-600 dark:text-slate-400 after:content-[','] last:after:content-[''] mr-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.section variants={fadeIn}>
              <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-4 uppercase tracking-wider text-slate-900 dark:text-slate-100">Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="hover:translate-x-1 transition-transform">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100">{edu.degree}</h3>
                  <p className="text-gray-700 dark:text-slate-300">{edu.institution}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500 italic">{edu.location}</p>
                </div>
              ))}
            </motion.section>
            <motion.section variants={fadeIn}>
              <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-4 uppercase tracking-wider text-slate-900 dark:text-slate-100">Certifications</h2>
              <ul className="space-y-1">
                {resumeData.certifications.map((cert, index) => (
                  <li key={index} className="text-gray-700 dark:text-slate-300 flex items-start gap-2 text-sm hover:translate-x-1 transition-transform">
                    <span className="text-slate-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </motion.section>
          </div>

          {/* Languages */}
          <motion.section variants={fadeIn}>
            <h2 className="text-2xl font-bold border-b-2 border-slate-900 dark:border-slate-700 pb-2 mb-4 uppercase tracking-wider text-slate-900 dark:text-slate-100">Languages</h2>
            <div className="flex flex-wrap gap-6">
              {resumeData.languages.map((lang, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{lang.split(' (')[0]}</span>
                  <span className="text-sm text-slate-500 italic">({lang.split(' (')[1]}</span>
                </div>
              ))}
            </div>
          </motion.section>
        </main>

        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 p-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {resumeData.name}. Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </footer>
      </motion.div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
            padding: 0 !important;
          }
          .min-h-screen {
            min-height: auto !important;
            padding: 0 !important;
          }
          .max-w-4xl {
            max-width: 100% !important;
            box-shadow: none !important;
          }
          header {
            background-color: #0f172a !important;
            color: white !important;
            padding: 2rem !important;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .dark {
            color-scheme: light !important;
          }
        }
      `}</style>
    </div>
  );
}
