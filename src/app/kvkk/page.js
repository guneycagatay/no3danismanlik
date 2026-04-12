import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'KVKK Aydınlatma Metni | No3 Danışmanlık',
  description: 'No3 Danışmanlık KVKK aydınlatma metni.'
};

export default function KvkkPage() {
  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <section>
          <div className="container">
            <article style={{ maxWidth: '920px', margin: '0 auto', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '34px' }}>
              <span className="eyebrow">Yasal Metin</span>
              <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.04, marginBottom: '16px' }}>
                KVKK Aydınlatma Metni
              </h1>

              <p style={pStyle}>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel verileriniz veri sorumlusu sıfatıyla No3 Danışmanlık tarafından işlenebilir.</p>
              <h2 style={h2Style}>1. İşlenen Kişisel Veriler</h2>
              <p style={pStyle}>Kimlik ve iletişim bilgileri ile hizmet sürecine ilişkin talep ve işlem kayıtları işlenebilir.</p>
              <h2 style={h2Style}>2. Veri İşleme Amaçları</h2>
              <p style={pStyle}>Hizmet sağlama, süreç takibi, kullanıcı bilgilendirme, finansal kayıt ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenir.</p>
              <h2 style={h2Style}>3. Aktarım</h2>
              <p style={pStyle}>Verileriniz, yasal zorunluluk halinde yetkili kurumlara veya hizmetin ifası için gerekli teknik hizmet sağlayıcılarına aktarılabilir.</p>
              <h2 style={h2Style}>4. Başvuru Hakları</h2>
              <p style={pStyle}>KVKK Madde 11 kapsamındaki haklarınız için info@no3danismanlik.com adresi üzerinden başvuru yapabilirsiniz.</p>
              <h2 style={h2Style}>5. Saklama Süresi</h2>
              <p style={pStyle}>Kişisel veriler, ilgili mevzuat ve işleme amacının gerektirdiği süre boyunca saklanır ve süre sonunda silinir veya anonimleştirilir.</p>
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
