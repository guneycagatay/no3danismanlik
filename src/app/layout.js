import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'No3 Danışmanlık | Almanya Göçmenlik ve Kariyer Yol Haritası',
  description: 'Almanya’ya gitmek isteyenler için net yol haritası. Evrak, iş ve yerleşim sürecini profesyonel bir sistemle birlikte yönetiyoruz.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
