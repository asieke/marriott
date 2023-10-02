<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';

	let fact: string = '';
	let quote: string = '';
	let author: string = '';

	const getFacts = async () => {
		const { data } = await axios.get('/api/facts');
		fact = data.fact;
		quote = data.quote.text;
		author = data.quote.author;
	};

	onMount(async () => {
		await getFacts();
		setInterval(() => {
			getFacts();
		}, 1000 * 60 * 30);
	});
</script>

<div class="component flex flex-row"><span class="mr-2 text-2xl">💡</span><span>{fact}</span></div>
<div class="component flex flex-row">
	<span class="mr-2 text-2xl">✨</span><span>{quote} -{author}</span>
</div>
