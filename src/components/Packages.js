import Link from 'next/link';

export default function Packages() {
  const packages = [
    {
      title: 'Ön Değerlendirme',
      description: 'Mevcut profilinizin Almanya yasalarına uygunluğunun profesyonel analizi.',
      price: '3.500 TL',
      note: 'tek seferlik analiz',
      features: [
        'Detaylı profil analizi',
        'Yasal yol haritası çıkarma',
        'Eksik evrak listesi',
        'Randevu randevusu'
      ],
      for: 'Almanya’ya gitmek isteyen ama nereden başlayacağını bilmeyenler için.',
      featured: false
    },
    {
      title: 'Evrak & Başvuru',
      description: 'İş bulmuş veya süreci başlatmış adaylar için tam evrak kontrolü.',
      price: 'Detaylar için görüşün',
      note: 'başvuru bazlı destek',
      features: [
        'Tüm evrakların kontrolü',
        'Başvuru formlarının doldurulması',
        'Dosya hazırlık desteği',
        'Hata riskini minimize etme'
      ],
      for: 'İş bulmuş ama evraklarını kontrol ettirmek isteyenler için.',
      featured: true,
      tag: 'Profesyonel Destek'
    },
    {
      title: 'Tam Süreç Yönetimi',
      description: 'Sıfırdan yerleşime kadar her adımda profesyonel sistem desteği.',
      price: 'Bireysel Teklif',
      note: 'kapsamlı danışmanlık',
      features: [
        'İşveren bağlantıları',
        'Vize & Denklik yönetimi',
        'Almanya yerleşim desteği',
        '6 Ay anlık destek sistemi'
      ],
      for: 'Süreci profesyonel bir ekiple, güvenle ve hızlı ilerletmek isteyenler için.',
      featured: false
    }
  ];

  return (
    <section id="paketler">
      <div className="container">
        <div className="section-head">
          <h2>Danışmanlık Paketleri</h2>
          <p>
            İhtiyacınız olan destek seviyesine göre farklı çözüm yolları sunuyoruz. 
            <strong> Ön değerlendirme ücreti sonraki paketlerden mahsup edilir.</strong>
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <article key={index} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.tag && <span className="package-tag">{pkg.tag}</span>}
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <div className="price">{pkg.price}</div>
              <div className="price-note">{pkg.note}</div>

              <div style={{ marginBottom: '20px', padding: '12px', background: 'var(--bg)', borderRadius: '12px', fontSize: '13px' }}>
                <strong style={{ display: 'block', marginBottom: '4px', color: 'var(--primary)' }}>Bu paket kimler için uygun?</strong>
                {pkg.for}
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>

              <Link href="/iletisim" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                Paketi Seç
              </Link>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center' }}>
          <div className="contact-box" style={{ background: 'var(--primary)', color: '#fff', border: 'none' }}>
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#fff' }}>Almanya’da iş buldum, evrak kontrolü istiyorum</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Profesyonel analiz ve hatalardan arındırılmış dosya hazırlığı için hemen randevu alın.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '32px', fontWeight: '800' }}>3.500 TL</span>
              <Link href="/iletisim" className="btn btn-secondary">Randevu Al</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
