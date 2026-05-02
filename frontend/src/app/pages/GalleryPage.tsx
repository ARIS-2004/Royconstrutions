import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";
import { PageBanner } from "../components/PageBanner";
import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
const images = Array.from({ length: 24 }, (_, i) => ({
  src: `/gallery/img${i + 1}.jpg`,
  label: `Project ${i + 1}`,
}));

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  useSEO({
    title: "Gallery | Roy Construction – Construction Project Photos India",
    description:
      "View Roy Construction’s project gallery – 24 photos from steel plants, aluminium projects, power plants and infrastructure sites across India.",
    canonical: "https://www.rcepl.com/gallery",
  });

  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="Gallery"
        subtitle="A visual showcase of our completed projects and construction excellence."
        image="/gallery/img1.jpg"
        breadcrumb="Gallery"
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
              <span
                className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Work
              </span>
            </motion.div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-[38px] md:text-[46px] text-[#1A1A1A]"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
              >
                Project Gallery
              </motion.h2>
              <p
                className="text-[11.5px] text-[#1A1A1A]/40"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {images.length} projects
              </p>
            </div>
          </div>

          {/* Masonry grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 space-y-3">
            {images.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (index % 8) * 0.05 }}
                className="group relative overflow-hidden break-inside-avoid cursor-pointer bg-[#E8E4DF]"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#0E0E0E]/0 group-hover:bg-[#0E0E0E]/45 transition-all duration-400" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-10 h-10 border border-white/60 flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
                {/* Gold bottom line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#B8965A] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#0E0E0E]/95 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all duration-300"
            onClick={() => setLightbox(null)}
          >
            <X size={16} strokeWidth={1.5} />
          </button>
          <img
            src={lightbox}
            alt="Gallery"
            className="max-w-full max-h-[88vh] object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <CTA />
      <Footer />
    </div>
  );
}
