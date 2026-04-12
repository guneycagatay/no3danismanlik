import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityTool from '@/components/EligibilityTool';

export const metadata = {
  title: 'Uygunluk Testi | No3 Danışmanlık',
  description: 'Almanya süreci için uygunluk seviyenizi sade ve anlaşılır bir test ile görün.'
};

export default function EligibilityPage() {
  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <header style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="eyebrow">No3 Değerlendirme</span>
            <h1 style={{ fontSize: 'clamp(34px, 5vw, 58px)', letterSpacing: '-0.05em', lineHeight: 1.02, marginBottom: '12px' }}>
              Uygunluk Testi
            </h1>
            <p style={{ color: 'var(--muted)', maxWidth: '730px', margin: '0 auto', fontSize: '17px' }}>
              Her yaş ve seviyeden kullanıcı için sade bir ön değerlendirme. Soruları cevaplayın, durumunuzu net görün.
            </p>
          </header>

          <EligibilityTool />

          <p style={{ textAlign: 'center', marginTop: '40px', color: 'var(--muted)', fontSize: '13px' }}>
            Bu test ön değerlendirme amaçlıdır, kesin vize sonucu garantisi vermez.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
