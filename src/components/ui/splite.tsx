'use client'

import { Suspense, lazy, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps extends React.ComponentProps<typeof Spline> {
  scene: string
  className?: string
}

export const SplineLoader = () => (
  <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black">
    <div className="relative w-24 h-24">
      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-accent/20 rounded-full blur-2xl"
      />
      
      {/* Stylized Corners */}
      {[0, 90, 180, 270].map((rotation, i) => (
        <motion.div
          key={i}
          style={{ rotate: `${rotation}deg` }}
          className="absolute inset-0"
        >
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1 + 0.5 }}
            className="absolute top-0 left-0"
          >
            <div className="w-6 h-[1px] bg-accent/50" />
            <div className="h-6 w-[1px] bg-accent/50" />
          </motion.div>
        </motion.div>
      ))}

      {/* Center Pulse */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
           animate={{
             scale: [0.5, 1.2, 0.8],
             opacity: [0.3, 0.8, 0.3],
           }}
           transition={{
             duration: 2,
             repeat: Infinity,
             ease: "easeInOut",
           }}
           className="w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
      </div>

      {/* Scanning Line */}
      <motion.div
        animate={{
          top: ['0%', '100%', '0%'],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent z-10"
      />
    </div>
    
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-8 flex flex-col items-center gap-3"
    >
      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">Syncing Intelligence</span>
      <div className="w-32 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
        <motion.div
          animate={{
            left: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
        />
      </div>
    </motion.div>
  </div>
);

export function SplineScene({ scene, className, onLoad, ...props }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = (app: any) => {
    setIsLoading(false);
    if (onLoad) onLoad(app);
  };

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 z-50 transition-opacity duration-1000"
          >
            <SplineLoader />
          </motion.div>
        )}
      </AnimatePresence>

      <Suspense fallback={null}>
        <Spline
          scene={scene}
          className={className}
          onLoad={handleLoad}
          {...props}
        />
      </Suspense>
    </div>
  )
}
