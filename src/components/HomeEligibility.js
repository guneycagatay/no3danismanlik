import EligibilityTool from '@/components/EligibilityTool';

export default function HomeEligibility() {
  return (
    <section style={{ padding: '90px 0', background: 'linear-gradient(180deg, #f7f4ee 0%, #f1ece2 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="eyebrow">Hızlı Uygunluk Testi</span>
          <h2 style={{ fontSize: 'clamp(34px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.05em', marginBottom: '12px' }}>
            Almanya Yolculuğunuza Başlamadan Önce Durumunuzu Görün
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px', maxWidth: '760px', margin: '0 auto' }}>
            Testi tamamlayın, puanınızı anında görün ve detaylı sonuç raporu için ödeme adımına geçin.
          </p>
        </div>

        <EligibilityTool />
      </div>
    </section>
  );
}
