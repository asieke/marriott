//this file is the svelte +page.server.ts, please write the ts load function

import { getDailyWeather } from '$lib/data/getDailyWeather';
import { getMasterpiece } from '$lib/data/getMasterpiece';
import { getCalendar } from '$lib/data/getCalendar';

export const load = async () => {
	//load data here

	const dailyWeather = await getDailyWeather();
	const masterpiece = await getMasterpiece();
	const calendar = await getCalendar();

	return {
		dailyWeather,
		masterpiece,
		calendar
	};
};
