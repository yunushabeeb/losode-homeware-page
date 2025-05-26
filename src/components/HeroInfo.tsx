import Container from './Container';
import Content from './Content';
import { ProductCaption } from './ProductCaption';
import { heroInfoContent, taglinePrompts } from '../lib/data';
import { useTaglineGenerator } from '../hooks/useTaglineGenerator';

const HeroInfo = () => {
  const { tagline, loading, generate } = useTaglineGenerator();

  const handleGenerate = () => {
    generate(taglinePrompts.hero);
  };

  // Use tagline if available, otherwise fallback to heroInfoContent
  const contentData = tagline
    ? {
        title: tagline.title,
        description: tagline.description,
        buttonText: tagline.buttonText,
      }
    : heroInfoContent;

  return (
    <Container bg="bg-white">
      <div className="relative">
        <div className="w-full text-center mx-auto sm:w-3/4 max-w-[1200px] mb-8 sm:hidden md:flex">
          <Content
            title={contentData.title}
            description={contentData.description}
            buttonText={contentData.buttonText}
            variant="hero"
          />
        </div>
        {/* Subtle, small button centered below the content */}
        <div className="w-full flex justify-center mb-6">
          <button
            onClick={handleGenerate}
            className="px-3 py-1 text-xs border border-gray-300 text-gray-600 bg-white rounded hover:bg-gray-100 transition"
            disabled={loading}
            aria-label="Generate tagline"
          >
            {loading ? 'Generating...' : 'Generate Tagline'}
          </button>
        </div>
        <ProductCaption />
      </div>
    </Container>
  );
};

export default HeroInfo;
