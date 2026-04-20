"use client";

import { useState } from "react";

interface EligibilityTestProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EligibilityTest({ isOpen, onClose }: EligibilityTestProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
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
        familyStatus: "",
        visaReject: "",
        notes: ""
    });

    if (!isOpen) return null;

    const steps = [
        {
            id: "motivation",
            title: "Hedef",
            question: "Almanya’ya neden gitmek istiyorsunuz?",
            options: ["Çalışmak", "İş aramak (Job Seeker)", "Eğitim / Dil okulu", "Aile birleşimi", "Şirket kurmak", "Diğer"]
        },
        {
            id: "budget",
            title: "Bütçe",
            question: "Göç süreci için bütçeniz hangi aralıkta?",
            options: ["0 – 2.000€", "2.000€ – 5.000€", "5.000€ – 10.000€", "10.000€+"]
        },
        {
            id: "language",
            title: "Dil",
            question: "Almanca dil seviyeniz nedir?",
            options: ["Yok", "A1-A2", "B1-B2", "C1+", "İngilizce ile gitmek istiyorum"]
        },
        {
            id: "education",
            title: "Eğitim",
            question: "Eğitim durumunuz nedir?",
            options: ["Lise", "Ön lisans", "Lisans", "Yüksek lisans", "Meslek eğitimi"]
        },
        {
            id: "timing",
            title: "Zamanlama",
            question: "Ne zaman gitmek istiyorsunuz?",
            options: ["0 – 3 ay", "3 – 6 ay", "6 – 12 ay", "Sadece araştırıyorum"]
        },
        {
            id: "passport",
            title: "Pasaport",
            question: "Pasaport durumunuz nedir?",
            options: ["Var", "Yok", "Süresi doldu"]
        },
        {
            id: "familyStatus",
            title: "Aile",
            question: "Tek mi yoksa aile ile mi gitmek istiyorsunuz?",
            options: ["Tek başıma", "Ailemle / Eşimle"]
        },
        {
            id: "visaReject",
            title: "Vize Geçmişi",
            question: "Daha önce vize reddi aldınız mı?",
            options: ["Hayır, almadım", "Evet, aldım"]
        }
    ];

    const handleOptionSelect = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }));
        setCurrentStep(prev => prev + 1);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.phone || !formData.email) {
            alert("Lütfen iletişim bilgilerinizi eksiksiz doldurun.");
            return;
        }
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setCurrentStep(0);
            onClose();
        }, 4000);
    };

    const progress = ((currentStep) / (steps.length + 2)) * 100;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            <div className="relative glass stroke-effect rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-transparent opacity-50"></div>
                
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 rounded-full glass hover:bg-white/5 transition-all flex items-center justify-center z-20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative z-10 p-8 sm:p-14">
                    {/* Header & Progress */}
                    {!isSubmitted && (
                        <div className="mb-10">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <div className="text-gold text-xs font-black uppercase tracking-[0.2em] mb-2">
                                        SORU {currentStep + 1} / {steps.length + 2}
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                                        Uygunluk Testi
                                    </h2>
                                </div>
                                <div className="text-white/40 font-bold text-sm">{Math.round(progress)}%</div>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-gradient-to-r from-gold-dark to-gold transition-all duration-500 ease-out"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>
                    )}

                    {!isSubmitted ? (
                        <>
                            {/* Rendering Sequential Steps 1-8 */}
                            {currentStep < steps.length && (
                                <div key={currentStep} className="animate-in slide-in-from-right duration-500">
                                    <p className="text-xl sm:text-2xl font-black text-white mb-10 leading-tight">
                                        {steps[currentStep].question}
                                    </p>
                                    <div className="grid gap-3">
                                        {steps[currentStep].options.map((opt) => (
                                            <button 
                                                key={opt}
                                                onClick={() => handleOptionSelect(steps[currentStep].id, opt)}
                                                className="w-full text-left p-5 rounded-2xl glass border-white/5 hover:border-gold/30 hover:bg-white/[0.05] transition-all group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-bold text-white/70 group-hover:text-white transition-colors">{opt}</span>
                                                    <div className="w-5 h-5 rounded-full border-2 border-white/10 group-hover:border-gold flex items-center justify-center transition-colors">
                                                        <div className={`w-2 h-2 rounded-full bg-gold transition-opacity ${formData[steps[currentStep].id as keyof typeof formData] === opt ? 'opacity-100' : 'opacity-0'}`}></div>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Step 9: Profession Input */}
                            {currentStep === steps.length && (
                                <div className="animate-in slide-in-from-right duration-500">
                                    <p className="text-xl sm:text-2xl font-black text-white mb-4 leading-tight">
                                        Mesleğiniz nedir?
                                    </p>
                                    <p className="text-white/40 mb-8 font-medium">Uzmanlık alanınızı kısaca belirtin.</p>
                                    <input 
                                        type="text"
                                        name="profession"
                                        autoFocus
                                        placeholder="Örn: Yazılım Mühendisi, Hemşire..."
                                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 text-white focus:border-gold/50 transition-all outline-none text-lg"
                                        value={formData.profession}
                                        onChange={handleInputChange}
                                    />
                                    <button 
                                        onClick={() => setCurrentStep(prev => prev + 1)}
                                        disabled={!formData.profession}
                                        className="w-full grad-btn py-5 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:opacity-95 transition-all mt-8 disabled:opacity-30"
                                    >
                                        İLERLE
                                    </button>
                                </div>
                            )}

                            {/* Final Step: Contact Info & Notes */}
                            {currentStep === steps.length + 1 && (
                                <div className="animate-in slide-in-from-right duration-500">
                                    <p className="text-xl sm:text-2xl font-black text-white mb-2 leading-tight">
                                        Son Aşama: İletişim Bilgileri
                                    </p>
                                    <p className="text-white/40 mb-8 font-medium">Uzmanlarımızın size ulaşması için bilgilerinizi girin.</p>
                                    
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <input 
                                                type="text" 
                                                name="name"
                                                required
                                                placeholder="Ad Soyad" 
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                required
                                                placeholder="Telefon (+90)" 
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            placeholder="E-posta" 
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        <textarea 
                                            name="notes"
                                            rows={3}
                                            placeholder="Kısaca mevcut durumunuzu ve hedefinizi anlatır mısınız?" 
                                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none resize-none"
                                            value={formData.notes}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        <button 
                                            type="submit"
                                            className="w-full grad-btn py-5 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:opacity-95 transition-all mt-4"
                                        >
                                            BİLGİ FORMUNU GÖNDER VE RANDEVU AL
                                        </button>
                                    </form>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-10 animate-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-black text-white mb-4">Başvurunuz Alındı!</h2>
                            <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto">
                                Teşekkürler {formData.name.split(' ')[0]}. Tüm bilgileriniz uzmanlarımıza iletildi. 
                                En kısa sürede sizinle iletişime geçeceğiz.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
