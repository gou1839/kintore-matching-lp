"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AnalyticsData {
  counts: Record<string, number>;
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // ページタイトルの設定
    document.title = "流入元分析 | 合トレ仲間探し";

    // データ取得
    const fetchAnalytics = async () => {
      try {
        const response = await fetch("/api/analytics");
        if (!response.ok) {
          throw new Error("データの取得に失敗しました");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "エラーが発生しました");
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  // 合計カウントを計算
  const totalCount = data?.counts
    ? Object.values(data.counts).reduce((sum, count) => sum + count, 0)
    : 0;

  // ソート用の配列に変換
  const sortedSources = data?.counts
    ? Object.entries(data.counts).sort((a, b) => b[1] - a[1])
    : [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-16 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* タイトル */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                流入元分析
              </h1>
              <p className="text-xl text-gray-600">
                URLパラメータによる流入数を確認できます
              </p>
            </div>

            {/* ローディング */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                <p className="mt-4 text-gray-600">読み込み中...</p>
              </div>
            )}

            {/* エラー */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            {/* データ表示 */}
            {!loading && !error && data && (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* 合計 */}
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <div className="text-center">
                    <p className="text-gray-600 mb-2">総流入数</p>
                    <p className="text-5xl font-bold" style={{ color: "var(--color-primary)" }}>
                      {totalCount.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* 流入元リスト */}
                {sortedSources.length === 0 ? (
                  <div className="text-center py-12 text-gray-500">
                    <p>まだデータがありません</p>
                    <p className="text-sm mt-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">
                        ?source=openchat
                      </code>
                      のようなパラメータ付きURLでアクセスするとカウントされます
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold mb-6">流入元別カウント</h2>
                    {sortedSources.map(([source, count]) => (
                      <div
                        key={source}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            {source.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-semibold text-lg">{source}</p>
                            <p className="text-sm text-gray-500">
                              {((count / totalCount) * 100).toFixed(1)}%
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold" style={{ color: "var(--color-primary)" }}>
                            {count.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 更新ボタン */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      setLoading(true);
                      setError(null);
                      fetch("/api/analytics")
                        .then((res) => res.json())
                        .then((result) => {
                          setData(result);
                          setLoading(false);
                        })
                        .catch((err) => {
                          setError(err.message);
                          setLoading(false);
                        });
                    }}
                    className="px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    更新
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
