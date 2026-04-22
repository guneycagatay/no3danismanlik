"use client";

import { useState } from "react";

interface EligibilityModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenAppointment: () => void;
}

export default function EligibilityModal({ isOpen, onClose, onOpenAppointment }: EligibilityModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        motivation: "",
        budget: "",
        language: "",
        education: "",
        profession: "",
        timing: "",
        passport: "",
        family: "",
        visaReject: "",
        notes: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!isOpen) return null;

    const handleNext = () => setStep(prev => prev + 1);
    const handlePrev = () => setStep(prev => prev - 1);

    const calculateScore = () => {
        let score = 50; // Base score
        if (formData.language !== "Yok") score += 15;
        if (formData.budget.includes("10.000")) score += 20;
        if (formData.budget.includes("5.000")) score += 10;
        if (formData.education === "Lisans" || formData.education === "Yüksek lisans") score += 10;
        if (formData.passport === "Var") score += 5;
        return Math.min(score, 100);
    };

    const handleFinalSubmit = async () => {
        setIsSubmitting(true);
        try {
            await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "eligibility",
                    data: {
                        ...formData,
                        score: `${calculateScore()}%`
                    }
                }),
            });
            setStep(4); // Move to result screen
        } catch (error) {
            console.error(error);
            setStep(4); // Still move to result screen but maybe log error
        } finally {
            setIsSubmitting(false);
        }
    };

    const steps = [
        // Stage 1: Conversion
        {
            title: "Ön Değerlendirme - 1. AŞAMA",
            content: (
                <div className="space-y-4">
                    <div className="grid gap-4">
                        <input 
                            type="text" placeholder="Ad Soyad" defaultValue={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 outline-none"
                        />
                        <input 
                            type="tel" placeholder="Telefon (+90)" defaultValue={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 outline-none"
                        />
                        <input 
                            type="email" placeholder="E-posta" defaultValue={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 outline-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-2">Almanya’ya neden gitmek istiyorsunuz?</label>
                        <div className="grid grid-cols-2 gap-2">
                            {["Çalışmak", "İş aramak", "Eğitim", "Aile birleşimi", "Şirket kurmak", "Diğer"].map(opt => (
                                <button 
                                    key={opt} onClick={() => setFormData({...formData, motivation: opt})}
                                    className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${formData.motivation === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60 hover:text-white'}`}
                                >
                                    {opt}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={handleNext} disabled={!formData.name || !formData.phone || !formData.motivation}
                        className="w-full grad-btn py-5 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:opacity-95 transition-all mt-4 disabled:opacity-30"
                    >
                        Ücretsiz Ön Değerlendirme Al
                    </button>
                </div>
            )
        },
        // Stage 2: Quality Filtering (Part A)
        {
            title: "Filtreleme - 2. AŞAMA",
            content: (
                <div className="space-y-6">
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-white/60">Göç süreci için bütçeniz:</label>
                        <div className="grid grid-cols-2 gap-2">
                            {["0–2.000€", "2.000€–5.000€", "5.000€–10.000€", "10.000€+"].map(opt => (
                                <button key={opt} onClick={() => setFormData({...formData, budget: opt})} className={`py-3 px-4 rounded-xl text-[10px] font-bold border ${formData.budget === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-white/60">Almanca seviyeniz:</label>
                        <div className="grid grid-cols-3 gap-2">
                            {["Yok", "A1-A2", "B1-B2", "C1+", "İngilizce"].map(opt => (
                                <button key={opt} onClick={() => setFormData({...formData, language: opt})} className={`py-3 px-4 rounded-xl text-[10px] font-bold border ${formData.language === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-white/60">Eğitim durumunuz:</label>
                        <div className="grid grid-cols-3 gap-2">
                            {["Lise", "Ön lisans", "Lisans", "Yüksek lisans", "Meslek"].map(opt => (
                                <button key={opt} onClick={() => setFormData({...formData, education: opt})} className={`py-3 px-4 rounded-xl text-[10px] font-bold border ${formData.education === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={handlePrev} className="flex-1 glass py-4 rounded-xl text-xs font-bold text-white/40">Geri</button>
                        <button onClick={handleNext} disabled={!formData.budget || !formData.language} className="flex-[2] grad-btn py-4 rounded-xl text-xs font-bold">Devam Et</button>
                    </div>
                </div>
            )
        },
        // Stage 2: Quality Filtering (Part B)
        {
            title: "Son Detaylar",
            content: (
                <div className="space-y-4">
                    <input 
                        type="text" placeholder="Meslek / uzmanlık alanınız" defaultValue={formData.profession}
                        onChange={(e) => setFormData({...formData, profession: e.target.value})}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 outline-none"
                    />
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-white/60">Ne zaman gitmek istiyorsunuz?</label>
                        <div className="grid grid-cols-2 gap-2">
                            {["0–3 ay", "3–6 ay", "6–12 ay", "Araştırıyorum"].map(opt => (
                                <button key={opt} onClick={() => setFormData({...formData, timing: opt})} className={`py-3 px-4 rounded-xl text-[10px] font-bold border ${formData.timing === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60'}`}>{opt}</button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                            <label className="text-xs font-bold text-white/60">Pasaportunuz var mı?</label>
                            <div className="flex gap-2">
                                {["Var", "Yok"].map(opt => (
                                    <button key={opt} onClick={() => setFormData({...formData, passport: opt})} className={`flex-1 py-3 rounded-xl text-[10px] font-bold border ${formData.passport === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60'}`}>{opt}</button>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/60">Vize reddi aldınız mı?</label>
                            <div className="flex gap-2">
                                {["Evet", "Hayır"].map(opt => (
                                    <button key={opt} onClick={() => setFormData({...formData, visaReject: opt})} className={`flex-1 py-3 rounded-xl text-[10px] font-bold border ${formData.visaReject === opt ? 'bg-gold text-black border-gold' : 'glass border-white/5 text-white/60'}`}>{opt}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                     <textarea 
                        rows={2} placeholder="Kısaca mevcut durumunuzu ve hedefinizi anlatır mısınız?"
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 outline-none resize-none"
                    ></textarea>
                    <div className="flex gap-4">
                        <button onClick={handlePrev} className="flex-1 glass py-4 rounded-xl text-xs font-bold text-white/40">Geri</button>
                        <button 
                            onClick={handleFinalSubmit} disabled={isSubmitting}
                            className="flex-[2] grad-btn py-4 rounded-xl text-xs font-bold shadow-xl shadow-gold/20 disabled:opacity-50"
                        >
                            {isSubmitting ? "HESAPLANIYOR..." : "Sonucu Gör"}
                        </button>
                    </div>
                </div>
            )
        },
        // Result Screen
        {
            title: "Değerlendirme Sonucunuz",
            content: (
                <div className="text-center py-6 animate-in zoom-in duration-500">
                    <div className="relative inline-block mb-8">
                        <svg className="w-32 h-32 transform -rotate-90">
                            <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/5" />
                            <circle cx="64" cy="64" r="58" stroke="currentColor" strokeWidth="8" fill="transparent" 
                                className="text-gold" strokeDasharray={364.4} strokeDashoffset={364.4 - (364.4 * calculateScore()) / 100}
                                strokeLinecap="round" />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl font-black text-white">%{calculateScore()}</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-4">Harika Bir Başlangıç!</h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs mx-auto mb-10">
                        Profiliniz Almanya göçmenlik süreci için oldukça potansiyelli görünüyor. Detayları görüşmek için hemen bir uzman randevusu oluşturabilirsiniz.
                    </p>
                    <div className="flex flex-col gap-3">
                        <button 
                            onClick={() => { onClose(); onOpenAppointment(); }}
                            className="w-full grad-btn py-5 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:scale-[1.02] transition-all"
                        >
                            Şimdi Randevu Al
                        </button>
                        <button onClick={onClose} className="text-white/30 text-xs font-bold hover:text-white transition-colors">Daha Sonra</button>
                    </div>
                </div>
            )
        }
    ];

    const currentData = steps[step - 1] || steps[0];

    return (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative glass stroke-effect rounded-[2.5rem] w-full max-w-xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-50"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full glass hover:bg-white/5 transition-all flex items-center justify-center z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative z-10 p-8 sm:p-12">
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold-light text-[10px] font-black uppercase tracking-widest mb-4">
                            ⭐ UYGUNLUK TESTİ
                        </div>
                        <h2 className="text-2xl font-black text-white">{currentData.title}</h2>
                    </div>

                    <div className="min-h-[400px]">
                        {currentData.content}
                    </div>
                </div>
            </div>
        </div>
    );
}
