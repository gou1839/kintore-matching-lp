# 🚀 デプロイ後のSEO対策チェックリスト

## ✅ デプロイ完了
- [x] Vercelにデプロイ完了: https://kintore-matching-lp.vercel.app
- [x] サイトが正常に表示される
- [x] 全ページが動作する

---

## 🔥 今すぐやるべきこと（最優先）

### 1. Google Search Console登録（5分）
**なぜ重要**: Googleに「このサイトが存在する」ことを伝える最も重要なステップ

1. **Google Search Consoleにアクセス**
   - URL: https://search.google.com/search-console
   - Googleアカウントでログイン

2. **プロパティを追加**
   - 「プロパティを追加」をクリック
   - 「URLプレフィックス」を選択
   - `https://kintore-matching-lp.vercel.app` と入力

3. **所有権の確認**
   
   **方法A: HTMLタグ（推奨）**
   - 確認HTMLタグをコピー
   - `src/app/layout.tsx`の`metadata`に追加：
   ```typescript
   verification: {
     google: "ここに確認コードを貼り付け",
   },
   ```
   - 再デプロイ後、「確認」ボタンをクリック

   **方法B: DNS（独自ドメインがある場合）**
   - TXTレコードをDNSに追加

4. **サイトマップを送信**
   - 左メニュー「サイトマップ」をクリック
   - `https://kintore-matching-lp.vercel.app/sitemap.xml` を入力
   - 「送信」をクリック

5. **URL検査ツールでインデックスをリクエスト**
   - トップページURLを入力
   - 「インデックス登録をリクエスト」をクリック

**期待される効果**: 数日以内にGoogleの検索結果に表示され始める

---

### 2. OGP画像を作成（10分）
**なぜ重要**: SNSでシェアされた時の見栄えが大きく変わる

**必要な画像**:
- `/public/og-image.png` (1200x630px)

**作成方法**:
1. **Canvaで作成**（推奨）
   - URL: https://www.canva.com
   - テンプレート: 「Facebookカバー」（1200x630px）
   - 含める要素：
     - アプリ名「筋トレマッチング」
     - キャッチコピー「一緒にトレーニングする仲間を見つけよう」
     - 筋トレのイラスト（ダンベル、バーベル）
     - プライマリカラー（#ff5722）を使用

2. **Figmaで作成**
   - 1200x630pxのフレームを作成
   - デザイン後、PNG書き出し

3. **配置**
   - 作成した画像を `/public/og-image.png` として保存
   - 再デプロイ

**確認方法**:
- https://www.opengraph.xyz/ でプレビュー確認

---

### 3. Google Analytics設定（10分）
**なぜ重要**: どれだけの人が訪問しているか、どこから来ているかを把握

1. **Google Analyticsアカウント作成**
   - URL: https://analytics.google.com
   - 「測定を開始」をクリック
   - アカウント名: 筋トレマッチングアプリ
   - プロパティ名: LPサイト
   - ウェブサイトURL: https://kintore-matching-lp.vercel.app

2. **測定IDを取得**
   - 測定ID（G-XXXXXXXXXX）をコピー

3. **Vercel環境変数に追加**
   - Vercelダッシュボード → Settings → Environment Variables
   - Key: `NEXT_PUBLIC_GA_ID`
   - Value: `G-XXXXXXXXXX`

