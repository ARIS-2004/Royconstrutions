import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const quickLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

const services = [
  "Civil & Structural Works",
  "Steel Fabrication & Erection",
  "Equipment Installation",
  "Project Management",
  "Industrial Infrastructure",
  "Commissioning Support",
];

export function Footer() {
  const navigate = useNavigate();
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#1A1A1A]">
      <div className="h-px bg-gradient-to-r from-transparent via-[#B8965A] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-6">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/8">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <img
              src="/logo1.png"
              alt="Roy Construction"
              className="h-14 w-auto object-contain brightness-0 invert self-start"
            />
            <p
              className="text-[12.5px] text-white/60 leading-[1.85]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Delivering reliable industrial construction solutions across India
              with trust and excellence.
            </p>
            <div className="flex gap-2 mt-1">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 border border-white/15 flex items-center justify-center text-white/40 hover:border-[#B8965A] hover:text-[#B8965A] transition-all duration-300"
                >
                  <Icon size={13} strokeWidth={1.5} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-px bg-[#B8965A]" />
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#B8965A]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Quick Links
              </p>
            </div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="group flex items-center gap-2.5 text-[12.5px] text-white/55 hover:text-white transition-colors duration-300 text-left"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="w-0 h-px bg-[#B8965A] group-hover:w-3 transition-all duration-300 flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-px bg-[#B8965A]" />
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#B8965A]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Our Services
              </p>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li
                  key={s}
                  className="text-[12.5px] text-white/55 leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-3 h-px bg-[#B8965A]" />
              <p
                className="text-[9px] tracking-[0.4em] uppercase text-[#B8965A]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Contact Us
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  size={13}
                  className="text-[#B8965A] flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p
                  className="text-[12px] text-white/55 leading-[1.8]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Room No-5, Unit No-3WS1, 3rd Floor,
                  <br />
                  Mani Casadona, Newtown Square,
                  <br />
                  Kolkata, West Bengal
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  size={13}
                  className="text-[#B8965A] flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <div className="space-y-1">
                  <a
                    href="tel:+918981040466"
                    className="text-[12px] text-white/55 hover:text-[#B8965A] transition-colors duration-200 block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    +91 89810 40466
                  </a>
                  <a
                    href="https://wa.me/918981040466"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10.5px] text-[#B8965A]/50 hover:text-[#B8965A] transition-colors duration-200 block"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    WhatsApp →
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail
                  size={13}
                  className="text-[#B8965A] flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href="mailto:info@rcepl.com"
                  className="text-[12px] text-white/55 hover:text-[#B8965A] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  info@rcepl.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-5">
          <p
            className="text-[11.5px] text-white/35"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2012 Roy Construction Enterprises Pvt. Ltd. All rights reserved.
          </p>
          <div
            className="flex items-center gap-4 text-[11.5px] text-white/35"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <button
              onClick={() => navigate("/privacy")}
              className="hover:text-[#B8965A] transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <span className="text-white/15">·</span>
            <button
              onClick={() => navigate("/terms")}
              className="hover:text-[#B8965A] transition-colors duration-300"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
