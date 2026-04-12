import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityTool from '@/components/EligibilityTool';

export const metadata = {
  title: 'Almanya Uygunluk Testi | No3 Danışmanlık',
  description: 'Almanya göçmenlik ve kariyer şansınızı 3 dakikada hesaplayın.',
};

export default function EligibilityPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '140px', paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', letterSpacing: '-0.04em', fontWeight: 800 }}>
              Uygunluk Analizi
            </h1>
            <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '16px auto' }}>
              Almanya yasalarına ve No3 kalite standartlarına göre profilinizin ön değerlendirmesini yapın.
            </p>
          </div>
          
          <EligibilityTool />

          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <p style={{ fontSize: '14px', color: 'var(--muted)' }}>
              *Bu test bir "ön değerlendirme" niteliğindedir ve kesin vize sonucu garanti etmez.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
