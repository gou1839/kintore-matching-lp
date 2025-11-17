import Link from "next/link";

export const metadata = {
  title: "利用規約 | 筋トレマッチングアプリ",
  description: "筋トレマッチングアプリの利用規約です。",
};

export default function TermsPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">利用規約</h1>
          
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-4">
                この利用規約（以下「本規約」といいます）は、筋トレマッチングアプリ（以下「本サービス」といいます）の利用条件を定めるものです。
                ユーザーの皆様（以下「ユーザー」といいます）には、本規約に従って本サービスをご利用いただきます。
              </p>
              <p className="text-sm text-gray-500">
                最終更新日：2025年11月17日
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第1条（適用）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>本規約は、ユーザーと本サービス運営者（以下「運営者」といいます）との間の本サービスの利用に関わる一切の関係に適用されます。</li>
                <li>本サービスは現在クローズドテスト中であり、限定されたユーザーに提供されています。</li>
                <li>運営者は本サービスに関し、本規約のほか、ご利用にあたってのルール等を定めることがあります。これらは本規約の一部を構成するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第2条（定義）
              </h2>
              <p className="mb-2">本規約において、以下の用語は以下に定める意味を有するものとします。</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>「本サービス」とは、運営者が提供する筋トレマッチングアプリおよび関連サービスを意味します。</li>
                <li>「ユーザー」とは、本サービスを利用する全ての個人を意味します。</li>
                <li>「募集」とは、ユーザーが投稿するトレーニング予定の募集情報を意味します。</li>
                <li>「マッチング」とは、募集主が応募者を承認し、トレーニングパートナーとして成立することを意味します。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第3条（登録）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>本サービスの利用を希望する方は、本規約を遵守することに同意し、運営者の定める方法によって利用登録を申請するものとします。</li>
                <li>登録には有効なメールアドレスが必要です。</li>
                <li>運営者は、登録申請者が以下のいずれかに該当する場合、登録を承認しないことがあります。
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>本規約に違反したことがある者からの申請である場合</li>
                    <li>登録事項に虚偽、誤記または記載漏れがあった場合</li>
                    <li>反社会的勢力等（暴力団、暴力団員等）である、または資金提供その他を通じて反社会的勢力等の維持、運営もしくは経営に協力もしくは関与する等反社会的勢力等との何らかの交流もしくは関与を行っていると運営者が判断した場合</li>
                    <li>その他、運営者が登録を適当でないと判断した場合</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第4条（LINEオープンチャットの利用）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>本サービスでは、コミュニケーションの手段としてLINEオープンチャット（以下「LINE OC」といいます）を利用することがあります。</li>
                <li>LINE OCの利用は任意ですが、本サービスの機能を十分に活用するために推奨されます。</li>
                <li>LINE OCの利用にあたっては、LINEの利用規約およびLINE OCの利用規約が適用されます。</li>
                <li>LINE OC内での行動についても、本規約の禁止事項が適用されます。</li>
                <li>運営者は、LINE OC内でのユーザー間のトラブルについて、一切の責任を負いません。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第5条（禁止事項）
              </h2>
              <p className="mb-2">ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
              <ol className="list-decimal list-inside space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>運営者、本サービスの他のユーザー、または第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>運営者のサービスの運営を妨害するおそれのある行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>運営者のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>運営者、本サービスの他のユーザーまたは第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                <li>本サービスを通じて、以下の情報を送信または投稿する行為
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>過度に暴力的な表現を含む情報</li>
                    <li>コンピューター・ウイルスその他の有害なプログラムを含む情報</li>
                    <li>運営者、本サービスの他のユーザーまたは第三者の名誉または信用を毀損する表現を含む情報</li>
                    <li>過度にわいせつな表現を含む情報</li>
                    <li>差別につながる表現を含む情報</li>
                    <li>自殺、自傷行為、薬物乱用を誘引または助長する表現を含む情報</li>
                    <li>その他反社会的な内容を含み他人に不快感を与える表現を含む情報</li>
                  </ul>
                </li>
                <li>営業、宣伝、広告、勧誘、その他営利を目的とする行為（運営者の認めたものを除きます）</li>
                <li>性行為やわいせつな行為を目的とする行為</li>
                <li>面識のない異性との出会いや交際を目的とする行為</li>
                <li>他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為</li>
                <li>運営者、本サービスの他のユーザー、または第三者に不利益、損害または不快感を与える行為</li>
                <li>その他、運営者が不適切と判断する行為</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第6条（ユーザーの責任）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>ユーザーは、自己の責任において本サービスを利用するものとし、本サービスにおいて行った一切の行為およびその結果について責任を負うものとします。</li>
                <li>ユーザーは、マッチング成立後の実際のトレーニング実施について、自己の責任において行うものとします。</li>
                <li>運営者は、ユーザー間のトラブルについて、一切の責任を負いません。</li>
                <li>ユーザーは、本サービスの利用により第三者に損害を与えた場合、自己の責任と費用においてこれを解決するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第7条（利用料金）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>本サービスは現在、クローズドテスト期間中につき無料で提供されています。</li>
                <li>運営者は、将来的に本サービスの一部または全部を有料化する可能性があります。その場合、事前にユーザーに通知するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第8条（免責事項）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>運営者は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。</li>
                <li>運営者は、本サービスに起因してユーザーに生じたあらゆる損害について、一切の責任を負いません。</li>
                <li>本サービスはクローズドテスト中であり、予告なくサービス内容の変更、中断、終了を行う場合があります。</li>
                <li>運営者は、ユーザー間でマッチングした相手の本人確認を行っておりません。マッチング相手との実際のトレーニング実施は、ユーザー自身の責任において行ってください。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第9条（サービス内容の変更等）
              </h2>
              <p>運営者は、ユーザーへの事前の告知をもって、本サービスの内容を変更、追加または廃止することがあり、ユーザーはこれを承諾するものとします。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第10条（利用規約の変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</li>
                <li>本規約の変更後、本サービスの利用を開始した場合には、ユーザーは変更後の規約に同意したものとみなします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第11条（個人情報の取扱い）
              </h2>
              <p>運営者は、本サービスの利用によって取得する個人情報については、運営者「プライバシーポリシー」に従い適切に取り扱うものとします。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第12条（通知または連絡）
              </h2>
              <p>ユーザーと運営者との間の通知または連絡は、運営者の定める方法によって行うものとします。運営者は、ユーザーから、運営者が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第13条（権利義務の譲渡の禁止）
              </h2>
              <p>ユーザーは、運営者の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
                第14条（準拠法・裁判管轄）
              </h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>本規約の解釈にあたっては、日本法を準拠法とします。</li>
                <li>本サービスに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。</li>
              </ol>
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

