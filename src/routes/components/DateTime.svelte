<script lang="ts">
	import { onMount } from 'svelte';

	const getDate = () => {
		const date = new Date();
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	};

	const getTime = () => {
		const date = new Date();
		return date.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit'
		});
	};

	let date = getDate();
	let time = getTime();

	onMount(() => {
		setInterval(() => {
			time = getTime();
			date = getDate();
		}, 1000);
	});
</script>

<div class="h-[120px] px-4 flex align-middle items-center">
	<div>
		<h1 class="font-mono mb-3">
			<span class="text-6xl">{time.slice(0, -3)}</span>
			<span class="text-4xl">{time.slice(-2)}</span>
		</h1>
		<h2 class="font-mono text-2xl">{date}</h2>
	</div>
</div>
