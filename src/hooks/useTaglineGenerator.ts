import { useState } from 'react';
import { generateTagline } from '../lib/gemini';

type TaglineResult = {
  title: string;
  description: string;
  buttonText: string;
};

export function useTaglineGenerator() {
  const [tagline, setTagline] = useState<TaglineResult | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = async (prompt: string) => {
    setLoading(true);
    const result = await generateTagline(prompt);
    console.log('Generated tagline:', result);

    try {
      // Remove code block markers if present
      const cleaned = result
        .replace(/```json|```/g, '')
        .replace(/(\r\n|\n|\r)/gm, '');
      const parsed = JSON.parse(cleaned);

      setTagline({
        title: parsed.tagline || parsed.title,
        description: parsed.description,
        buttonText: parsed.buttonText,
      });
    } catch{
      setTagline({
        title: 'Could not parse tagline',
        description: 'Please try again.',
        buttonText: 'Try Again',
      });
    }
    setLoading(false);
  };

  return { tagline, loading, generate };
}
