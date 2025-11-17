import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // フォント読み込み最適化
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// サイトURL（本番環境のURL）
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kintore-matching-lp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  
  // 基本メタデータ
  title: {
    default: "筋トレマッチングアプリ | 一緒にトレーニングする仲間を見つけよう",
    template: "%s | 筋トレマッチング",
  },
  description:
    "筋トレ仲間を簡単に見つけられるマッチングアプリ。同じジム、同じ目標、同じレベルのトレーニングパートナーが見つかる。ベンチプレス、スクワット、デッドリフトの補助相手や、モチベーションを高め合える仲間を探すなら。エニタイム、ゴールドジム、ティップネスなど全国のジムに対応。クローズドテスト中、無料で先行利用可能。",
  
  // キーワード（検索エンジン向け）
  keywords: [
    "筋トレ",
    "マッチング",
    "トレーニングパートナー",
    "ジム 仲間",
    "合トレ",
    "ワークアウトパートナー",
    "筋トレ仲間",
    "ベンチプレス 補助",
    "スクワット パートナー",
    "デッドリフト 補助",
    "エニタイム",
    "ゴールドジム",
    "ジム マッチング",
    "トレーニング 友達",
    "筋トレ アプリ",
    "フィットネス 仲間",
    "BIG3",
    "筋力トレーニング",
    "ボディメイク",
    "筋肉",
  ],
  
  // 著者・制作者情報
  authors: [{ name: "筋トレマッチングアプリ運営チーム" }],
  creator: "筋トレマッチングアプリ",
  publisher: "筋トレマッチングアプリ",
  
  // 言語・地域設定
  alternates: {
    canonical: siteUrl,
    languages: {
      "ja-JP": siteUrl,
    },
  },
  
  // Open Graph（Facebook, LinkedIn等）
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "筋トレマッチングアプリ",
    title: "筋トレマッチングアプリ | 一緒にトレーニングする仲間を見つけよう",
    description:
      "筋トレ仲間を簡単に見つけられるマッチングアプリ。同じジム、同じ目標、同じレベルのトレーニングパートナーが見つかる。クローズドテスト中、無料で先行利用可能。",
    images: [
      {
        url: "/og-image.png", // OGP画像を作成する必要あり
        width: 1200,
        height: 630,
        alt: "筋トレマッチングアプリ - トレーニングパートナーを見つけよう",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "筋トレマッチングアプリ | トレーニングパートナーを見つけよう",
    description:
      "筋トレ仲間を簡単に見つけられるマッチングアプリ。同じジム、同じ目標のパートナーが見つかる。",
    images: ["/og-image.png"],
    creator: "@kintore_matching", // Twitterアカウント作成後に変更
  },
  
  // モバイル最適化
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // アプリアイコン
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  // 検証タグ
  verification: {
    google: "oBxmHnUp-pUnFKNsVVsSbDXK3gX4-hjawCskDP10Z0g",
  },
  
  // ロボット制御
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // その他のメタタグ
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "筋トレマッチング",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 構造化データ（JSON-LD）
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "筋トレマッチングアプリ",
        description: "筋トレ仲間を簡単に見つけられるマッチングアプリ",
        inLanguage: "ja-JP",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "筋トレマッチングアプリ",
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          availableLanguage: ["Japanese"],
        },
      },
      {
        "@type": "WebApplication",
        name: "筋トレマッチングアプリ",
        description:
          "筋トレ仲間を見つけるマッチングアプリ。同じジム、同じ目標、同じレベルのトレーニングパートナーが見つかる。",
        applicationCategory: "HealthApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "JPY",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "50",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "クローズドテストとは何ですか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "限定されたユーザーに先行してアプリを試していただき、フィードバックをもとにサービスを改善していく開発段階のことです。テストユーザーとして、アプリの開発に携わることができます。",
            },
          },
          {
            "@type": "Question",
            name: "テスト参加に料金はかかりますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "完全無料でご参加いただけます。登録料、月額料金などは一切かかりません。正式リリース後も基本機能は無料でご利用いただける予定です。",
            },
          },
          {
            "@type": "Question",
            name: "どんなジムで使えますか？",
            acceptedAnswer: {
              "@type": "Answer",
              text: "エニタイム、ゴールドジム、ティップネスなど、あらゆるジムでご利用いただけます。募集時に希望のジムを指定できます。",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ホーム",
            item: siteUrl,
          },
        ],
      },
    ],
  };

  return (
    <html lang="ja">
      <head>
        {/* 構造化データ */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
