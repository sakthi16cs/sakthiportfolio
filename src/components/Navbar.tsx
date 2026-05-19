import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center mix-blend-difference pointer-events-none"
      >
        <div className="text-lg font-bold tracking-tighter text-white pointer-events-auto">Sakthi</div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 md:gap-12 text-white items-center pointer-events-auto">
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
            className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-target"
          >
            Resume
            <Download className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-white pointer-events-auto cursor-target"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[45] bg-black md:hidden flex flex-col items-center justify-center gap-12 p-8"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold tracking-[0.2em] uppercase text-white hover:text-accent transition-colors cursor-target"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
            
            <motion.a 
              href="#" 
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-sm font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-target"
            >
              Resume
              <Download className="w-4 h-4" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
