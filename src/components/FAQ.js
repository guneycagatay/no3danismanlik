export default function FAQ() {
  const faqs = [
    {
      question: 'Bu 3.500 TL ne için alınıyor?',
      answer: 'Bu ücret, başvurunun doğru ilerlemesi için yapılan ön analiz ve evrak kontrol hizmetidir. Sürecin başında hataları tespit ederek zaman kaybını önler.'
    },
    {
      question: 'Bu sadece bir görüşme ücreti mi?',
      answer: 'Hayır. Bu bir “konuşma” değil, durum analizi + yönlendirme hizmetidir. Size özel yol haritası ve eksiklerin net listesi çıkarılır.'
    },
    {
      question: 'Bu hizmet bana ne kazandırır?',
      answer: 'Yanlış başvuruların önüne geçersin, eksiklerini net görürsün, süreci hızlandırırsın ve gereksiz zaman/para kaybını azaltırsın.'
    },
    {
      question: 'Sizinle nasıl görüşme sağlayacağım?',
      answer: 'Sistem üzerinden kendi istediğiniz uygun zamana randevu oluşturursunuz.'
    },
    {
      question: 'Bu hizmeti almazsam ne olur?',
      answer: 'Kendi başına ilerleyebilirsin. Ancak birçok kişi yanlış başvuru ve eksik evrak nedeniyle süreci uzatır.'
    },
    {
      question: 'Bu ücret sonraki hizmetlere dahil mi?',
      answer: 'Evet. İstersen devamındaki paketlerde bu tutar mahsup edilir.'
    },
    {
      question: 'Ne kadar sürede dönüş alırım?',
      answer: 'Başvurudan sonra kısa sürede analiz yapılır ve sana özel geri bildirim sağlanır.'
    },
    {
      question: 'Bu hizmet kimler için uygun?',
      answer: 'İş bulmuş ama evraklarını kontrol ettirmek isteyenler, Almanya’ya gitmek isteyen ama nereden başlayacağını bilmeyenler ve süreci doğru ilerletmek isteyenler için.'
    },
    {
      question: 'Bu ücret iş garantisi içerir mi?',
      answer: 'Hayır. Bu hizmet, süreci doğru yönetmeni sağlar; uygunluk durumunuza net şekilde bakılır ve yasal yol haritası çıkarılır ancak sonuç garanti edilmez.'
    },
    {
      question: 'Neden bu hizmeti almalıyım?',
      answer: 'Çünkü bu süreçte en büyük kayıp zaman ve hatadır. Doğru başlangıç, sürecin yarısını çözer.'
    }
  ];

  return (
    <section id="faq" className="faq-wrap">
      <div className="container">
        <div className="section-head">
          <h2>Sıkça Sorulan Sorular</h2>
          <p>
            Almanya süreci, danışmanlık hizmetlerimiz ve randevu sistemiyle ilgili merak ettiğiniz her şey.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <article key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
