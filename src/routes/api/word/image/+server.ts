import { OPENAI_API_KEY } from '$env/static/private';
import axios from 'axios';

export const POST = async ({ request }: { request: Request }) => {
	//get body of post request
	const body = await request.json();

	try {
		const data = {
			model: 'dall-e-3',
			prompt: body.prompt,
			n: 1,
			size: '1024x1024'
		};

		const res = await axios.post('https://api.openai.com/v1/images/generations', data, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${OPENAI_API_KEY}`
			}
		});

		const imageUrl = res.data.data[0].url;
		const imageResponse = await axios.get(imageUrl, {
			responseType: 'arraybuffer'
		});
		const imageBase64 = Buffer.from(imageResponse.data, 'binary').toString('base64');

		return new Response(JSON.stringify({ url: imageBase64 }));
	} catch (error) {
		return new Response(JSON.stringify({ url: '' }));
	}
};
