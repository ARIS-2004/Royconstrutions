import { Header } from '../components/Header';
import { About } from '../components/About';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { PageBanner } from '../components/PageBanner';
import { useSEO } from '../hooks/useSEO';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Roy Construction – Industrial Construction Company India',
    description: 'Learn about Roy Construction – 25+ years of industrial and infrastructure excellence. Trusted by JSW Steel, Vedanta, L&T, AMNS India & Aditya Birla Group. 1000+ skilled workforce across India.',
    canonical: 'https://www.rcepl.com/about',
  });
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="About Us"
        subtitle="Over two decades of building trust, excellence, and lasting structures across India."
        image="/gallery/img6.jpg"
        breadcrumb="About Us"
      />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
