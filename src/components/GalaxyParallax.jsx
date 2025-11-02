import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useSectionProgress() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = null;

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const height = rect.height || 1;
        const view = window.innerHeight || 1;
        const start = Math.min(view, Math.max(-height, rect.top));
        const p = 1 - (rect.bottom <= 0 ? 1 : (rect.top >= view ? 0 : (rect.top / (view + height))));
        setProgress(Math.max(0, Math.min(1, p)));
        frame = null;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { ref, progress };
}

export default function GalaxyParallax() {
  const { ref, progress } = useSectionProgress();

  // Parallax factors for different layers
  const far = -40 * progress; // star field (subtle)
  const mid = -120 * progress; // nebulas
  const near = -220 * progress; // holographic waves

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-black py-32 text-white">
      {/* Star field */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(99,102,241,0.18) 0, transparent 45%),
            radial-gradient(circle at 30% 80%, rgba(236,72,153,0.15) 0, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(34,211,238,0.12) 0, transparent 45%)`,
          backgroundColor: 'rgba(0,0,0,1)'
        }}
        animate={{ y: far }}
        transition={{ type: 'tween', ease: 'linear' }}
      />

      {/* Nebula clouds */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-0 h-[140%] w-full"
        animate={{ y: mid }}
        transition={{ type: 'tween', ease: 'linear' }}
      >
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[28rem] w-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
      </motion.div>

      {/* Holographic wave bands */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/3 h-64"
        animate={{ y: near }}
        transition={{ type: 'tween', ease: 'linear' }}
      >
        <div className="mx-auto h-full max-w-6xl opacity-80">
          <div className="h-full w-full rounded-[2rem] bg-[linear-gradient(110deg,rgba(236,72,153,0.25),rgba(129,140,248,0.25),rgba(34,211,238,0.25))] blur-xl" />
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          Ride the Trippy Galaxy Rollercoaster
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-center text-white/80"
        >
          Immerse in holographic gradients and neon waveforms as you scroll. Our experience is crafted for a
          futuristic, cosmic brand presence.
        </motion.p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {[
            'Liquid‑gradient trajectories reduce drag and turbulence across ascent phases.',
            'Adaptive guidance with stellar navigation for interplanetary routes.']
            .map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold">{i === 0 ? 'Aerospike Dynamics' : 'Celestial Autopilot'}</h3>
                <p className="mt-2 text-white/80 text-sm">{text}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
