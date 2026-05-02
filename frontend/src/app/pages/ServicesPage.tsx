import { Header } from '../components/Header';
import { Services } from '../components/Services';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { PageBanner } from '../components/PageBanner';
import { useSEO } from '../hooks/useSEO';

export default function ServicesPage() {
  useSEO({
    title: 'Our Services | Roy Construction – Manpower Supply & Project Execution India',
    description: 'Roy Construction offers skilled manpower supply, back-to-back project execution, construction site management, measurement & supervision, and safety compliance for industrial projects across India.',
    canonical: 'https://www.rcepl.com/services',
  });
  return (
    <div className="size-full bg-[#FAF8F5] overflow-x-hidden">
      <Header />
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive construction solutions tailored to every project scale and sector."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
        breadcrumb="Our Services"
      />
      <Services showHeader={false} />
      <CTA />
      <Footer />
    </div>
  );
}
