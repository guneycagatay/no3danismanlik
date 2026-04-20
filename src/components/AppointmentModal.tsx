"use client";

import AppointmentFunnel from "./AppointmentFunnel";

interface AppointmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function AppointmentModal({ isOpen, onClose }: AppointmentModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
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
                    <div className="mb-10 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 text-gold-light text-xs font-bold mb-4">
                            📅 RANDEVU TALEBİ
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">Randevu Talep Et</h2>
                        <p className="text-white/40 text-sm font-medium">Seçtiğiniz tarihteki uygunluk durumu için sizinle iletişime geçilecektir.</p>
                    </div>

                    <AppointmentFunnel onSuccess={onClose} />
                </div>
            </div>
        </div>
    );
}
