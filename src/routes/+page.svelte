<script lang="ts">
	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
	import Masterpiece from './components/Masterpiece.svelte';
	import WordOfTheDay from './components/WordOfTheDay.svelte';
	import MathProblems from './components/MathProblems.svelte';
	import Calendar from './components/Calendar.svelte';
	import Photo from './components/Photo.svelte';
	import Facts from './components/Facts.svelte';

	//data updaters
	import DeleteDB from './components/updaters/DeleteDB.svelte';
	import GooglePhotos from './components/updaters/GooglePhotos.svelte';
</script>

<div class="flex flex-row h-12">
	<DeleteDB />
	<GooglePhotos />
</div>

<div class="grid grid-cols-2 gap-4 p-4">
	<div class="flex flex-col gap-4">
		<div class="component"><DateTime /></div>
		<div class="component"><DailyWeather /></div>
		<div class="component"><Masterpiece /></div>
		<div class="component"><WordOfTheDay /></div>
		<div class="component"><MathProblems /></div>
	</div>
	<div class="flex flex-col gap-4">
		<div class="component"><Calendar /></div>
		<div class="component"><Photo /></div>
		<Facts />
	</div>
</div>
