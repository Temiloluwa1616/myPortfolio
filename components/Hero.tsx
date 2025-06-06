import { ArrowDown, Github, Linkedin, Mail,Sparkles,Zap } from 'lucide-react'
import Profile from '../public/images/Temzy.jpg'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-left lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-gray-700/50 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
                  <span className="text-gray-300 text-sm">Welcome to my portfolio</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    Frontend & Mobile
                  </span>
                  <br />
                  <span className="text-white">Developer</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Passionate about building scalable, performant web and mobile apps. I craft pixel-perfect UIs with React, React Native, and modern tools that power seamless user experiences.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                  View My Projects
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-gray-600 text-gray-300 rounded-xl font-semibold hover:border-blue-400 hover:text-white hover:bg-blue-400/10 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/sulaimantemiloluwa"
                  className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sulaimantemiloluwa"
                  className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:sulaimantemiloluwa24@gmail.com"
                  className="p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            {/* Right side - Image placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-80 animate-pulse delay-500"></div>
                
                {/* Image container */}
                <div className="relative w-80 h-96 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-3xl border border-gray-600/50 backdrop-blur-sm overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
  src="/images/Temzy.jpg"
  alt="Temzy"
  className="w-full h-full object-cover"
/>

                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}