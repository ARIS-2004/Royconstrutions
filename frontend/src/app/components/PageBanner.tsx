import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  image: string;
  breadcrumb: string;
}

export function PageBanner({ title, subtitle, image, breadcrumb }: PageBannerProps) {
  return (
    <div className="relative overflow-hidden" style={{ height: '360px' }}>
      <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-[#0E0E0E]/78" />
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#B8965A] to-transparent opacity-60" />

      <div className="absolute inset-0 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12 pt-[104px]">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-5"
        >
          <span
            className="text-[11px] text-white/45 tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Home
          </span>
          <ChevronRight size={11} className="text-[#B8965A]/60" strokeWidth={1.5} />
          <span
            className="text-[11px] text-[#B8965A] tracking-[0.15em] uppercase"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {breadcrumb}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 mb-3"
        >
          <div className="w-5 h-px bg-[#B8965A]" />
          <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>Roy Construction</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-[40px] md:text-[52px] text-white leading-[1.05]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[12px] text-white/50 mt-2.5 max-w-sm leading-[1.85]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
