import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CTA } from "../components/CTA";
import { PageBanner } from "../components/PageBanner";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, Building2, ArrowUpRight } from "lucide-react";
import { useSEO } from "../hooks/useSEO";
const ongoing = [
  {
    title: "JSW Steel Project",
    location: "Vidyanagar, Karnataka",
    client: "JSW Steel Ltd.",
    period: "2022 – Present",
    image: "/gallery/img1.jpg",
  },
  {
    title: "AMNS India Steel Project",
    location: "Hazira, Surat, Gujarat",
    client: "ArcelorMittal Nippon Steel",
    period: "2023 – Present",
    image: "/gallery/img2.jpg",
  },
  {
    title: "Vedanta Aluminium Project",
    location: "Chhattisgarh",
    client: "Vedanta Ltd.",
    period: "2023 – Present",
    image: "/gallery/img3.jpg",
  },
  {
    title: "JSW Steel Plant – 3rd Phase",
    location: "Dolvi, Mumbai, Maharashtra",
    client: "JSW Steel Ltd.",
    period: "2024 – Present",
    image: "/gallery/img4.jpg",
  },
  {
    title: "JSW Pellet Plant",
    location: "Paradip, Odisha",
    client: "JSW Group",
    period: "2025 – Present",
    image: "/gallery/img5.jpg",
  },
  {
    title: "Utkal Aluminium – Phase II",
    location: "Rayagada, Odisha",
    client: "Aditya Birla Group",
    period: "2025 – Present",
    image: "/gallery/img6.jpg",
  },
  {
    title: "AMNS India Steel Project",
    location: "Hazira, Surat, Gujarat",
    client: "Larsen & Toubro Limited, Construction",
    period: "2022 – Present",
    image: "/gallery/img2.jpg",
  },
  {
    title: "JSW Steel Project",
    location: "Vidyanagar, Karnataka",
    client: "Larsen & Toubro Limited, Construction",
    period: "2022 – Present",
    image: "/gallery/img1.jpg",
  },
  {
    title: "Hil Kansariguda",
    location: "Tikiri, Rayagada, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2025 – Present",
    image: "/gallery/img6.jpg",
  },
  {
    title: "JSW Pellet Plant",
    location: "Paradip, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2025 – Present",
    image: "/gallery/img5.jpg",
  },
  {
    title: "RIL Nagothane Vinyl Project",
    location: "Nagothane, Maharashtra",
    client: "Larsen & Toubro Limited, Construction",
    period: "2025 – Present",
    image: "/gallery/img3.jpg",
  },
];

