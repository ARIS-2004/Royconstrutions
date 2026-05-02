import { motion } from 'motion/react';
import { Users, RefreshCw, HardHat, Ruler, ShieldCheck, Factory, Landmark, Truck, ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigate } from 'react-router-dom';

const coreServices = [
  { icon: Users,       title: 'Skilled & Unskilled Manpower Supply',  description: 'Qualified professionals and laborers for every project requirement.',  image: '/gallery/img1.jpg'  },
  { icon: RefreshCw,   title: 'Back-to-Back Project Execution',        description: 'Complete project delivery from start to finish, on time.',              image: '/gallery/img8.jpg'  },
  { icon: HardHat,     title: 'Construction Site Management',          description: 'Expert on-site coordination, resource optimization and oversight.',      image: '/gallery/img10.jpg' },
  { icon: Ruler,       title: 'Measurement & Supervision',             description: 'Precise measurement and detailed supervision at every stage.',           image: '/gallery/img12.jpg' },
  { icon: ShieldCheck, title: 'Safety & Quality Compliance',           description: 'Strict safety protocols and quality assurance on every site.',           image: '/gallery/img16.jpg' },
];

const sectors = [
  { icon: Factory,  tag: 'Industrial',      title: 'Industrial Projects',                    image: '/gallery/img3.jpg'  },
  { icon: Landmark, tag: 'Infrastructure',  title: 'Infrastructure Development',             image: '/gallery/img5.jpg'  },
  { icon: Truck,    tag: 'Equipment',       title: 'Heavy Equipment Handling & Supervision', image: '/gallery/img7.jpg'  },
];

export function Services({ showHeader = true }: { showHeader?: boolean }) {
  const navigate = useNavigate();

  return (
    <section id="services" className="bg-[#FAF8F5]">

      {/* ── Core Services ── */}
      <div className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header row */}
          {showHeader && (
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className="w-5 h-px bg-[#B8965A]" />
                  <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                    What We Offer
                  </span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="text-[38px] md:text-[46px] text-[#1A1A1A] leading-[1.05]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                >
                  Our <span className="italic text-[#B8965A]">Services</span>
                </motion.h2>
              </div>
              <motion.button
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onClick={() => navigate('/services')}
                className="group flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#1A1A1A]/50 hover:text-[#B8965A] transition-colors duration-300 self-start md:self-end"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                View All Services
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            </div>
          )}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

            {/* Featured card — large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 group relative overflow-hidden bg-[#1A1A1A] cursor-default"
              style={{ minHeight: '420px' }}
            >
              <img
                src={coreServices[0].image}
                alt={coreServices[0].title}
                className="w-full h-full object-cover absolute inset-0 opacity-50 group-hover:opacity-65 transition-opacity duration-500 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-[#0E0E0E]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />

              <div className="relative z-10 flex flex-col justify-end h-full p-8">
                <div className="w-9 h-9 border border-[#B8965A]/40 flex items-center justify-center mb-5">
                  <Users className="text-[#B8965A]" size={16} strokeWidth={1.5} />
                </div>
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#B8965A] mb-2" style={{ fontFamily: 'var(--font-body)' }}>01</span>
                <h3 className="text-[22px] text-white leading-snug mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {coreServices[0].title}
                </h3>
                <p className="text-[12px] text-white/50 leading-[1.85]" style={{ fontFamily: 'var(--font-body)' }}>
                  {coreServices[0].description}
                </p>
              </div>
            </motion.div>

            {/* Right — 2x2 grid of smaller cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreServices.slice(1).map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index + 1) * 0.07 }}
                    className="group relative overflow-hidden bg-white border border-[#1A1A1A]/6 hover:border-[#B8965A]/20 hover:shadow-lg hover:shadow-black/5 transition-all duration-400"
                  >
                    {/* Image */}
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent" />
                      <span className="absolute top-2.5 right-3 text-[32px] leading-none text-white/10 select-none" style={{ fontFamily: 'var(--font-heading)' }}>
                        {String(index + 2).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />

                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-7 h-7 border border-[#B8965A]/20 flex items-center justify-center group-hover:border-[#B8965A]/50 transition-colors duration-300">
                          <Icon className="text-[#B8965A]" size={13} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-[13.5px] text-[#1A1A1A] leading-snug flex-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-[11px] text-[#1A1A1A]/40 leading-[1.8]" style={{ fontFamily: 'var(--font-body)' }}>
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Sectors strip ── */}
      <div className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-5 h-px bg-[#B8965A]" />
              <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Industries We Serve
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden cursor-default"
                  style={{ height: '260px' }}
                >
                  <ImageWithFallback
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-55 group-hover:opacity-65"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-[#0A0A0A]/10" />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />

                  <div className="relative z-10 flex flex-col justify-end h-full p-6">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className="w-6 h-6 border border-[#B8965A]/50 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-[#B8965A]" size={11} strokeWidth={1.5} />
                      </div>
                      <span className="text-[8.5px] tracking-[0.3em] uppercase text-[#B8965A]" style={{ fontFamily: 'var(--font-body)' }}>
                        {sector.tag}
                      </span>
                    </div>
                    <h3 className="text-[18px] text-white leading-snug" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {sector.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
