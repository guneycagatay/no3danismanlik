import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function OdemePage({ searchParams }) {
  const product = searchParams?.urun || 'test-sonucu-raporu';
  const score = searchParams?.puan;

  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '860px',
              margin: '0 auto',
              background: '#fff',
              borderRadius: '30px',
              border: '1px solid rgba(31, 47, 61, 0.12)',
              boxShadow: '0 24px 55px rgba(16, 29, 43, 0.12)',
              padding: '40px 30px'
            }}
          >
            <span className="eyebrow">Ödeme Adımı</span>
            <h1 style={{ fontSize: 'clamp(34px, 4.2vw, 50px)', lineHeight: 1.03, letterSpacing: '-0.04em', marginBottom: '10px' }}>
              Test Sonucu Raporu Ödemesi
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '17px', marginBottom: '26px' }}>
              Ödemeyi tamamladıktan sonra uzman ekibimiz test sonucunuza göre kişisel yol haritasını sizinle paylaşacaktır.
            </p>

            <div
              style={{
                borderRadius: '18px',
                border: '1px solid rgba(31, 47, 61, 0.1)',
                background: 'var(--bg)',
                padding: '18px',
                marginBottom: '20px'
              }}
            >
              <p style={{ marginBottom: '6px', fontSize: '15px' }}>
                <strong>Ürün:</strong> {product}
              </p>
              {score && (
                <p style={{ marginBottom: '6px', fontSize: '15px' }}>
                  <strong>Test Puanı:</strong> %{score}
                </p>
              )}
              <p style={{ margin: 0, fontSize: '15px' }}>
                <strong>Tutar:</strong> 49 EUR
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                href="/iletisim"
                className="btn btn-primary"
                style={{ minHeight: '54px', padding: '0 22px', borderRadius: '14px' }}
              >
                Ödemeyi Tamamlamak İçin İletişime Geç
              </Link>
              <Link
                href="/uygunluk-testi"
                className="btn btn-secondary"
                style={{ minHeight: '54px', padding: '0 22px', borderRadius: '14px' }}
              >
                Teste Geri Dön
              </Link>
            </div>

            <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '16px', marginBottom: 0 }}>
              Not: Bu adım ödeme altyapısı bağlanana kadar ön kayıt ekranı olarak çalışır.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
