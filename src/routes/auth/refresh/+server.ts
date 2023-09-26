import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private';
import axios from 'axios';
import qs from 'qs';

export const POST = async ({ request }: { request: Request }) => {
	const { refresh_token } = await request.json();

	console.log(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, refresh_token);

	const data = {
		client_id: GOOGLE_CLIENT_ID,
		client_secret: GOOGLE_CLIENT_SECRET,
		refresh_token: refresh_token,
		grant_type: 'refresh_token'
	};

	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	try {
		const response = await axios.post(
			'https://oauth2.googleapis.com/token',
			qs.stringify(data),
			config
		);
		return new Response(JSON.stringify(response.data));
	} catch (error) {
		console.error('Failed to refresh token', error);
		return null;
	}
};
