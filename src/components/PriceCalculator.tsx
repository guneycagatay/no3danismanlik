"use client";

import { useState, useMemo } from "react";

const SIZES = [
    { label: "2x2 Metre", price: 4000 },
    { label: "3x3 Metre", price: 5500 },
    { label: "3x4.5 Metre", price: 7500 },
    { label: "3x6 Metre", price: 9500 },
    { label: "4x4 Metre", price: 8500 },
];

export default function PriceCalculator() {
    const [selectedSize, setSelectedSize] = useState(SIZES[1]); // Default 3x3
    const [wallCount, setWallCount] = useState(0);
    const [isDigitalPrint, setIsDigitalPrint] = useState(false);
    const [isProFrame, setIsProFrame] = useState(false);

    const totalPrice = useMemo(() => {
        let price = selectedSize.price;
        price += wallCount * 850; // Per wall price
        if (isDigitalPrint) price += 2000;
        if (isProFrame) price += 2500;
        return price;
    }, [selectedSize, wallCount, isDigitalPrint, isProFrame]);

    return (
        <section id="hesaplama" className="py-12 sm:py-20">
            <div className="glass stroke-effect rounded-[2.5rem] p-8 sm:p-12">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Hızlı Teklif Aracı
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Etkinlik Çadırı Fiyat Hesaplama</h2>
                    <p className="mt-4 text-white/60">
                        İhtiyacınıza uygun seçenekleri belirleyerek ortalama bir fiyat teklifi oluşturun.
                        Kesin fiyat ve stok bilgisi için lütfen bizimle iletişime geçin.
                        <strong className="block mt-2 text-gold-light">Bu fiyatlar tahmini olarak yayınlamakla birlikte net fiyat talebi için lütfen iletişime geçiniz.</strong>
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Form Side */}
                    <div className="space-y-8">
                        <div>
                            <label className="block text-sm font-semibold text-gold-light mb-4">Çadır Boyutu Seçin</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {SIZES.map((size) => (
                                    <button
                                        key={size.label}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-3 rounded-2xl text-sm font-medium transition-all ${selectedSize.label === size.label
                                            ? "grad-btn shadow-lg shadow-gold/20"
                                            : "glass border-white/10 hover:border-white/20 text-white/70"
                                            }`}
                                    >
                                        {size.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <label className="block text-sm font-semibold text-gold-light mb-4">Yan Paneller ({wallCount} Adet)</label>
                                <input
                                    type="range"
                                    min="0"
                                    max="4"
                                    step="1"
                                    value={wallCount}
                                    onChange={(e) => setWallCount(parseInt(e.target.value))}
                                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                                />
                                <div className="flex justify-between mt-2 text-[10px] text-white/40 font-bold uppercase tracking-wider">
                                    <span>Yok</span>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>Tam Kapalı</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="block text-sm font-semibold text-gold-light mb-4">Ekstralar</label>
                                <div className="space-y-3">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={isDigitalPrint}
                                                onChange={(e) => setIsDigitalPrint(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-10 h-6 glass border-white/10 rounded-full peer peer-checked:bg-gold transition-all"></div>
                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white/40 rounded-full peer-checked:translate-x-4 peer-checked:bg-white transition-all"></div>
                                        </div>
                                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">Dijital Baskı (Logolu)</span>
                                    </label>

                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                checked={isProFrame}
                                                onChange={(e) => setIsProFrame(e.target.checked)}
                                                className="sr-only peer"
                                            />
                                            <div className="w-10 h-6 glass border-white/10 rounded-full peer peer-checked:bg-gold transition-all"></div>
                                            <div className="absolute left-1 top-1 w-4 h-4 bg-white/40 rounded-full peer-checked:translate-x-4 peer-checked:bg-white transition-all"></div>
                                        </div>
                                        <span className="text-sm text-white/70 group-hover:text-white transition-colors">Profesyonel Kalın İskelet</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Result Side */}
                    <div className="lg:sticky lg:top-24">
                        <div className="glass stroke-effect rounded-[2rem] p-8 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent relative overflow-hidden group">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gold/10 blur-3xl rounded-full transition-transform group-hover:scale-150 duration-700"></div>

                            <div className="relative z-10">
                                <div className="text-sm font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Tahmini Tutar</div>
                                <div className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-dark via-gold-light to-gold">
                                    {totalPrice.toLocaleString('tr-TR')} <span className="text-2xl font-bold">TL</span>
                                </div>

                                <div className="divider my-8"></div>

                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/50">Temel Ünite ({selectedSize.label})</span>
                                        <span className="text-white/80">{selectedSize.price.toLocaleString('tr-TR')} TL</span>
                                    </div>
                                    {wallCount > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">{wallCount} Adet Yan Panel</span>
                                            <span className="text-white/80">{(wallCount * 850).toLocaleString('tr-TR')} TL</span>
                                        </div>
                                    )}
                                    {isDigitalPrint && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">Dijital Baskı Uygulaması</span>
                                            <span className="text-white/80">2.000 TL</span>
                                        </div>
                                    )}
                                    {isProFrame && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/50">Pro İskelet Farkı</span>
                                            <span className="text-white/80">2.500 TL</span>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href={`https://api.whatsapp.com/send/?phone=905315969274&text=Merhaba, hesaplama aracınızı kullandım.%0A%0ASeçilen Seçenekler:%0A- Boyut: ${selectedSize.label}%0A- Yan Panel: ${wallCount} Adet%0A- Baskı: ${isDigitalPrint ? 'Dijital Baskılı' : 'Baskısız'}%0A- İskelet: ${isProFrame ? 'Profesyonel Kalın' : 'Standart'}%0A%0AGösterilen Tahmini Tutar: ${totalPrice.toLocaleString('tr-TR')} TL%0A%0ABu seçimler için net fiyat teklifi almak istiyorum. standcadiri.com aracılığıyla iletişime geçtim.`}
                                    target="_blank"
                                    className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl grad-btn font-bold shadow-xl shadow-gold/20 hover:opacity-90 active:scale-95 transition-all"
                                >
                                    Bu Seçim İçin Teklif Al
                                </a>

                                <p className="mt-4 text-[10px] text-center text-white/30 leading-tight">
                                    * Fiyatlar stok durumuna ve güncel döviz kurlarına göre değişiklik gösterebilir. KDV dahil değildir.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
