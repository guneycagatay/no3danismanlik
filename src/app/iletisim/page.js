import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'İletişim ve Randevu | No3 Danışmanlık',
  description: 'No3 Danışmanlık iletişim formu ile randevu alın, Almanya süreciniz için hızlı geri dönüş ve birebir destek alın.'
};

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main className="page-main-tight">
        <section>
          <div className="container contact-grid">
            <div>
              <span className="eyebrow">İletişim</span>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 66px)', letterSpacing: '-0.05em', lineHeight: '1.02', marginBottom: '16px' }}>
                Sizinle Hemen İletişime Geçelim
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '32px' }}>
                Almanya süreciniz için kısa bir ön görüşme planlayalım. Formu doldurun, ekibimiz size hızlıca dönüş yapsın.
              </p>

              <LeadForm maxWidth="100%" />
            </div>
            
            <aside className="contact-aside">
              <div style={{ background: 'rgba(255,255,255,0.74)', border: '1px solid rgba(31, 47, 61, 0.1)', boxShadow: '0 16px 34px rgba(15,30,44,0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '24px', position: 'sticky', top: '120px' }}>
                <h4 style={{ marginBottom: '16px' }}>İletişim Bilgileri</h4>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--primary)', textTransform: 'uppercase' }}>E-posta</strong>
                    <span>info@no3danismanlik.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--primary)', textTransform: 'uppercase' }}>Lokasyon</strong>
                    <span>Almanya / Türkiye</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--primary)', textTransform: 'uppercase' }}>Çalışma Saatleri</strong>
                    <span>09:00 – 18:00 (Hafta İçi)</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
