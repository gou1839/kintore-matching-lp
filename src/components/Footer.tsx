"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl">🏋️</div>
              <span
                className="text-2xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                筋トレマッチング
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              一緒に筋トレする仲間を見つけよう。<br />
              あなたに合ったトレーニングパートナーが見つかる。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            {/* <h3 className="font-bold text-white mb-4">クイックリンク</h3> */}
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  特徴
                </a>
              </li>
              <li>
                <a
                  href="#how-to-use"
                  className="hover:text-white transition-colors"
                >
                  使い方
                </a>
              </li>
              {/* <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  よくある質問
                </a>
              </li> */}
            </ul>
          </div>

          {/* Legal */}
          <div>
            {/* <h3 className="font-bold text-white mb-4">法的情報</h3> */}
            <ul className="space-y-2">
              <li>
                <a href="/terms" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  お問い合わせ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {currentYear} 筋トレマッチングアプリ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}

