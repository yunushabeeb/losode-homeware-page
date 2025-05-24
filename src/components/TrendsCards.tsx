import { trends } from '../lib/data';
import Container from './Container';
import TrendCard from './TrendCard';

const TrendsCards = () => {
  return (
    <Container bg="bg-white">
      <div className="flex flex-row flex-wrap justify-between gap-6 mb-10">
        {trends.map((trend) => (
          <TrendCard
            key={trend.id}
            index={trend.id}
            title={trend.title}
            description={trend.description}
            buttonText={trend.buttonText}
            image={trend.image}
          />
        ))}
      </div>
    </Container>
  );
};

export default TrendsCards;
