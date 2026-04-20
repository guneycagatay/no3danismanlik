"use client";

import { useState } from "react";

export default function GuideSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="rehber" className="py-12 sm:py-16">
            <div className="glass stroke-effect rounded-3xl p-7 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gold/5 blur-3xl rounded-full opacity-60"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        Bilgilendirme Rehberi
                    </div>

                    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                        Stand Çadırı & Gazebo Çardak Nedir?
                    </h2>

                    <div className="mt-6 space-y-5 text-white/70 leading-relaxed text-base sm:text-lg">
                        <p>
                            Açık hava organizasyonlarının profesyonel altyapısını oluşturan etkinlik çadırı sistemleri; fuar, lansman, festival, düğün, spor organizasyonu ve kurumsal tanıtımlar için geçici fakat güçlü bir alan çözümü sunar. Gazebo çardak modelleri ise daha kompakt yapıda, pratik kurulum avantajına sahip gölgelendirme sistemleridir. Stand Çadırı çözümleri ise bu iki kategorinin kesişim noktasında yer alır ve özellikle tanıtım, satış ve marka görünürlüğü odaklı kullanımlarda öne çıkar.
                        </p>
                        <p>
                            Etkinlik çadırı, gazebo çardak ve Stand Çadırı sistemleri doğru ölçü, doğru iskelet yapısı ve doğru kumaş seçimi ile uzun yıllar sorunsuz kullanılabilir. Bu rehberde hem teknik detayları hem de doğru seçim kriterlerini kapsamlı şekilde inceleyeceksiniz.
                        </p>
                    </div>

                    {isOpen && (
                        <div className="mt-10 space-y-12 text-white/70 animate-in fade-in slide-in-from-top-4 duration-700">
                            <div className="divider opacity-20"></div>

                            {/* Section 1 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Etkinlik Çadırı, Gazebo Çardak ve Stand Çadırı Arasındaki Temel Farklar</h3>
                                <p>Etkinlik çadırı daha büyük alanları kapsayan modüler sistemlerdir. Gazebo çardak daha kompakt, katlanabilir yapıdadır. Stand Çadırı ise özellikle marka tanıtımı, satış noktası oluşturma ve geçici stant alanı kurma amacıyla tasarlanır.</p>

                                <div className="mt-6 overflow-x-auto rounded-2xl glass border-white/5">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-white/5 text-gold-light font-bold">
                                            <tr>
                                                <th className="px-4 py-3">Özellik</th>
                                                <th className="px-4 py-3">Etkinlik Çadırı</th>
                                                <th className="px-4 py-3">Gazebo Çardak</th>
                                                <th className="px-4 py-3">Stand Çadırı</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Kurulum Süresi</td>
                                                <td className="px-4 py-3">Orta</td>
                                                <td className="px-4 py-3 text-gold">Çok Hızlı</td>
                                                <td className="px-4 py-3">Hızlı</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Taşınabilirlik</td>
                                                <td className="px-4 py-3">Orta</td>
                                                <td className="px-4 py-3">Yüksek</td>
                                                <td className="px-4 py-3 text-gold">Yüksek</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Marka Baskısı</td>
                                                <td className="px-4 py-3">Geniş Alan</td>
                                                <td className="px-4 py-3">Sınırlı</td>
                                                <td className="px-4 py-3 text-gold">Maksimum Alan</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Kullanım Amacı</td>
                                                <td className="px-4 py-3">Organizasyon</td>
                                                <td className="px-4 py-3">Gölgelik</td>
                                                <td className="px-4 py-3 text-gold">Tanıtım & Satış</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Ölçü Seçenekleri</td>
                                                <td className="px-4 py-3">Büyük</td>
                                                <td className="px-4 py-3">3x3 ağırlıklı</td>
                                                <td className="px-4 py-3 text-gold">3x3 / 4x4</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-sm font-medium text-white/50">Stand Çadırı özellikle kurumsal markalar için mobil showroom etkisi yaratır.</p>
                            </div>

                            {/* Section 2 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Stand Çadırı Neden Profesyonel Tanıtımın Vazgeçilmezidir?</h3>
                                <p>Stand Çadırı sistemleri açık alan pazarlamasında doğrudan temas sağlar. Potansiyel müşteri ile fiziksel etkileşim kurmak isteyen markalar için ideal çözümdür.</p>

                                <h4 className="text-lg font-semibold text-white/80 mt-6 mb-3">Stand Çadırı’nın Sağladığı Avantajlar</h4>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {[
                                        "Hızlı kurulum", "Katlanır makaslı sistem", "Full dijital baskı imkanı",
                                        "Yan panel kapama opsiyonu", "UV dayanımlı branda", "Su geçirmez tavan yapısı",
                                        "Modüler aksesuar uyumu"
                                    ].map((adv, i) => (
                                        <div key={i} className="flex items-center gap-2 glass rounded-xl px-4 py-3 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"></div>
                                            {adv}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm font-medium text-white/50">Stand Çadırı ile marka logosu, slogan ve kampanya mesajları geniş yüzeyde sergilenebilir.</p>
                            </div>

                            {/* Section 3 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Etkinlik Çadırı Kullanım Alanları</h3>
                                <p>Etkinlik çadırı genellikle daha geniş kitle organizasyonlarında tercih edilir.</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {["Festival alanları", "Belediye etkinlikleri", "Spor turnuvaları", "Açık hava düğünleri", "Konser organizasyonları", "Üniversite şenlikleri"].map((item, i) => (
                                        <div key={i} className="glass rounded-xl px-4 py-3 text-xs sm:text-sm text-center">
                                            {item}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm font-medium text-white/50">Bu organizasyonlarda Stand Çadırı çözümleri alt satış noktaları veya kayıt alanı olarak kullanılır.</p>
                            </div>

                            {/* Section 4 */}
                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gold-light">Gazebo Çardak Modelleri ve Stand Çadırı Sistemleri</h3>
                                <p>Gazebo çardak daha bireysel ve küçük ölçekli kullanım için tasarlanmıştır. Stand Çadırı ise daha sağlam profil ve baskı odaklı üretim yapısına sahiptir.</p>

                                <div className="grid lg:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-white/80">Gazebo Çardak Teknik Özellikleri</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Profil:</span> <span className="text-white">30 mm profil</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Kumaş:</span> <span className="text-white">Polyester su geçirmez</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Mekanizma:</span> <span className="text-white">Katlanır makas</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Aksesuar:</span> <span className="text-white">Taşıma çantası</span></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-white/80">Stand Çadırı Teknik Özellikleri</h4>
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Profil:</span> <span className="text-white">40–50 mm güçlendirilmiş</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Branda:</span> <span className="text-white">320 gr PVC kaplamalı</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Özellik:</span> <span className="text-white">Alev geciktirici kumaş</span></li>
                                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Opsiyon:</span> <span className="text-white">Yan panel tam kapama</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-sm font-medium text-white/50 text-center">Stand Çadırı daha yoğun kullanım için tasarlanır.</p>
                            </div>

                            {/* Section 5 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Stand Çadırı Fiyatları Neye Göre Belirlenir?</h3>
                                <p>Stand Çadırı fiyatları şu kriterlere göre değişir:</p>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                                    {["Profil kalınlığı", "Kumaş gramajı", "Baskı türü", "Ölçü seçimi", "Yan panel sayısı", "Aksesuarlar"].map((f, i) => (
                                        <div key={i} className="glass rounded-xl px-4 py-3 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-gold"></div>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 overflow-x-auto rounded-2xl glass border-white/5">
                                    <table className="w-full text-left text-sm">
                                        <thead className="bg-white/5 text-gold-light font-bold">
                                            <tr>
                                                <th className="px-4 py-3">Faktör</th>
                                                <th className="px-4 py-3">Ekonomik Model</th>
                                                <th className="px-4 py-3">Profesyonel Stand Çadırı</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/5">
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Profil</td>
                                                <td className="px-4 py-3">30 mm</td>
                                                <td className="px-4 py-3 text-gold">50 mm</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Kumaş</td>
                                                <td className="px-4 py-3">240 gr</td>
                                                <td className="px-4 py-3 text-gold">320 gr</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Baskı</td>
                                                <td className="px-4 py-3">Tek renk</td>
                                                <td className="px-4 py-3 text-gold">Full dijital</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-3 font-medium">Dayanım</td>
                                                <td className="px-4 py-3">Orta</td>
                                                <td className="px-4 py-3 text-gold">Yüksek</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="mt-4 text-sm italic text-white/60">Uzun vadeli kullanım için profesyonel Stand Çadırı tercih edilmelidir.</p>
                            </div>

                            {/* Section 6 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">3x3 Stand Çadırı ve 3x3 Gazebo Çadır Karşılaştırması</h3>
                                <p>3x3 ölçü en çok tercih edilen boyuttur. Ancak 3x3 Stand Çadırı ile 3x3 gazebo çadır arasında ciddi fark vardır.</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="glass rounded-2xl p-5 border-l-4 border-gold">
                                        <h4 className="font-bold text-white mb-2">3x3 Stand Çadırı Avantajları</h4>
                                        <ul className="text-sm space-y-1 text-white/70">
                                            <li>• Daha kalın profil</li>
                                            <li>• Daha yüksek rüzgar dayanımı</li>
                                            <li>• Marka baskısı için geniş yüzey</li>
                                            <li>• Uzun ömürlü kullanım</li>
                                        </ul>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-white/60 italic">3x3 gazebo çadır ise daha hafif ve taşınabilir yapı sunar.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Section 7 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Bölgesel Talepler: Ankara ve Bursa</h3>
                                <p>Gazebo çadır Ankara ve gazebo çadır Bursa aramaları genellikle lokal organizasyon taleplerinden kaynaklanır. Bu şehirlerde Stand Çadırı sistemleri özellikle seçim çalışmaları, festival alanları ve kurumsal açılışlarda yoğun kullanılır. Bölgesel talep arttıkça dayanıklı Stand Çadırı modelleri önem kazanır.</p>
                            </div>

                            {/* Section 8 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Stand Çadırı Kurulum Süreci</h3>
                                <p>Stand Çadırı kurulumu ortalama <strong>3–7 dakika</strong> sürer.</p>
                                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                    {["İskelet açılır", "Makas sistemi gerilir", "Merkezi kilit sabitlenir", "Ayak ayarlanır", "Branda gerdirilir"].map((step, i) => (
                                        <div key={i} className="glass rounded-xl p-3 text-center text-xs">
                                            <div className="text-gold font-bold mb-1">{i + 1}. Adım</div>
                                            {step}
                                        </div>
                                    ))}
                                </div>
                                <p className="mt-2 text-sm font-medium text-white/50">Doğru kurulum, Stand Çadırı dayanıklılığını artırır.</p>
                            </div>

                            {/* Section 9 */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gold-light">Kumaş ve İskelet Kalitesi</h3>
                                    <div className="space-y-3">
                                        <p className="text-sm text-white/70">Kumaş Seçimi Kritik Noktalar:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {["PVC kaplama", "UV koruma", "Su geçirmezlik", "Alev geciktirme", "Çift dikiş"].map((k, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs">{k}</span>
                                            ))}
                                        </div>
                                        <p className="text-sm italic text-white/50">Profesyonel Stand Çadırı sistemlerinde yüksek gramajlı branda tercih edilmelidir.</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-gold-light">İskelet Yapısı</h3>
                                    <p className="text-sm text-white/70">Güçlendirilmiş çelik veya alüminyum profil:</p>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        {["Elektrostatik boya", "Paslanmaz yüzey", "Çapraz destekli makas", "Güçlü plastik bağlantı"].map((p, i) => (
                                            <div key={i} className="glass px-3 py-2 rounded-lg">• {p}</div>
                                        ))}
                                    </div>
                                    <p className="text-sm italic text-white/50">Zayıf profil, Stand Çadırı performansını düşürür.</p>
                                </div>
                            </div>

                            {/* Section 10 */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Dayanıklılık ve Bakım</h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-white/80">Rüzgar Performansı (Sabitleme)</h4>
                                        <div className="flex flex-wrap gap-2 text-xs">
                                            {["Kum torbası", "Zemin kazığı", "Su ağırlığı", "Çapraz gergi ipi"].map((s, i) => (
                                                <span key={i} className="px-3 py-1 border border-white/10 rounded-lg">{s}</span>
                                            ))}
                                        </div>
                                        <p className="text-xs text-red-400/70 italic">Rüzgarlı havalarda mutlaka sabitleme yapılmalıdır.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-bold text-white/80">Uzun Ömür İçin Bakım</h4>
                                        <ul className="text-sm space-y-1 text-white/70">
                                            <li>• Islakken kapatmama (Kritik!)</li>
                                            <li>• Nemli bezle temizlik</li>
                                            <li>• Mekanizma yağlama</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Final Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gold-light">Ölçü Seçimi Nasıl Yapılmalı?</h3>
                                <p>Şu kriterleri göz önünde bulundurarak seçim yapmalısınız:</p>
                                <div className="flex flex-wrap gap-3">
                                    {["Katılımcı sayısı", "Ürün sergileme alanı", "Masa yerleşimi", "Depolama alanı"].map((o, i) => (
                                        <div key={i} className="glass px-4 py-2 rounded-xl text-sm font-medium">{o}</div>
                                    ))}
                                </div>
                                <p className="mt-4 text-sm italic text-white/60">Küçük etkinlikler için 3x3 Stand Çadırı yeterlidir. Büyük organizasyonlarda etkinlik çadırı tercih edilir.</p>
                            </div>

                            <div className="divider opacity-20"></div>

                            {/* Hide Button at the bottom */}
                            <div className="flex justify-center pt-4">
                                <button
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById('rehber')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="text-white/40 hover:text-gold-light text-sm font-bold uppercase tracking-[0.2em] transition-colors"
                                >
                                    Rehberi Gizle
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="mt-10">
                        {!isOpen ? (
                            <button
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl grad-btn font-bold shadow-xl shadow-gold/20 hover:opacity-95 active:scale-95 transition-all text-sm group"
                            >
                                Rehberin Devamını Oku
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}
