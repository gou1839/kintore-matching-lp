export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-red-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* クローズドテストバッジ */}
          <div className="mb-6">
            <div
              className="inline-block px-6 py-2 rounded-full text-sm font-semibold bg-white/20 backdrop-blur-sm"
              style={{ borderRadius: "var(--rounded-badge)" }}
            >
              🚀 現在クローズドテスト中
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            テストユーザーになろう
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            参加無料・先行利用のチャンス
          </p>
          <p className="text-lg mb-8 opacity-80">
            アプリ開発に携わり、より良いサービスを一緒に作りましょう
          </p>

          {/* テスト参加のメリット */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-sm font-semibold">先行利用可能</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl mb-2">💡</div>
              <p className="text-sm font-semibold">開発に参加</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="text-3xl mb-2">🤝</div>
              <p className="text-sm font-semibold">コミュニティ参加</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://forms.gle/JpdtNtXvovME2iPa8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 text-lg font-bold bg-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all text-center"
              style={{
                color: "var(--color-primary)",
                borderRadius: "var(--rounded-btn)",
              }}
            >
              クローズドテストに応募する →
            </a>
          </div>

          <p className="text-sm opacity-75">
            ※応募にはメールアドレスが必要です
            <br />
            参加無料・テスト期間中はいつでも退出可能
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-16 flex justify-center gap-8 text-6xl opacity-20">
          <span>💪</span>
          <span>🏋️</span>
          <span>🤝</span>
          <span>💪</span>
          <span>🏋️</span>
        </div>
      </div>
    </section>
  );
}

