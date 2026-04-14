import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import HomeEligibility from '@/components/HomeEligibility';
import WhyNo3 from '@/components/WhyNo3';
import Packages from '@/components/Packages';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Almanya Danışmanlık, Vize ve İş Süreci | No3 Danışmanlık',
  description: 'Almanya göç, iş bulma ve yerleşim sürecinde danışmanlık paketleri, uygunluk testi ve adım adım profesyonel destek alın.'
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <HomeEligibility />
        <WhyNo3 />
        <Packages />
        <section id="basvuru" style={{ padding: 'var(--space-section) 0', background: 'var(--bg-2)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
              <span className="eyebrow">Hemen Başlayın</span>
              <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.04em' }}>Ücretsiz Ön Değerlendirme Formu</h2>
            </div>
            <LeadForm />
          </div>
        </section>
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
