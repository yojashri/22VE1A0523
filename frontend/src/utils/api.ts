export async function shortenURL(longUrl: string, expiry: number, customShortCode?: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        shortUrl: `https://short.ly/${customShortCode || "xyz123"}`,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + expiry * 60000).toISOString(),
        shortCode: customShortCode || "xyz123",
      });
    }, 1000);
  });
}

export async function getAnalytics(shortCode: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        clicks: Math.floor(Math.random() * 100),
        source: "Direct",
        lastClickedAt: new Date(Date.now() - 60000).toISOString(),
      });
    }, 1000);
  });
}
