import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SatinAlClient from '@/components/SatinAlClient';
import { PACKAGE_CATALOG } from '@/lib/packageCatalog';

const packageIds = Object.keys(PACKAGE_CATALOG);

export default function SatinAlPage({ searchParams }) {
  const packageId = searchParams?.paket;
  const selectedPackage = PACKAGE_CATALOG[packageId] || PACKAGE_CATALOG[packageIds[0]];

  return (
    <>
      <Navbar />
      <main className="page-main" style={{ background: 'var(--bg)' }}>
        <SatinAlClient selectedPackage={selectedPackage} />
      </main>
      <Footer />
    </>
  );
}
