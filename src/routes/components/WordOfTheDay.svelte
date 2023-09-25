<script lang="ts">
	import type { Word } from '$lib/types';

	export let word: Word;
</script>

<div class="flex flex-row">
	<img src={word.url} alt={word.word} class="w-1/2" />
	<div class="w-1/2 flex items-center flex-col align-middle">
		<h1 class="uppercase text-7xl pt-8">{word.word}</h1>
		<h1 class="text-6xl lowercase pt-4">{word.word}</h1>
	</div>
</div>
