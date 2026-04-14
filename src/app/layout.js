import './globals.css';

export const metadata = {
  title: 'No3 Danışmanlık | Almanya Göç ve Kariyer Danışmanlığı',
  description: 'Almanya’ya gitmek isteyenler için net yol haritası. Evrak, iş ve yerleşim sürecini profesyonel bir sistemle birlikte yönetiyoruz.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
