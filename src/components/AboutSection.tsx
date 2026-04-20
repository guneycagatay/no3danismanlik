export default function AboutSection() {
    return (
        <section id="neler-yapiyoruz" className="py-12 sm:py-20 lg:py-24">
            <div className="glass stroke-effect rounded-[3rem] p-8 sm:p-16 relative overflow-hidden bg-white/[0.01]">
                {/* Decorative background glow */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 to-transparent"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
                
                <div className="relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full grad-chip text-xs text-white/75 mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                        BİZ NE YAPIYORUZ?
                    </div>
                    
                    <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-8">
                        Biz Ne Yapıyoruz
                    </h2>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gold-light mb-12 leading-relaxed max-w-2xl">
                        Bürokratik süreçler dikkat, özen ve tecrübe ister.
                    </h3>
                    
                    <div className="space-y-8 text-lg sm:text-xl text-white/70 leading-relaxed max-w-3xl">
                        <p>
                            No3 Danışmanlık olarak, yeni yaşamınıza başlamadan önce karşılaşacağınız 
                            bürokratik süreçler hakkında sizi bilgilendiriyor, tüm adımları anlaşılır 
                            ve aşamalı şekilde paylaşıyoruz.
                        </p>
                        
                        <p>
                            Uygunluk durumunuzu birlikte değerlendiriyor, evraklarınızı kontrol ediyor 
                            ve hangi başvuru türünün sizin için daha doğru olduğunu birlikte belirliyoruz. 
                            Ardından süreci, size özel şekilde net ve anlaşılır biçimde aktarıyoruz.
                        </p>

                        <div className="divider opacity-10"></div>

                        <p className="font-bold text-white/90">
                            Biz sizin adınıza iş bulma hizmeti sunmayız ve başvurularınızı doğrudan 
                            gerçekleştirmeyiz. Ancak hangi adımları nasıl atmanız gerektiği, 
                            bu adımların olası sonuçları ve sürecin nasıl ilerleyeceği konusunda 
                            size doğru ve tecrübeye dayalı bir yol gösteririz.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
