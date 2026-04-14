import Navbar from '@/components/Navbar';
import Packages from '@/components/Packages';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Almanya Danışmanlık Paketleri ve Fiyatlar | No3 Danışmanlık',
  description: 'Ön değerlendirme, evrak ve başvuru, tam süreç yönetimi danışmanlık paketlerini karşılaştırın ve size uygun paketi seçin.'
};

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
