import React, { useState } from "react";
import { URLInputForm } from "../components/URLInputForm";
import { URLResultCard } from "../components/URLResultCard";
import { AnalyticsPanel } from "../components/AnalyticsPanel";

export const URLShortenerPage: React.FC = () => {
  const [result, setResult] = useState<any | null>(null);

  const handleShorten = (data: { longURL: string; validity?: number; customCode?: string }) => {
    const now = new Date();
    const expires = new Date(now.getTime() + (data.validity || 30) * 60000);

    setResult({
      shortURL: `https://short.ly/${data.customCode || Math.random().toString(36).substring(7)}`,
      createdAt: now.toISOString(),
      expiresAt: expires.toISOString(),
      clicks: Math.floor(Math.random() * 100),
      source: "Direct",
      lastClickedAt: new Date(now.getTime() - 60000).toISOString(),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <URLInputForm onShorten={handleShorten} />
        {result && (
          <div className="mt-6 space-y-4">
            <URLResultCard result={result} />
            <AnalyticsPanel
              clicks={result.clicks}
              source={result.source}
              lastClickedAt={result.lastClickedAt}
            />
          </div>
        )}
      </div>
    </div>
  );
};