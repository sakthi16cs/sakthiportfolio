import { useEffect, Suspense, useState } from 'react';
import { useScroll, useTransform, motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TargetCursor from './components/TargetCursor';
import Experience from './experience/Experience';
import HeroSection from './sections/Hero';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';
import ProjectsSection from './sections/Projects';
import CareerSection from './sections/Career';
import ContactSection from './sections/Contact';
import Footer from './components/Footer';
import { SplineLoader } from './components/ui/splite';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [0.4, 0]);

  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div id="main-container" className="relative bg-black selection:bg-accent selection:text-black min-h-screen">
      <AnimatePresence>
        {!isReady && (
          <motion.div
            key="global-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] pointer-events-auto"
          >
            <SplineLoader />
          </motion.div>
        )}
      </AnimatePresence>

      <TargetCursor />
      {/* 3D Background Experience */}
      <Experience onReady={() => setIsReady(true)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isReady ? 1 : 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Navbar />
        <Sidebar />
        
        <main className="relative z-10 pointer-events-none">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CareerSection />
          <ContactSection />
        </main>

        <Footer />
        
        {/* Scroll indicator */}
        <motion.div 
          style={{ opacity }}
          className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 animate-bounce"
        >
           <div className="w-[1px] h-12 bg-white" />
           <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
