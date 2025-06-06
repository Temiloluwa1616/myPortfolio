'use client'

import { useState,ChangeEvent, FormEvent } from 'react'


import {  
  Github, 
  Linkedin, 
  Mail, 
  Send,
  Phone,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-gray-700/50 backdrop-blur-sm mb-6">
              <Mail className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">Let's connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-white">Let's Work Together</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborative ventures. Whether you need hardware design, software development, 
                  or full-stack engineering solutions, let's connect!
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/50 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <Mail size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Email</div>
                    <div className="text-gray-300">sulaimantemiloluwa24@gmail.com</div>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/50 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <Phone size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Phone</div>
                    <div className="text-gray-300">+234 7050444525</div>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/30 rounded-2xl border border-gray-600/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-4 bg-blue-500/20 rounded-xl">
                    <MapPin size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-lg">Location</div>
                    <div className="text-gray-300">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Temiloluwa1616"
                    className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-green-400 hover:bg-green-400/10 transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/temiloluwa-sulaiman-58bb21282"
                    className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:sulaimantemiloluwa24@gmail.com"
                    className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl p-8 border border-gray-600/50 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3 text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3 text-gray-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-200 text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-3 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or idea..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-400 via-purple-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-20 pt-12 border-t border-gray-700/50">
            <div className="space-y-4">
              <p className="text-gray-400 text-lg">
                © 2025 Sulaiman Temiloluwa. Built with React and Tailwind CSS.
              </p>
              <div className="flex justify-center items-center gap-2 text-gray-500">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Crafted with passion and attention to detail</span>
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
