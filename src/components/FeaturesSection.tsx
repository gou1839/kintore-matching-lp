export default function FeaturesSection() {
  const features = [
    {
      icon: "🎯",
      title: "簡単マッチング",
      description:
        "募集を見つけて応募するだけ。シンプルで使いやすいUIで、あなたに合った相手がすぐに見つかります。",
    },
    {
      icon: "💪",
      title: "詳しいプロフィール",
      description:
        "筋トレ歴、Big3記録を登録できるから、相手のレベルが一目で分かります。安心してマッチングできる仕組みです。",
    },
    {
      icon: "💬",
      title: "スムーズなやり取り",
      description:
        "マッチング後はすぐにメッセージ。リアルタイム通知で、予定や場所を詳しく相談できます。",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            選ばれる3つの理由
          </h2>
          <p className="text-gray-600">
            合トレ仲間探し・筋トレマッチングアプリの主要な特徴
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all border border-gray-100"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <div className="text-6xl mb-4 text-center">{feature.icon}</div>
              <h3
                className="text-2xl font-bold mb-4 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

