export default function SolutionSection() {
  const solutions = [
    {
      icon: "🎯",
      text: "予定が合う仲間を簡単に見つけられる",
    },
    {
      icon: "📊",
      text: "プロフィールで相手のレベルが分かる",
    },
    {
      icon: "💬",
      text: "メッセージで事前にやり取りできる",
    },
    {
      icon: "🛡️",
      text: "安心・安全なマッチングシステム",
    },
    {
      icon: "💪",
      text: "筋トレに特化しているから話が合う",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            合トレ仲間探しアプリが解決します
          </h2>
          <p className="text-gray-600">
            筋トレマッチングであなたの悩みを解決する5つの機能
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{solution.icon}</div>
                <div>
                  <div className="flex items-center mb-2">
                    <span
                      className="font-bold mr-2"
                      style={{ color: "var(--color-success)" }}
                    >
                      ✓
                    </span>
                  </div>
                  <p className="text-gray-700 font-medium">{solution.text}</p>
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
            テストユーザーに応募する →
          </button>
        </div>
      </div>
    </section>
  );
}

