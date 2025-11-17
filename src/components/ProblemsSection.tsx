export default function ProblemsSection() {
  const problems = [
    { icon: "😰", text: "一人での筋トレが続かない" },
    { icon: "🙊", text: "ジムで知らない人に声をかけづらい" },
    { icon: "🤔", text: "自分のレベルに合った相手が分からない" },
    { icon: "🏋️", text: "高重量トレーニングで補助してくれる人がいない" },
    { icon: "😢", text: "新しいジムで仲間がいない" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            こんな悩み、ありませんか？
          </h2>
          <p className="text-gray-600">
            筋トレを続けるのは簡単ではありません
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl flex-shrink-0">{problem.icon}</div>
                <div>
                  <div className="flex items-center mb-2">
                    <span className="text-red-500 font-bold mr-2">✗</span>
                  </div>
                  <p className="text-gray-700">{problem.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p
            className="text-2xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            そんなあなたに、このアプリ。
          </p>
        </div>
      </div>
    </section>
  );
}

