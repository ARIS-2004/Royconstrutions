import { motion } from 'motion/react';

const row1 = [
  { src: '/img1.png',  alt: 'Client 1'  },
  { src: '/img2.png',  alt: 'Client 2'  },
  { src: '/img3.png',  alt: 'Client 3'  },
  { src: '/img4.png',  alt: 'Client 4'  },
  { src: '/img5.png',  alt: 'Client 5'  },
  { src: '/img3.jpg',  alt: 'Client 6'  },
];

const row2 = [
  { src: '/img4.jpg',  alt: 'Client 7'  },
  { src: '/img5.jpg',  alt: 'Client 8'  },
  { src: '/img6.jpg',  alt: 'Client 9'  },
  { src: '/img10.svg', alt: 'Client 10' },
  { src: '/img11.svg', alt: 'Client 11' },
  { src: '/img7.jpg',  alt: 'Client 12' },
];

function MarqueeRow({ items, speed = '36s' }: { items: typeof row1; speed?: string }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex items-center gap-4 flex-shrink-0"
        style={{
          animation: `marquee ${speed} linear infinite`,
          width: 'max-content',
        }}
      >
        {[...items, ...items, ...items].map((client, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[160px] h-[72px] flex items-center justify-center bg-white border border-[#1A1A1A]/8 hover:border-[#B8965A]/40 hover:shadow-md hover:shadow-black/5 transition-all duration-300 px-5 py-3 group"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="max-h-full max-w-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const allClients = [...row1, ...row2];

export function Clients() {
  return (
    <section className="bg-[#FAF8F5] py-8 overflow-hidden border-y border-[#E5DDD4]">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-1.5">
              <div className="w-5 h-px bg-[#B8965A]" />
              <span className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
                Trusted By
              </span>
            </div>
            <h2 className="text-[24px] md:text-[28px] text-[#1A1A1A]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              Our <span className="italic text-[#B8965A]">Clients</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[11.5px] text-[#1A1A1A]/40 max-w-xs leading-[1.7] md:text-right"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Proud to work with India's leading industrial and infrastructure organisations.
          </motion.p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10 pointer-events-none" />
        <MarqueeRow items={allClients} speed="42s" />
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  );
}
