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
    default: "合トレ仲間探し・筋トレマッチングアプリ | 一緒にトレーニングするパートナーが見つかる",
    template: "%s | 合トレ仲間探し",
  },
  description:
    "筋トレ仲間探しアプリで合トレパートナーをマッチング。同じジム、同じ目標、同じレベルのトレーニング仲間が見つかる筋トレマッチングアプリ。ベンチプレス、スクワット、デッドリフトの補助相手や、モチベーションを高め合える合トレ仲間を探すなら。エニタイム、ゴールドジム、ティップネスなど全国のジムに対応。クローズドテスト中、無料で先行利用可能。",
  
  // キーワード（検索エンジン向け）
  keywords: [
    // 主要キーワード
    "合トレ 仲間探し",
    "筋トレ 仲間探し アプリ",
    "筋トレ マッチング アプリ",
    "合トレ マッチング",
    "合トレ 仲間探し アプリ",
    "筋トレ マッチング",
    
    // 関連キーワード
    "筋トレ仲間",
    "合トレ",
    "トレーニングパートナー",
    "ジム 仲間探し",
    "ジム マッチング",
    "ワークアウトパートナー",
    "筋トレ 仲間",
    "合トレ アプリ",
    "筋トレアプリ",
    
    // 具体的なニーズ
    "ベンチプレス 補助",
    "スクワット パートナー",
    "デッドリフト 補助",
    "BIG3 パートナー",
    "筋トレ 一人 続かない",
    "ジム 友達作り",
    
    // ジム名
    "エニタイム 仲間",
    "ゴールドジム 仲間",
    "ティップネス 仲間",
    
    // その他
    "トレーニング 友達",
    "フィットネス 仲間",
    "筋力トレーニング",
    "ボディメイク",
  ],
  
  // 著者・制作者情報
  authors: [{ name: "合トレ仲間探し運営チーム" }],
  creator: "合トレ仲間探し・筋トレマッチングアプリ",
  publisher: "合トレ仲間探し",
  
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
    siteName: "合トレ仲間探し・筋トレマッチングアプリ",
    title: "合トレ仲間探し・筋トレマッチングアプリ | 一緒にトレーニングするパートナーが見つかる",
    description:
      "筋トレ仲間探しアプリで合トレパートナーをマッチング。同じジム、同じ目標、同じレベルのトレーニング仲間が見つかる筋トレマッチングアプリ。クローズドテスト中、無料で先行利用可能。",
    images: [
      {
        url: "/og-image.png", // OGP画像を作成する必要あり
        width: 1200,
        height: 630,
        alt: "合トレ仲間探し・筋トレマッチングアプリ - トレーニングパートナーを見つけよう",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "合トレ仲間探し・筋トレマッチングアプリ | トレーニングパートナーが見つかる",
    description:
      "筋トレ仲間探しアプリで合トレパートナーをマッチング。同じジム、同じ目標のトレーニング仲間が見つかる。",
    images: ["/og-image.png"],
    creator: "@aiture_matching", // Twitterアカウント作成後に変更
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
    shortcut: "/favicon.ico",
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
    "apple-mobile-web-app-title": "合トレ仲間探し",
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
        name: "合トレ仲間探し・筋トレマッチングアプリ",
        description: "筋トレ仲間探しアプリで合トレパートナーをマッチング。トレーニング仲間が見つかる。",
        inLanguage: "ja-JP",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "合トレ仲間探し",
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
        name: "合トレ仲間探し・筋トレマッチングアプリ",
        description:
          "筋トレ仲間探しアプリで合トレパートナーをマッチング。同じジム、同じ目標、同じレベルのトレーニング仲間が見つかる筋トレマッチングアプリ。",
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
