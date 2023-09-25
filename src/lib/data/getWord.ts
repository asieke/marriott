import axios from 'axios';
import { put, list, del } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN, OPENAI_API_KEY } from '$env/static/private';

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

export const getWord = async () => {
	const words = ['dog', 'cat', 'sheep', 'goat', 'duck', 'boat', 'hat', 'bat', 'rat'];
	const word = words[Math.floor(Math.random() * words.length)];

	// const allData = await list({
	// 	limit: 100,
	// 	token: BLOB_READ_WRITE_TOKEN
	// });

	// console.log(allData.blobs);

	// for (let i = 0; i < allData.blobs.length; i++) {
	// 	await del(allData.blobs[i].url, {
	// 		token: BLOB_READ_WRITE_TOKEN
	// 	});
	// }

	// Check if the file exists
	const data = await list({
		prefix: 'images/' + word,
		limit: 100,
		token: BLOB_READ_WRITE_TOKEN
	});

	if (data.blobs.length === 0) {
		// Generate a new image URL using OpenAI
		const generatedImageUrl = await generateImage(word);

		// Download the generated image from OpenAI
		const imageResponse = await axios.get(generatedImageUrl, {
			responseType: 'arraybuffer'
		});
		const imageBuffer = Buffer.from(imageResponse.data);

		// Upload the image to Vercel blob storage
		const { url } = await put('images/' + word + '.png', imageBuffer, {
			access: 'public',
			token: BLOB_READ_WRITE_TOKEN
		});

		return {
			word,
			url
		};
	} else {
		// If it exists, return the URL
		return {
			word,
			url: data.blobs[0].url
		};
	}
};
