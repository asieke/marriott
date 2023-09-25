<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { Umbrella, ArrowUp, ArrowDown, Moon, Sun } from 'lucide-svelte';

	const apiKey = '334113bafc31ec094643831188e83d2b'; // Replace with your actual API key
	const zipCode = '06897';
	const units = 'imperial'; // For Fahrenheit; use 'metric' for Celsius

	type DailyWeather = {
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

	let dailyWeather: DailyWeather[] = [];

	async function fetchWeather() {
		try {
			const url = `https://api.openweathermap.org/data/2.5/forecast/daily?cnt=4&lat=${41.19807}&lon=${-73.46086}&appid=${apiKey}&units=imperial`;
			const response = await axios.get(url);

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
			console.error('Error fetching weather data:', error);
		}
	}

	onMount(async () => {
		dailyWeather = await fetchWeather();
	});
</script>

<div class="grid grid-cols-4 gap-1 text-sm text-center">
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
				<ArrowDown class="h-4 w-4 pt-[1px]" />{item.low}
				<ArrowUp class="h-4 w-4 pt-[1px]" />{item.high}
			</div>
			<div class="flex flex-row pt-2"><Umbrella class="h-4 w-4 pt-[1px]" />{item.pop}%</div>
			<div class="flex flex-row pt-2">
				<Sun class="h-3 w-3 pt-[4px]" />{item.sunrise}
				<Moon class="pl-1 h-3 w-3 pt-[4px]" />{item.sunset}
			</div>
		</div>
	{/each}
</div>
