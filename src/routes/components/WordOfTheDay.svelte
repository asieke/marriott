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
		const w = await db.getRandomWord();
		if (!w) return;
		word = w.word;
		src = w.base64Url;
	};

	onMount(async () => {
		await getWord();
		setInterval(async () => {
			pctPixel = 0;
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
