<script lang="ts">
	import { onMount } from 'svelte';
	import type { Word } from '$lib/types';
	import axios from 'axios';
	import { imageUrlToBase64 } from '$lib/utils/image';
	import { db } from '$lib/localdb';

	const WORD_REFRESH = 120; //seconds

	let pctPixel = 0;
	let word: string | null;
	let src: string | null;

	const getWord = async () => {
		const { data } = await axios.get('/api/word');

		word = data.word;

		let cachedImage = await db.words.get({ word: data.word });

		if (cachedImage) {
			src = cachedImage.base64Url;
		} else {
			const base64 = await imageUrlToBase64(data.url);

			await db.words.put({
				word: data.word,
				base64Url: base64
			});

			src = base64;
		}

		console.log(data, cachedImage);
	};

	onMount(async () => {
		await getWord();
		setInterval(async () => {
			await getWord();
		}, WORD_REFRESH * 1000);

		setInterval(() => {
			pctPixel += 1;
		}, (WORD_REFRESH * 1000) / 468);
	});
</script>

<div class="h-[220px] w-full flex align-middle items-center">
	<div>
		<div class="grid grid-cols-2">
			{#if word}
				<div class="w-full h-full">
					<img {src} alt={word} class="w-56 h-56" />
				</div>
				<div class=" flex flex-col justify-center items-center align-middle">
					<h1 class="uppercase text-5xl">{word}</h1>
					<h1 class="text-5xl lowercase pt-4">{word}</h1>
				</div>
			{/if}
		</div>
		<div class="w-full overflow-hidden">
			<div class=" h-[10px] bg-slate-700" style="width: {pctPixel}px" />
		</div>
	</div>
</div>
