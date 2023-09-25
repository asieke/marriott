import axios from 'axios';

import { OPEN_WEATHER_KEY } from '$env/static/private';

import type { DailyWeather } from '$lib/types';

export async function getDailyWeather(): Promise<DailyWeather[]> {
	console.log('fetching weather', OPEN_WEATHER_KEY);
	try {
		const url = `https://api.openweathermap.org/data/2.5/forecast/daily?cnt=4&lat=${41.19807}&lon=${-73.46086}&appid=${OPEN_WEATHER_KEY}&units=imperial`;
		const response = await axios.get(url);

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		return response.data.list.map((item: any) => ({
			day: new Date(1000 * item.dt).toLocaleDateString('en-US', { weekday: 'long' }),
			high: Math.floor(item.temp.max),
			low: Math.floor(item.temp.min),
			pop: Math.floor(item.pop * 100),
			id: item.weather[0].id,
			main: item.weather[0].main,
			description: item.weather[0].description,
			icon: item.weather[0].icon,
			sunrise: new Date(1000 * item.sunrise)
				.toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: '2-digit'
				})
				.slice(0, -2),
			sunset: new Date(1000 * item.sunset)
				.toLocaleTimeString('en-US', {
					hour: 'numeric',
					minute: '2-digit'
				})
				.slice(0, -2)
		}));
	} catch (error) {
		console.error('Error fetching weather data:');
		return [];
	}
}
