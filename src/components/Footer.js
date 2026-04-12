import Link from 'next/link';

export default function Footer() {
  const socials = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37a4 4 0 1 1-7.75 1.26 4 4 0 0 1 7.75-1.26z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.96C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      )
    }
  ];

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
            <Link href="/uygunluk-testi" className="btn btn-primary" style={{ width: '100%', background: '#fff', color: '#0a0f1c' }}>
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
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    color: '#d7e2f0',
                    transition: '0.2s'
                  }}
                >
                  {social.icon}
                </a>
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
              <li><Link href="/mesafeli-satis-sozlesmesi">Hizmet Sözleşmesi</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>İletişim</h4>
            <ul style={{ color: '#94a3b8' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>📍</span>
                <span>Almanya / Türkiye</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span>✉️</span>
                <span>info@no3danismanlik.com</span>
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
            <Link href="/gizlilik-politikasi" style={{ color: '#64748b', fontSize: '13px' }}>Gizlilik Politikası</Link>
            <Link href="/kvkk" style={{ color: '#64748b', fontSize: '13px' }}>KVKK</Link>
            <Link href="/kullanim-kosullari" style={{ color: '#64748b', fontSize: '13px' }}>Kullanım Koşulları</Link>
            <Link href="/mesafeli-satis-sozlesmesi" style={{ color: '#64748b', fontSize: '13px' }}>Hizmet Sözleşmesi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
