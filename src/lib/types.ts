export type DailyWeather = {
	day: string;
	high: number;
	low: number;
	id: number;
	pop: number;
	main: string;
	description: string;
	icon: string;
	sunrise: string;
	sunset: string;
};

export type Masterpiece = {
	id: number;
	name: string;
	date: number;
	artist: string;
	url: string;
};

export type Word = {
	word: string;
	url: string;
};
