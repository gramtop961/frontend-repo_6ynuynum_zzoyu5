import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden bg-black py-28 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,rgba(34,211,238,0.2),rgba(0,0,0,0))]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Ready to launch your next mission?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/80"
        >
          Reserve a window, tailor your payload profile, and experience an immersive control interface from countdown to orbit.
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.2)] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.15)] transition-shadow"
          >
            Request a Quote
          </a>
          <a
            href="#"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 font-semibold text-white hover:brightness-110 transition"
          >
            Download Specs
          </a>
        </div>
        <p className="mt-8 text-xs text-white/60">© {new Date().getFullYear()} NovaLift Aerospace — All rights reserved.</p>
      </div>
    </section>
  );
}
