import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section id="iletisim" className="contact-cta">
      <div className="container">
        <div className="contact-box">
          <div>
            <span className="eyebrow" style={{ marginBottom: '12px' }}>Contact</span>
            <h2>Göçmenlik süreciniz için ilk adımı bugün atın.</h2>
            <p>
              Durumunuzu birlikte değerlendirelim, en uygun başvuru yolunu netleştirelim ve sürecinizi daha güçlü bir planla başlatalım.
            </p>
          </div>

          <Link href="#" className="btn btn-primary">Hemen İletişime Geç</Link>
        </div>
      </div>
    </section>
  );
}
