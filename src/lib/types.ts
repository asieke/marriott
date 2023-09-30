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

export type Art = {
	artist_id: number;
	artist_name: string;
	artist_url: string;
	short_description: string;
	start_year: number;
	end_year: number;
	region: string;
	artist_category: string;
	image_id: number;
	sk: string;
	title: string;
	image_category: string;
	image_url: string;
};

export type Word = {
	word: string;
	url: string;
};

export type Event = {
	startTime: string;
	endTime: string;
	title: string;
	description: string;
	location: string;
	color: string;
};

export type CalendarDay = {
	date: string;
	events: Event[];
};
