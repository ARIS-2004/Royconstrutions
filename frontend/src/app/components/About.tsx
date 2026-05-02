import { Award, CheckCircle, Clock, ShieldCheck, Users, Target, Eye } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { number: '23',   label: 'Total Projects'    },
  { number: '13+',  label: 'Years Experience'  },
  { number: '5',    label: 'Active Sites'      },
  { number: '100%', label: 'L&T Partnered'     },
];

const partners = ['L&T Construction', 'JSW Steel', 'Vedanta', 'AMNS India', 'Aditya Birla Group'];

const pillars = [
  { label: 'Safety',            desc: 'Zero-compromise safety protocols on every site' },
  { label: 'Quality',           desc: 'Certified materials and rigorous quality control' },
  { label: 'Timely Completion', desc: 'On-schedule delivery without compromising standards' },
];

const whyUs = [
  { icon: Award,       title: 'Experienced Team',   desc: 'Skilled professionals with years of industry knowledge delivering precise solutions.' },
  { icon: CheckCircle, title: 'Quality Assurance',  desc: 'We use certified, industry-grade materials for lasting performance on every project.' },
  { icon: Clock,       title: 'Timely Delivery',    desc: 'Projects are completed on schedule without compromising quality or safety.' },
  { icon: ShieldCheck, title: 'Safety First',       desc: 'We prioritize workplace safety with strict compliance to all safety standards.' },
];

export function About() {
  return (
    <section id="about" className="bg-[#FAF8F5]">

      {/* ── Hero split — About intro ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">

        {/* Left — full bleed image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden min-h-[400px] lg:min-h-0"
        >
          <ImageWithFallback
            src="/gallery/img2.jpg"
            alt="Roy Construction team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 via-[#1A1A1A]/10 to-transparent" />

          {/* Partners strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute bottom-0 left-0 right-0 bg-[#FAF8F5]/95 backdrop-blur-sm border-t border-[#1A1A1A]/8 px-8 py-5"
          >
            <p className="text-[8.5px] tracking-[0.4em] uppercase text-[#1A1A1A]/35 mb-3" style={{ fontFamily: 'var(--font-body)' }}>
              Trusted By
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1">
              {partners.map((p) => (
                <span key={p} className="text-[11.5px] text-[#1A1A1A]/60 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  {p}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center px-6 lg:px-16 py-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-[#B8965A]" />
            <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Who We Are
            </span>
          </div>

          <h2 className="text-[36px] md:text-[44px] text-[#1A1A1A] leading-[1.08] mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Construction Work
          </h2>
          <h2 className="text-[36px] md:text-[44px] text-[#1A1A1A] leading-[1.08] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            <span className="italic text-[#B8965A]">Building Excellence</span> Across India
          </h2>

          <p className="text-[13px] text-[#1A1A1A]/50 leading-[1.95] mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            Roy Construction is a leading name in the field of industrial and infrastructure project execution. We collaborate with major organizations such as L&T Construction, JSW Steel, Vedanta, AMNS India, and Aditya Birla Group, delivering excellence across multiple sites in India.
          </p>
          <p className="text-[13px] text-[#1A1A1A]/50 leading-[1.95] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            With a dedicated workforce of over 1,000 professionals, our operations are planned, monitored, and executed by our in-house team of qualified engineers, ensuring technical precision, operational efficiency, and flawless delivery.
          </p>

          {/* Three pillars */}
          <div className="border-t border-[#1A1A1A]/6">
            {pillars.map((p, i) => (
              <div key={i} className="flex items-start gap-4 py-3.5 border-b border-[#1A1A1A]/6 last:border-0">
                <div className="w-1 h-1 rounded-full bg-[#B8965A] flex-shrink-0 mt-[7px]" />
                <div>
                  <span className="text-[12.5px] text-[#1A1A1A]/80 font-medium" style={{ fontFamily: 'var(--font-body)' }}>{p.label}</span>
                  <span className="text-[12.5px] text-[#1A1A1A]/38" style={{ fontFamily: 'var(--font-body)' }}> — {p.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Mission & Vision ── */}
      <div className="py-16 bg-[#F0EDE8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
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
                  Our Purpose
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[36px] md:text-[44px] text-[#1A1A1A] leading-[1.08]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                Building Excellence,<br /><span className="italic text-[#B8965A]">Inspiring Trust</span>
              </motion.h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-white border border-[#1A1A1A]/6 p-10 overflow-hidden group hover:border-[#B8965A]/25 hover:shadow-lg hover:shadow-black/5 transition-all duration-400"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />
              <div className="w-11 h-11 border border-[#B8965A]/20 flex items-center justify-center mb-7 group-hover:border-[#B8965A] group-hover:bg-[#B8965A]/5 transition-all duration-300">
                <Target className="text-[#B8965A]" size={18} strokeWidth={1.5} />
              </div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#B8965A] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Our Mission</p>
              <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-snug" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Delivering Exceptional Project Execution
              </h3>
              <p className="text-[12.5px] text-[#1A1A1A]/48 leading-[1.9]" style={{ fontFamily: 'var(--font-body)' }}>
                To deliver exceptional project execution services through a culture of Safety, Quality, and Accountability, while continuously enhancing client satisfaction and workforce excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-white border border-[#1A1A1A]/6 p-10 overflow-hidden group hover:border-[#B8965A]/25 hover:shadow-lg hover:shadow-black/5 transition-all duration-400"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />
              <div className="w-11 h-11 border border-[#B8965A]/20 flex items-center justify-center mb-7 group-hover:border-[#B8965A] group-hover:bg-[#B8965A]/5 transition-all duration-300">
                <Eye className="text-[#B8965A]" size={18} strokeWidth={1.5} />
              </div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-[#B8965A] mb-3" style={{ fontFamily: 'var(--font-body)' }}>Our Vision</p>
              <h3 className="text-[20px] text-[#1A1A1A] mb-4 leading-snug" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                India's Most Trusted Construction Partner
              </h3>
              <p className="text-[12.5px] text-[#1A1A1A]/48 leading-[1.9]" style={{ fontFamily: 'var(--font-body)' }}>
                To be recognized as one of India's most trusted and progressive construction partners — building a safer, stronger, and sustainable tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="py-16 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Left — heading + image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-px bg-[#B8965A]" />
                <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                  Our Edge
                </span>
              </div>
              <h2 className="text-[34px] md:text-[40px] text-[#1A1A1A] leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Why Choose <span className="italic text-[#B8965A]">Us?</span>
              </h2>
              <p className="text-[12.5px] text-[#1A1A1A]/45 leading-[1.9] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                Our commitment to excellence sets us apart in the construction industry.
              </p>
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src="/gallery/img4.jpg"
                  alt="Construction excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 to-transparent" />
              </div>
            </motion.div>

            {/* Right — 4 feature cards */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group bg-white border border-[#1A1A1A]/6 p-7 hover:border-[#B8965A]/25 hover:shadow-lg hover:shadow-black/5 transition-all duration-400 relative overflow-hidden"
                  >
                    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />
                    <div className="w-10 h-10 border border-[#B8965A]/20 flex items-center justify-center mb-5 group-hover:border-[#B8965A] group-hover:bg-[#B8965A]/5 transition-all duration-300">
                      <Icon className="text-[#B8965A]" size={17} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-[15px] text-[#1A1A1A] mb-2.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {item.title}
                    </h3>
                    <p className="text-[12px] text-[#1A1A1A]/45 leading-[1.85]" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
