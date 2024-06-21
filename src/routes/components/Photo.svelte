<script lang="ts">
	import { onMount } from 'svelte';
	import { db } from '$lib/localdb';
	import axios from 'axios';
	import { imageUrlToBase64 } from '$lib/utils/image';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const TIME_PER_SLIDE = 60000; // Time for each image slide in milliseconds
	const FADE_DURATION = 500; // Duration for fade-in and fade-out in milliseconds

	// Function to fetch an image, perform caching and return base64 encoded image string
	const getImage = async (): Promise<string> => {
		//get a random row from the db
		const { data } = await axios.get('/api/slideshow');

		// check if the image exists in local storage
		let cachedImage = await db.photos.get({ public_id: data.public_id });

		// if the image doesn't exist then save the data.url to local storage as a base64 encoded string
		if (!cachedImage) {
			const base64 = await imageUrlToBase64(data.url);

			await db.photos.put({
				public_id: data.public_id,
				base64Url: base64
			});

			return base64;
		}

		return cachedImage.base64Url;
	};

	let imageURL1: string, imageURL2: string;
	let currentImageURL: string;
	let slider: HTMLDivElement; // Reference to the slider container
	let pctPixel = 0; // Counter for the progress indicator

	const opacity = tweened(1, {
		duration: FADE_DURATION,
		easing: cubicOut
	});

	const updateImage = async () => {
		// Start fade-out
		opacity.set(0);

		setTimeout(async () => {
			// Fetch the next image
			currentImageURL = await getImage();

			// Start fade-in
			opacity.set(1);
		}, FADE_DURATION);
	};

	onMount(async () => {
		imageURL1 = await getImage(); // Fetch first image
		imageURL2 = await getImage(); // Fetch second image
		currentImageURL = imageURL1;

		// Update image every 10 seconds
		setInterval(updateImage, TIME_PER_SLIDE);

		console.log(imageURL1, imageURL2);
	});
</script>

<div class="relative h-[460px] w-[560px] overflow-hidden">
	<div
		bind:this={slider}
		class="slider absolute top-0 left-0 h-full w-full"
		style="background-image: url({currentImageURL}); background-size: cover; background-position: center;"
		style:opacity={$opacity}
	/>
</div>

<style>
	.slider {
		transition: opacity var(--fade-duration) ms;
	}
	:root {
		--fade-duration: 500ms;
	}
</style>
