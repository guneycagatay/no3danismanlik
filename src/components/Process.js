import Link from 'next/link';

export default function Process() {
  const steps = [
    {
      title: 'Başvuru & Analiz',
      desc: 'Mevcut profilinizin Almanya yasalarına ve iş piyasasına uygunluğunu analiz ediyoruz.',
      tag: 'Adım 01'
    },
    {
      title: 'Yasal Yol Haritası',
      desc: 'Almanya merkezli ekibimizle size özel, şeffaf ve güvenli bir süreç planı oluşturuyoruz.',
      tag: 'Adım 02'
    },
    {
      title: 'Süreç Yönetimi',
      desc: 'Evrak hazırlığından vizeye, iş bulmadan yerleşime kadar her adımda yanınızdayız.',
      tag: 'Adım 03'
    }
  ];

  return (
    <section className="process-section" style={{ background: '#fff', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span className="eyebrow" style={{ margin: '0 auto' }}>Süreç Nasıl İlerliyor?</span>
          <h2>3 Adımda Almanya Yolculuğunuz</h2>
          <p style={{ margin: '0 auto' }}>
            Boş vaatler değil, profesyonel bir sistemle sürecinizi yönetiyoruz.
          </p>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {steps.map((step, index) => (
            <div key={index} className="process-card" style={{ position: 'relative', padding: '40px', background: 'var(--bg)', borderRadius: '24px', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>{step.tag}</span>
              <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{step.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '60px', textAlign: 'center', background: 'var(--primary)', color: '#fff', padding: '32px', borderRadius: '24px' }}>
          <p style={{ marginBottom: '16px', fontWeight: '500' }}>
            "Disiplinli olmayan ve süreci ciddiye almayan kişilerle çalışmıyoruz."
          </p>
          <Link href="/uygunluk-testi" className="btn btn-secondary">Ücretsiz Uygunluk Analizi Başlat</Link>
        </div>
      </div>
    </section>
  );
}
