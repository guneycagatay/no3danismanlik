import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Kullanım Koşulları | No3 Danışmanlık',
  description: 'No3 Danışmanlık kullanım koşulları.'
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <section>
          <div className="container">
            <article style={{ maxWidth: '920px', margin: '0 auto', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '34px' }}>
              <span className="eyebrow">Yasal Metin</span>
              <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.04, marginBottom: '16px' }}>
                Kullanım Koşulları
              </h1>

              <p style={pStyle}>Bu web sitesini kullanan her kullanıcı aşağıdaki koşulları kabul etmiş sayılır.</p>
              <h2 style={h2Style}>1. Genel Kullanım</h2>
              <p style={pStyle}>Site içerikleri bilgilendirme amaçlıdır. Kullanıcı, hizmet satın alma ve kullanım sırasında güncel koşulları incelemekle yükümlüdür.</p>
              <h2 style={h2Style}>2. Fikri Mülkiyet</h2>
              <p style={pStyle}>Sitede yer alan metin, görsel ve diğer içerikler No3 Danışmanlık mülkiyetindedir. İzinsiz çoğaltılamaz ve dağıtılamaz.</p>
              <h2 style={h2Style}>3. Sorumluluğun Sınırı</h2>
              <p style={pStyle}>Site kullanımından doğabilecek dolaylı veya doğrudan zararlardan, yasal sınırlar dahilinde No3 Danışmanlık sorumlu tutulamaz.</p>
              <h2 style={h2Style}>4. Hizmet Değişikliği</h2>
              <p style={pStyle}>No3 Danışmanlık, hizmet kapsamı, içerik ve fiyatlarda değişiklik yapma hakkını saklı tutar.</p>
              <h2 style={h2Style}>5. İletişim</h2>
              <p style={pStyle}>Her türlü soru için info@no3danismanlik.com adresinden iletişime geçebilirsiniz.</p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

const h2Style = {
  fontSize: '24px',
  letterSpacing: '-0.02em',
  marginBottom: '8px',
  marginTop: '18px'
};

const pStyle = {
  color: 'var(--muted)',
  fontSize: '16px',
  lineHeight: 1.6,
  marginBottom: 0
};
