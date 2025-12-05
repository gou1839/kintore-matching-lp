"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HowToUsePage() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  // ページタイトルとメタデータの設定
  useEffect(() => {
    document.title = "使い方ガイド | 合トレ - 一緒に筋トレする仲間を見つけよう";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "合トレアプリの使い方を詳しく解説。募集の投稿方法、応募の仕方、マッチング後のやり取りまで、画像付きで分かりやすくご説明します。"
      );
    }
  }, []);

  const toggleStep = (stepNumber: number) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="py-16 bg-linear-to-br from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                使い方ガイド
              </h1>
              <p className="text-xl text-gray-600">
                合トレの使い方を詳しく解説します
              </p>
            </div>
          </div>
        </section>

        {/* 詳細な使い方セクション */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {/* ステップ1: プロフィール作成 */}
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                  style={{ borderRadius: "var(--rounded-box)" }}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div
                      className="shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      1
                    </div>
                    <div className="text-6xl shrink-0">📝</div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">
                        プロフィール作成
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        ユーザー名、筋トレ歴、Big3記録を入力。あなたのトレーニングスタイルを登録しましょう。
                      </p>
                    </div>
                  </div>
                </div>

                {/* ステップ2: 募集を探す or 投稿する（アコーディオン） */}
                <div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
                  style={{ borderRadius: "var(--rounded-box)" }}
                >
                  <button
                    onClick={() => toggleStep(2)}
                    className="w-full p-8 flex flex-col md:flex-row items-center gap-6 hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className="shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      2
                    </div>
                    <div className="text-6xl shrink-0">🔍</div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">
                        募集を探す or 投稿する
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        カレンダーから気になる募集を探すか、自分のトレーニング予定を投稿しましょう。
                      </p>
                    </div>
                    <div className="text-3xl text-gray-400">
                      {openStep === 2 ? "▲" : "▼"}
                    </div>
                  </button>

                  {/* アコーディオンコンテンツ */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openStep === 2
                        ? "max-h-[10000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8 border-t border-gray-200">
                      <h4 className="text-2xl font-bold text-center mt-8 mb-6">
                        合トレに募集&応募してみよう
                      </h4>

                      {/* 募集セクション */}
                      <div className="mb-12">
                        <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span
                            className="inline-block w-8 h-8 rounded-full text-white text-center leading-8 text-sm"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            募
                          </span>
                          募集
                        </h5>

                        <div className="space-y-6">
                          <div>
                            <p className="text-gray-700 mb-3">
                              アプリ下部の「+」ボタンから募集を作成します
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/01_add_bosyu.webp"
                                alt="募集作成ボタン"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              募集作成フォームを入力して投稿しましょう
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/02_add_bosyu.webp"
                                alt="募集作成フォーム"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              投稿後は、編集や削除もできます
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/03_edit_and_delete.webp"
                                alt="編集と削除"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 応募セクション */}
                      <div>
                        <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span
                            className="inline-block w-8 h-8 rounded-full text-white text-center leading-8 text-sm"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            応
                          </span>
                          応募
                        </h5>

                        <div className="space-y-6">
                          <div>
                            <p className="text-gray-700 mb-3">
                              気になる募集を見つけたら応募してみましょう。
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/04_oubo.webp"
                                alt="募集に応募"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              投稿者のプロフィールも確認できます。
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/05_oubo.webp"
                                alt="プロフィール確認"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ステップ3: マッチング & 合トレ！（アコーディオン） */}
                <div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
                  style={{ borderRadius: "var(--rounded-box)" }}
                >
                  <button
                    onClick={() => toggleStep(3)}
                    className="w-full p-8 flex flex-col md:flex-row items-center gap-6 hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className="shrink-0 w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold text-white"
                      style={{ backgroundColor: "var(--color-primary)" }}
                    >
                      3
                    </div>
                    <div className="text-6xl shrink-0">💪</div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">
                        マッチング & 合トレ！
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        応募が承認されたらメッセージでやり取り。ジムで実際に会ってトレーニング開始！
                      </p>
                    </div>
                    <div className="text-3xl text-gray-400">
                      {openStep === 3 ? "▲" : "▼"}
                    </div>
                  </button>

                  {/* アコーディオンコンテンツ */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openStep === 3
                        ? "max-h-[15000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-8 pb-8 border-t border-gray-200">
                      <h4 className="text-2xl font-bold text-center mt-8 mb-6">
                        マッチング & 合トレ
                      </h4>

                      {/* 応募が来たらセクション */}
                      <div className="mb-12">
                        <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span
                            className="inline-block w-8 h-8 rounded-full text-white text-center leading-8 text-sm"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            ①
                          </span>
                          応募が来たら
                        </h5>

                        <div className="space-y-6">
                          <div>
                            <p className="text-gray-700 mb-3">
                              あなたの募集に誰かから応募がきたらアプリ下部の「通知」に「新しい応募があります」と表示されます。
                              <br />
                              また、LINE連携をするとLINEにも公式アカウントから通知が来ます。
                              <br />
                              「応募管理」のタブを選択してください
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/06_bosyu.webp"
                                alt="応募管理"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              プロフィールを確認して、「合トレをする」を押すことでマッチングが成立します！
                              <br />
                              （複数人から応募があった場合、「合トレをする」を押した方以外は見送られます）
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                              <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                                <Image
                                  src="/screenshots/how-to-use/07_bosyu.webp"
                                  alt="プロフィール確認"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                              <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                                <Image
                                  src="/screenshots/how-to-use/08_bosyu.webp"
                                  alt="マッチング成立"
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 合トレ後のやり取りセクション */}
                      <div>
                        <h5 className="text-xl font-bold mb-4 flex items-center gap-2">
                          <span
                            className="inline-block w-8 h-8 rounded-full text-white text-center leading-8 text-sm"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          >
                            ②
                          </span>
                          合トレ後のやり取り
                        </h5>

                        <div className="space-y-6">
                          <div>
                            <p className="text-gray-700 mb-3">
                              マッチングが成立すると、「応募一覧」から成立した合トレを確認できます。また、あなたが応募した募集も確認できます。
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/09_seiritu.webp"
                                alt="成立した合トレ"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              「合トレ相手と連絡をとる」を押すと、合トレ情報のページに遷移します。
                              <br />
                              今回のモックアップでは、ユーザー同士のやりとりにLINE
                              OpenChatを用います。OpenChatではユーザー同士のLINE交換などはできないようになってるのでご安心ください。
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/10_seiritu.webp"
                                alt="合トレ相手と連絡"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              表示されている「No」を確認してください
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/11_seiritu.webp"
                                alt="No確認"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              LINEオープンチャットが開かれます
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/12_seiritu.webp"
                                alt="LINEオープンチャット"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>

                          <div>
                            <p className="text-gray-700 mb-3">
                              先程のアプリ画面に表示されていたご自身の「No」と一致するOpenChatのトークにご参加ください
                            </p>
                            <div className="relative w-full max-w-sm mx-auto aspect-9/16 rounded-lg overflow-hidden shadow-md">
                              <Image
                                src="/screenshots/how-to-use/13_seiritu.webp"
                                alt="トーク参加"
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TOPページへ戻るボタン */}
              <div className="text-center mt-12">
                <Link
                  href="/"
                  className="inline-block px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "var(--rounded-btn)",
                  }}
                >
                  TOPページへ戻る
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

