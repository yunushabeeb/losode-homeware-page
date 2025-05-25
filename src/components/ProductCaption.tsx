import Content from './Content';
import { productCaption } from '../lib/data';
import { useTaglineGenerator } from '../hooks/useTaglineGenerator';

export const ProductCaption = () => {
  const { tagline, loading, generate } = useTaglineGenerator();

  const handleGenerate = () => {
    generate(
      'Generate a product caption for a homeware product image. Return your result in JSON format with tagline, description, and buttonText fields. The tagline should be catchy and engaging, suitable for a homeware brand. The description should be 1-2 sentences expanding on the tagline. The buttonText should be a short CTA.',
    );
  };

  const contentData = tagline
    ? {
        title: tagline.title,
        description: tagline.description,
        buttonText: tagline.buttonText,
      }
    : productCaption;

  return (
    <div className="relative">
      <img
        src={productCaption.desktopImage}
        alt="Product Caption"
        className="max-sm:hidden"
      />
      <img
        src={productCaption.mobileImage}
        alt="Product Caption"
        className="sm:hidden"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      >
        <div className="flex justify-center text-white mb-4 md:mb-8 absolute left-0 right-0 bottom-0 px-3">
          <Content
            title={contentData.title}
            description={contentData.description}
            buttonText={contentData.buttonText}
            variant="product-caption"
          />
        </div>
        {/* Subtle, small button in the bottom right corner of the caption */}
        <div className="absolute right-4 bottom-4">
          <button
            onClick={handleGenerate}
            className="px-2 py-1 text-xs border border-gray-300 text-gray-600 bg-white bg-opacity-40 rounded hover:bg-opacity-60 transition"
            disabled={loading}
            aria-label="Generate product caption"
          >
            {loading ? 'Generating...' : 'Generate Caption'}
          </button>
        </div>
      </div>
    </div>
  );
};
