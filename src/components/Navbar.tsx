import { motion } from 'motion/react';
import { Download } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-lg font-bold tracking-tighter text-white">Sakthi</div>
      

      <div className="flex gap-8 md:gap-12 text-white items-center">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-xs font-bold tracking-[0.2em] uppercase opacity-70 hover:opacity-100 transition-opacity cursor-target"
          >
            {item.name}
          </a>
        ))}
        <a 
          href="#" 
          className="hidden sm:flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-target"
        >
          Resume
          <Download className="w-3 h-3" />
        </a>
      </div>
    </motion.nav>
  );
}
