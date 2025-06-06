import { 
  Code,
  Database,
  Award,
  Sparkles,
} from 'lucide-react';


export default function Skills() {

  type ColorKey = "blue" | "purple" | "cyan" | "pink";

  const skillCategories: {
  title: string;
  icon: React.ReactNode;
  color: ColorKey;
  skills: string[];
}[] = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "blue",
      skills: [
        "React",
        "React Native", 
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3"
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      skills: [
        "Node.js",
        "Express.js",
        "Firebase",
        "MongoDB",
        "REST APIs"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Database className="w-6 h-6" />,
      color: "cyan",
      skills: [
        "Git & GitHub",
        "Expo",
        "Figma",
        "VS Code",
        "Vercel",
        "Netlify",
        "Postman"
      ]
    },
    {
      title: "Professional Skills",
      icon: <Award className="w-6 h-6" />,
      color: "pink",
      skills: [
        "UI/UX Collaboration",
        "Agile Development",
        "Technical Writing",
        "Mentorship",
        "Open Source Contributions"
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: "from-blue-500/20 to-blue-600/20",
      border: "border-blue-500/30",
      text: "text-blue-400",
      hover: "hover:border-blue-400"
    },
    purple: {
      bg: "from-purple-500/20 to-purple-600/20", 
      border: "border-purple-500/30",
      text: "text-purple-400",
      hover: "hover:border-purple-400"
    },
    cyan: {
      bg: "from-cyan-500/20 to-cyan-600/20",
      border: "border-cyan-500/30", 
      text: "text-cyan-400",
      hover: "hover:border-cyan-400"
    },
    pink: {
      bg: "from-pink-500/20 to-pink-600/20",
      border: "border-pink-500/30",
      text: "text-pink-400", 
      hover: "hover:border-pink-400"
    }
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-gray-700/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-gray-300 text-sm">My expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const colors = colorClasses[category.color];
              return (
                <div
                  key={index}
                  className={`group p-6 bg-gradient-to-br ${colors.bg} backdrop-blur-sm rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2 bg-gray-800/50 rounded-lg ${colors.text}`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-lg font-semibold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-2 bg-gray-800/40 rounded-lg text-sm text-gray-300 border border-gray-700/30 hover:border-gray-600/50 hover:bg-gray-700/40 transition-all duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Continuously exploring new technologies and refining my development workflow to stay at the forefront of modern web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
