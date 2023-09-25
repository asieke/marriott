<script lang="ts">
	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
</script>

<div class="grid grid-cols-2 gap-4 p-4">
	<div class="flex flex-col gap-4">
		<div class="component"><DateTime /></div>
		<div class="component"><DailyWeather /></div>
	</div>
	<div>
		<div class="component">Component 1</div>
	</div>
</div>
