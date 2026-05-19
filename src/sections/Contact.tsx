import { motion } from 'motion/react';
import ContactModal from '@/components/ContactModal';

export default function ContactSection() {
  return (
    <section id="contact" className="relative h-screen flex flex-col justify-center items-center px-6 text-center pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-3xl pointer-events-auto"
      >
        <span className="text-accent font-mono text-sm tracking-widest uppercase mb-6 block">Ready to connect?</span>
        <h2 className="text-6xl md:text-9xl font-black uppercase mb-12 italic leading-none text-white">
          LET'S <br /> <span className="text-white/20 stroke-text stroke-white">WORK</span> <br /> TOGETHER
        </h2>
        
        <ContactModal>
            <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-4 cursor-target"
            >
                <div 
                    className="group relative px-12 py-6 overflow-hidden rounded-full border border-white/20 hover:border-accent transition-colors duration-500"
                >
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-full" />
                    <span className="relative z-10 font-mono text-sm uppercase tracking-widest group-hover:text-black transition-colors">
                        Get in touch
                    </span>
                </div>
                {/* <p className="mt-8 text-white/40 font-mono text-xs uppercase tracking-[0.3em]">Based in London / Available Worldwide</p> */}
            </motion.div>
        </ContactModal>
      </motion.div>
    </section>
  );
}
