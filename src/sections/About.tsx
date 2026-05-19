import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section id="about" className="relative h-screen flex items-center px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 pointer-events-none">
        <div className="hidden md:block" /> {/* Space for Avatar on the left */}
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-accent font-mono text-sm tracking-widest mb-8 uppercase">About Me</h2>
          <p className="text-3xl md:text-5xl font-serif italic leading-tight mb-8 text-white">
            I am a developer passionate about modern frontend experiences and scalable backend solutions.
          </p>
          <p className="text-lg font-medium text-white/60 leading-relaxed max-w-xl">
            Driven by curiosity, I always try to explore and learn new skills. My work lives at the intersection of performance and aesthetics.
          </p>
          
          <div className="mt-12 flex gap-4 pointer-events-auto items-center">
             <div className="relative flex h-3 w-3">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
             </div>
             <span className="text-sm font-mono opacity-60 uppercase tracking-widest translate-y-[1px]">Available for hire</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
