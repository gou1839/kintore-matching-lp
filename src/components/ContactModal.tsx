"use client";

import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);

  // メールアドレスをJavaScriptで動的に生成（クローラー対策）
  const getEmail = () => {
    const user = "kawachi20018+kintore";
    const domain = "gmail.com";
    return `${user}@${domain}`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getEmail());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("コピーに失敗しました:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
        style={{ borderRadius: "var(--rounded-box)" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <div className="text-5xl mb-4">📧</div>
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="text-gray-600 mb-6">
            ご質問・ご要望などがございましたら、
            <br />
            以下のメールアドレスまでご連絡ください。
          </p>

          {/* Email Display */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p
              className="text-lg font-semibold break-all"
              style={{ color: "var(--color-primary)" }}
            >
              {getEmail()}
            </p>
          </div>

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="w-full px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all mb-4"
            style={{
              backgroundColor: copied ? "var(--color-success)" : "var(--color-primary)",
              borderRadius: "var(--rounded-btn)",
            }}
          >
            {copied ? "✓ コピーしました！" : "📋 メールアドレスをコピー"}
          </button>

          {/* Or Open Email Client */}
          {/* <a
            href={`mailto:${getEmail()}`}
            className="block w-full px-6 py-3 border-2 font-semibold rounded-lg hover:bg-gray-50 transition-all"
            style={{
              borderColor: "var(--color-primary)",
              color: "var(--color-primary)",
              borderRadius: "var(--rounded-btn)",
            }}
          >
            📮 メールアプリで開く
          </a> */}

          <p className="text-xs text-gray-500 mt-4">
            ※ご返信には数日かかる場合がございます
          </p>
        </div>
      </div>
    </div>
  );
}

