"use client";

import { useState } from "react";

interface LeadFormProps {
    isOpen: boolean;
    onClose: () => void;
    planTitle?: string;
}

export default function LeadForm({ isOpen, onClose, planTitle }: LeadFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulating form submission
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            onClose();
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative glass stroke-effect rounded-[2.5rem] w-full max-w-xl overflow-hidden shadow-2xl shadow-gold/10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full glass hover:bg-white/5 transition-all flex items-center justify-center z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative z-10 p-8 sm:p-12">
                    {!isSubmitted ? (
                        <>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold-light text-xs font-bold mb-6">
                                ✨ BİLGİ FORMU
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
                                {planTitle ? `${planTitle} İçin Başvur` : "Detaylı Bilgi Alın"}
                            </h2>
                            <p className="text-white/60 mb-10 text-lg">
                                Hemen başvurun, uzman ekibimiz size en kısa sürede dönüş yaparak süreci anlatsın.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input 
                                        type="text" 
                                        required 
                                        placeholder="Ad Soyad" 
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                    />
                                    <input 
                                        type="tel" 
                                        required 
                                        placeholder="Telefon Numarası" 
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                    />
                                </div>
                                <input 
                                    type="email" 
                                    required 
                                    placeholder="E-posta Adresi" 
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                />
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <input 
                                        type="text" 
                                        placeholder="Mevcut Uzmanlık" 
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                    />
                                    <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white/50 focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                                        <option value="">Hedeflediğiniz Alan</option>
                                        <option value="saglik">Sağlık</option>
                                        <option value="teknik">Mühendislik / Teknik</option>
                                        <option value="bilisim">Bilişim / Yazılım</option>
                                        <option value="diger">Diğer</option>
                                    </select>
                                </div>
                                <textarea 
                                    rows={3} 
                                    placeholder="Mesajınız (Opsiyonel)" 
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-gold/50 transition-colors"
                                ></textarea>
                                
                                <button type="submit" className="w-full grad-btn py-5 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:opacity-95 transition-all mt-4">
                                    FORMU GÖNDER
                                </button>
                            </form>
                        </>
                    ) : (
                        <div className="py-20 text-center animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-black text-white mb-4">Başvurunuz Alındı!</h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                Bilgileriniz sistemimize kaydedildi. Uzman ekibimiz 24 saat içinde sizinle iletişime geçecektir.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
