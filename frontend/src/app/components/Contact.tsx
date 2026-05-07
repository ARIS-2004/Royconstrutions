import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="bg-[#FAF8F5]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
        {/* ── LEFT — dark image panel ── */}
        <div className="relative overflow-hidden min-h-[480px] lg:min-h-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Contact Roy Construction"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Deep overlay for legibility */}
          <div className="absolute inset-0 bg-[#0E0E0E]/88" />
          {/* Gold left rule */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#B8965A] to-transparent opacity-70" />

          <div className="relative z-10 flex flex-col justify-center h-full px-6 lg:px-14 py-10">
            {/* Contact items */}
            <div className="space-y-6 my-10">
              {[
                {
                  icon: Phone,
                  label: "Phone",
                  content: (
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+918981040466"
                        className="text-[12.5px] text-white/70 hover:text-[#B8965A] transition-colors duration-200 leading-[1.75]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        +91 89810 40466
                      </a>
                      <a
                        href="https://wa.me/918981040466"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10.5px] text-[#B8965A]/60 hover:text-[#B8965A] transition-colors duration-200"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Open in WhatsApp →
                      </a>
                    </div>
                  ),
                },
                {
                  icon: Mail,
                  label: "Email",
                  content: (
                    <a
                      href="mailto:info@rcepl.com"
                      className="text-[12.5px] text-white/70 hover:text-[#B8965A] transition-colors duration-200 leading-[1.75]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      info@rcepl.com
                    </a>
                  ),
                },
                {
                  icon: MapPin,
                  label: "Head Office",
                  content: (
                    <p
                      className="text-[12.5px] text-white/70 leading-[1.75]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Room No-5, Unit No-3WS1, 3rd Floor,
                      <br />
                      Mani Casadona, Newtown Square,
                      <br />
                      Kolkata - 700156, West Bengal
                    </p>
                  ),
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  content: (
                    <p
                      className="text-[12.5px] text-white/70 leading-[1.75]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Mon – Sat, 9am – 6pm
                    </p>
                  ),
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 border border-[#B8965A]/25 flex items-center justify-center flex-shrink-0 group-hover:border-[#B8965A]/60 group-hover:bg-[#B8965A]/5 transition-all duration-300">
                      <Icon
                        className="text-[#B8965A]"
                        size={13}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <p
                        className="text-[8.5px] tracking-[0.35em] uppercase text-white/30 mb-1.5"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.label}
                      </p>
                      {item.content}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── RIGHT — form panel ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF8F5] flex items-center px-6 lg:px-16 py-12"
        >
          <form onSubmit={handleSubmit} className="w-full max-w-lg">
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-5 h-px bg-[#B8965A]" />
                <span
                  className="text-[#B8965A] text-[9px] tracking-[0.5em] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Free Consultation
                </span>
              </div>
              <h3
                className="text-[30px] text-[#1A1A1A] leading-tight"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 400 }}
              >
                Send Us a Message
              </h3>
            </div>

            {/* Fields */}
            <div className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    label: "Full Name",
                    name: "name",
                    type: "text",
                    required: true,
                  },
                  {
                    label: "Email Address",
                    name: "email",
                    type: "email",
                    required: true,
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      className="block text-[9px] tracking-[0.35em] uppercase text-[#1A1A1A]/40 mb-2.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full bg-white border-b-2 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/25 focus:border-[#B8965A] outline-none px-0 py-3 text-[#1A1A1A] transition-all duration-300 text-[13.5px]"
                      style={{ fontFamily: "var(--font-body)" }}
                    />
                  </div>
                ))}
              </div>

              {/* Phone */}
              <div>
                <label
                  className="block text-[9px] tracking-[0.35em] uppercase text-[#1A1A1A]/40 mb-2.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Phone{" "}
                  <span className="normal-case tracking-normal text-[#1A1A1A]/22">
                    (Optional)
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border-b-2 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/25 focus:border-[#B8965A] outline-none px-0 py-3 text-[#1A1A1A] transition-all duration-300 text-[13.5px]"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="block text-[9px] tracking-[0.35em] uppercase text-[#1A1A1A]/40 mb-2.5"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white border-b-2 border-[#1A1A1A]/10 hover:border-[#1A1A1A]/25 focus:border-[#B8965A] outline-none px-0 py-3 text-[#1A1A1A] transition-all duration-300 text-[13.5px] resize-none"
                  style={{ fontFamily: "var(--font-body)" }}
                />
              </div>
            </div>

            {/* Status */}
            {status === "success" && (
              <div className="flex items-center gap-3 mt-6 px-4 py-3 bg-[#B8965A]/6 border-l-2 border-[#B8965A]">
                <span className="text-[#B8965A] text-[14px]">✓</span>
                <p
                  className="text-[#B8965A] text-[12px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Thank you! We'll be in touch shortly.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 mt-6 px-4 py-3 bg-red-50 border-l-2 border-red-400">
                <p
                  className="text-red-500 text-[12px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="group w-full mt-8 bg-[#1A1A1A] text-white py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-[#B8965A] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && (
                <ArrowRight
                  size={11}
                  className="group-hover:translate-x-0.5 transition-transform duration-300"
                />
              )}
            </button>

            {/* Trust */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex-1 h-px bg-[#1A1A1A]/6" />
              <p
                className="text-[10px] text-[#1A1A1A]/28 whitespace-nowrap"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We typically respond within 24 hours
              </p>
              <div className="flex-1 h-px bg-[#1A1A1A]/6" />
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
