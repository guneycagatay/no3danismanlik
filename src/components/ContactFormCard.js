'use client';

import { useState } from 'react';

export default function ContactFormCard() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.78)',
        border: '1px solid rgba(31, 47, 61, 0.12)',
        borderRadius: '30px',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 20px 46px rgba(15, 30, 44, 0.12)',
        padding: '34px'
      }}
    >
      <h3 style={{ fontSize: 'clamp(28px, 3.6vw, 40px)', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '10px' }}>
        İletişim Formu
      </h3>
      <p style={{ color: 'var(--muted)', marginBottom: '22px' }}>
        Bilgilerinizi bırakın, size en kısa sürede dönüş yapalım.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '12px' }}>
        <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '14px' }}>
          Ad Soyad
          <input required type="text" placeholder="Adınızı yazın" style={inputStyle} />
        </label>

        <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '14px' }}>
          E-posta
          <input required type="email" placeholder="info@ornek.com" style={inputStyle} />
        </label>

        <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '14px' }}>
          Telefon
          <input required type="tel" placeholder="+90 5xx xxx xx xx" style={inputStyle} />
        </label>

        <label style={{ display: 'grid', gap: '6px', fontWeight: 700, fontSize: '14px' }}>
          Mesajınız
          <textarea required rows={4} placeholder="Kısaca nasıl bir destek istediğinizi yazın" style={{ ...inputStyle, paddingTop: '10px', resize: 'vertical' }} />
        </label>

        <button className="btn btn-primary" type="submit" style={{ minHeight: '54px', borderRadius: '14px', marginTop: '4px' }}>
          Gönder
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: '12px', fontSize: '14px', color: '#1f6a41', fontWeight: 700 }}>
          Formunuz alındı. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      )}
    </div>
  );
}

const inputStyle = {
  minHeight: '50px',
  borderRadius: '12px',
  border: '1px solid rgba(31, 47, 61, 0.18)',
  padding: '0 14px',
  fontSize: '15px',
  outline: 'none'
};
