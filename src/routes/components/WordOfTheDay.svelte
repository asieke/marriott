<script lang="ts">
	import { onMount } from 'svelte';
	import { db, type Word } from '$lib/localdb';

	const WORD_REFRESH = 120; //seconds

	let pctPixel = 0;
	let word: Word | null;
	onMount(async () => {
		word = await db.getRandomWord();
		setInterval(async () => {
			word = await db.getRandomWord();
			pctPixel = 0;
		}, WORD_REFRESH * 1000);

		setInterval(() => {
			pctPixel += 1;
		}, (WORD_REFRESH * 1000) / 468);
	});
</script>

<div class="h-[200px] w-full flex align-middle items-center">
	<div>
		<div class="flex flex-row w-full">
			{#if word}
				<img src={word.base64Url} alt={word.word} class="w-1/2" />
				<div class="w-1/2 flex items-center flex-col align-middle">
					<h1 class="uppercase text-7xl pt-8">{word.word}</h1>
					<h1 class="text-6xl lowercase pt-4">{word.word}</h1>
				</div>
			{/if}
		</div>
		<div class="w-full overflow-hidden">
			<div class=" h-[10px] bg-slate-700" style="width: {pctPixel}px" />
		</div>
	</div>
</div>
