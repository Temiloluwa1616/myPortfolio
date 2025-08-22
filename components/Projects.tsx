import { ExternalLink, Github, Code } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Expense Tracker',
      description: 'A secure web app for monitoring income and expenses with real-time charts and Firebase-based authentication. Designed for intuitive UX and financial insights.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      category: 'Web App',
      image: '/images/Expense.JPG',
      github: 'https://github.com/Temiloluwa1616/expense-tracker',
      demo: 'https://expense-tracker-temi1.vercel.app/'
    },
    {
      title: 'Recipe Finder',
      description: 'Built a responsive food recipe search engine using React and external APIs, featuring dietary and cuisine-based filters for tailored user results.',
      technologies: ['React', 'Edamam API', 'Tailwind CSS', 'Axios'],
      category: 'Web App', 
      image: '/images/Recipe.JPG',
      github: 'https://github.com/Temiloluwa1616/Recipe-Finder',
      demo: 'https://recipe-finder-temi1.vercel.app/'
    },
    {
      title: 'NiTHub Website Redesign',
      description: 'Redesigned the NiTHub website using React and Tailwind CSS, working with backend engineers to integrate dynamic content and ensure responsive, high-performance delivery.',
      technologies: ['React', 'Tailwind CSS', 'REST API'],
      category: 'Web App',
      image: '/images/nithub-website.png', 
      demo: 'https://nithub.unilag.edu.ng'
    },
    {
      title: 'Edu-Pro Mobile App',
      description: 'Spearheaded development of Edu-Pro, a mobile app offering academic resources and learning tools for students. Enhanced cross-platform UX/UI consistency on iOS and Android using React Native components and styled-system.',
      technologies: ['React Native', 'Expo', 'Styled Components'],
      category: 'Mobile App',
      image: '/images/edu-pro.png',
      github: 'https://github.com/yourusername/edu-pro', 
      demo: 'https://expo.dev/@yourusername/edu-pro'
    },
    {
      title: 'Weather App',
      description: 'A beautiful, responsive weather application built with React that provides real-time weather information for any city worldwide. Features dynamic backgrounds that change based on weather conditions and a clean, modern design.',
      technologies: ['React', 'ResT Apis', 'Styled Components'],
      category: 'Web App',
      image: '/images/Weather-App.jpeg',
      github: 'https://github.com/Temiloluwa1616/Weather-App', 
      demo: 'https://weather-app-temi1.vercel.app/'
    },
    {
      title: 'QrCode Generator',
      description: 'QR-Code-Generator is a web application that allows users to generate QR codes by entering text or URLs. Built with HTML, CSS, and JavaScript, it offers a straightforward interface for real-time QR code generation.',
      technologies: ['React', 'Expo', 'Styled Components'],
      category: 'Web App',
      image: '/images/Qr-Code.JPG',
      github: 'https://github.com/Temiloluwa1616/QR-Code-Generator', 
      demo: 'https://qr-code-generator-temi1.vercel.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 rounded-full border border-gray-700/50 backdrop-blur-sm mb-6">
              <Code className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-gray-300 text-sm">My work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl overflow-hidden border border-gray-600/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800/60 flex items-center justify-center">
                    <div className="text-center">
                      
                        <img src={project.image} alt="" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 text-cyan-300 rounded-full border border-cyan-500/30">
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-200"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-pink-400 hover:bg-pink-400/10 transition-all duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-gray-800/50 border border-gray-700/30 rounded text-gray-400 hover:border-gray-600/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a
              href="https://github.com/Temiloluwa1616"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border-2 border-cyan-400/50 text-cyan-300 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-pink-500/30 hover:border-cyan-300 transition-all duration-300 group"
            >
              View All Projects
              <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

