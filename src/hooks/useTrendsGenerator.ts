import { useState } from 'react';
import { trends as defaultTrends, taglinePrompts } from '../lib/data';



// Custom hook for generating trends
export function useTrendsGenerator() {
  const [trends, setTrends] = useState(defaultTrends.slice(0, 3));
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const prompt = taglinePrompts.trends;
    try {
      const res = await import('../lib/gemini').then((m) =>
        m.generateTagline(prompt),
      );
      const cleaned = res.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);

      // Use images from defaultTrends
      const trendsWithImages = parsed.map((trend: unknown, idx: number) => ({
        ...(typeof trend === 'object' && trend !== null ? trend : {}),
        image: defaultTrends[idx]?.image || '',
      }));

      setTrends(trendsWithImages);
    } catch {
      setTrends(defaultTrends.slice(0, 3));
    }
    setLoading(false);
  };

  return { trends, loading, generate };
}