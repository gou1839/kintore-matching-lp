import Image from "next/image";

export default function ScreenshotsSection() {
  const screenshots = [
    {
      title: "ホーム画面",
      description: "カレンダーで募集を一覧表示。気になる募集をタップして詳細を確認できます。",
      image: "/screenshots/Create Next App.jpeg",
    },
    {
      title: "募集詳細",
      description: "日時、場所、やる部位、目的などを確認。プロフィールもチェックできます。",
      image: "/screenshots/Create Next App · 1.59pm · 11-17.jpeg",
    },
    {
      title: "通知画面",
      description: "応募が来たら通知でお知らせ。応募者のプロフィールを確認して承認・見送りを選択。",
      image: "/screenshots/Create Next App · 2.00pm · 11-17.jpeg",
    },
    {
      title: "メッセージ画面",
      description: "マッチング後はチャットで自由にやり取り。集合時間や詳細を相談しましょう。",
      image: "/screenshots/Create Next App · 2.00pm · 11-17 (1).jpeg",
    },
    {
      title: "プロフィール画面",
      description: "筋トレ歴、Big3記録、性格タイプなど相手の情報が詳しく分かります。",
      image: "/screenshots/Create Next App · 2.01pm · 11-17.jpeg",
    },
  ];

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            こんな感じで使えます
          </h2>
          <p className="text-gray-600">
            実際のアプリ画面をご紹介
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <div className="relative aspect-[9/16] bg-gray-200">
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: "var(--color-primary)" }}
                >
                  {screenshot.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