const completed = [
  {
    title: "Utkal Aluminium Project",
    location: "Tikiri, Rayagada, Odisha",
    client: "Utkal Alumina (Aditya Birla)",
    period: "2009 – 2013",
    image: "/gallery/img7.jpg",
  },
  {
    title: "Hirakud Can Mill Project",
    location: "Sambalpur, Odisha",
    client: "Hindalco Industries",
    period: "2010 – 2012",
    image: "/gallery/img8.jpg",
  },
  {
    title: "Aditya Aluminium Project",
    location: "Jharsuguda, Odisha",
    client: "Aditya Birla Group",
    period: "2010 – 2012",
    image: "/gallery/img9.jpg",
  },
  {
    title: "Bhushan Steel Plant",
    location: "Dhenkanal, Odisha",
    client: "Bhushan Steel Ltd.",
    period: "2010 – 2014",
    image: "/gallery/img10.jpg",
  },
  {
    title: "RRVPNL Power Plant",
    location: "Rajasthan",
    client: "Rajasthan Rajya Vidyut Nigam",
    period: "2014 – 2015",
    image: "/gallery/img11.jpg",
  },
  {
    title: "Thermal Power Plant",
    location: "Madhya Pradesh",
    client: "State Power Corporation",
    period: "2015 – 2016",
    image: "/gallery/img12.jpg",
  },
  {
    title: "JSW Steel Plant",
    location: "Dolvi, Mumbai, Maharashtra",
    client: "JSW Steel Ltd.",
    period: "2014 – 2022",
    image: "/gallery/img13.jpg",
  },
  {
    title: "Utkal Alumina Project",
    location: "Tikiri, Rayagada, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2009 – 2013",
    image: "/gallery/img7.jpg",
  },
  {
    title: "Hirakud Can Mill Project",
    location: "Sambalpur, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2010 – 2012",
    image: "/gallery/img8.jpg",
  },
  {
    title: "Aditya Aluminium Project",
    location: "Jharsuguda, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2010 – 2012",
    image: "/gallery/img9.jpg",
  },
  {
    title: "Bhushan Steel Plant",
    location: "Dhenkanal, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2010 – 2014",
    image: "/gallery/img10.jpg",
  },
  {
    title: "RMHS-2, BSL Angul",
    location: "Meramandali, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2013 – 2015",
    image: "/gallery/img11.jpg",
  },
  {
    title: "BF-8 for Bhilai",
    location: "Bhilai, Chhattisgarh",
    client: "Larsen & Toubro Limited, Construction",
    period: "2013 – 2015",
    image: "/gallery/img12.jpg",
  },
  {
    title: "RRVPNL Power Plant",
    location: "Rajasthan",
    client: "Larsen & Toubro Limited, Construction",
    period: "2014 – 2015",
    image: "/gallery/img13.jpg",
  },
  {
    title: "JSW Steel Plant",
    location: "Dolvi, Mumbai, Maharashtra",
    client: "Larsen & Toubro Limited, Construction",
    period: "2014 – 2022",
    image: "/gallery/img14.jpg",
  },
  {
    title: "CHP for 2×660 MW Chhabra SCTPS",
    location: "Chhabra, Baran, Rajasthan",
    client: "Larsen & Toubro Limited, Construction",
    period: "2014 – 2015",
    image: "/gallery/img15.jpg",
  },
  {
    title: "CCC for 5 MTPA Project",
    location: "Dolvi, Raigad, Maharashtra",
    client: "Larsen & Toubro Limited, Construction",
    period: "2015 – 2016",
    image: "/gallery/img7.jpg",
  },
  {
    title: "3 MTPA Coke Oven Plant, Dolvi",
    location: "Dolvi, Pen Taluka, Maharashtra",
    client: "Larsen & Toubro Limited, Construction",
    period: "2015 – 2022",
    image: "/gallery/img8.jpg",
  },
  {
    title: "Thermal Power Plant",
    location: "Madhya Pradesh",
    client: "Larsen & Toubro Limited, Construction",
    period: "2015 – 2016",
    image: "/gallery/img9.jpg",
  },
  {
    title: "CHP for 1320 MW Shri Singaji TPP Stage II",
    location: "Village Dongalia, Khandwa, MP",
    client: "Larsen & Toubro Limited, Construction",
    period: "2016",
    image: "/gallery/img10.jpg",
  },
  {
    title: "Rolled Product Debottlenecking – BALCO",
    location: "BALCO Nagar, Chhattisgarh",
    client: "Larsen & Toubro Limited, Construction",
    period: "2023 – 2026",
    image: "/gallery/img11.jpg",
  },
  {
    title: "JSW Steel Plant – 3rd Phase II",
    location: "Dolvi, Mumbai, Maharashtra",
    client: "Larsen & Toubro Limited, Construction",
    period: "2024 – 2026",
    image: "/gallery/img12.jpg",
  },
  {
    title: "Aditya Aluminium Project",
    location: "Lapanga, Sambalpur, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2025 – 2026",
    image: "/gallery/img13.jpg",
  },
];

