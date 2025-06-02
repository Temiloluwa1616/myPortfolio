export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Python",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL"
      ]
    },
    {
      title: "Hardware & Embedded",
      skills: [
        "Arduino",
        "Raspberry Pi",
        "C/C++",
        "PCB Design",
        "IoT",
        "Sensors",
        "Microcontrollers"
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "Docker",
        "VS Code",
        "Linux",
        "AWS",
        "Vercel",
        "Figma"
      ]
    }
  ]

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-lg border border-secondary hover:border-accent transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-secondary/10 px-3 py-2 rounded text-sm text-foreground/80 hover:bg-secondary/20 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-foreground/80">
              Always learning new technologies and staying up-to-date with industry trends
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
