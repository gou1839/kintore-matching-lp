"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "クローズドテストとは何ですか？",
      answer:
        "限定されたユーザーに先行してアプリを試していただき、フィードバックをもとにサービスを改善していく開発段階のことです。テストユーザーとして、アプリの開発に携わることができます。",
    },
    {
      question: "テスト参加に料金はかかりますか？",
      answer:
        "完全無料でご参加いただけます。登録料、月額料金などは一切かかりません。正式リリース後も基本機能は無料でご利用いただける予定です。",
    },
    {
      question: "どうやって相手を選べばいいですか？",
      answer:
        "プロフィールで筋トレ歴やBig3記録を確認できます。また、募集内容（日時、場所、やる部位など）を見て、自分に合った相手を選びましょう。",
    },
    {
      question: "安全性は大丈夫ですか？",
      answer:
        "プロフィール確認機能、メッセージ機能、承認制システムなど、安心してご利用いただける仕組みを整えています。また、ジムなど人目のある公共の場での待ち合わせを推奨しています。",
    },
    {
      question: "マッチングしなかったらどうなりますか？",
      answer:
        "応募が見送られた場合、通知でお知らせします。他の募集に応募したり、自分で募集を投稿したりすることができます。",
    },
    {
      question: "一度に複数の募集に応募できますか？",
      answer:
        "はい、できます。気になる募集には積極的に応募してみましょう。",
    },
    {
      question: "退会はできますか？",
      answer:
        "はい、いつでも退会できます。プロフィール設定画面から退会手続きを行ってください。",
    },
    {
      question: "初心者でも使えますか？",
      answer:
        "もちろんです！初心者の方も多く利用されています。筋トレ歴や目的を登録できるので、同じレベルの相手を見つけやすくなっています。",
    },
    {
      question: "正式リリースはいつですか？",
      answer:
        "クローズドテストでのフィードバックをもとにサービスを改善し、準備が整い次第、正式リリースを予定しています。テストユーザーの方には優先的にお知らせします。",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            よくある質問
          </h2>
          <p className="text-gray-600">
            お客様からよくいただく質問をまとめました
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              style={{ borderRadius: "var(--rounded-box)" }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-4">
                  Q. {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--color-primary)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    <span
                      className="font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      A.
                    </span>{" "}
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

