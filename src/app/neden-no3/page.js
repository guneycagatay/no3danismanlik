import Navbar from '@/components/Navbar';
import WhyNo3 from '@/components/WhyNo3';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function WhyNo3Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '40px' }}>
        <section style={{ paddingBottom: '0' }}>
          <div className="container">
            <span className="eyebrow">Neden Biz?</span>
            <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.05em', lineHeight: '1', marginBottom: '24px' }}>
              Bilgi Değil, Çalışan Bir Sistem Sunuyoruz
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--muted)', maxWidth: '800px' }}>
              Rastgele danışmanlıklar yerine, tüm süreci adım adım yöneten ve Almanya fırsatlarına doğrudan erişim sağlayan bir altyapı ile yanınızdayız.
            </p>
          </div>
        </section>
        <WhyNo3 />
        
        <section style={{ background: 'var(--white)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Almanya'dan Yönetilen Süreç</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
                Almanya’daki fırsatlara ulaşmanız için durumunuzu analiz ediyor, sizi doğru işverenlerle buluşturuyoruz. Boş vaatler yerine, şeffaf ve sağlam bir süreç yönetimi sunuyoruz.
              </p>
              <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
                İşverenle devam etmek tamamen sizin kontrolünüzde. Sürecin her adımında yanınızda olarak işleri hızlandırıyor ve yolu birlikte netleştiriyoruz.
              </p>
            </div>
            <div style={{ background: 'var(--bg)', borderRadius: '24px', padding: '40px', border: '1px solid var(--line)' }}>
              <h3 style={{ marginBottom: '16px' }}>Avantajınız</h3>
              <ul className="hero-list">
                <li>Yüksek maliyetlerden kaçınma</li>
                <li>Hızlı ve birebir iletişim</li>
                <li>Vize, denklik ve iş bulma tek sistemde</li>
                <li>Reddedilme riskini minimuma indirme</li>
              </ul>
            </div>
          </div>
        </section>

        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
