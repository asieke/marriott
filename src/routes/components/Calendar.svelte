<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import type { Event, CalendarDay } from '$lib/types';

	const colors = {
		jane: '#fb923c',
		george: '#2dd4bf',
		stan: '#c084fc',
		other: '#4ade80'
	};

	let calendarDays: CalendarDay[] = [];
	const getCalendarData = async () => {
		const { data } = await axios.get<CalendarDay[]>('/api/calendar');
		calendarDays = data;
	};

	onMount(async () => {
		await getCalendarData();
		setInterval(async () => {
			await getCalendarData();
		}, 10 * 60 * 1000);
	});

	const displayTime = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit'
		});
	};

	const getColor = (title: string) => {
		try {
			if (title.toLowerCase().includes('jane')) {
				return colors.jane;
			} else if (title.toLowerCase().includes('george')) {
				return colors.george;
			} else if (title.toLowerCase().includes('stan')) {
				return colors.stan;
			} else {
				return colors.other;
			}
		} catch (e) {
			return colors.other;
		}
	};
</script>

<div class="h-[1000px] overflow-hidden">
	{#if calendarDays.length > 0}
		{#each calendarDays as { date, events }}
			<div>{date}</div>
			{#each events as { title, startTime, endTime, description, location }}
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
