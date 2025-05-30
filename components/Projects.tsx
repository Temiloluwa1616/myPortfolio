import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'IoT Environmental Monitor',
      description: 'Full-stack IoT solution combining custom PCB design with ESP32, multiple sensors, and a React dashboard for real-time environmental monitoring.',
      technologies: ['ESP32', 'PCB Design', 'React', 'Node.js', 'InfluxDB'],
      category: 'Hardware + Software',
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'FPGA-based Signal Processor',
      description: 'High-performance signal processing system using FPGA for real-time audio filtering and analysis with custom DSP algorithms.',
      technologies: ['VHDL', 'Vivado', 'DSP', 'FPGA', 'C++'],
      category: 'Hardware',
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'Embedded Control System',
      description: 'Microcontroller-based control system for industrial automation with custom firmware and web-based monitoring interface.',
      technologies: ['ARM Cortex-M', 'FreeRTOS', 'CAN Bus', 'React', 'WebSocket'],
      category: 'Embedded',
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'Smart Home Hub',
      description: 'Central hub for smart home devices with custom hardware design, mesh networking, and mobile app control.',
      technologies: ['Zigbee', 'PCB Design', 'React Native', 'AWS IoT', 'Python'],
      category: 'Hardware + Software',
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'Motor Control Driver',
      description: 'High-efficiency motor control system with custom power electronics and advanced control algorithms.',
      technologies: ['Power Electronics', 'PWM Control', 'Embedded C', 'PCB Design'],
      category: 'Hardware',
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Acquisition System',
      description: 'Multi-channel data acquisition system with high-speed ADCs, real-time processing, and cloud integration.',
      technologies: ['High-Speed ADC', 'Python', 'PostgreSQL', 'Docker', 'Grafana'],
      category: 'Hardware + Software',
      image: '/api/placeholder/400/250',
      github: '#',
      demo: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-secondary/30 rounded-lg overflow-hidden card-hover">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <div className="text-6xl text-accent/30">⚡</div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-sm px-3 py-1 bg-accent/20 text-accent rounded-full">
                      {project.category}
                    </span>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        className="p-2 rounded-full bg-background hover:bg-accent/20 transition-colors duration-200"
                        aria-label="GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demo}
                        className="p-2 rounded-full bg-background hover:bg-accent/20 transition-colors duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 bg-background rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 font-semibold"
            >
              View All Projects
              <ExternalLink size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
