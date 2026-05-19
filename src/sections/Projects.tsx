import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  link?: string;
  github?: string;
}

const personalProjects: Project[] = [
  // {
  //   title: "Face Challenge",
  //   category: "AI Face Reaction Tracker",
  //   year: "2024",
  //   image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1600",
  //   link: "#",
  //   github: "#"
  // },
  {
    title: "Movie Website",
    category: "Movie Database & Ratings",
    year: "2024",
    image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://skmoviesite.netlify.app/",
    github: "https://github.com/sakthi16cs/movies-app"
  }
];

function ProfessionalExperience() {
  return (
    <div className="pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        <div className="md:col-span-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase italic text-white/20 mb-8">
            Professional <br /> <span className="text-white">Experience</span>
          </h2>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-accent uppercase">Frontend React Developer</h3>
            <p className="text-white/60 font-mono text-sm">Startup (Confidential)</p>
            <p className="text-white/40 font-mono text-xs mt-4">2023 — PRESENT</p>
          </div>
        </div>

        <div className="md:col-span-8 space-y-12">
          <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Building maintainable, production ready frontends using React, Vite and TailwindCSS. 
            I focus on component driven design, clear UX, and performant interfaces that scale with the product.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6">Key Contributions</h4>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Built 6+ Admin Dashboards for various business domains with clean UI and optimized workflows
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Developed user facing web apps with intuitive UX and consistent design patterns
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Created reusable and scalable React components to improve development speed and maintainability
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Implemented complex data driven UIs including pagination, multi row data mapping, filters, and search
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Handled complex frontend logic involving nested data structures, conditional rendering, and dynamic states
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Worked with charts, forms, and role based UI systems for secure and modular app architecture
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Integrated REST APIs and collaborated closely with backend teams for smooth end to end functionality
                </li>
                <li className="flex gap-4">
                  <span className="text-accent">—</span>
                  Optimized performance using memoization, state management best practices, and render minimization
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-[0.3em] text-accent mb-6">Project Domains</h4>
              <div className="space-y-8">
                <div>
                  <h5 className="text-white font-bold text-sm uppercase mb-3">Admin Dashboards</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Attendance Dashboard', 'Employee Management', 'RBAC UI', 'Analytics', 'CRUD Modules'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono py-1 px-3 border border-white/10 rounded-full text-white/40">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase mb-3">Healthcare Systems</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Doctor Admin', 'Patient Intake', 'Appointment Management'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono py-1 px-3 border border-white/10 rounded-full text-white/40">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase mb-3">Ticketing & Booking Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Ticket Booking', 'User Journey UI', 'Seat Selection', 'Fare Calculation'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono py-1 px-3 border border-white/10 rounded-full text-white/40">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-white font-bold text-sm uppercase mb-3">Internal Tools</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Employee Productivity', 'Attendance & Location', 'Management Dashboards'].map(tag => (
                      <span key={tag} className="text-[10px] font-mono py-1 px-3 border border-white/10 rounded-full text-white/40">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const hasLinks = project.link || project.github;

  return (
    <motion.div
      ref={container}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02]">
        <Spotlight
          className="-top-40 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          fill="rgba(124, 58, 237, 0.2)"
        />
        
        <motion.img
          style={{ y }}
          src={project.image}
          alt={project.title}
          className="w-full h-[140%] object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <div className="flex justify-between items-end">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4 overflow-hidden">
                <motion.span 
                   className="h-[1px] w-8 bg-accent origin-left"
                   initial={{ scaleX: 0 }}
                   whileInView={{ scaleX: 1 }}
                   transition={{ delay: 0.5, duration: 0.8 }}
                />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">
                  {project.category}
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black italic uppercase text-white leading-none tracking-tighter group-hover:text-accent transition-colors duration-500">
                {project.title}
              </h3>
            </div>
            
            <div className="hidden md:flex flex-col items-end gap-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
              <div className="flex gap-3">
                {project.github && (
                  <a href={project.github} className="p-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {project.link && (
                  <a href={project.link} className="p-5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6" />
                  </a>
                )}
              </div>
              <span className="text-xl font-mono text-white/40">{project.year}</span>
            </div>
          </div>
        </div>

        {/* Subtle border shine effect */}
        <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none group-hover:border-accent/40 transition-colors duration-700" />
      </div>

      {/* Mobile Info (shows below card on small screens) */}
      <div className="mt-6 flex md:hidden justify-between items-center px-4">
        <h3 className="text-2xl font-black italic uppercase text-white">{project.title}</h3>
        <span className="text-xs font-mono text-white/40">{project.year}</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-4 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-none">
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-8xl md:text-[12vw] font-black leading-none uppercase stroke-text stroke-white/10 text-white/20 mb-6">
              Selected <br /> <span className="text-white opacity-90 italic">Works</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mt-12">
              <p className="max-w-md text-sm font-light text-white/40 leading-relaxed uppercase tracking-widest">
                A curated collection of digital experiments and production environments pushing the boundaries of WebGL.
              </p>
              <div className="flex gap-4 items-center">
                 <span className="text-accent font-mono text-xs uppercase tracking-widest">Scroll to explore</span>
                 <div className="w-12 h-[1px] bg-accent" />
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase italic text-white/20 mb-12">
              Personal <span className="text-white">Projects</span>
            </h2>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24 relative pointer-events-auto mb-12">
          {personalProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* <ProfessionalExperience /> */}
      </div>
    </section>
  );
}
