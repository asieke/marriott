<script lang="ts">
	import type { Art } from '$lib/types';
	import axios from 'axios';
	import { onMount } from 'svelte';

	let art: Art;

	let artImage: HTMLImageElement;
	let artistImage: HTMLImageElement;

	const loadNewImage = async () => {
		const { data } = await axios.get<Art>('/api/art/getRandomArt');
		art = data;
	};

	onMount(async () => {
		await loadNewImage();
		setInterval(async () => {
			const { data } = await axios.get<Art>('/api/art/getRandomArt');
			art = data;
		}, 5 * 60 * 1000);
	});

	const handleArtLoadError = async () => {
		console.log('error loading art image', artImage.src);
		// await loadNewImage();
	};

	const handleArtistLoadError = async () => {
		console.log('error loading artist image', artistImage.src);
		// artistImage.style.display = 'none';
	};
</script>

<div>
	<div class="w-full h-[940px] overflow-hidden text-ellipsis p-2">
		{#if art}
			<img
				src={art.image_url}
				alt={art.title}
				class="w-full h-[560px] object-cover"
				on:error={handleArtLoadError}
				bind:this={artImage}
			/>
			<div>
				<div class="pt-2 text-2xl font-bold">{art.title}</div>

				<div class="text-base">
					<img
						src={art.artist_url}
						alt={art.artist_name}
						class="float-left w-48 h-48 mt-3 mr-3"
						on:error={handleArtistLoadError}
						bind:this={artistImage}
					/>
					<div class="pt-2 text-xl font-bold">{art.artist_name}</div>
					{art.short_description}
				</div>
			</div>
		{/if}
	</div>
</div>
