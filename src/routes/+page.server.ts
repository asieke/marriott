//this file is the svelte +page.server.ts, please write the ts load function

import { getDailyWeather } from '$lib/data/getDailyWeather';
import { getMasterpiece } from '$lib/data/getMasterpiece';

export const load = async () => {
	//load data here

	const dailyWeather = await getDailyWeather();
	const masterpiece = await getMasterpiece();

	return {
		dailyWeather,
		masterpiece
	};
};
