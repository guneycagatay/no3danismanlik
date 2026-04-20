"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import WhySystem from "@/components/WhySystem";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import LeadFunnel from "@/components/LeadFunnel";
import AppointmentModal from "@/components/AppointmentModal";
import EligibilityModal from "@/components/EligibilityModal";

export default function Home() {
    const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
    const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);

    const openAppointment = () => {
        setIsEligibilityOpen(false);
        setIsAppointmentOpen(true);
    };
    const closeAppointment = () => setIsAppointmentOpen(false);

    const openEligibility = () => setIsEligibilityOpen(true);
    const closeEligibility = () => setIsEligibilityOpen(false);

    // Function to scroll to the funnel section
    const scrollToFunnel = () => {
        const element = document.getElementById("iletisim");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Navbar />
            
            {/* Calendar Appointment Modal - For direct booking */}
            <AppointmentModal 
                isOpen={isAppointmentOpen} 
                onClose={closeAppointment} 
            />

            {/* 2-Stage Eligibility Modal - For testing/filtering */}
            <EligibilityModal 
                isOpen={isEligibilityOpen}
                onClose={closeEligibility}
                onOpenAppointment={openAppointment}
            />
            
            <main id="top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Hero buttons: Randevu opens appointment modal, Test opens eligibility modal */}
                <Hero onOpenForm={openAppointment} onOpenTest={openEligibility} />
                
                <WhySystem />
                <AboutSection />
                <ProblemSolution />
                <HowItWorks />
                
                {/* Pricing buttons scroll to the inline funnel (which is also the 3-step appointment flow for simplicity) */}
                <Pricing onOpenForm={scrollToFunnel} />
                
                <FAQ />

                {/* Contact Section - Embedded Funnel */}
                <section id="iletisim" className="py-12 sm:py-24">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="glass stroke-effect rounded-[3rem] overflow-hidden">
                            <div className="grid lg:grid-cols-5">
                                {/* Info Side */}
                                <div className="lg:col-span-2 p-8 sm:p-12 bg-gold/5 border-b lg:border-b-0 lg:border-r border-white/5 flex flex-col justify-center">
                                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-6">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                                        Hızlı Randevu Kaydı
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                                        Ücretsiz Ön Randevu Oluştur
                                    </h2>
                                    <p className="text-white/60 text-lg leading-relaxed">
                                        Almanya'da iş bulma süreci, vize işlemleri ve danışmanlık talepleriniz için formu doldurun. 
                                        Uzman ekibimiz size en kısa sürede dönüş yapacaktır.
                                    </p>
                                </div>
                                
                                {/* Form Side */}
                                <div className="lg:col-span-3 p-8 sm:p-12">
                                    <LeadFunnel />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="pb-10">
                    <div className="divider my-8"></div>
                    <div className="flex flex-col sm:row items-center justify-between gap-4 text-[11px] font-medium uppercase tracking-widest text-white/30">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            © {new Date().getFullYear()} No3 Danışmanlık • Tüm hakları saklıdır
                            <span className="hidden sm:inline opacity-30">|</span>
                            <a href="https://www.tanitimx.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                                <strong>TanıtımX Dijital</strong>
                            </a>
                        </div>
                        <div className="flex gap-6">
                            <Link href="#top" className="hover:text-gold transition-colors">YUKARI DÖN</Link>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    );
}
