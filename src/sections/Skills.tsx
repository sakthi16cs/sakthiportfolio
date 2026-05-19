import { motion } from 'motion/react';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

const skills = [
  { 
    name: "Front-End", 
    description: "Building immersive user interfaces with modern frameworks and type-safe code.", 
    tools: ["React.js", "Next.js", "Redux Toolkit", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Material UI"] 
  },
  { 
    name: "Back-End", 
    description: "Architecting scalable server-side logic and robust API infrastructures.", 
    tools: ["Node.js", "NestJS", "Express.js", "RESTful API", "Authentication (JWT)"] 
  },
  { 
    name: "Databases", 
    description: "Managing data integrity and performance across relational and NoSQL systems.", 
    tools: ["MySQL", "MongoDB"] 
  },
  { 
    name: "Tools", 
    description: "Streamlining development workflows with industry-standard version control and testing.", 
    tools: ["Git", "GitHub", "Docker", "Postman", "Swagger", "VS Code"] 
  },
  { 
    name: "Cloud/DevOps", 
    description: "Deploying and managing cloud infrastructure with automated CI/CD pipelines.", 
    tools: ["AWS (EC2, S3)", "Vercel", "GitHub Actions"] 
  },
  { 
    name: "Others", 
    description: "Diverse expertise in content management and search engine optimization.", 
    tools: ["Wordpress", "SEO"] 
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative min-h-[200vh] flex flex-col justify-start px-6 pointer-events-none py-32">
      <div className="max-w-7xl mx-auto w-full pointer-events-none">
        <div className="mb-24">
            <h2 className="text-8xl md:text-[10vw] font-black leading-none uppercase stroke-text stroke-white/10 text-white/30">
                WHAT <br /> I DO
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-8 rounded-3xl border border-white/5 relative group pointer-events-auto cursor-target h-full flex flex-col overflow-hidden bg-white/[0.05] backdrop-blur-xl hover:bg-white/[0.08] transition-all duration-300">
                <div className="relative z-10 h-full flex flex-col">
                  <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>

                  <h3 className="text-2xl font-bold uppercase mb-4 text-white group-hover:text-white/30 transition-colors">{skill.name}</h3>
                  <p className="text-white/40 text-sm mb-8 leading-relaxed flex-grow font-light">{skill.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map(tool => (
                      <span key={tool} className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-mono uppercase tracking-widest text-white/80 cursor-target border border-white/5 hover:bg-accent/20 transition-colors">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
