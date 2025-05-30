import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Hardware & Software</span>
            <br />
            Engineer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Bridging the gap between digital innovation and physical implementation. 
            I design, build, and optimize systems that work seamlessly across hardware and software domains.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="#"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="px-8 py-3 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors duration-200 font-semibold"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 font-semibold"
            >
              Get In Touch
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
