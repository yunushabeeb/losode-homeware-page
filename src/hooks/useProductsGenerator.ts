import { useContext, useState } from 'react';
import { products as defaultProducts } from '../lib/data';
import { ProviderContext, type ContextType } from '../context/Provider';

// Custom hook for generating products
export function useProductsGenerator() {
  const [loading, setLoading] = useState(false);
  const { setProducts } = useContext(ProviderContext) as ContextType;

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
      console.log('Error generating products. Using default products.');
    }
    setLoading(false);
  };

  return { loading, generate };
}
