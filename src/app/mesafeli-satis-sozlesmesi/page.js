import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Mesafeli Satış ve Hizmet Sözleşmesi | No3 Danışmanlık',
  description: 'No3 Danışmanlık dijital rehberlik hizmet sözleşmesi metni.'
};

export default function HizmetSozlesmesiPage() {
  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <section>
          <div className="container">
            <article style={{ maxWidth: '920px', margin: '0 auto', background: '#fff', border: '1px solid var(--line)', borderRadius: '24px', padding: '34px' }}>
              <span className="eyebrow">Yasal Metin</span>
              <h1 style={{ fontSize: 'clamp(34px, 4.8vw, 56px)', letterSpacing: '-0.04em', lineHeight: 1.04, marginBottom: '16px' }}>
                Hizmet Sözleşmesi
              </h1>
              <p style={{ color: 'var(--muted)', marginBottom: '24px' }}>
                Bu metin, No3 Danışmanlık tarafından sunulan dijital rehberlik ve süreç yönetimi hizmetine ilişkin temel sözleşme şartlarını içerir.
              </p>

              <h2 style={h2Style}>1. Hizmet Tanımı</h2>
              <p style={pStyle}>No3 Danışmanlık, Almanya göç sürecine yönelik dijital rehberlik ve süreç yönetim uygulaması sunar. Sunulan hizmet, danışmanlık ve yönlendirme sistemidir.</p>

              <h2 style={h2Style}>2. Garanti ve Sorumluluk</h2>
              <p style={pStyle}>No3 Danışmanlık, vize onayı, iş bulma veya Almanya yerleşimi konusunda garanti vermez. Süreç resmi kurum değerlendirmesine bağlıdır.</p>

              <h2 style={h2Style}>3. Kullanıcı Sorumluluğu</h2>
              <p style={pStyle}>Kullanıcı, sisteme girilen bilgilerin doğruluğundan sorumludur. Eksik veya yanlış bilgi nedeniyle oluşacak sonuçlardan No3 Danışmanlık sorumlu tutulamaz.</p>

              <h2 style={h2Style}>4. Ödeme ve İade</h2>
              <p style={pStyle}>Satın alınan dijital hizmetler ve abonelikler, aksi açıkça belirtilmedikçe iade edilmez. Kullanıcı, satın alma ile bu koşulu kabul eder.</p>

              <h2 style={h2Style}>5. Hizmet Kapsamı</h2>
              <p style={pStyle}>Sunulan hizmet; bilgi, yönlendirme ve süreç takibini kapsar. Resmi başvurular kullanıcı tarafından yapılır.</p>

              <h2 style={h2Style}>6. Hesap Kullanımı</h2>
              <p style={pStyle}>Kullanıcı, hesap bilgilerini üçüncü kişilerle paylaşamaz. İhlal tespitinde hesap askıya alınabilir.</p>

              <h2 style={h2Style}>7. Değişiklik Hakkı</h2>
              <p style={pStyle}>No3 Danışmanlık, hizmet içeriğinde ve sistemde değişiklik yapma hakkını saklı tutar.</p>

              <h2 style={h2Style}>8. Yürürlük</h2>
              <p style={pStyle}>Kullanıcı, siteyi kullanarak ve veya hizmet satın alarak bu sözleşmeyi kabul etmiş sayılır.</p>
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
