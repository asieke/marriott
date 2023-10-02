<script lang="ts">
	import { onMount } from 'svelte';
	import { db } from '$lib/localdb';
	import axios from 'axios';

	const TIME_PER_SLIDE = 60; // Time for each image slide in seconds

	// Function to fetch an image, perform caching and return base64 encoded image string
	const getImage = async (): Promise<string> => {
		//get a random row from the db
		const { data } = await axios.get('/api/slideshow');

		console.log(data);
		return data.url;
	};

	let imageURL1: string, imageURL2: string;
	let slider: HTMLDivElement; // Reference to the slider container
	let pctPixel = 0; // Counter for the progress indicator

	onMount(async () => {
		imageURL1 = await getImage(); // Fetch first image
		imageURL2 = await getImage(); // Fetch second image

		// Initialize image sliding effect
		setInterval(() => {
			// Check if slider is available before applying styles
			if (slider && slider.style) {
				slider.style.transform = 'translateX(-468px)'; // Slide the image

				// Reset progress counter after 1000ms animation
				setTimeout(() => {
					pctPixel = 0;
				}, 500);

				// Reset slider position after animation (give 500ms buffer)
				setTimeout(async () => {
					// fetch new image and create the image
					const newImgSrc = await getImage();
					const imgElement = document.createElement('img');
					imgElement.src = newImgSrc;
					imgElement.className = 'w-[468px] h-[400px] object-cover object-center';

					// Disable animation for instant reset
					slider.style.transition = 'none';
					slider.style.transform = `translateX(0px)`;

					// Re-enable the animation (500ms buffer so dom has time to redraw)
					setTimeout(() => {
						slider.style.transition = 'transform 500ms ease-in-out';
					}, 500);

					// Replace the oldest image with the newly fetched one
					slider.removeChild(slider.firstElementChild as HTMLImageElement);
					slider.appendChild(imgElement);
				}, 1500);
			}
		}, TIME_PER_SLIDE * 1000);

		// Progress indicator logic
		setInterval(() => {
			pctPixel += 1; // Increment progress counter
		}, ((TIME_PER_SLIDE - 1) * 1000) / 480);
	});
</script>

<div class="relative h-[400px] w-[455px] overflow-hidden">
	<div
		class="absolute h-[400px] w-[936px] flex flex-row"
		bind:this={slider}
		style="transition: transform 500ms ease-in-out"
	>
		<img src={imageURL1} class="w-[468px] h-[400px] object-cover object-center" alt="random" />
		<img src={imageURL2} class="w-[468px] h-[400px] object-cover object-center" alt="random" />
	</div>
</div>
<div class="w-full overflow-hidden">
	<div class=" h-[10px] bg-slate-700" style="width: {pctPixel}px" />
</div>
