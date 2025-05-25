
import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  },
});

export const generateTagline = async (product: string) => {
  // console.log('EEE', import.meta.env.VITE_OPENAI_API_KEY);
  const prompt = `Generate a catchy one-line tagline for a homeware product: "${product}"`;

  const res = await openai.post('/chat/completions', {
    model: 'gpt-4.1',
    // model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    // temperature: 0.7,
    // max_tokens: 40,
  });
  console.log('Response', res)

  return res.data.choices[0].message.content.trim();

    // try {
    //   const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
    //     prompt: product,
    //     max_tokens: 100,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    //     },
    //   }
    //   );
    
    // // setGeneratedText(response.data.choices[0].text);
    // console.log('Response:', response.data);
    // return response.data.choices[0].text;

    // } catch (error) {
    //   console.error('Error generating text:', error);
    // }


    // const response = await client.responses.create({
    //   model: 'gpt-4.1',
    //   input: 'Write a one-sentence bedtime story about a unicorn.',
    // });

    // console.log(response.output_text);
};
