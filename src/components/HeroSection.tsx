"use client";

export default function HeroSection() {
  const scrollToScreenshots = () => {
    const element = document.getElementById("screenshots");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-20 md:py-28">
        {/* クローズドテスト中バナー */}
        <div className="mb-8 text-center">
          <div
            className="inline-block px-6 py-2 rounded-full text-sm font-semibold text-white shadow-lg"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            🚀 現在開発中・クローズドテスト実施中
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block mb-2">一緒に筋トレする</span>
              <span
                className="block"
                style={{ color: "var(--color-primary)" }}
              >
                仲間を見つけよう
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto lg:mx-0">
              「一人じゃ続かない」を解決。<br />
              あなたに合ったトレーニングパートナーが見つかる。
            </p>
            <p className="text-base text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0">
              現在、限定メンバーによるクローズドテストを実施中です。<br />
              テストユーザーとして参加いただける方を募集しています！
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://forms.gle/JpdtNtXvovME2iPa8"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all text-center"
                style={{
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "var(--rounded-btn)",
                }}
              >
                クローズドテストに応募する →
              </a>
              <button
                onClick={scrollToScreenshots}
                className="px-8 py-4 text-lg font-semibold border-2 hover:bg-gray-50 transition-all"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  borderRadius: "var(--rounded-btn)",
                }}
              >
                アプリの詳細を見る
              </button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              {/* ✓ テスト参加無料 ✓ 開発に携われるチャンス ✓ 先行利用可能 */}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-8xl mb-4">💪</div>
                  <h3 className="text-2xl font-bold mb-2">筋トレ仲間募集中！</h3>
                  <p className="text-gray-600">
                    同じ目標を持つ仲間と<br />
                    一緒にトレーニングしよう
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-10 animate-bounce">
        🏋️
      </div>
      <div className="absolute bottom-20 left-10 text-6xl opacity-10 animate-bounce delay-75">
        💪
      </div>
    </section>
  );
}

