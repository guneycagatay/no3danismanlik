import Navbar from '@/components/Navbar';
import Packages from '@/components/Packages';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function HizmetlerPage() {
  return (
    <>
      <Navbar />
      <main className="page-main-tight">
        <Packages />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
