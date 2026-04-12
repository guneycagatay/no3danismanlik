export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Oturum başvuruları',
      description: 'İlk başvuru, uzatma veya statü değişikliği süreçlerinde gerekli aşamaların planlanması ve evrak yapısının netleştirilmesi.'
    },
    {
      number: '02',
      title: 'Çalışma izni danışmanlığı',
      description: 'Çalışma izni süreci için gereken temel adımların, başvuru öncesi hazırlığın ve sürece uygun yönlendirmenin sağlanması.'
    },
    {
      number: '03',
      title: 'Aile birleşimi',
      description: 'Aile bireyleri için gereken belgelerin, başvuru sırasının ve hazırlık aşamalarının daha düzenli ilerlemesi için destek.'
    }
  ];

  return (
    <section id="hizmetler" className="services">
      <div className="container">
        <div className="section-head">
          <h2>Danışmanlık alanları</h2>
          <p>
            Her başvuru türü aynı değildir. Bu yüzden süreci standart kalıplarla değil, kişinin hedefi ve mevcut durumuna göre ele alıyoruz.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <article key={index} className="service-card">
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
