import { useState } from 'react';
import { products as defaultProducts } from '../lib/data';

// Custom hook for generating products
export function useProductsGenerator() {
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