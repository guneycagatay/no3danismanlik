export default function WhyNo3() {
  const advantages = [
    {
      title: "Binlerce Euro ödemeden, sistem sahibi olun",
      desc: "Çok küçük bütçelere sadece bilgi değil, sistem sunarız. Rastgele danışmanlık değil, tüm süreci adım adım yöneten bir uygulama ile ilerlersiniz."
    },
    {
      title: "Süreci sizin yerinize düşünürüz",
      desc: "Ne yapacağınızı araştırmak zorunda kalmazsınız. Sistem size her adımı hazır sunar."
    },
    {
      title: "İş fırsatlarına doğrudan erişim",
      desc: "Sizi sadece bilgilendirmeyiz, uygulama üzerinden işverenlerle bağlantı kurma fırsatı sunarız."
    },
    {
      title: "Anlık destek, gerçek iletişim",
      desc: "Sorularınız günlerce beklemez. Süreç boyunca hızlı ve birebir iletişim sağlanır."
    },
    {
      title: "Zaman kaybını ortadan kaldırır",
      desc: "Yanlış başvuru, eksik evrak ve reddedilme riskini minimuma indirir."
    },
    {
      title: "Yeni başlayanlar için sıfırdan sistem",
      desc: "Almanya sürecini hiç bilmeyen biri bile adım adım ilerleyebilir."
    },
    {
      title: "Karmaşık süreci sadeleştirir",
      desc: "Vize, denklik, iş bulma… Hepsi tek sistemde yönetilir."
    }
  ];

  return (
    <section id="neden-no3" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section-head">
          <h2>Neden No3 Danışmanlık?</h2>
          <p>
            Yüksek maliyetlere girmeden önce yolunuzu netleştirin. Bilgi kalabalığını değil, çalışan bir sistemi takip edin.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {advantages.map((item, index) => (
            <div key={index} className="service-card" style={{ background: '#fff' }}>
              <span className="service-number">{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
