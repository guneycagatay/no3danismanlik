"use client";

interface HeroProps {
    onOpenForm: (title?: string) => void;
    onOpenTest: () => void;
}

export default function Hero({ onOpenForm, onOpenTest }: HeroProps) {
    return (
        <section className="pt-14 sm:pt-20 pb-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Şeffaf, Sistemli & Net
                    </div>

                    <h1 className="mt-5 text-5xl sm:text-7xl font-black tracking-tighter leading-tight text-white">
                        Almanya’da İş Bulmak Artık{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-dark via-gold-light to-gold">
                            Daha Net ve Sistemli
                        </span>
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed font-medium">
                        Türkiye’den başvur, doğru ilanlara ulaş ve süreci kendi başına yönet.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <button 
                            onClick={() => onOpenForm("Ücretsiz Danışmanlık Randevusu")}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl grad-btn font-bold shadow-xl shadow-gold/20 hover:opacity-95 transition-all text-sm sm:text-base"
                        >
                            Randevu Al
                        </button>
                        <button 
                            onClick={onOpenTest}
                            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl glass font-bold hover:bg-white/5 transition-all text-sm sm:text-base border-white/10 text-white"
                        >
                            Uygunluk Testi
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-2 blur-2xl opacity-50 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(198,161,91,.22),transparent_60%),radial-gradient(600px_300px_at_80%_30%,rgba(226,194,122,.16),transparent_60%)]">
                    </div>

                    <div className="relative glass stroke-effect rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square">
                        <img
                            src="/img/hero-germany.jpg"
                            alt="No3 Danışmanlık Almanya Uygulaması"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
