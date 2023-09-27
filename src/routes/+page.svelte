<script lang="ts">
	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
	import Masterpiece from './components/Masterpiece.svelte';
	import WordOfTheDay from './components/WordOfTheDay.svelte';
	import MathProblems from './components/MathProblems.svelte';
	import Calendar from './components/Calendar.svelte';
	import Photo from './components/Photo.svelte';

	//data updaters
	import UpdatePhotos from './components/updaters/UpdatePhotos.svelte';
	import UpdateWords from './components/updaters/UpdateWords.svelte';
	import DeleteDB from './components/updaters/DeleteDB.svelte';

	export let data;
	const { dailyWeather, masterpiece, supabase, session } = data;

	console.log(data);
</script>

<div class="flex flex-row h-12">
	<DeleteDB />
	<UpdatePhotos />
	<UpdateWords />
</div>

<div class="grid grid-cols-2 gap-4 p-4">
	<div class="flex flex-col gap-4">
		<div class="component"><DateTime /></div>
		<div class="component"><DailyWeather /></div>
		<div class="component"><Masterpiece {masterpiece} /></div>
		<div class="component"><WordOfTheDay /></div>
		<div class="component"><MathProblems /></div>
	</div>
	<div class="flex flex-col gap-4">
		<div class="component"><Calendar /></div>
		<div class="component"><Photo /></div>
	</div>
</div>
