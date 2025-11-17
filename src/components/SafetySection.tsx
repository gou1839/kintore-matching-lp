export default function SafetySection() {
  const safetyFeatures = [
    {
      icon: "🛡️",
      title: "プロフィール確認機能",
      description:
        "事前に相手のプロフィール（筋トレ歴、記録など）を確認できます。",
    },
    {
      icon: "💬",
      title: "メッセージ機能(開発中)",
      description:
        "マッチング前に不安なことを質問できます。",
    },
    {
      icon: "✅",
      title: "承認制システム",
      description:
        "募集主が承認するまでマッチングは成立しません。",
    },
    {
      icon: "🏋️",
      title: "相互評価機能(開発中)",
      description:
        "相互評価により、お互いの合トレ体験を「見える化」します",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            安心・安全への取り組み
          </h2>
          <p className="text-gray-600">
            安全にご利用いただくための仕組み
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {safetyFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <div className="text-5xl mb-4 text-center">{feature.icon}</div>
              <h3
                className="text-xl font-bold mb-3 text-center"
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

        {/* <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            ※トラブルがあった場合は、すぐに運営にご連絡ください。
            <br />
            安全にご利用いただくため、利用規約を必ずお読みください。
          </p>
        </div> */}
      </div>
    </section>
  );
}

