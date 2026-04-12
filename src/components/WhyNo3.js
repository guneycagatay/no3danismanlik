'use client';

export default function WhyNo3() {
  const advantages = [
    {
      title: 'Binlerce Euro Ödemeden Sistem Sahibi Olun',
      desc: 'Çok küçük bütçelerle sadece bilgi değil, sistem sunarız. Rastgele danışmanlık değil, tüm süreci adım adım yöneten bir uygulama ile ilerlersiniz.'
    },
    {
      title: 'Süreci Sizin Yerinize Düşünürüz',
      desc: 'Ne yapacağınızı araştırmak zorunda kalmazsınız. Sistem size her adımı hazır sunar.'
    },
    {
      title: 'İş Fırsatlarına Doğrudan Erişim',
      desc: 'Sizi sadece bilgilendirmeyiz, uygulama üzerinden işverenlerle bağlantı kurma fırsatı sunarız.'
    },
    {
      title: 'Anlık Destek, Gerçek İletişim',
      desc: 'Sorularınız günlerce beklemez. Süreç boyunca hızlı ve birebir iletişim sağlanır.'
    },
    {
      title: 'Zaman Kaybını Ortadan Kaldırır',
      desc: 'Yanlış başvuru, eksik evrak ve reddedilme riskini minimuma indirir.'
    },
    {
      title: 'Yeni Başlayanlar İçin Sıfırdan Sistem',
      desc: 'Almanya sürecini hiç bilmeyen biri bile adım adım ilerleyebilir.'
    },
    {
      title: 'Karmaşık Süreci Sadeleştirir',
      desc: 'Vize, denklik, iş bulma... Hepsi tek sistemde yönetilir.'
    }
  ];

  return (
    <section id="neden-no3" className="why-shell">
      <div className="container">
        <div className="why-head">
          <span className="eyebrow">Neden No3?</span>
          <h2>Neden No3 Danışmanlık?</h2>
          <p>
            Yüksek maliyetlere girmeden önce yolunuzu netleştirin. Bilgi kalabalığını değil, çalışan bir sistemi takip edin.
          </p>
        </div>

        <div className="why-grid">
          {advantages.map((item, index) => (
            <article key={index} className="why-card">
              <span className="why-number">{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-shell {
          background:
            radial-gradient(circle at 0% 0%, rgba(163, 194, 223, 0.24), transparent 40%),
            radial-gradient(circle at 100% 100%, rgba(186, 207, 231, 0.18), transparent 42%),
            linear-gradient(180deg, #f1ece2 0%, #f7f4ee 100%);
          border-top: 1px solid rgba(31, 47, 61, 0.08);
        }

        .why-head {
          text-align: center;
          max-width: 900px;
          margin: 0 auto 28px;
        }

        .why-head h2 {
          font-size: clamp(36px, 5vw, 62px);
          line-height: 1.02;
          letter-spacing: -0.05em;
          margin-bottom: 10px;
          color: #122438;
        }

        .why-head p {
          font-size: 18px;
          line-height: 1.58;
          color: #516476;
          margin: 0 auto;
          max-width: 780px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .why-card {
          border-radius: 24px;
          border: 1px solid rgba(31, 47, 61, 0.11);
          background: rgba(255, 255, 255, 0.74);
          backdrop-filter: blur(12px);
          box-shadow: 0 14px 34px rgba(15, 30, 44, 0.1);
          padding: 24px;
        }

        .why-number {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: inline-grid;
          place-items: center;
          margin-bottom: 12px;
          background: #e9f1fa;
          color: #1c4f83;
          font-size: 16px;
          font-weight: 800;
        }

        .why-card h3 {
          font-size: 26px;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 9px;
          color: #16283c;
        }

        .why-card p {
          font-size: 16px;
          line-height: 1.55;
          color: #56697c;
          margin: 0;
        }

        @media (max-width: 980px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
