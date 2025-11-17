export default function HowToUseSection() {
  const steps = [
    {
      number: "1",
      title: "プロフィール作成",
      icon: "📝",
      description:
        "ユーザー名、筋トレ歴、Big3記録を入力。あなたのトレーニングスタイルを登録しましょう。",
    },
    {
      number: "2",
      title: "募集を探す or 投稿する",
      icon: "🔍",
      description:
        "カレンダーから気になる募集を探すか、自分のトレーニング予定を投稿しましょう。",
    },
    {
      number: "3",
      title: "マッチング & 合トレ！",
      icon: "💪",
      description:
        "応募が承認されたらメッセージでやり取り。ジムで実際に会ってトレーニング開始！",
    },
  ];

  return (
    <section id="how-to-use" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            使い方はカンタン3ステップ
          </h2>
          <p className="text-gray-600">
            誰でも簡単に始められます
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                style={{ borderRadius: "var(--rounded-box)" }}
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  {/* Step Number */}
                  <div
                    className="flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-6xl flex-shrink-0">{step.icon}</div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--rounded-btn)",
              }}
            >
              クローズドテストに参加する →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

