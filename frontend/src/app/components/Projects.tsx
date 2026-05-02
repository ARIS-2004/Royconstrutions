import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'JSW Steel Plant – BF3 and SMS4',
    category: 'Steel Plant',
    image: '/gallery/img1.jpg',
    description: 'Fabrication and erection of heavy structural steel for Blast Furnace 3 and Steel Melt Shop 4 expansion at JSW Ballari.',
  },
  {
    id: 2,
    title: 'AMNS India – BF3 and SMP3',
    category: 'Steel Plant',
    image: '/gallery/img4.jpg',
    description: 'Ongoing expansion of Blast Furnace 3 and Steel Melt Plant 3 at ArcelorMittal Nippon Steel, Hazira.',
  },
  {
    id: 3,
    title: 'Aditya Aluminium Project',
    category: 'Aluminium Smelter',
    image: '/gallery/img9.jpg',
    description: 'Large-scale aluminium smelter construction with heavy structural steel fabrication and equipment erection.',
  },
];

export function Projects() {
  const navigate = useNavigate();
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="bg-[#FAF8F5] py-24">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
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
                Our Portfolio
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
              Featured Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[12px] text-[#1A1A1A]/40 max-w-[260px] leading-[1.85] md:text-right"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            A selection of our major industrial construction projects across India.
          </motion.p>
        </div>

        {/* ── Editorial layout: 1 large + 2 small ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">

          {/* Featured — large */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={() => navigate('/projects')}
              className="lg:col-span-3 group relative overflow-hidden cursor-pointer bg-[#1A1A1A]"
              style={{ minHeight: '360px' }}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[9px] tracking-[0.4em] uppercase mb-3 block text-white/60 bg-white/10 border border-white/15 px-2.5 py-1 self-start" style={{ fontFamily: 'var(--font-body)' }}>
                  {featured.category}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="text-[26px] text-white leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {featured.title}
                  </h3>
                  <ArrowUpRight size={20} className="text-white/30 group-hover:text-[#B8965A] transition-colors duration-300 flex-shrink-0 mb-1" />
                </div>
                <p className="text-[12px] text-white/50 mt-2 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {featured.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-600" />
            </motion.div>
          )}

          {/* Two smaller cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 + index * 0.1 }}
              onClick={() => navigate('/projects')}
                className="group relative overflow-hidden cursor-pointer bg-[#1A1A1A] flex-1"
                style={{ minHeight: '248px' }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-[#1A1A1A]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[9px] tracking-[0.4em] uppercase mb-2 block text-white/60 bg-white/10 border border-white/15 px-2.5 py-1 self-start" style={{ fontFamily: 'var(--font-body)' }}>
                    {project.category}
                  </span>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-[18px] text-white leading-tight" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {project.title}
                    </h3>
                    <ArrowUpRight size={16} className="text-white/30 group-hover:text-[#B8965A] transition-colors duration-300 flex-shrink-0 mb-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
