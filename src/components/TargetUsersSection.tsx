export default function TargetUsersSection() {
  const users = [
    {
      icon: "👨‍💼",
      title: "初心者",
      description: "筋トレを始めたばかりで、正しいフォームを教えてほしい",
    },
    {
      icon: "👩‍💻",
      title: "中級者",
      description: "ライバルを作ってモチベーションを上げたい",
    },
    {
      icon: "👨‍🏫",
      title: "上級者",
      description: "高重量トレーニングで補助してくれるパートナーがほしい",
    },
    {
      icon: "👨‍🎓",
      title: "ジム移籍者",
      description: "新しいジムで仲間を見つけたい",
    },
    {
      icon: "👩‍🎨",
      title: "仲間作り",
      description: "トレーニングを通じて友達を増やしたい",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            こんな人におすすめ
          </h2>
          <p className="text-gray-600">
            様々なレベルの方にご利用いただいています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <div className="text-5xl mb-4 text-center">{user.icon}</div>
              <h3
                className="text-xl font-bold mb-3 text-center"
                style={{ color: "var(--color-primary)" }}
              >
                {user.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                「{user.description}」
              </p>
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

