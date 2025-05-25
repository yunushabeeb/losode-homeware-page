import { useState } from 'react';
import { trends as defaultTrends } from '../lib/data';
import Container from './Container';
import TrendCard from './TrendCard';

// Custom hook for generating trends
function useTrendsGenerator() {
  const [trends, setTrends] = useState(defaultTrends.slice(0, 3));
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const prompt = `
      Generate 3 homeware trends as a JSON array.
      Each trend should have: id, title, description, buttonText.
      Use realistic but fictional data. The title should be short.
      Return only the JSON array.
    `;
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

const TrendsCards = () => {
  const { trends, loading, generate } = useTrendsGenerator();

  return (
    <Container bg="bg-white">
      <div className="flex flex-row flex-wrap justify-between gap-6 mb-10">
        {trends.map((trend, index) => (
          <TrendCard
            key={trend.id}
            index={Number(index + 1)}
            title={trend.title}
            description={trend.description}
            buttonText={trend.buttonText}
            image={trend.image}
          />
        ))}
      </div>
      <div className="flex justify-end">
        <button
          onClick={generate}
          className="px-2 py-1 text-xs border border-gray-300 text-gray-600 bg-white rounded hover:bg-gray-100 transition"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate Trends'}
        </button>
      </div>
    </Container>
  );
};

export default TrendsCards;
