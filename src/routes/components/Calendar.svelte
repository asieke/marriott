<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { page } from '$app/stores';
	import localforage from 'localforage';

	const colors = {
		jane: '#fb923c',
		george: '#2dd4bf',
		stan: '#c084fc',
		other: '#4ade80'
	};

	type Event = {
		startTime: string;
		endTime: string;
		title: string;
		description: string;
		location: string;
		color: string;
	};

	const displayDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	};

	let events: { date: string; events: Event[] }[] = [];

	const getCalendarData = async () => {
		const url =
			'https://script.google.com/macros/s/AKfycbz2XHjv0ndBmueIm7V5P-K3YYb7lBAhBWbbyfmWuxfuAmlMwPOeMYrFU8kP7Cq3xZX1/exec';
		const params = '?key=test1234&type=calendar';

		const { data } = await axios.get<Event[]>(url + params);

		let temp: { date: string; events: Event[] }[] = [];

		data.forEach((event) => {
			const date = displayDate(event.startTime);

			const index = temp.findIndex((item) => item.date === date);

			if (index === -1) {
				temp.push({
					date,
					events: [event]
				});
			} else {
				temp[index].events.push(event);
			}
		});

		events = temp;

		console.log(events);
	};

	onMount(async () => {
		await getCalendarData();
	});

	const displayTime = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit'
		});
	};

	const getColor = (title: string) => {
		if (title.toLowerCase().includes('jane')) {
			return colors.jane;
		} else if (title.toLowerCase().includes('george')) {
			return colors.george;
		} else if (title.toLowerCase().includes('stan')) {
			return colors.stan;
		} else {
			return colors.other;
		}
	};
</script>

<div class="h-[1000px] overflow-hidden">
	{#if events.length > 0}
		{#each events as { date, events: eventsForDate }}
			<div>{date}</div>
			{#each eventsForDate as { title, startTime, endTime, description, location }}
				<div class="event grid grid-cols-2" style="grid-template-columns: 15px auto;">
					<div class="w-fullpy-2" style="background-color: {getColor(title)}" />
					<div class="bg-slate-700/80 w-full p-2">
						<div class="font-bold">{title}</div>
						<div>{description}</div>
						<div>{displayTime(startTime)} - {displayTime(endTime)}</div>
						<div class="text-sm">{location}</div>
					</div>
				</div>
			{/each}
		{/each}
	{/if}
</div>

<style>
	.event {
		@apply p-2 mb-2 rounded;
	}
</style>
