"use client";




export default function FAQ() {
    const faqs = [
        { 
            q: "Uygulama kimin için uygun?", 
            a: "Almanya’da çalışmak isteyen ama nereden başlayacağını bilmeyen, süreci hızlandırmak ve doğru adımlarla ilerlemek isteyen herkes için uygundur. Eğer kendi başınıza aylarca uğraşmak yerine hazır bir sistemle ilerlemek istiyorsanız, bu uygulama sizin için." 
        },
        { 
            q: "Uygulamadan ne alıyorum?", 
            a: "Almanya’ya uygun iş ilanları ve başvuru sürecini adım adım anlatan kapsamlı rehberlere erişim sağlıyorsunuz." 
        },
        { 
            q: "Süreci kendim yönetebilir miyim?", 
            a: "Evet. Tüm başvuruları ve görüşmeleri kendin yaparsın. Uygulama sana sadece yol gösterir ve süreci hatasız tamamlaman için rehberlik eder." 
        },
        { 
            q: "İş bulduktan sonra destek alabilir miyim?", 
            a: "Evet. İhtiyacın olursa evrak hazırlama ve resmi süreçler konusunda her zaman destek alabilirsin." 
        },
        { 
            q: "Size nasıl ulaşırım?", 
            a: "Uygulama içinden kolayca mesaj atabilir veya sayfamızdaki WhatsApp ve e-posta iletişim kanallarını kullanabilirsin." 
        },
        { 
            q: "Almanya’ya gittikten sonra destek var mı?", 
            a: "Evet. Oraya gittikten sonra da yaşayabileceğin süreçlerle ilgili danışmanlık almaya devam edebilirsin." 
        },
    ];

    return (
        <section id="sss" className="py-12 sm:py-20 lg:py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    MERAK EDİLENLER
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">Sıkça Sorulan Sorular</h2>
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-5">
                {faqs.map((faq, i) => (
                    <details key={i} className="glass stroke-effect rounded-3xl p-7 group transition-all duration-300 hover:bg-white/[0.02]">
                        <summary className="cursor-pointer font-bold text-lg list-none flex justify-between items-center text-white/90 group-open:text-gold-light transition-colors">
                            {faq.q}
                            <span className="transition-transform duration-300 group-open:rotate-180 text-gold/50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" /></svg>
                            </span>
                        </summary>
                        <div className="mt-4 text-white/65 leading-relaxed text-base border-t border-white/5 pt-4">
                            {faq.a}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
