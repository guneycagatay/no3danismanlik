import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Gizlilik Politikası ve Veri Koruma | No3 Danışmanlık',
  description: 'No3 Danışmanlık gizlilik politikası metni.'
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <section>
          <div className="container">
            <article style={{ maxWidth: '920px', margin: '0 auto', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '34px' }}>
              <span className="eyebrow">Yasal Metin</span>
              <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.04, marginBottom: '16px' }}>
                Gizlilik Politikası
              </h1>

              <p style={pStyle}>No3 Danışmanlık olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu sayfa, verilerinizin nasıl toplandığını, işlendiğini ve korunduğunu açıklar.</p>
              <h2 style={h2Style}>1. Toplanan Bilgiler</h2>
              <p style={pStyle}>İletişim formu ve hizmet süreçlerinde ad soyad, e-posta, telefon ve talep detayları toplanabilir.</p>
              <h2 style={h2Style}>2. Kullanım Amacı</h2>
              <p style={pStyle}>Toplanan bilgiler, hizmet sunumu, kullanıcı iletişimi, süreç yönetimi ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.</p>
              <h2 style={h2Style}>3. Veri Güvenliği</h2>
              <p style={pStyle}>Verilerinizin korunması için teknik ve idari güvenlik tedbirleri uygulanır.</p>
              <h2 style={h2Style}>4. Üçüncü Taraf Paylaşımı</h2>
              <p style={pStyle}>Yasal zorunluluklar hariç, kişisel verileriniz açık rıza olmadan üçüncü kişilerle paylaşılmaz.</p>
              <h2 style={h2Style}>5. Güncelleme Hakkı</h2>
              <p style={pStyle}>No3 Danışmanlık, bu politikayı mevzuat ve hizmet değişikliklerine göre güncelleme hakkını saklı tutar.</p>
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
