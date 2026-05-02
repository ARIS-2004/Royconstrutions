import { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const slides = [
  { image: '/gallery/img1.jpg',  label: 'Steel Plant Construction',    desc: 'Fabrication & erection of heavy structural steel for blast furnaces and steel melting shops.' },
  { image: '/gallery/img4.jpg',  label: 'Industrial Infrastructure',   desc: 'End-to-end civil and structural works for large-scale industrial complexes across India.' },
  { image: '/gallery/img7.jpg',  label: 'Heavy Structural Erection',   desc: 'Precision erection of heavy steel structures, equipment supports and conveyor systems.' },
  { image: '/gallery/img10.jpg', label: 'Equipment Installation',      desc: 'Installation, alignment and commissioning of critical plant equipment and machinery.' },
  { image: '/gallery/img13.jpg', label: 'Civil & Structural Works',    desc: 'Foundations, RCC structures, pipe racks and infrastructure development for process plants.' },
  { image: '/gallery/img16.jpg', label: 'Project Execution',           desc: 'Back-to-back project execution with strict adherence to safety, quality and timelines.' },
  { image: '/gallery/img19.jpg', label: 'Aluminium Smelter Projects',  desc: 'Large-scale greenfield and brownfield aluminium smelter construction under major EPC contractors.' },
  { image: '/gallery/img22.jpg', label: 'Power Plant Construction',    desc: 'Coal handling plants, conveyor galleries and balance-of-plant works for thermal power stations.' },
];

const stats = [
  { num: '23',   label: 'Total Projects'     },
  { num: '13+',  label: 'Years Experience'   },
  { num: '5',    label: 'Ongoing Sites'      },
  { num: '100%', label: 'L&T Partnered'      },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const go = useCallback((idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((p) => (p + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section id="home" className="relative overflow-hidden bg-[#0A0A0A]" style={{ height: '100svh', minHeight: '620px' }}>

      {/* ── Carousel images ── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={{
            enter: (d: number) => ({ x: d > 0 ? '6%' : '-6%', opacity: 0, scale: 1.04 }),
            center: { x: '0%', opacity: 1, scale: 1 },
            exit:  (d: number) => ({ x: d > 0 ? '-6%' : '6%', opacity: 0, scale: 1.04 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.1, ease: [0.32, 0, 0.67, 0] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].label}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/55 to-[#0A0A0A]/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/30 z-10" />

      {/* ── Gold left rule ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: 'easeOut' }}
        className="absolute left-0 top-0 bottom-0 w-[2px] origin-top z-20"
        style={{ background: 'linear-gradient(to bottom, transparent, #B8965A 25%, #B8965A 75%, transparent)' }}
      />

      {/* ── Slide counter top-right ── */}
      <div className="absolute top-28 right-6 lg:right-12 z-20 flex items-center gap-2">
        <span className="text-[#B8965A] text-[13px]" style={{ fontFamily: 'var(--font-heading)' }}>
          {String(current + 1).padStart(2, '0')}
        </span>
        <div className="w-10 h-px bg-white/20">
          <motion.div
            className="h-full bg-[#B8965A]"
            animate={{ width: `${((current + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-white/30 text-[11px]" style={{ fontFamily: 'var(--font-body)' }}>
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-20 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-28">
        <div className="max-w-[520px]">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-5 h-px bg-[#B8965A]" />
            <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Est. 2012 &nbsp;·&nbsp; Industrial Construction
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[56px] text-white leading-[1.06] mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            Building <em style={{ color: '#B8965A', fontStyle: 'italic' }}>Excellence</em><br />
            Into Every Project
          </motion.h1>

          {/* Subtext — changes with slide */}
          <AnimatePresence mode="wait">
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="text-[12.5px] text-white/50 leading-[1.85] mb-8 max-w-[340px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {slides[current].desc}
            </motion.p>
          </AnimatePresence>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => navigate('/contact')}
              className="group flex items-center gap-2.5 bg-[#B8965A] text-white px-7 py-3 text-[10px] tracking-[0.25em] uppercase hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Get a Free Quote
              <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
            <button
              onClick={() => navigate('/projects')}
              className="group flex items-center gap-2 text-[10px] tracking-[0.25em] uppercase text-white/55 hover:text-white transition-colors duration-300 border border-white/15 hover:border-white/40 px-7 py-3"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              View Our Work
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Prev / Next ── */}
      <div className="absolute bottom-20 right-6 lg:right-12 z-20 flex items-center gap-2">
        <button
          onClick={prev}
          className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#B8965A] hover:text-[#B8965A] transition-all duration-300"
        >
          <ChevronLeft size={14} strokeWidth={1.5} />
        </button>
        <button
          onClick={next}
          className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/50 hover:border-[#B8965A] hover:text-[#B8965A] transition-all duration-300"
        >
          <ChevronRight size={14} strokeWidth={1.5} />
        </button>
      </div>

      {/* ── Dot indicators ── */}
      <div className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`transition-all duration-400 ${
              i === current
                ? 'w-6 h-1 bg-[#B8965A]'
                : 'w-1 h-1 bg-white/25 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/8 bg-[#0A0A0A]/60 backdrop-blur-md"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-stretch overflow-x-auto">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col py-4 pr-8 sm:pr-12 flex-shrink-0 ${i > 0 ? 'pl-8 sm:pl-12 border-l border-white/8' : ''}`}
              >
                <span className="text-[20px] sm:text-[24px] text-white leading-none mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {s.num}
                </span>
                <span className="text-[8.5px] text-white/35 tracking-[0.22em] uppercase whitespace-nowrap" style={{ fontFamily: 'var(--font-body)' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
