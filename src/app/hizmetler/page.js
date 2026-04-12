import Navbar from '@/components/Navbar';
import Packages from '@/components/Packages';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function HizmetlerPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '40px' }}>
        <section style={{ paddingBottom: '0' }}>
          <div className="container">
            <span className="eyebrow">Hizmetlerimiz</span>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.05em', lineHeight: '1', marginBottom: '24px' }}>
              Almanya Yolculuğunuz İçin Profesyonel Çözümler
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '800px' }}>
              Başvurunuzu şansa bırakmayın. No3 Danışmanlık olarak, süreci Almanya merkezli ekibimizle profesyonel bir sistem üzerinden yönetiyoruz.
            </p>
          </div>
        </section>
        <Packages />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
