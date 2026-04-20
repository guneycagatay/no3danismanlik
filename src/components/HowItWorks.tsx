export default function HowItWorks() {
    return (
        <section id="nasil-calisir" className="py-12 sm:py-20 lg:py-24">
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    SİSTEM NASIL İŞLER?
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Adım Adım Almanya’da İş Bulma Süreci</h2>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16 relative">
                {[
                    { 
                        title: "Hesap Oluştur", 
                        desc: "Sisteme saniyeler içinde kayıt ol ve ilk adımı at.",
                        step: "01" 
                    },
                    { 
                        title: "Profilini Doldur", 
                        desc: "Bilgilerini gir, sistem seni doğru ilanlarla eşleştirir.",
                        step: "02" 
                    },
                    { 
                        title: "Başvuru Yap", 
                        desc: "Kriterlerine en uygun ilanlara doğrudan başvur.",
                        step: "03" 
                    },
                    { 
                        title: "Süreci Yönet", 
                        desc: "Görüşmelerini ve başvurularını tek elden takip et.",
                        step: "04" 
                    },
                ].map((item, i) => (
                    <div key={i} className="relative group">
                        <div className="glass stroke-effect rounded-[2.5rem] p-10 relative group hover:bg-white/5 transition-all duration-500 h-full">
                            <div className="text-6xl font-black text-gold/5 absolute top-6 right-10 group-hover:text-gold/10 transition-colors">
                                {item.step}
                            </div>
                            <div className="w-16 h-16 rounded-3xl bg-gold/10 flex items-center justify-center mb-10 transition-transform group-hover:scale-110 duration-500">
                                <div className="w-3 h-3 rounded-full bg-gold animate-pulse"></div>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-lg text-white/50 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Disclaimer / Info Block */}
            <div className="glass stroke-effect border-white/5 rounded-[2.5rem] p-8 sm:p-12 bg-white/[0.02]">
                <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                            <div className="text-2xl sm:text-3xl font-black text-white/90 mb-4 uppercase tracking-tight">Bu Platform Şunları Yapmaz:</div>
                            <ul className="space-y-2">
                                <li className="text-rose-400/80 text-sm font-bold flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                    İş garantisi vermez
                                </li>
                                <li className="text-white/80 font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                                    Ama süreci doğru yapmanı sağlar
                                </li>
                                <li className="text-white/80 font-medium flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                                    Hataları azaltır, süreci hızlandırır
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </section>
    );
}
