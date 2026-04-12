export default function Process() {
  const steps = [
    {
      title: 'Vize Sonrası İlk Adımlar',
      desc: 'Vize çıktığında süreç bitmez, yeni başlar. Almanya’ya ayak bastığınız andan itibaren doğru sıra ile ilerlemeniz için yanınızdayız.',
      tag: 'Aşama 01'
    },
    {
      title: '6 Ay Canlı Destek',
      desc: 'Banka hesabı, adres kaydı, kira süreci ve resmi işlemler dahil ilk 6 ay boyunca adım adım destek alırsınız.',
      tag: 'Aşama 02'
    },
    {
      title: 'Yerel Ağ (The Circle)',
      desc: 'Almanya’daki kullanıcılarımızla aynı sistem içinde ilerler, sizden önce gidenlerin deneyimlerinden doğrudan faydalanırsınız.',
      tag: 'Aşama 03'
    }
  ];

  return (
    <section id="surec" className="process-section" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f3eee5 100%)', borderTop: '1px solid var(--line)' }}>
      <div className="container">
        <div className="section-head" style={{ textAlign: 'center', marginBottom: '38px', gridTemplateColumns: '1fr' }}>
          <span className="eyebrow" style={{ margin: '0 auto' }}>Süreç 🧭</span>
          <h2 style={{ maxWidth: '980px', margin: '0 auto', fontSize: 'clamp(34px, 5vw, 62px)' }}>
            Almanya&apos;da Yanınızdayız: &quot;Hoş Geldin&quot; Değil &quot;Yol Arkadaşlığı&quot;
          </h2>
          <p style={{ margin: '0 auto' }}>
            Almanya&apos;ya gelince yalnız değilsin. Bizimle çalıştığınızda, Almanya&apos;ya ayak bastığınız andan itibaren süreçte birlikte ilerleriz.
          </p>
        </div>

        <div className="process-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card"
              style={{
                position: 'relative',
                padding: '30px',
                background: 'rgba(255,255,255,0.74)',
                borderRadius: '24px',
                border: '1px solid rgba(31, 47, 61, 0.12)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 16px 36px rgba(15, 30, 44, 0.1)'
              }}
            >
              <span style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>{step.tag}</span>
              <h3 style={{ fontSize: '28px', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
