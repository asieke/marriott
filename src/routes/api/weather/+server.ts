import { getDailyWeather } from '$lib/data/getDailyWeather';

export const GET = async () => {
	const weather = await getDailyWeather();
	return new Response(JSON.stringify(weather));
};
