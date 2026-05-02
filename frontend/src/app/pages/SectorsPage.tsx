import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CTA } from '../components/CTA';
import { PageBanner } from '../components/PageBanner';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const sectors = [
  {
    title: 'Commercial',
    description: 'Office towers, retail complexes, hotels, and mixed-use developments built to the highest standards.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Residential',
    description: 'Luxury homes, apartment complexes, and gated communities crafted with precision and care.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Industrial',
    description: 'Factories, warehouses, and logistics hubs engineered for efficiency and durability.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Infrastructure',
    description: 'Roads, bridges, drainage systems, and civil works built for generations.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Healthcare',
    description: 'Hospitals, clinics, and medical facilities designed for safety, hygiene, and functionality.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    title: 'Education',
    description: 'Schools, colleges, and universities built to inspire learning and growth.',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export default function SectorsPage() {
  useSEO({
    title: 'Sectors | Roy Construction – Industrial, Infrastructure & Equipment',
    description: 'Roy Construction serves industrial, infrastructure and heavy equipment sectors across India. Steel plants, power plants, aluminium projects, roads, bridges and more.',
    canonical: 'https://www.rcepl.com/sectors',
  });
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="Sectors"
        subtitle="We operate across a wide range of industries, delivering excellence in every domain."
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
        breadcrumb="Sectors"
      />

      <section className="bg-[#FAF8F5] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-5 h-px bg-[#B8965A]" />
              <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Industries We Serve
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[38px] md:text-[46px] text-[#1A1A1A]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
            >
              Our Sectors
            </motion.h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative overflow-hidden bg-[#1A1A1A] cursor-default"
                style={{ minHeight: '280px' }}
              >
                <ImageWithFallback
                  src={sector.image}
                  alt={sector.title}
                  className="w-full h-full object-cover absolute inset-0 opacity-60 group-hover:opacity-45 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-[#0E0E0E]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <span className="text-[#B8965A] text-[9px] tracking-[0.4em] uppercase mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Sector
                  </span>
                  <h3 className="text-[22px] text-white mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {sector.title}
                  </h3>
                  <p className="text-[12px] text-white/50 leading-[1.8]" style={{ fontFamily: 'var(--font-body)' }}>
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
