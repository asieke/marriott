import axios from 'axios';
import type { Event, CalendarDay } from '$lib/types';
import { GOOGLE_SHEET_KEY } from '$env/static/private';

const displayDate = (dateStr: string) => {
	const date = new Date(dateStr);
	return date.toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
};

export const GET = async () => {
	try {
		const events: CalendarDay[] = [];

		const url =
			'https://script.google.com/macros/s/AKfycbznfSlOeuCiS-Alw5AFQiIE7SNelvQOcYT1WpiCw-RwoYJerhW89GqJKAMqZ5t3mJkP/exec';
		const params = '?key=' + GOOGLE_SHEET_KEY + '&type=calendar';

		const { data } = await axios.get<Event[]>(url + params);

		data.forEach((event) => {
			const date = displayDate(event.startTime);

			const index = events.findIndex((item) => item.date === date);

			if (index === -1) {
				events.push({
					date,
					events: [event]
				});
			} else {
				events[index].events.push(event);
			}
		});

		return new Response(JSON.stringify(events));
	} catch (e) {
		console.log(e);
		return new Response(JSON.stringify({ error: e }));
	}
};
