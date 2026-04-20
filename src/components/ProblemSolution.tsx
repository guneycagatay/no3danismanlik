export default function ProblemSolution() {
    return (
        <section id="analiz" className="py-12 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Problem Box */}
                <div className="glass stroke-effect rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden group border-rose-500/10">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-rose-500/10 blur-3xl rounded-full"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold mb-6">
                            ❌ PROBLEM
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
                            Almanya’da iş bulmaya çalışanların çoğu:
                        </h2>
                        
                        <ul className="space-y-6">
                            {[
                                "Nereden başlayacağını bilmiyor",
                                "Yanlış ilanlara başvuruyor",
                                "Geri dönüş alamıyor",
                                "Aylarca zaman kaybediyor"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-white/60">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose-500/50 shrink-0"></div>
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Solution Box */}
                <div className="glass stroke-effect rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden group border-gold/20 bg-gradient-to-br from-gold/5 to-transparent">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gold/20 blur-3xl rounded-full transition-transform group-hover:scale-150 duration-700"></div>
                    
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold-light text-xs font-bold mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            ÇÖZÜM
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">
                            Bu uygulama sana hazır bir sistem sunar:
                        </h2>
                        
                        <ul className="space-y-6">
                            {[
                                "Almanya’ya uygun iş ilanları",
                                "Başvuru sürecini adım adım rehber",
                                "İş görüşmesinde neler yapılmalı",
                                "Olası problemlerin çözümleri"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-white/90">
                                    <div className="mt-1 w-6 h-6 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-lg font-bold">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
