'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { PACKAGE_CATALOG } from '@/lib/packageCatalog';

export default function SatinAlClient({ selectedPackage }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const minDate = useMemo(() => new Date().toISOString().split('T')[0], []);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(event.currentTarget);
    const payload = {
      packageId: selectedPackage.id,
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      appointmentDate: formData.get('appointmentDate'),
      appointmentTime: formData.get('appointmentTime'),
      note: formData.get('note')
    };

    try {
      const response = await fetch('/api/checkout/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      if (!response.ok || !result?.redirectUrl) {
        throw new Error(result?.error || 'checkout_failed');
      }

      window.location.href = result.redirectUrl;
    } catch {
      setError('İşlem sırasında bir sorun oluştu. Lütfen tekrar deneyin.');
      setLoading(false);
    }
  }

  return (
    <section>
      <div className="container">
        <div style={{ maxWidth: '980px', margin: '0 auto' }}>
          <span className="eyebrow">Satın Alma Adımı</span>
          <h1 style={{ fontSize: 'clamp(36px, 4.6vw, 58px)', lineHeight: 1.02, letterSpacing: '-0.05em', marginBottom: '12px' }}>
            İletişim Bilgilerinizi Girin, Ödemeye Geçin
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '17px', marginBottom: '22px' }}>
            Önce iletişim ve randevu bilgilerinizi alın, ardından doğrudan Shopier ödeme adımına geçin.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px' }}>
            <article style={cardStyle}>
              <h2 style={{ fontSize: '28px', letterSpacing: '-0.03em', marginBottom: '8px' }}>{selectedPackage.title}</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>{selectedPackage.description}</p>
              <p style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '12px' }}>{selectedPackage.price}</p>
              <ul style={{ display: 'grid', gap: '8px' }}>
                {selectedPackage.features.map((feature) => (
                  <li key={feature} style={{ listStyle: 'none', color: 'var(--text)', fontSize: '15px' }}>
                    • {feature}
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: '14px', fontSize: '14px', color: 'var(--muted)' }}>
                Seçilen paket: <strong>{selectedPackage.title}</strong>
              </p>
              <Link href="/hizmetler#paketler" className="btn btn-secondary" style={{ marginTop: '10px' }}>
                Paketi Değiştir
              </Link>
            </article>

            <article style={cardStyle}>
              <h2 style={{ fontSize: '28px', letterSpacing: '-0.03em', marginBottom: '8px' }}>İletişim ve Randevu Bilgileri</h2>
              <p style={{ color: 'var(--muted)', marginBottom: '14px' }}>
                Bu bilgiler size en doğru şekilde ulaşabilmemiz için gereklidir.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '10px' }}>
                <input name="fullName" required placeholder="Ad Soyad" style={inputStyle} />
                <input name="email" required type="email" placeholder="E-posta" style={inputStyle} />
                <input name="phone" required type="tel" placeholder="Telefon" style={inputStyle} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <input name="appointmentDate" required type="date" min={minDate} style={inputStyle} />
                  <input name="appointmentTime" required type="time" style={inputStyle} />
                </div>
                <p style={{ margin: '-2px 0 2px', fontSize: '12px', lineHeight: 1.5, color: 'var(--muted)' }}>
                  Net randevu tarih ve saati için sizinle iletişime geçilecektir.
                </p>

                <textarea name="note" rows={3} placeholder="Eklemek istediğiniz not (opsiyonel)" style={{ ...inputStyle, paddingTop: '10px', resize: 'vertical' }} />

                <button type="submit" className="btn btn-primary" style={{ minHeight: '56px', fontWeight: 800 }} disabled={loading}>
                  {loading ? 'Yönlendiriliyor...' : 'Shopier Ödeme Adımına Geç'}
                </button>
              </form>

              {error && (
                <p style={{ marginTop: '10px', color: '#9b2c2c', fontWeight: 700, fontSize: '14px' }}>{error}</p>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

const cardStyle = {
  borderRadius: '24px',
  border: '1px solid rgba(31, 47, 61, 0.12)',
  background: 'rgba(255,255,255,0.82)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 16px 36px rgba(15, 30, 44, 0.1)',
  padding: '26px'
};

const inputStyle = {
  minHeight: '50px',
  borderRadius: '12px',
  border: '1px solid rgba(31, 47, 61, 0.16)',
  padding: '0 14px',
  fontSize: '15px',
  outline: 'none'
};
