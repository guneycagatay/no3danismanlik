export default function WhySystem() {
    return (
        <section id="neden-bu-sistem" className="py-12 sm:py-20 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                            HAKKIMIZDA
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                            Neden Bu Sistem?
                        </h2>
                        <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-xl">
                            Bu platform, Almanya’da iş arama sürecini daha net ve yönetilebilir hale getirmek için oluşturuldu.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="text-sm font-bold text-gold-light uppercase tracking-[0.2em]">Amacımız:</div>
                        <div className="grid gap-4">
                            {[
                                "Süreci sadeleştirmek",
                                "Doğru kaynakları sunmak",
                                "Kullanıcının kendi sürecini yönetmesini sağlama"
                            ].map((goal, i) => (
                                <div key={i} className="glass stroke-effect rounded-2xl p-5 flex items-center gap-4 group hover:bg-white/5 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-base sm:text-lg font-bold text-white/90">{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute -inset-10 blur-3xl opacity-20 bg-gold/30 rounded-full"></div>
                    <div className="relative glass stroke-effect rounded-[3rem] p-8 sm:p-12 text-center aspect-square flex flex-col items-center justify-center overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
                        <div className="text-8xl sm:text-9xl font-black text-gold/20 mb-4 select-none">NO3</div>
                        <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 relative tracking-tight">Sistemin Gücü</h3>
                        <p className="text-base sm:text-lg text-white/70 max-w-md relative leading-relaxed">
                            Karmaşık bürokrasi ve belirsizlikleri ortadan kaldırarak, 
                            Almanya kariyer yolculuğunuzu tek bir sistem üzerinden 
                            verimli bir şekilde yönetmenizi sağlıyoruz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
