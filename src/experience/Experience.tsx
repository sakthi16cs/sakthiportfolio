import { Suspense, useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplineScene } from '@/components/ui/splite';
import Galaxy from '@/components/ui/Galaxy';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const splineApp = useRef<any>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !splineRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#main-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.2, // Faster scrub for snappier feel
        }
      });

      // 1. HERO -> ABOUT (Move Left)
      // Transition from center to left side
      tl.to(splineRef.current, {
          x: '-35%', // Moved further left as requested
          scale: 0.85,
          duration: 1,
          ease: "power2.inOut"
      }, 0);

      // 2. ABOUT -> Skills (Move back towards Center)
      tl.to(splineRef.current, {
          x: '0%',
          scale: 0.8,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
      }, 1);

      // 3. SKILLS -> PROJECTS (Transition out)
      tl.to(splineRef.current, {
          opacity: 0,
          y: '-10%',
          scale: 0.6,
          duration: 1,
          ease: "power2.inOut"
      }, 2);

      // Buffer
      tl.to({}, { duration: 3 }, 3);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleGlobalMouseEvent = (e: MouseEvent) => {
      if (splineApp.current && splineApp.current.canvas) {
        // Forward event to Spline canvas
        const canvas = splineApp.current.canvas;
        const event = new MouseEvent(e.type, {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
          cancelable: true,
          view: window,
          buttons: e.buttons,
          button: e.button
        });
        canvas.dispatchEvent(event);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseEvent);
    window.addEventListener('mousedown', handleGlobalMouseEvent);
    window.addEventListener('mouseup', handleGlobalMouseEvent);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseEvent);
      window.removeEventListener('mousedown', handleGlobalMouseEvent);
      window.removeEventListener('mouseup', handleGlobalMouseEvent);
    };
  }, []);

  const handleSplineLoad = (app: any) => {
    splineApp.current = app;
    // Force interaction update
    if (app.canvas) {
      app.canvas.style.pointerEvents = 'auto';
    }
  };

  if (hasError) {
    return (
      <div className="fixed inset-0 z-0 flex items-center justify-center bg-black text-white/20 font-mono text-xs uppercase tracking-widest text-center px-10">
        Interactive 3D content could not be loaded.<br/>Please check your browser settings or refresh.
      </div>
    );
  }

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep Background: Galaxy */}
      <div className="absolute inset-0 z-[-1] pointer-events-none">
        <Galaxy 
          mouseRepulsion={false} // Disable repulsion to save CPU/GPU for avatar
          mouseInteraction={false} // Disable interaction for background to prioritize avatar
          density={0.8} // Reduced density
          glowIntensity={0.15}
          saturation={0.3}
          hueShift={160}
          speed={0.3}
        />
      </div>

      <div 
        ref={splineRef} 
        className="w-full h-full transform-gpu pointer-events-auto"
        style={{ willChange: 'transform' }}
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
          onLoad={handleSplineLoad}
        />
      </div>

      {/* Decorative gradients */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px]" />
    </div>
  );
}
