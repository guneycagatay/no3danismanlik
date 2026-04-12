import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section id="iletisim" className="contact-cta">
      <div className="container">
        <div className="contact-box">
          <div>
            <span className="eyebrow" style={{ marginBottom: '12px' }}>İletişim</span>
            <h2>Göçmenlik süreciniz için ilk adımı bugün atın 🤝</h2>
            <p>
              Durumunuzu birlikte değerlendirelim, en uygun başvuru yolunu netleştirelim ve sürecinizi daha güçlü bir planla başlatalım.
            </p>
          </div>

          <Link href="/hizmetler" className="btn btn-primary">Hemen İletişime Geç</Link>
        </div>
      </div>
    </section>
  );
}
