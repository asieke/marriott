<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
	import Masterpiece from './components/Masterpiece.svelte';
	import WordOfTheDay from './components/WordOfTheDay.svelte';
	import MathProblems from './components/MathProblems.svelte';

	export let data;

	const { dailyWeather, masterpiece, word } = data;

	// console.log(data);
</script>

<div class="grid grid-cols-2 gap-4 p-4">
	<div class="flex flex-col gap-4">
		<div class="component"><DateTime /></div>
		<div class="component"><DailyWeather {dailyWeather} /></div>
		<div class="component"><Masterpiece {masterpiece} /></div>
		<div class="component"><WordOfTheDay {word} /></div>
		<div class="component"><MathProblems /></div>
	</div>
	<div>
		<div class="component">Component 1</div>
	</div>
</div>
