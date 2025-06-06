import { 
  MapPin,
  Code,
  Smartphone,
  Award,
  Zap
} from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-gray-700/50 backdrop-blur-sm mb-6">
              <Award className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">Get to know me</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#214DDE] to-[#4D70E5] bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="font-semibold">Sulaiman Temiloluwa</span>, a Frontend Developer with a strong focus on crafting clean, scalable, and accessible interfaces using modern technologies like React, Tailwind CSS, and React Native.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech includes impactful contributions at <span className=" font-semibold">NiTHub UNILAG</span> and startups like <span className="text-cyan-400 font-semibold">Zulfah and Afretec Internship</span>, where I led UI revamps, optimized performance, and mentored junior developers in real-world projects.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Beyond code, I actively engage in technical mentorship, open-source collaboration, and building tools that make a difference in people's learning and development experience.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <Code className="w-5 h-5 text-blue-400" />
                  <span className="text-blue-300 font-medium">Frontend Expert</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <Smartphone className="w-5 h-5 text-purple-400" />
                  <span className="text-purple-300 font-medium">Mobile Developer</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>
                <p className="text-gray-300">
                  2+ years of experience in frontend development across web and mobile platforms
                </p>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <p className="text-gray-300">
                  200 Level, Computer Science, University of Lagos
                </p>
              </div>
              
              <div className="group p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-500/20 rounded-xl">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p className="text-gray-300">
                  Based in Lagos, Nigeria — open to remote and on-site roles
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
