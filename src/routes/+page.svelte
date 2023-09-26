<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
	import Masterpiece from './components/Masterpiece.svelte';
	import WordOfTheDay from './components/WordOfTheDay.svelte';
	import MathProblems from './components/MathProblems.svelte';

	export let data;
	const { dailyWeather, masterpiece, word, supabase } = data;

	console.log(data);

	const login = async () => {
		supabase.auth.signInWithOAuth({
			provider: 'google'
		});
	};

	// console.log(data);
</script>

<button class="w-32 h-16 -mt-8 bg-white" on:click={login}>Log Data</button>
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
