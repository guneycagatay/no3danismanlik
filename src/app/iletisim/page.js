import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import ContactFormCard from '@/components/ContactFormCard';

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main className="page-main-tight">
        <section>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '28px' }}>
            <div>
              <span className="eyebrow">İletişim</span>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 66px)', letterSpacing: '-0.05em', lineHeight: '1.02', marginBottom: '16px' }}>
                Sizinle Hemen İletişime Geçelim
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '24px' }}>
                Almanya süreciniz için kısa bir ön görüşme planlayalım. Formu doldurun, ekibimiz size hızlıca dönüş yapsın.
              </p>

              <ContactFormCard />
            </div>
            
            <aside>
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
