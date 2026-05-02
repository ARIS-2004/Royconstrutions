import { Header } from '../components/Header';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us | Roy Construction – Kolkata, West Bengal',
    description: 'Contact Roy Construction for industrial construction, manpower supply and project execution. Head Office: Mani Casadona, Newtown, Kolkata. Call: +91 89810 40466 | Email: info@rcepl.com',
    canonical: 'https://www.rcepl.com/contact',
  });
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />

      {/* ── Hero banner ── */}
      <div className="relative overflow-hidden" style={{ height: '340px' }}>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
          alt="Contact us"
          className="w-full h-full object-cover object-center"
        />
        {/* Strong dark overlay for text legibility */}
        <div className="absolute inset-0 bg-[#0E0E0E]/78" />
        {/* Warm bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F0EDE8] to-transparent" />
        {/* Gold left rule */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#B8965A] to-transparent opacity-60" />

        <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-8 lg:px-12 pt-[74px]">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="text-white/35 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Home
            </span>
            <ChevronRight size={10} className="text-white/20" />
            <span className="text-[#B8965A] text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Contact Us
            </span>
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-6 h-px bg-[#B8965A]" />
            <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Roy Construction
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-[42px] md:text-[54px] text-white leading-[1.05]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
          >
            Get In <span className="italic text-[#B8965A]">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[12px] text-white/55 mt-3 max-w-sm leading-[1.85]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            We'd love to hear about your project. Reach out and our team will get back to you promptly.
          </motion.p>
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}
