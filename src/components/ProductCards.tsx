import { useState } from 'react';
import { products as defaultProducts, productsSection } from '../lib/data';
import Container from './Container';
import Content from './Content';
import ProductCard from './ProductCard';
import { useTaglineGenerator } from '../hooks/useTaglineGenerator';

// Custom hook for generating products
function useProductsGenerator() {
  const [products, setProducts] = useState(defaultProducts.slice(0, 3));
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    const prompt = `
      Generate 3 homeware products as a JSON array.
      Each product should have: id, title, description, href, price in thousands.
      Use realistic but fictional data.
      Return only the JSON array.
    `;
    try {
      const res = await import('../lib/gemini').then((m) =>
        m.generateTagline(prompt),
      );
      const cleaned = res.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);

      // Replace images with those from defaultProducts
      const productsWithImages = parsed.map((product: unknown, idx: number) =>
        typeof product === 'object' && product !== null
          ? {
              ...(product as Record<string, unknown>),
              image: defaultProducts[idx]?.image || '', // fallback to empty if not found
            }
          : {
              image: defaultProducts[idx]?.image || '',
            },
      );

      setProducts(productsWithImages);
    } catch {
      setProducts(defaultProducts.slice(0, 3));
    }
    setLoading(false);
  };

  return { products, loading, generate };
}

const ProductCards = () => {
  const {
    tagline,
    loading: sectionLoading,
    generate: generateSection,
  } = useTaglineGenerator();
  const {
    products,
    loading: productsLoading,
    generate: generateProducts,
  } = useProductsGenerator();

  const sectionData = tagline
    ? {
        title: tagline.title,
        description: tagline.description,
      }
    : productsSection;

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            href={product.href}
            price={product.price}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductCards;
