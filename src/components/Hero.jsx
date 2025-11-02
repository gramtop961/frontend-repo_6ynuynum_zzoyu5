import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients and vignette overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,10,21,0)_0%,rgba(12,10,21,0.35)_60%,rgba(0,0,0,0.75)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
            <Rocket className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Beyond Orbit
            <span className="block bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent"> Launch the Future</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80">
            Experience next‑gen launch systems engineered for deep‑space logistics, research, and exploration — all in a breathtaking cosmic ride.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a href="#features" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-black font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.15)] transition-shadow">
              Explore Capabilities
            </a>
            <a href="#cta" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 text-white font-semibold hover:brightness-110 transition">
              Book a Mission
            </a>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="text-xs uppercase tracking-widest">Scroll</div>
          <div className="mx-auto mt-2 h-8 w-[2px] overflow-hidden rounded-full bg-white/20">
            <motion.div
              className="h-8 w-[2px] bg-white"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
