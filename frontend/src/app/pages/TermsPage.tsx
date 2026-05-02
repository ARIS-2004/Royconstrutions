import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageBanner } from '../components/PageBanner';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: `By accessing and using the Roy Construction website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. We reserve the right to modify these terms at any time, and your continued use of the site constitutes acceptance of any changes.`,
  },
  {
    title: 'Use of Website',
    content: `You may use our website for lawful purposes only. You agree not to use the site in any way that violates applicable laws or regulations, transmits harmful or offensive content, attempts to gain unauthorised access to any part of the site, or interferes with the proper functioning of the website.`,
  },
  {
    title: 'Services & Quotations',
    content: `Information provided on this website regarding our construction services is for general informational purposes only. Any quotations or estimates provided through our contact form or direct communication are subject to formal written agreements. Prices and availability are subject to change without notice.`,
  },
  {
    title: 'Intellectual Property',
    content: `All content on this website, including text, images, logos, graphics, and design elements, is the property of Roy Construction and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content without our prior written permission.`,
  },
  {
    title: 'Disclaimer of Warranties',
    content: `Our website is provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy or completeness of any information on the site.`,
  },
  {
    title: 'Limitation of Liability',
    content: `To the fullest extent permitted by law, Roy Construction shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, our website or services. Our total liability for any claim shall not exceed the amount paid by you for the specific service giving rise to the claim.`,
  },
  {
    title: 'Project Contracts',
    content: `All construction projects undertaken by Roy Construction are governed by separate written contracts. These Terms of Service do not constitute a contract for construction services. Any project engagement requires a formal signed agreement outlining scope, timeline, payment terms, and other conditions.`,
  },
  {
    title: 'Governing Law',
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Kolkata, West Bengal.`,
  },
  {
    title: 'Contact Us',
    content: `If you have any questions about these Terms of Service, please contact us at:\n\nRoy Construction\nRoom No-5, Unit No-3WS1, 3rd Floor, Mani Casadona,\nNewtown Square, Action Area IIF/04, Street No-372,\nKolkata, West Bengal\n\nEmail: info@rcepl.com\nPhone: 8551977416`,
  },
];

export default function TermsPage() {
  useSEO({
    title: 'Terms of Service | Roy Construction',
    description: 'Read Roy Construction’s terms of service governing use of our website and construction services.',
    canonical: 'https://www.rcepl.com/terms',
  });
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our website or services."
        image="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
        breadcrumb="Terms of Service"
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
            These Terms of Service govern your use of the Roy Construction website and any services we provide. By using our website, you agree to these terms in full. Please read them carefully.
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
