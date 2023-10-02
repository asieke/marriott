import axios from 'axios';
import { API_NINJA_KEY } from '$env/static/private';

const OPTIONS = {
	headers: {
		'X-Api-Key': API_NINJA_KEY
	}
};

export const GET = async () => {
	let fact = '';
	let quote = '';
	let author = '';

	const { data: factData } = await axios.get(
		'https://api.api-ninjas.com/v1/facts?limit=1',
		OPTIONS
	);
	fact = factData[0].fact;

	do {
		const { data: quoteData } = await axios.get(
			'https://api.api-ninjas.com/v1/quotes?limit=1',
			OPTIONS
		);
		quote = quoteData[0].quote;
		author = quoteData[0].author;
	} while (quote.length > 250);

	return new Response(
		JSON.stringify({
			fact,
			quote: {
				text: quote,
				author
			}
		})
	);
};
