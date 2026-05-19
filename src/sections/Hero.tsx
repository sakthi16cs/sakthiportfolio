import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center pointer-events-none">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="z-10"
        >
          <p className="text-white/60 font-mono text-md tracking-widest mb-4">Hello! I'm</p>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none text-white">
            Sakthivel 
          </h1>
          // <br /> <span className="text-4xl md:text-6xl font-serif italic text-white/20 stroke-text stroke-white">Murugan</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="z-10 mt-12 md:mt-0 text-center md:text-right"
        >
          <p className="text-white/40 font-mono text-sm mb-2">A Creative</p>
          <h2 className="text-5xl md:text-7xl font-serif italic text-white/20 stroke-text stroke-white">
            FULL STACK <br />
            <span className="text-white not-italic font-sans font-black uppercase">DEVELOPER</span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
