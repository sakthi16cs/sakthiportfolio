import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

const experiences = [
  {
    year: "2023 - PRESENT",
    title: "Full-Stack Developer",
    company: "Trugo Technologies, Salem",
    description: "Frontend-focused Full Stack Developer with 3+ years of experience building scalable web applications using React, TypeScript, Node.js, and modern UI technologies. Passionate about creating interactive, high-performance, and user-centric digital experiences.",
    domains: [
      "Admin Dashboard Systems",
      "Healthcare Management Systems",
      "Ticketing & Booking Platforms",
      "SEO Analytics & Website Optimisation Platforms",
      "Finance Dashboards & User Portals",
      "3D Visualization & ShapeDiver Applications",
      "Employee Management System",
      "Role-Based Access Control (RBAC) Systems"
    ]
  },
  {
  year: "NEXT STEP",
  title: "Open to Frontend & Full-Stack Opportunities",
  company: "Looking for New Challenges",
  description: "Actively seeking opportunities to build scalable products, create exceptional user experiences, and contribute to innovative engineering teams using React, TypeScript, Node.js, and modern web technologies."
},
];

export default function CareerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="career" ref={containerRef} className="py-32 px-6 bg-purple-950/5 relative overflow-hidden pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl italic text-center mb-32 text-white"
        >
          My career & <br /> <span className="text-white/20">experience</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical Line Container */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block">
            {/* Moving Line */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-accent relative"
            >
              {/* Glow head */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent blur-xl rounded-full opacity-50" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            </motion.div>
          </div>

          <div className="flex flex-col gap-24">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right lg:pr-8' : 'md:text-left lg:pl-8'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase text-white leading-tight">{exp.title}</h3>
                  <p className="text-accent font-mono text-sm mb-4">{exp.company}</p>
                </div>

                <div className="relative z-10 w-12 h-12 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#fff]" />
                  <div className={`absolute top-1/2 -translate-y-1/2 w-16 h-[1px] bg-accent/20 -z-10 hidden md:block ${i % 2 === 0 ? 'right-1/2' : 'left-1/2'}`} />
                </div>

                <div className={`flex-1 ${i % 2 === 0 ? 'lg:pl-8 md:text-left' : 'lg:pr-8 md:text-right flex flex-col items-end'}`}>
                  <span className="text-4xl md:text-5xl font-black text-white/10 mb-4 block">{exp.year}</span>
                  <p className={`text-white/60 text-sm leading-relaxed max-w-sm mb-8 ${i % 2 === 0 ? '' : 'ml-auto'}`}>
                    {exp.description}
                  </p>

                  {exp.domains && (
                    <div className="space-y-4 w-full">
                      <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">Project Domains</h4>
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? '' : 'justify-end'}`}>
                         {exp.domains.map((domain) => (
                           <span key={domain} className="text-[10px] font-mono py-1 px-3 border border-white/5 rounded-full text-white/60 hover:border-accent/30 hover:text-accent transition-all duration-300">
                             {domain}
                           </span>
                         ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
