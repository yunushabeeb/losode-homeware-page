// import { productsSection } from '../lib/data';
import Container from './Container';
import Content from './Content';
import ProductCard from './ProductCard';
import { useTaglineGenerator } from '../hooks/useTaglineGenerator';
import { useProductsGenerator } from '../hooks/useProductsGenerator';
import { useContext } from 'react';
import { ProviderContext, type ContextType } from '../context/Provider';

const ProductCards = () => {
  const { products, isSearching } = useContext(ProviderContext) as ContextType;

  const {
    tagline,
    loading: sectionLoading,
    generate: generateSection,
  } = useTaglineGenerator();
  const { loading: productsLoading, generate: generateProducts } =
    useProductsGenerator();

  const sectionData = tagline
    ? {
        title: tagline.title,
        description: tagline.description,
      }
    : {
        title: 'Our Homeware Collection',
        description: 'Discover our curated selection of homeware products.',
      };

  return (
    <Container bg="bg-[#F9F9F9]">
      <section>
        <Content
          title={sectionData.title}
          description={sectionData.description}
          variant="products"
        />
        <div className="flex gap-2 justify-end mt-2">
          <button
            onClick={() =>
              generateSection(
                'Generate a catchy section title and a short description for a homeware product grid. Return your result in JSON format with title, description, and buttonText fields. The title should be engaging for a homeware brand. The description should be 1-2 sentences. The buttonText can be omitted or left empty.',
              )
            }
            className="px-2 py-1 text-xs border border-gray-300 text-gray-600 bg-white rounded hover:bg-gray-100 transition"
            disabled={sectionLoading}
            aria-label="Generate product section tagline"
          >
            {sectionLoading ? 'Generating...' : 'Generate Section'}
          </button>
          <button
            onClick={generateProducts}
            className="px-2 py-1 text-xs border border-gray-300 text-gray-600 bg-white rounded hover:bg-gray-100 transition"
            disabled={productsLoading}
            aria-label="Generate products"
          >
            {productsLoading ? 'Generating...' : 'Generate Products'}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
        {products.length > 0 ? (
          <div className="contents">
            {(isSearching ? products : products.slice(0, 3)).map((product) => (
              <div
                key={product.id}
                className="transition-all duration-500 ease-in-out transform animate-fadeIn"
              >
                <ProductCard
                  title={product.title as string}
                  description={product.description as string}
                  image={product.image as string}
                  href={product.href as string}
                  price={product.price as unknown as string}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <p className="text-gray-500 text-lg font-medium">
              No products found.
            </p>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.5s;
          }
        `}
      </style>
    </Container>
  );
};

export default ProductCards;
