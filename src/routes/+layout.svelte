<script>
	import '../styles/app.css';

	import { onMount } from 'svelte';

	let random = 1;

	onMount(() => {
		//pick a random number 1-12
		random = Math.floor(Math.random() * 12) + 1;
	});
</script>

<!-- Set the background image to /images/backgrounds/random.jpg -->
<div
	class="h-full w-full min-h-[1920px] min-w-[1080px]"
	style="background: url('/backgrounds/{random}.jpg') no-repeat center center fixed; background-size: cover;"
>
	<slot />
</div>
