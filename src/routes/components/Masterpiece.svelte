<script lang="ts">
	import type { Art } from '$lib/types';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let art: Art;

	onMount(async () => {
		const { data } = await axios.get<Art>('/api/art/getRandomArt');
		art = data;
		console.log(art);

		setInterval(async () => {
			const { data } = await axios.get<Art>('/api/art/getRandomArt');
			art = data;
		}, 5 * 60 * 1000);
	});
</script>

<div>
	<div class="w-full h-[800px] overflow-clip text-ellipsis">
		{#if art}
			<img src={art.image_url} alt={art.title} class="w-full h-[500px] object-cover" />
			<div>
				<div class="pt-2 text-2xl font-bold">{art.title}</div>

				<div class="text-sm">
					<img src={art.artist_url} alt={art.artist_name} class="float-left w-32 h-32 mt-3 mr-3" />
					<div class="pt-2 text-xl font-bold">{art.artist_name}</div>
					{art.short_description}
				</div>
			</div>
		{/if}
	</div>
</div>
