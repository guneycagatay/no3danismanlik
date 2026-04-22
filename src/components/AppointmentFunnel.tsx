"use client";

import { useState, useEffect } from "react";

interface AppointmentFunnelProps {
    onSuccess: () => void;
}

export default function AppointmentFunnel({ onSuccess }: AppointmentFunnelProps) {
    const [step, setStep] = useState<"date" | "time" | "info" | "success">("date");
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", notes: "" });

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Calendar Data
    const today = new Date();
    const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
    const firstDayIndex = new Date(today.getFullYear(), today.getMonth(), 1).getDay();
    const monthName = today.toLocaleString('tr-TR', { month: 'long' }); // Force TR locale for consistency

    const timeSlots = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"];

    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!mounted) return <div className="min-h-[300px] flex items-center justify-center text-white/20">Yükleniyor...</div>;

    const handleDateSelect = (day: number) => {
        setSelectedDate(day);
        setStep("time");
    };

    const handleTimeSelect = (time: string) => {
        setSelectedTime(time);
        setStep("info");
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "appointment",
                    data: {
                        ...formData,
                        appointment_date: `${selectedDate} ${monthName}`,
                        appointment_time: selectedTime
                    }
                }),
            });

            if (response.ok) {
                setStep("success");
            } else {
                alert("Bir hata oluştu, lütfen tekrar deneyin.");
            }
        } catch (error) {
            console.error(error);
            alert("Sistem şu an kullanılamıyor, lütfen sonra tekrar deneyin.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (step === "success") {
        return (
            <div className="text-center py-10 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-black text-white mb-4">Talep Başarılı!</h2>
                <p className="text-white/60 text-lg leading-relaxed max-w-sm mx-auto mb-8">
                    {selectedDate} {monthName} saat {selectedTime} için randevu talebiniz alındı. Sizinle en kısa sürede iletişime geçeceğiz.
                </p>
                <button onClick={() => { setStep("date"); setSelectedDate(null); setSelectedTime(null); onSuccess(); }} className="px-10 py-3 rounded-xl glass text-white font-bold hover:bg-white/5">TAMAM</button>
            </div>
        );
    }

    return (
        <div className="w-full transition-all duration-500">
            {step === "date" && (
                <div className="animate-in slide-in-from-right duration-500">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-white capitalize">{monthName} {today.getFullYear()}</h3>
                        <div className="text-[10px] font-black text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">GÜN SEÇİN</div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2 mb-2 text-center text-[10px] font-black text-white/30 uppercase tracking-widest">
                        {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map(d => <div key={d}>{d}</div>)}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: firstDayIndex === 0 ? 6 : firstDayIndex - 1 }).map((_, i) => <div key={i} className="aspect-square"></div>)}
                        {Array.from({ length: daysInMonth }).map((_, i) => {
                            const day = i + 1;
                            const isPast = day < today.getDate();
                            const dateObj = new Date(today.getFullYear(), today.getMonth(), day);
                            const dayOfWeek = dateObj.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
                            const isAllowed = dayOfWeek === 2 || dayOfWeek === 6;
                            const isDisabled = isPast || !isAllowed;
                            return (
                                <button
                                    key={day} disabled={isDisabled} onClick={() => handleDateSelect(day)}
                                    className={`aspect-square rounded-xl flex flex-col items-center justify-center text-sm font-bold transition-all
                                        ${isDisabled ? 'text-white/10 cursor-not-allowed' : 'hover:bg-gold/20 hover:text-white text-white/80'}
                                        ${selectedDate === day ? 'bg-gold !text-black shadow-lg shadow-gold/20' : ''}
                                    `}
                                >
                                    <span className={isDisabled && !isPast ? 'mt-1' : ''}>{day}</span>
                                    {isDisabled && !isPast && (
                                        <span className="text-[7px] font-black opacity-40 leading-none mt-0.5">DOLU</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}

            {step === "time" && (
                <div className="animate-in slide-in-from-right duration-500">
                    <div className="flex items-center justify-between mb-8">
                         <button onClick={() => setStep("date")} className="text-gold-light text-xs font-bold hover:underline flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                            GERİ
                        </button>
                        <h3 className="text-xl font-bold text-white">Saat Seçiniz</h3>
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                        {timeSlots.map(time => (
                            <button
                                key={time} onClick={() => handleTimeSelect(time)}
                                className={`py-4 rounded-xl glass border-white/5 font-bold text-sm transition-all
                                    ${selectedTime === time ? 'bg-gold text-black border-gold' : 'hover:bg-white/5 text-white/60 hover:text-white'}
                                `}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === "info" && (
                <div className="animate-in slide-in-from-right duration-500">
                    <div className="flex items-center justify-between mb-8">
                         <button onClick={() => setStep("time")} className="text-gold-light text-xs font-bold hover:underline flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" /></svg>
                            GERİ
                        </button>
                        <div className="bg-white/5 px-3 py-1 rounded text-[10px] font-bold text-gold-light uppercase tracking-widest">
                            {selectedDate} {monthName} @ {selectedTime}
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <input 
                                type="text" required placeholder="Ad Soyad" 
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none"
                                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                            />
                            <input 
                                type="tel" required placeholder="Telefon (+90)" 
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none"
                                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                        </div>
                        <input 
                            type="email" required placeholder="E-posta" 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none"
                            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                        <textarea 
                            rows={3} placeholder="Eklemek istediğiniz notlar..." 
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-gold/50 transition-all outline-none resize-none"
                            value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})}
                        ></textarea>
                        <button 
                            type="submit" disabled={isSubmitting}
                            className="w-full grad-btn py-5 rounded-2xl font-black text-lg shadow-xl shadow-gold/20 hover:opacity-95 transition-all mt-4 disabled:opacity-50"
                        >
                            {isSubmitting ? "GÖNDERİLİYOR..." : "RANDEVUYU TAMAMLA"}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
