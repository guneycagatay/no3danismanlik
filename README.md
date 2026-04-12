This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Shopier Entegrasyonu

Paket butonları Shopier checkout linklerine bağlanır:

- `NEXT_PUBLIC_SHOPIER_URL_ON_DEGERLENDIRME`
- `NEXT_PUBLIC_SHOPIER_URL_EVRAK_BASVURU`
- `NEXT_PUBLIC_SHOPIER_URL_TAM_SUREC`
- (önerilen) `SHOPIER_URL_ON_DEGERLENDIRME`, `SHOPIER_URL_EVRAK_BASVURU`, `SHOPIER_URL_TAM_SUREC`

Paket satın alma akışı:

1. Kullanıcı paket kartından **Görüşme Al** butonuna tıklar (`/satin-al`).
2. İletişim + tarih/saat bilgisi girilir.
3. Sunucu size talep e-postası yollar.
4. Kullanıcı Shopier ödeme ekranına yönlendirilir.

Ödeme bildirimi (webhook) endpoint:

- `POST /api/shopier/webhook`

Shopier webhook ayarlarında bu URL'yi tanımlayın ve `SHOPIER_WEBHOOK_SECRET` değerini eşitleyin.

Webhook başarılı ve imza doğrulaması geçerliyse, `order.created` için SMTP üzerinden bildirim e-postası gönderilir.
SMTP ayarları için `.env.example` dosyasını referans alın.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
