<script lang="ts">
	let label = 'Get Words';

	import axios from 'axios';
	import { db } from '$lib/localdb';
	import { words } from '$lib/words';

	const getWords = async () => {
		for (let i = 0; i < words.length; i++) {
			label = i + '/' + (words.length - 1);
			//check if word exists in local db
			const word = await db.words.get({ word: words[i] });
			if (word) {
				console.log(word.word, '...word exists in local db');
				continue;
			}

			//get the imageURL from OpenAI Dalle then convert it to base64
			const { data } = await axios.get('/api/word?word=' + words[i]);

			await db.words.add({ word: words[i], base64Url: data.base64 });
			console.log(words[i], '...inserted into local db');
		}

		label = 'Get Words';
	};
</script>

<button class="w-24 h-18 bg-black hover:bg-purple-700 text-white" on:click={getWords}>
	{label}
</button>
