'use client';

import Link from 'next/link';
import { getPackageList } from '@/lib/packageCatalog';

export default function Packages() {
  const packages = getPackageList();

  return (
    <section id="paketler" className="packages-shell">
      <div className="container">
        <div className="packages-intro">
          <span className="eyebrow">Sunduğumuz Hizmetler</span>
          <h2>Danışmanlık Paketleri</h2>
          <p>
            Süreci Almanya’dan yönetiyoruz. Almanya’daki fırsatlara ulaşmanız için durumunuzu analiz ediyor, sizi doğru işverenlerle buluşturuyoruz.
          </p>
          <p>
            Boş vaatler yerine şeffaf ve sağlam bir süreç yönetimi sunuyoruz. İşverenle devam etmek tamamen sizin kontrolünüzde.
          </p>
          <p>
            Sürecin her adımında yanınızda olarak işleri hızlandırıyor ve yolu birlikte netleştiriyoruz.
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

              <div className="who-for">
                <strong>Bu paket kimler için uygun?</strong>
                {pkg.for}
              </div>

              <ul className="package-features">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex}>{feature}</li>
                ))}
              </ul>

              <Link
                href={`/satin-al?paket=${pkg.id}`}
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', minHeight: '54px' }}
              >
                Görüşme Al
              </Link>
            </article>
          ))}
        </div>

      </div>

      <style jsx>{`
        .packages-shell {
          background:
            radial-gradient(circle at 0% 0%, rgba(164, 194, 224, 0.24), transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(186, 207, 231, 0.2), transparent 46%),
            linear-gradient(180deg, #f7f4ee 0%, #f0ebe1 100%);
          border-top: 1px solid rgba(31, 47, 61, 0.08);
        }

        .packages-intro {
          max-width: 920px;
          margin: 0 auto 34px;
          text-align: center;
        }

        .packages-intro h2 {
          font-size: clamp(36px, 5vw, 62px);
          letter-spacing: -0.05em;
          line-height: 1.02;
          margin-bottom: 14px;
          color: #122235;
        }

        .packages-intro p {
          font-size: 18px;
          line-height: 1.6;
          color: #4f6173;
          margin: 0 auto 10px;
          max-width: 820px;
        }

        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .package-card {
          border-radius: 28px;
          border: 1px solid rgba(31, 47, 61, 0.12);
          background: rgba(255, 255, 255, 0.74);
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 46px rgba(15, 30, 44, 0.12);
          padding: 28px;
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }

        .package-card.featured {
          border-color: rgba(31, 79, 130, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 24px 52px rgba(24, 59, 96, 0.16);
        }

        .package-tag {
          align-self: flex-start;
          display: inline-flex;
          min-height: 30px;
          align-items: center;
          border-radius: 999px;
          padding: 0 12px;
          background: #e8f1fa;
          color: #1c4f83;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .package-card h3 {
          font-size: 30px;
          line-height: 1.04;
          letter-spacing: -0.04em;
          margin-bottom: 9px;
          color: #142438;
        }

        .package-card p {
          font-size: 16px;
          line-height: 1.55;
          color: #55677a;
          margin-bottom: 16px;
        }

        .price {
          font-size: 44px;
          line-height: 1;
          letter-spacing: -0.05em;
          font-weight: 800;
          margin-bottom: 4px;
          color: #102338;
        }

        .price-note {
          font-size: 14px;
          color: #667b91;
          margin-bottom: 14px;
        }

        .who-for {
          margin-bottom: 16px;
          padding: 14px;
          border-radius: 14px;
          border: 1px solid rgba(31, 79, 130, 0.14);
          background: #f8fbff;
          color: #4d6074;
          font-size: 14px;
          line-height: 1.5;
        }

        .who-for strong {
          display: block;
          margin-bottom: 5px;
          color: #1a4b7d;
          font-size: 13px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .package-features {
          display: grid;
          gap: 10px;
          margin-bottom: 20px;
          flex: 1;
        }

        .package-features li {
          list-style: none;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          color: #213548;
          font-size: 15px;
          line-height: 1.5;
        }

        .package-features li::before {
          content: "•";
          color: #2e69a4;
          font-weight: 800;
          margin-top: -1px;
        }

        @media (max-width: 1080px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .packages-intro p {
            font-size: 16px;
          }

          .package-card h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
