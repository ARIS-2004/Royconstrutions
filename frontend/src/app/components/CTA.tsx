import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

export function CTA() {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '160px' }}>
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Start your project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/85" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8965A]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-1.5">
            <div className="w-4 h-px bg-[#B8965A]" />
            <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Start Your Project
            </span>
          </div>
          <h2 className="text-[20px] md:text-[24px] text-white leading-[1.15]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Ready to Build <em style={{ fontStyle: 'italic', color: '#B8965A' }}>Something Great?</em>
          </h2>
          <p className="text-[11px] text-white/35 leading-[1.75] mt-1.5 max-w-sm" style={{ fontFamily: 'var(--font-body)' }}>
            Get a free consultation and let's bring your vision to life.
          </p>
        </motion.div>

        {/* Right — CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex flex-row gap-3 flex-shrink-0"
        >
          <button
            onClick={() => navigate('/contact')}
            className="group flex items-center gap-2 bg-[#B8965A] text-white px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get a Free Quote
            <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 text-[10px] tracking-[0.22em] uppercase border border-white/15 text-white/40 hover:border-white/35 hover:text-white/65 transition-all duration-300"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            View Our Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
