export default function About() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6">
                I'm a passionate developer with expertise in both software and hardware development. 
                I enjoy creating innovative solutions that bridge the gap between digital and physical worlds.
              </p>
              
              <p className="text-lg text-foreground/80 mb-6">
                With a strong background in modern web technologies and embedded systems, 
                I bring a unique perspective to every project I work on.
              </p>
              
              <p className="text-lg text-foreground/80">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or working on personal hardware projects.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-secondary/10 p-6 rounded-lg border border-secondary">
                <h3 className="text-xl font-semibold mb-3 text-accent">Experience</h3>
                <p className="text-foreground/80">
                  3+ years of experience in full-stack development and embedded systems
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg border border-secondary">
                <h3 className="text-xl font-semibold mb-3 text-accent">Education</h3>
                <p className="text-foreground/80">
                  Computer Science & Engineering Background
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg border border-secondary">
                <h3 className="text-xl font-semibold mb-3 text-accent">Location</h3>
                <p className="text-foreground/80">
                  Available for remote and on-site opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
