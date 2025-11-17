"use client";

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🏋️</div>
            <span className="text-xl font-bold" style={{ color: "var(--color-primary)" }}>
              筋トレマッチング(仮称)
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              特徴
            </button>
            <button
              onClick={() => scrollToSection("how-to-use")}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              使い方
            </button>
            {/* <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              よくある質問
            </button> */}
            <button
              className="px-6 py-2 rounded-full text-white font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--rounded-btn)",
              }}
            >
              クローズドテストに応募
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              特徴
            </button>
            <button
              onClick={() => scrollToSection("how-to-use")}
              className="text-left py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              使い方
            </button>
            {/* <button
              onClick={() => scrollToSection("faq")}
              className="text-left py-2 text-gray-700 hover:text-[var(--color-primary)] transition-colors"
            >
              よくある質問
            </button> */}
            <button
              className="px-6 py-2 rounded-full text-white font-semibold shadow-md"
              style={{
                backgroundColor: "var(--color-primary)",
                borderRadius: "var(--rounded-btn)",
              }}
            >
              クローズドテストに応募
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

