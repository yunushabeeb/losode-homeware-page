import { useTrendsGenerator } from '../hooks/useTrendsGenerator';
import Container from './Container';
import TrendCard from './TrendCard';

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
