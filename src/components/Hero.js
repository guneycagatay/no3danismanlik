import Link from 'next/link';

export default function Hero() {
  const badges = [
    '6 Ay Destek',
    'Şeffaf Sistem',
    'Türkiye + Almanya Deneyimi'
  ];

  return (
    <section className="hero">
      <div className="hero-bg"></div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow" style={{ color: 'var(--primary)' }}>Almanya Kariyer Yol Haritası</span>
          <h1>Almanya’ya Gitmek İsteyenler İçin Net Yol Haritası</h1>
          <p>
            Evrak hazırlığından iş bulmaya, yerleşim sürecinden yasal denklik yönetimine kadar her adımı profesyonel sistemimizle birlikte yönetiyoruz.
          </p>

          <div className="hero-actions" style={{ display: 'flex' }}>
            <Link href="/uygunluk-testi" className="btn btn-primary" style={{ padding: '16px 36px' }}>Ücretsiz Ön Analiz Al</Link>
          </div>

          <div className="hero-trust">
            {badges.map((badge, index) => (
              <span key={index} style={{ background: '#fff', border: '1px solid var(--line)', padding: '8px 16px', borderRadius: '12px', fontSize: '13px' }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-top">
            <h3>Nasıl Çalışıyoruz?</h3>
            <span className="mini-badge">Süreç Analizi</span>
          </div>
          <p>
            Sürecin her adımında yanınızda olarak işleri hızlandırıyor ve yolu birlikte netleştiriyoruz.
          </p>

          <ul className="hero-list">
            <li>Başvuru & Ön Değerlendirme</li>
            <li>Almanya merkezden Uygunluk Analizi</li>
            <li>Süreç Yönetimi</li>
          </ul>

          <div style={{ background: 'var(--bg)', padding: '16px', borderRadius: '16px', marginBottom: '24px', borderLeft: '4px solid var(--primary)' }}>
            <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: 'var(--text)', lineHeight: '1.5' }}>
              "Bu sistem herkes için değil. Disiplinli olmayan, süreci ciddiye almayan kişilerle çalışmıyoruz."
            </p>
          </div>

          <Link href="/iletisim" className="btn btn-primary" style={{ width: '100%' }}>
            Randevu Oluştur
          </Link>
        </aside>
      </div>
    </section>
  );
}