const upcoming = [
  {
    title: "Rourkela Steel Plant, SAIL Project",
    location: "Rourkela Steel Plant Area, Rourkela, Odisha",
    client: "Steel Authority of India Limited",
    period: "Expected to commence soon",
    image: "/gallery/img14.jpg",
  },
  {
    title: "Bokaro Steel Plant – SAIL Project",
    location: "M.G. Road, Bokaro Steel City, Jharkhand",
    client: "Steel Authority of India Limited",
    period: "Expected to commence soon",
    image: "/gallery/img15.jpg",
  },
  {
    title: "JSW Steel Plant – Steel Project",
    location: "Paradip, Odisha",
    client: "Larsen & Toubro Limited, Construction",
    period: "2026",
    image: "/gallery/img5.jpg",
  },
  {
    title: "AMNS Steel Plant – Steel Project",
    location: "Hazira, Surat, Gujarat",
    client: "Larsen & Toubro Limited, Construction",
    period: "2026",
    image: "/gallery/img2.jpg",
  },
];

type Tab = "ongoing" | "completed" | "upcoming";

const tabs: { key: Tab; label: string; subtitle: string; count: number }[] = [
  {
    key: "ongoing",
    label: "Ongoing Projects",
    subtitle: "Building Tomorrow's Infrastructure Today",
    count: ongoing.length,
  },
  {
    key: "completed",
    label: "Completed Projects",
    subtitle: "Legacy of Excellence Across Industries",
    count: completed.length,
  },
  {
    key: "upcoming",
    label: "Upcoming Projects",
    subtitle: "Future Ventures in the Pipeline",
    count: upcoming.length,
  },
];

const statusConfig = {
  ongoing: {
    dot: "bg-emerald-500",
    text: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    label: "Ongoing",
    pulse: true,
  },
  completed: {
    dot: "bg-[#B8965A]",
    text: "text-[#7A5C2E]",
    bg: "bg-amber-50",
    border: "border-[#B8965A]/40",
    label: "Completed",
    pulse: false,
  },
  upcoming: {
    dot: "bg-sky-500",
    text: "text-sky-700",
    bg: "bg-sky-50",
    border: "border-sky-200",
    label: "Upcoming",
    pulse: false,
  },
};

