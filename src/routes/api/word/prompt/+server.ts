import OpenAI from 'openai';
import { OPENAI_API_KEY } from '$env/static/private';

const openai = new OpenAI({
	apiKey: OPENAI_API_KEY // defaults to process.env["OPENAI_API_KEY"]
});

export const POST = async ({ request }: { request: Request }) => {
	//get body of post request
	const body = await request.json();

	const words = body.words.join(', ');

	const system = `Here is a list of words for childrens flashcards: ${words}.  Please ONLY return your response as a valid JSON object with the fields "word" (string) and "prompts" (an array of strings)`;

	const content = `
	Please generate a new word that meets the following criteria:
	1. Is not in the provided word list
	2. Is a word that a 1st grader should be able to sound out
	3. Has a good image that can capture the meaning for the flashcard
	Please provide 2 things:
	1. The word
	2. 4 different detailed prompts that can be sent to an image generation API to create an image
	`;

	try {
		const completion = await openai.chat.completions.create({
			messages: [
				{ role: 'system', content: system },
				{ role: 'user', content: content }
			],
			model: 'gpt-4-1106-preview',
			response_format: { type: 'json_object' }
		});

		const json = JSON.parse(completion.choices[0].message.content || '');

		if (!json.word || !json.prompts) throw new Error('Invalid response from OpenAI');

		return new Response(JSON.stringify(json));
	} catch (error) {
		return new Response(JSON.stringify({ error: error }));
	}
};