4. **Google Analyticsコンポーネントを作成**
   
   `/src/components/GoogleAnalytics.tsx` を作成：
   ```typescript
   import Script from "next/script";
   
   export default function GoogleAnalytics() {
     const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
     
     if (!GA_ID) return null;
     
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${GA_ID}');
           `}
         </Script>
       </>
     );
   }
   ```

5. **layout.tsxに追加**
   ```typescript
   import GoogleAnalytics from "@/components/GoogleAnalytics";
   
   // <body>タグ内に
   <GoogleAnalytics />
   {children}
   ```

---

## 📱 SNS準備（30分）

### Twitter/X アカウント作成
1. アカウント名: @kintore_matching
2. プロフィール画像: アプリロゴ
3. ヘッダー画像: OGP画像を流用
4. プロフィール文:
   ```
   筋トレ仲間を見つけるマッチングアプリ🏋️
   一人じゃ続かない筋トレを、仲間と一緒に💪
   クローズドテスト参加者募集中！
   #筋トレ #合トレ #トレーニングパートナー
   ```
5. 初回ツイート:
   ```
   【クローズドテスト参加者募集🎉】
   
   筋トレ仲間を見つけるマッチングアプリをリリースします💪
   
   ✅ 同じジムの仲間が見つかる
   ✅ レベルに合った相手を探せる
   ✅ 無料で先行利用可能
   
   一緒にサービスを作りませんか？
   
   詳細はこちら👇
   https://kintore-matching-lp.vercel.app
   
   #筋トレ #合トレ #ジム仲間募集
   ```

### Instagram アカウント作成
1. ユーザー名: @kintore_matching
2. プロフィール:
   ```
   🏋️ 筋トレ仲間マッチングアプリ
   💪 一人じゃ続かない→仲間と一緒に！
   🎁 クローズドテスト参加者募集中
   👇 詳細はこちら
   ```
3. リンク: https://kintore-matching-lp.vercel.app

---

## 🎯 1週間以内にやること

### 1. 被リンク獲得
- [ ] 自分のSNSでシェア
- [ ] 友人・知人に共有依頼
- [ ] 筋トレ系コミュニティに投稿
  - Reddit: r/fitness, r/weightroom
  - Facebook: 筋トレグループ
  - LINE OpenChat: 筋トレ関連

### 2. コンテンツ追加（ブログ）
以下の記事を作成（`/blog`配下）:
- [ ] 「筋トレ仲間を作る5つのメリット」
- [ ] 「ジムで声をかけづらい人のための解決策」
- [ ] 「合トレで筋トレ効果が3倍になる理由」

### 3. プレスリリース配信
- [ ] PR TIMES（有料）
- [ ] valuepress（無料枠あり）
- [ ] @Press（無料枠あり）

---

## 📊 1ヶ月以内にやること

### SEOパフォーマンス確認
- [ ] Google Search Consoleで検索順位確認
- [ ] Google Analyticsで訪問者数確認
- [ ] 目標: 月間100訪問達成

### コンテンツマーケティング
- [ ] ブログ記事5本公開
- [ ] SNS毎日投稿（筋トレTips + アプリ情報）
- [ ] ユーザーインタビュー掲載

### 被リンク戦略
- [ ] フィットネス系ブログにゲスト投稿
- [ ] ディレクトリサイトに登録
  - BIGLOBE検索
  - goo検索
  - フィットネス系ディレクトリ

---

## 🎨 デザイン改善

### ファビコン作成
- [ ] `/public/favicon.ico` (32x32px)
- [ ] `/public/apple-touch-icon.png` (180x180px)

推奨デザイン:
- ダンベルアイコン
- プライマリカラー（#ff5722）
- シンプルで認識しやすい

---

## 📈 測定KPI

### 週次確認
- [ ] オーガニック検索流入数
- [ ] SNS流入数
- [ ] クローズドテスト応募数

### 月次目標
**1ヶ月目**:
- オーガニック検索: 50-100訪問
- SNS流入: 100-200訪問
- テスト応募: 10-20人

**3ヶ月目**:
- オーガニック検索: 500-1,000訪問
- SNS流入: 500-1,000訪問
- テスト応募: 100-200人

**6ヶ月目**:
- オーガニック検索: 2,000-5,000訪問
- 主要キーワード20位以内
- 月間新規ユーザー: 500人

---

## 🔍 SEO順位追跡

追跡すべきキーワード:
1. 筋トレ 仲間
2. トレーニングパートナー
3. ジム 仲間
4. 合トレ
5. ベンチプレス 補助
6. スクワット パートナー
7. 筋トレ マッチング
8. ジム マッチング
9. 筋トレ 一人 続かない
10. エニタイム 仲間

ツール:
- Google Search Console（無料）
- Ubersuggest（一部無料）
- GRC（有料、推奨）

---

## ✅ 完了時のチェック

全て完了したら、以下を確認:
- [ ] Google検索で「site:kintore-matching-lp.vercel.app」が表示される
- [ ] Twitter Cardが正しく表示される
- [ ] OGP画像が正しく表示される
- [ ] Google Analyticsでデータが取得できている
- [ ] サイトマップがGoogle Search Consoleに表示されている
- [ ] モバイルで全ページが正常に表示される
- [ ] ページ速度スコアが90点以上

---

## 🆘 トラブルシューティング

### サイトマップが認識されない
→ robots.txtを確認、48時間待つ

### OGP画像が表示されない
→ キャッシュクリア: https://developers.facebook.com/tools/debug/

### Google Search Consoleで確認できない
→ 所有権確認を再実行、DNSの伝播を待つ

---

**最終更新**: 2025年11月17日
**現在のステータス**: ✅ デプロイ完了、SEO基盤整備完了
**次のマイルストーン**: Google Search Console登録 + OGP画像作成

