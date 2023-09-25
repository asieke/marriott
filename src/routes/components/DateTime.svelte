<script lang="ts">
	import { onMount } from 'svelte';

	let date = '';
	let time = '';

	onMount(() => {
		date = new Date().toLocaleDateString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});

		setInterval(() => {
			const date = new Date();
			time = date.toLocaleTimeString('en-US', {
				hour: 'numeric',
				minute: '2-digit',
				second: '2-digit'
			});
		}, 1000);
	});
</script>

<div class="p-4">
	<h1 class="font-mono text-4xl mb-3">{time}</h1>
	<h2 class="font-mono text-2xl">{date}</h2>
</div>
