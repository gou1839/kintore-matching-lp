'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * URLパラメータから流入元を検出してカウントするコンポーネント
 * 例: ?source=openchat でアクセスすると、openchatとしてカウント
 */
export default function AnalyticsTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // URLパラメータからsourceを取得
    const source = searchParams.get('source');
    
    if (source) {
      // カウントを送信（エラーは無視）
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ source }),
      }).catch(() => {
        // エラーは無視（ログ出力もしない）
      });
    }
  }, [searchParams]);

  // このコンポーネントは何も表示しない
  return null;
}
