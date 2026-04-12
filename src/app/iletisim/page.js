import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>
        <section>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px' }}>
            <div>
              <span className="eyebrow">İletişim & Randevu</span>
              <h1 style={{ fontSize: 'clamp(40px, 5vw, 64px)', letterSpacing: '-0.05em', lineHeight: '1', marginBottom: '24px' }}>
                Geleceğinizi Birlikte Planlayalım
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--muted)', marginBottom: '40px' }}>
                Almanya yol haritanızı netleştirmek için profesyonel bir ön değerlendirme ile başlayın. Sistemimiz üzerinden uygun olduğunuz saati seçerek randevunuzu oluşturabilirsiniz.
              </p>
              
              <div className="contact-box" style={{ background: '#fff', border: '1px solid var(--line)', padding: '40px', borderRadius: '32px' }}>
                <h3 style={{ marginBottom: '24px' }}>Randevu Oluşturma</h3>
                <p style={{ marginBottom: '32px', color: 'var(--muted)' }}>
                  Aşağıdaki butona tıklayarak takvimimizden size uygun bir zaman dilimi seçebilirsiniz. Randevu sonrası analiz formunuz size iletilecektir.
                </p>
                {/* Placeholder for appointment system */}
                <div style={{ padding: '60px', background: 'var(--bg)', borderRadius: '16px', textAlign: 'center', border: '2px dashed var(--line)' }}>
                  <p style={{ fontWeight: '600', color: 'var(--primary)', marginBottom: '16px' }}>Randevu Takvimi Yükleniyor...</p>
                  <button className="btn btn-primary">Takvimi Yeni Sekmede Aç</button>
                </div>
              </div>
            </div>
            
            <aside>
              <div style={{ background: 'var(--bg-2)', padding: '32px', borderRadius: '24px', position: 'sticky', top: '120px' }}>
                <h4 style={{ marginBottom: '16px' }}>İletişim Bilgileri</h4>
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--primary)', textTransform: 'uppercase' }}>E-posta</strong>
                    <span>hello@no3danismanlik.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--primary)', textTransform: 'uppercase' }}>Ofis</strong>
                    <span>Almanya Merkez Şubesi</span>
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontSize: '13px', color: 'var(--primary)', textTransform: 'uppercase' }}>Çalışma Saatleri</strong>
                    <span>09:00 – 18:00 (Hafta İçi)</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </>
  );
}
