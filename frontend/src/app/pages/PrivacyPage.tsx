import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageBanner } from '../components/PageBanner';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';

const sections = [
  {
    title: 'Information We Collect',
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us. This may include your name, email address, phone number, and details about your construction project. We also collect information automatically when you visit our website, including your IP address, browser type, and pages visited.`,
  },
  {
    title: 'How We Use Your Information',
    content: `We use the information we collect to respond to your inquiries and provide construction services, send you project updates and communications, improve our website and services, comply with legal obligations, and send promotional communications where you have consented. We do not sell, trade, or rent your personal information to third parties.`,
  },
  {
    title: 'Information Sharing',
    content: `We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect the rights, property, or safety of Roy Construction, our clients, or others.`,
  },
  {
    title: 'Data Security',
    content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: 'Cookies',
    content: `Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can choose to disable cookies through your browser settings, though this may affect certain features of our website.`,
  },
  {
    title: 'Your Rights',
    content: `You have the right to access, correct, or delete your personal information that we hold. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us at info@rcepl.com. We will respond to your request within a reasonable timeframe.`,
  },
  {
    title: 'Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: 'Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated effective date. Your continued use of our website after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us at:\n\nRoy Construction\nRoom No-5, Unit No-3WS1, 3rd Floor, Mani Casadona,\nNewtown Square, Action Area IIF/04, Street No-372,\nKolkata, West Bengal\n\nEmail: info@rcepl.com\nPhone: 8551977416`,
  },
];

export default function PrivacyPage() {
  useSEO({
    title: 'Privacy Policy | Roy Construction',
    description: 'Read Roy Construction’s privacy policy. Learn how we collect, use and protect your personal information.',
    canonical: 'https://www.rcepl.com/privacy',
  });
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
        breadcrumb="Privacy Policy"
      />

      <section className="bg-[#FAF8F5] py-20">
        <div className="max-w-3xl mx-auto px-8 lg:px-12">

          {/* Effective date */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-10 pb-8 border-b border-[#1A1A1A]/8"
          >
            <div className="w-5 h-px bg-[#B8965A]" />
            <span className="text-[#1A1A1A]/40 text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-body)' }}>
              Effective Date: January 1, 2024
            </span>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[13.5px] text-[#1A1A1A]/60 leading-[1.95] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Roy Construction ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </motion.p>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                className="border-l-2 border-[#B8965A]/20 pl-6"
              >
                <h2
                  className="text-[17px] text-[#1A1A1A] mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                >
                  {index + 1}. {section.title}
                </h2>
                <p
                  className="text-[13px] text-[#1A1A1A]/55 leading-[1.95] whitespace-pre-line"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
