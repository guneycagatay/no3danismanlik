import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-label">Almanya Kariyer Danışmanlığı</span>
            <h2>Geleceğinizi şansa bırakmayın, çalışan bir sistemle ilerleyin.</h2>
            <p>
              Almanya’daki kariyer yolculuğunuzda teknik destek, evrak kontrolü ve doğrudan işveren bağlantılarıyla yanınızdayız.
            </p>
          </div>

          <div className="footer-cta-box">
            <span className="small">Hemen ilk adımı atın</span>
            <Link href="/iletisim" className="btn btn-primary" style={{ width: '100%', background: '#fff', color: '#0a0f1c' }}>
              Ücretsiz Ön Analiz Al
            </Link>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-column">
            <div className="brand" style={{ marginBottom: '20px', color: '#fff' }}>
              <span className="brand-mark" style={{ background: '#fff', color: '#0a0f1c' }}>No3</span>
              <span style={{ fontWeight: '800' }}>No3 Danışmanlık</span>
            </div>
            <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#94a3b8', marginBottom: '24px' }}>
              Almanya merkezli ekibimizle profesyonel göçmenlik ve kariyer süreçlerini dijital bir sistem üzerinden yönetiyoruz.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {/* Social Icons Placeholder */}
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'grid', placeItems: 'center', cursor: 'pointer', transition: '0.2s' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-column">
            <h4>Hizmetler</h4>
            <ul>
              <li><Link href="/hizmetler">Ön Değerlendirme</Link></li>
              <li><Link href="/hizmetler">Evrak & Başvuru</Link></li>
              <li><Link href="/hizmetler">Tam Süreç Yönetimi</Link></li>
              <li><Link href="/hizmetler">İşveren Bağlantıları</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Kurumsal</h4>
            <ul>
              <li><Link href="/hizmetler">Hizmetlerimiz</Link></li>
              <li><Link href="/neden-no3">Neden No3?</Link></li>
              <li><Link href="/#faq">Sıkça Sorulan Sorular</Link></li>
              <li><Link href="/iletisim">İletişim Kanalları</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>İletişim</h4>
            <ul style={{ color: '#94a3b8' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>📍</span>
                <span>Frankfurt, Almanya</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✉️</span>
                <span>hello@no3danismanlik.com</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>⏰</span>
                <span>09:00 – 18:00 (CET)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 No3 Danışmanlık. Tüm hakları saklıdır.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="#" style={{ color: '#64748b', fontSize: '13px' }}>Gizlilik Politikası</Link>
            <Link href="#" style={{ color: '#64748b', fontSize: '13px' }}>KVKK</Link>
            <Link href="#" style={{ color: '#64748b', fontSize: '13px' }}>Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
