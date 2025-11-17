import Link from "next/link";

export const metadata = {
  title: "プライバシーポリシー | 筋トレマッチングアプリ",
  description: "筋トレマッチングアプリのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl">🏋️</div>
            <span
              className="text-xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              筋トレマッチング
            </span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            プライバシーポリシー
          </h1>

          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-4">
                筋トレマッチングアプリ（以下「本サービス」といいます）は、ユーザーの個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます）を遵守するとともに、以下のプライバシーポリシー（以下「本ポリシー」といいます）に従い、適切な取扱いおよび保護に努めます。
              </p>
              <p className="text-sm text-gray-500">
                最終更新日：2025年11月17日
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第1条（収集する情報）
              </h2>
              <p className="mb-2">
                本サービスでは、以下の情報を収集します。
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>登録情報</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>メールアドレス</li>
                    <li>パスワード（暗号化して保存）</li>
                  </ul>
                </li>
                <li>
                  <strong>プロフィール情報</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>ユーザー名</li>
                    <li>アバター画像</li>
                    <li>筋トレ歴</li>
                    <li>Big3記録（ベンチプレス、スクワット、デッドリフト）</li>
                    <li>性格タイプ</li>
                    <li>自己紹介文</li>
                  </ul>
                </li>
                <li>
                  <strong>募集・応募情報</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>募集タイトル、日時、場所、内容</li>
                    <li>応募メッセージ</li>
                  </ul>
                </li>
                <li>
                  <strong>メッセージ情報</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>ユーザー間のメッセージ内容</li>
                  </ul>
                </li>
                <li>
                  <strong>利用状況情報</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>アクセスログ</li>
                    <li>IPアドレス</li>
                    <li>ブラウザの種類</li>
                    <li>デバイス情報</li>
                    <li>利用日時</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第2条（利用目的）
              </h2>
              <p className="mb-2">
                収集した個人情報は、以下の目的で利用します。
              </p>
              <ol className="list-decimal list-inside space-y-2">
                <li>本サービスの提供、運営、維持、改善のため</li>
                <li>ユーザー認証のため</li>
                <li>ユーザー間のマッチング機能の提供のため</li>
                <li>募集情報の表示および管理のため</li>
                <li>メッセージ機能の提供のため</li>
                <li>通知機能の提供のため</li>
                <li>カスタマーサポート対応のため</li>
                <li>利用規約違反行為への対応のため</li>
                <li>本サービスの改善や新機能の開発のため</li>
                <li>
                  統計データの作成（個人を特定できない形式に加工したもの）
                </li>
                <li>重要なお知らせやキャンペーン情報の通知のため</li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第3条（LINEオープンチャットへの誘導について）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  本サービスでは、コミュニティ機能の一環として、LINEオープンチャット（以下「LINE
                  OC」といいます）への誘導を行う場合があります。
                </li>
                <li>
                  LINE
                  OCへの参加は任意であり、参加しない場合でも本サービスの基本機能は利用可能です。
                </li>
                <li>
                  LINE OCに参加する場合、LINEアプリおよびLINE
                  OCのプライバシーポリシーが適用されます。
                </li>
                <li>
                  LINE
                  OC内での情報については、運営者ではなくLINE株式会社の管理下となります。
                </li>
                <li>
                  運営者は、LINE OC内でのユーザーの個人情報の取扱いについて、責任を負いません。
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第4条（第三者提供）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  運営者は、以下のいずれかに該当する場合を除き、ユーザーの同意なく第三者に個人情報を提供しません。
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>法令に基づく場合</li>
                    <li>
                      人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
                    </li>
                    <li>
                      公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
                    </li>
                    <li>
                      国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
                    </li>
                  </ul>
                </li>
                <li>
                  本サービスでは、以下のサービスを利用しており、これらのサービス提供者に情報が共有される場合があります。
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Supabase（データベース・認証サービス）</li>
                    <li>Vercel（ホスティングサービス）</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第5条（個人情報の管理）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  運営者は、個人情報の正確性を保ち、これを安全に管理します。
                </li>
                <li>
                  運営者は、個人情報の紛失、破壊、改ざんおよび漏洩などのリスクに対して、適切なセキュリティ対策を実施します。
                </li>
                <li>
                  パスワードは暗号化して保存され、運営者であっても復号することはできません。
                </li>
                <li>
                  運営者は、個人情報の取扱いを委託する場合は、委託先に対して適切な監督を行います。
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第6条（Cookie等の利用）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  本サービスでは、ユーザーの利便性向上およびサービス改善のため、Cookieおよび類似技術を使用します。
                </li>
                <li>
                  Cookieとは、Webサイトがユーザーのコンピュータに一時的にデータを保存する仕組みです。
                </li>
                <li>
                  ユーザーは、ブラウザの設定によりCookieを無効にすることができますが、その場合、本サービスの一部機能が利用できなくなる可能性があります。
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第7条（個人情報の開示・訂正・削除）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  ユーザーは、自己の個人情報について、開示、訂正、削除を請求することができます。
                </li>
                <li>
                  プロフィール情報は、本サービス内のプロフィール編集画面から変更・削除することができます。
                </li>
                <li>
                  アカウントの削除（退会）を希望する場合は、プロフィール設定画面から退会手続きを行うことができます。
                </li>
                <li>
                  アカウント削除後も、法令に基づく保存義務がある場合や、不正利用防止のために必要な場合は、一定期間情報を保持することがあります。
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第8条（未成年者の利用）
              </h2>
              <p>
                本サービスは、18歳未満の方の利用を想定していません。18歳未満の方が本サービスを利用する場合は、保護者の同意を得た上でご利用ください。
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第9条（プライバシーポリシーの変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく変更することができるものとします。
                </li>
                <li>
                  変更後のプライバシーポリシーは、本サービス上に掲載したときから効力を生じるものとします。
                </li>
              </ol>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                第10条（お問い合わせ窓口）
              </h2>
              <p className="mb-2">
                本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mt-4">
                <p className="font-semibold mb-2">筋トレマッチングアプリ運営</p>
                <p className="text-sm">
                  お問い合わせは、トップページのフッターにある「お問い合わせ」ボタンからご連絡ください。
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-block px-6 py-3 rounded-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--rounded-btn)",
              }}
            >
              ← トップページに戻る
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 筋トレマッチングアプリ. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

