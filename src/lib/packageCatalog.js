export const PACKAGE_CATALOG = {
  'on-degerlendirme': {
    id: 'on-degerlendirme',
    title: 'Ön Değerlendirme',
    description: 'Almanya planınıza başlamadan önce profilinizi netleştiren hızlı analiz paketi.',
    price: '3.500 TL',
    note: 'tek seferlik başlangıç paketi',
    features: ['Profil analizi', 'Yol haritası', 'Temel risk ve fırsat tespiti'],
    for: 'Nereden başlayacağını bilmeyen ve önce durumunu net görmek isteyenler için.',
    featured: false
  },
  'evrak-basvuru': {
    id: 'evrak-basvuru',
    title: 'Evrak & Başvuru',
    description: 'Başvuru aşamasında hata riskini azaltan ve dosyanızı güçlendiren destek paketi.',
    price: 'Detaylar için görüşün',
    note: 'başvuru odaklı destek',
    features: ['Evrak kontrolü', 'Başvuru desteği', 'Dosya kalitesi iyileştirme'],
    for: 'İş bulmuş veya başvuruya hazır olan ama evrak tarafını profesyonelce yönetmek isteyenler için.',
    featured: true,
    tag: 'En Çok Tercih Edilen'
  },
  'tam-surec': {
    id: 'tam-surec',
    title: 'Tam Süreç Yönetimi',
    description: 'Planlama aşamasından Almanya’ya yerleşime kadar uçtan uca danışmanlık.',
    price: 'Bireysel Teklif',
    note: 'kapsamlı danışmanlık',
    features: ['Almanya’ya kadar destek', 'Yerleşim süreci', 'Süreç boyunca birebir takip'],
    for: 'Sürecin tamamını tek ekip ile güvenle ve hızla ilerletmek isteyenler için.',
    featured: false
  }
};

export function getPackageList() {
  return Object.values(PACKAGE_CATALOG);
}

export function getShopierLinkByPackageId(packageId) {
  const envMap = {
    'on-degerlendirme': process.env.NEXT_PUBLIC_SHOPIER_URL_ON_DEGERLENDIRME,
    'evrak-basvuru': process.env.NEXT_PUBLIC_SHOPIER_URL_EVRAK_BASVURU,
    'tam-surec': process.env.NEXT_PUBLIC_SHOPIER_URL_TAM_SUREC
  };

  return envMap[packageId] || null;
}

export function getServerShopierLinkByPackageId(packageId) {
  const envMap = {
    'on-degerlendirme': process.env.SHOPIER_URL_ON_DEGERLENDIRME || process.env.NEXT_PUBLIC_SHOPIER_URL_ON_DEGERLENDIRME,
    'evrak-basvuru': process.env.SHOPIER_URL_EVRAK_BASVURU || process.env.NEXT_PUBLIC_SHOPIER_URL_EVRAK_BASVURU,
    'tam-surec': process.env.SHOPIER_URL_TAM_SUREC || process.env.NEXT_PUBLIC_SHOPIER_URL_TAM_SUREC
  };

  return envMap[packageId] || null;
}
