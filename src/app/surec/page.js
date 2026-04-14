import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Almanya Süreci: 6 Ay Canlı Destek ve Yerel Ağ | No3 Danışmanlık',
  description: 'Almanya sürecinde vize sonrası yol arkadaşlığı, 6 ay canlı destek ve yerel ağ desteği.'
};

export default function SurecPage() {
  return (
    <>
      <Navbar />
      <main className="page-main-tight">
        <Process />
      </main>
      <Footer />
    </>
  );
}
