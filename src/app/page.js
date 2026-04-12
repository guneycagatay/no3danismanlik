import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import WhyNo3 from '@/components/WhyNo3';
import Packages from '@/components/Packages';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <WhyNo3 />
        <Packages />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
