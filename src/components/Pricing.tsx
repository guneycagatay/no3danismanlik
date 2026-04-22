"use client";

interface PricingProps {
    onOpenForm: (plan?: string) => void;
}

export default function Pricing({ onOpenForm }: PricingProps) {
    return (
        <section id="paketler" className="py-12 sm:py-20 lg:py-24">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                    PAKET SEÇENEKLERİ
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-8">Sana Uygun Paketi Seç</h2>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
                    <div className="glass border-rose-500/10 p-6 rounded-2xl text-rose-400/80 text-base font-medium italic">
                        &quot;Kendi başına denersen aylar sürebilir.&quot;
                    </div>
                    <div className="glass border-gold/20 p-6 rounded-2xl text-gold-light text-base font-bold">
                        &quot;Doğru sistemle başlarsan süreci hızlandırırsın.&quot;
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* 6 Months Package */}
                <div className="glass stroke-effect rounded-[2.5rem] p-10 relative group hover:bg-white/5 transition-all duration-500 flex flex-col items-center">
                    <div className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Gümüş Plan</div>
                    <div className="text-5xl font-black text-white mb-2">299 <span className="text-2xl font-bold">EURO</span></div>
                    <div className="text-gold-light font-bold mb-8 italic">6 Aylık Erişim</div>
                    
                    <ul className="space-y-4 mb-10 text-white/60 text-center">
                        <li>• Tüm İş İlanlarına Erişim</li>
                        <li>• Adım Adım Başvuru Rehberi</li>
                        <li>• Profil Optimizasyon Desteği</li>
                        <li>• 6 Ay Boyunca Güncel İlanlar</li>
                    </ul>

                    <button 
                        onClick={() => onOpenForm("Gümüş Plan (6 Aylık)")}
                        className="w-full inline-flex items-center justify-center px-8 py-4 rounded-2xl glass border-white/10 font-bold hover:bg-white/10 transition-all text-white"
                    >
                        Bilgi Al
                    </button>
                </div>

                {/* 1 Year Package */}
                <div className="glass stroke-effect rounded-[2.5rem] p-10 relative group border-gold/30 bg-gradient-to-br from-gold/5 to-transparent flex flex-col items-center overflow-hidden">
                    <div className="absolute top-0 right-0 bg-gold text-black text-[10px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-widest">EN ÇOK TERCİH EDİLEN</div>
                    
                    <div className="text-sm font-bold text-gold-light uppercase tracking-[0.2em] mb-4">Altın Plan</div>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-light to-gold mb-2">449 <span className="text-2xl font-bold">EURO</span></div>
                    <div className="text-white font-bold mb-8 italic text-lg">1 Yıllık Erişim</div>
                    
                    <ul className="space-y-4 mb-10 text-white/90 text-center">
                        <li className="font-bold">• 12 Ay Kesintisiz Destek</li>
                        <li>• Tüm İş İlanlarına Erişim</li>
                        <li>• Öncelikli Başvuru Rehberliği</li>
                        <li>• Mülakat Hazırlık Desteği</li>
                        <li>• Evrak & Vize Süreç Rehberi</li>
                    </ul>

                    <button 
                        onClick={() => onOpenForm("Altın Plan (1 Yıllık)")}
                        className="w-full inline-flex items-center justify-center px-8 py-4 rounded-2xl grad-btn font-bold shadow-xl shadow-gold/20 hover:opacity-95 transition-all"
                    >
                        Hemen Başla
                    </button>
                </div>
            </div>
        </section>
    );
}
