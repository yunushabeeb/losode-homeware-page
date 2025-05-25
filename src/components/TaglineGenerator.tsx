import { useState } from 'react';
import { generateTagline } from '../lib/openai';

export default function TaglineGenerator() {
  const [input, setInput] = useState('');
  const [tagline, setTagline] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const result = await generateTagline(input);
      setTagline(result);
    } catch(error) {
      console.log(error)
      setTagline('Failed to generate tagline.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4 border rounded-xl shadow bg-white max-w-md mx-auto space-y-3">
      <h2 className="text-xl font-bold">AI Tagline Generator</h2>
      <input
        type="text"
        className="w-full border p-2 rounded"
        placeholder="Enter product name or description"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        {loading ? 'Generating...' : 'Generate Tagline'}
      </button>
      {tagline && <p className="text-green-700 font-medium">"{tagline}"</p>}
    </div>
  );
}
