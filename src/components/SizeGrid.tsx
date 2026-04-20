export default function SizeGrid() {
    const sizes = [
        { title: "2x2 Stand Çadırı", desc: "Kompakt alanlarda pratik kullanım sağlar.", usage: "Karşılama / küçük tanıtım noktası" },
        { title: "3x3 Stand Çadırı", desc: "Fuar ve tanıtım alanlarında dengeli bir kullanım sunar.", usage: "Fuar standı / saha tanıtımı" },
        { title: "3x4,5 Stand Çadırı", desc: "Orta ölçekli kullanımda daha geniş alan ihtiyacını karşılar.", usage: "Sergileme / promosyon" },
        { title: "3x6 Stand Çadırı", desc: "Kurumsal etkinliklerde geniş kullanım alanı sağlar.", usage: "Lansman / geniş tanıtım alanı" },
        { title: "4x4 Stand Çadırı", desc: "Ferah alan ihtiyacı olan organizasyonlar için uygundur.", usage: "Organizasyon / saha etkinliği" },
        { title: "Bilgilendirme", desc: "Özel ölçü, yan kapama ve baskı seçenekleri için iletişime geçebilirsiniz.", usage: null },
    ];

    return (
        <section id="boyutlar" className="py-12 sm:py-16">
            <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Stand Çadırı Boyutları</h2>
                <p className="mt-2 text-white/65 max-w-2xl">
                    Aşağıdaki ölçüler stand kullanımı için yaygın olarak tercih edilen seçeneklerdir.
                </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sizes.map((item, i) => (
                    <div key={i} className="glass stroke-effect rounded-3xl p-6">
                        <div className="text-sm font-semibold text-gold-light">{item.title}</div>
                        <p className="mt-2 text-sm text-white/65">{item.desc}</p>
                        {item.usage && (
                            <>
                                <div className="divider my-4"></div>
                                <div className="text-sm text-white/70">
                                    <strong>Uygun kullanım:</strong> {item.usage}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
