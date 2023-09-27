<script lang="ts">
	import { Umbrella, ArrowUp, ArrowDown, Moon, Sun } from 'lucide-svelte';
	import axios from 'axios';
	import { onMount } from 'svelte';
	import type { DailyWeather } from '$lib/types';

	let dailyWeather: DailyWeather[];

	const updateWeather = async () => {
		const { data } = await axios.get<DailyWeather[]>('/api/weather');
		dailyWeather = data;
	};

	onMount(async () => {
		await updateWeather();
		setInterval(async () => {
			await updateWeather();
			console.log('updated weather', new Date());
		}, 60 * 60 * 1000); //update weather every hour
	});
</script>

<div class="grid grid-cols-4 gap-1 text-center">
	{#if dailyWeather}
		{#each dailyWeather as item}
			<div class="flex flex-col justify-center align-middle items-center space-y-2">
				<div class="font-bold">{item.day}</div>
				<div>
					<img
						class="h-18 w-18"
						src="https://openweathermap.org/img/wn/{item.icon}@2x.png"
						alt={item.description}
					/>
				</div>
				<div class="flex flex-row">
					<ArrowDown class="h-5 w-5 pt-[4px]" />{item.low}
					<ArrowUp class="h-5 w-5 pt-[4px]" />{item.high}
				</div>
				<div class="flex flex-row pt-2"><Umbrella class="h-5 w-5 pt-[4px] pr-1" />{item.pop}%</div>
				<div class="flex flex-row pt-2">
					<Sun class="h-4 w-4 pt-[4px]" />{item.sunrise}
					<Moon class="ml-2 h-4 w-4 pt-[4px]" />{item.sunset}
				</div>
			</div>
		{/each}
	{/if}
</div>
