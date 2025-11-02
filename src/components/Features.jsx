import { motion } from 'framer-motion';
import { Rocket, Shield, Star } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Reusable Launch Vehicles',
    desc: 'High‑efficiency stages with precision landing and rapid turnaround for cost‑effective orbit access.'
  },
  {
    icon: Shield,
    title: 'Autonomous Safety',
    desc: 'Onboard AI handles anomaly detection and course correction to keep payloads and crews protected.'
  },
  {
    icon: Star,
    title: 'Deep‑Space Ready',
    desc: 'Cryogenic propulsion and radiation‑hardened avionics extend mission profiles well beyond LEO.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(80%_60%_at_50%_0%,rgba(168,85,247,0.18),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          Precision Engineered for the Cosmos
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-4 text-sm text-white/80">{f.desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