function ProjectCard({
  project,
  status,
  index,
}: {
  project: (typeof ongoing)[0];
  status: Tab;
  index: number;
}) {
  const cfg = statusConfig[status];
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -5, transition: { duration: 0.25, ease: "easeOut" } }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative bg-white overflow-hidden cursor-pointer border border-[#E5DDD4] hover:border-[#B8965A]/40 hover:shadow-2xl hover:shadow-[#B8965A]/10 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#EDE8E2]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/50 via-[#0E0E0E]/5 to-transparent" />

        {/* Status badge */}
        <div className={`absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 ${cfg.bg} border ${cfg.border} backdrop-blur-sm`}>
          <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${cfg.dot} ${cfg.pulse ? "animate-pulse" : ""}`} />
          <span
            className={`text-[9px] font-semibold tracking-[0.22em] uppercase ${cfg.text}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {cfg.label}
          </span>
        </div>

        {/* Arrow button */}
        <div className="absolute top-3.5 right-3.5 z-10 w-7 h-7 flex items-center justify-center bg-white/90 border border-[#E5DDD4] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={13} className="text-[#B8965A]" strokeWidth={2} />
        </div>
      </div>

      {/* Gold top accent line on hover */}
      <div className="h-[2px] w-0 bg-gradient-to-r from-[#B8965A] to-[#D4AF6A] group-hover:w-full transition-all duration-500" />

      {/* Content */}
      <div className="px-5 pt-4 pb-5">
        <h3
          className="text-[14.5px] text-[#1A1A1A] leading-snug mb-3.5 group-hover:text-[#1A1A1A] transition-colors duration-300"
          style={{ fontFamily: "var(--font-heading)", fontWeight: 400, letterSpacing: "0.01em" }}
        >
          {project.title}
        </h3>

        <div className="space-y-2 mb-4">
          <div className="flex items-start gap-2">
            <Building2 size={10} className="text-[#B8965A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <span
              className="text-[11px] text-[#1A1A1A]/50 leading-snug"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.client}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin size={10} className="text-[#B8965A] flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <span
              className="text-[11px] text-[#1A1A1A]/50 leading-snug"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.location}
            </span>
          </div>
        </div>

        {/* Period footer */}
        <div className="pt-3 border-t border-[#F0EAE2] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Calendar size={10} className="text-[#B8965A] flex-shrink-0" strokeWidth={1.5} />
            <span
              className="text-[10.5px] text-[#B8965A] tracking-wide"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.period}
            </span>
          </div>
          <div className="w-4 h-px bg-[#B8965A]/30 group-hover:w-8 group-hover:bg-[#B8965A]/60 transition-all duration-500" />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("ongoing");
  useSEO({
    title: "Projects | Roy Construction – Industrial Projects Across India",
    description:
      "Explore Roy Construction’s portfolio: JSW Steel, AMNS India, Vedanta Aluminium, Bhushan Steel, SAIL and more. 6 ongoing, 7 completed, 2 upcoming major industrial projects.",
    canonical: "https://www.rcepl.com/projects",
  });

  const current = tabs.find((t) => t.key === activeTab)!;
  const projects =
    activeTab === "ongoing"
      ? ongoing
      : activeTab === "completed"
        ? completed
        : upcoming;

  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="Our Projects"
        subtitle="Delivering large-scale industrial and infrastructure projects across India."
        image="/gallery/img1.jpg"
        breadcrumb="Projects"
      />

      <section className="bg-[#FAF8F5] py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* ── Stats strip ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-px bg-[#1A1A1A]/6 mb-12"
          >
            {[
              {
                num: ongoing.length,
                label: "Ongoing Projects",
                dot: "bg-emerald-400",
              },
              {
                num: completed.length,
                label: "Completed Projects",
                dot: "bg-[#B8965A]",
              },
              {
                num: upcoming.length,
                label: "Upcoming Projects",
                dot: "bg-blue-400",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-[#FAF8F5] flex items-center justify-center gap-4 py-5"
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.dot}`}
                />
                <div
                  className="text-[28px] text-[#1A1A1A] leading-none"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
                >
                  {s.num}
                </div>
                <div
                  className="text-[9px] text-[#1A1A1A]/40 tracking-[0.22em] uppercase hidden sm:block"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* ── Tabs ── */}
          <div className="relative flex flex-col sm:flex-row bg-white border border-[#1A1A1A]/8 mb-12 overflow-hidden">
            {/* Sliding background indicator */}
            <motion.div
              className="absolute top-0 bottom-0 bg-[#1A1A1A] z-0"
              layoutId="tab-indicator"
              style={{ width: `${100 / tabs.length}%` }}
              animate={{
                left: `${(tabs.findIndex((t) => t.key === activeTab) / tabs.length) * 100}%`,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            />
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative z-10 flex-1 flex items-center justify-between gap-3 px-6 py-4 transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                        tab.key === "ongoing"
                          ? "bg-emerald-400"
                          : tab.key === "completed"
                            ? "bg-[#B8965A]"
                            : "bg-blue-400"
                      } ${tab.key === "ongoing" && isActive ? "animate-pulse" : ""}`}
                    />
                    <span
                      className={`text-[10.5px] tracking-[0.18em] uppercase transition-colors duration-200 ${
                        isActive ? "text-white" : "text-[#1A1A1A]/55"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {tab.label}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 transition-colors duration-200 ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "bg-[#1A1A1A]/6 text-[#1A1A1A]/40"
                    }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── Section heading ── */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-5 h-px bg-[#B8965A]" />
              <span
                className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {current.label}
              </span>
            </div>
            <h2
              className="text-[32px] md:text-[38px] text-[#1A1A1A]"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
            >
              {current.subtitle}
            </h2>
          </motion.div>

          {/* ── Cards grid ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  status={activeTab}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
}
