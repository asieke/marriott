<script lang="ts">
	import { db } from '$lib/localdb';
	import { onMount } from 'svelte';
	import type { Word } from '$lib/localdb';
	import axios from 'axios';
	import { imageUrlToBase64 } from '$lib/utils/image';

	let loading = false;

	let images: (HTMLImageElement | null)[] = [null, null, null, null];

	let words: string[] = [];

	let word: string = '';
	let prompts: string[] = ['', '', '', ''];
	let srcs: string[] = ['', '', '', ''];

	onMount(async () => {
		words = (await db.words.toArray()).map((word) => word.word);
	});

	const getWord = async () => {
		loading = true;

		console.log('GETTING WORD: words length: ', words.length);

		const { data } = await axios.post('/api/word/prompt', {
			words: words
		});

		prompts = data.prompts;
		word = data.word;

		//Make 4 calls simultaneously with the 4 prompts

		const calls = prompts.map((prompt) =>
			axios.post('/api/word/image', {
				prompt
			})
		);

		const images = await Promise.all(calls);

		srcs = images.map((image) => 'data:image/jpeg;base64,' + image.data.url);
		console.log(srcs);

		loading = false;
	};

	const saveImage = async (i: number) => {
		await db.words.put({
			word,
			base64Url: srcs[i]
		});
		words = [...words, word];
		prompts = ['', '', '', ''];
		word = '';
		srcs = ['', '', '', ''];
		getWord();
	};
</script>

<div class="w-full h-full bg-slate-100 z-50 border-8 p-8">
	<div class="flex flex-row pt-10">
		<a href="/" class="bg-slate-300 flex items-center">HOME</a>
		<button disabled={loading} class="p-4 bg-purple-400" on:click={getWord}>Generate Word</button>
		<h2>{words.length}</h2>
	</div>
	<h1 class="text-4xl font-bold h-16 mt-8">{word}</h1>
	<div class="grid grid-cols-2 gap-4 mt-8">
		{#each prompts as prompt, i}
			<div class="bg-slate-200 p-4">
				<h1 class="text-xl h-32">{prompt}</h1>
				<button class="h-64 w-64 bg-green-200" on:click={() => saveImage(i)}>
					<img src={srcs[i]} alt={prompt} class="w-full h-full" bind:this={images[i]} />
				</button>
			</div>
		{/each}
	</div>
</div>

<style>
	button:disabled {
		@apply bg-black;
	}
</style>
