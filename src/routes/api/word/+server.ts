import { OPENAI_API_KEY } from '$env/static/private';
import axios from 'axios';

const generateImage = async (prompt: string) => {
	const response = await axios.post(
		'https://api.openai.com/v1/images/generations',
		{
			prompt:
				'A recognizable, realistic and colorful 3D-rendered image of a ' +
				prompt +
				' that would be easily recognizable and appealing to a 5-year-old child.',
			n: 1,
			size: '256x256'
		},
		{
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			}
		}
	);
	return response.data.data[0].url;
};

const imageToBase64 = async (url: string): Promise<string> => {
	const response = await axios.get(url, {
		responseType: 'arraybuffer'
	});

	const base64 = Buffer.from(response.data, 'binary').toString('base64');
	return `data:image/jpeg;base64,${base64}`;
};

export const GET = async ({ url }: { url: URL }) => {
	// get the query params
	const word = url.searchParams.get('word');
	if (!word) return new Response(JSON.stringify({ message: 'Hello world', word: 'no word' }));

	const imgUrl = await generateImage(word);
	const base64 = await imageToBase64(imgUrl);

	return new Response(
		JSON.stringify({ message: 'Hello world', word: word, url: imgUrl, base64: base64 })
	);
};
