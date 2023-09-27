<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import localforage from 'localforage';
	import { slide } from 'svelte/transition';

	const TIME_PER_SLIDE = 60;

	const getImage = async (): Promise<string> => {
		const { supabase } = $page.data;
		const { data, error } = await supabase.storage.from('pictures').list('', {});
		data.shift();

		const r = Math.floor(Math.random() * data.length);
		const imageKey = data[r].name;

		let base64Image = await localforage.getItem<string>(imageKey);

		if (!base64Image) {
			const { data: urlData } = await supabase.storage.from('pictures').getPublicUrl(imageKey);

			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.src = urlData.publicUrl;

			await new Promise((resolve) => (img.onload = resolve));

			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = img.width;
			canvas.height = img.height;

			ctx?.drawImage(img, 0, 0);
			base64Image = canvas.toDataURL('image/jpeg');

			await localforage.setItem(imageKey, base64Image);
		}

		return base64Image;
	};

	let imageURL1: string, imageURL2: string;
	let slider: HTMLDivElement;
	let pctPixel = 0;

	onMount(async () => {
		imageURL1 = await getImage();
		imageURL2 = await getImage();

		if (!slider) return;

		setInterval(() => {
			slider!.style.transform = 'translateX(-468px)';
			setTimeout(async () => {
				pctPixel = 0;
				const newImgSrc = await getImage();
				const imgElement = document.createElement('img');
				imgElement.src = newImgSrc; // Set its source
				imgElement.className = 'w-[468px] h-[400px] object-cover object-center'; // Set its classes

				slider.style.transition = 'none';
				slider.style.transform = `translateX(0px)`;
				setTimeout(() => {
					slider.style.transition = 'transform 1000ms ease-in-out';
				}, 10);
				slider.removeChild(slider.firstElementChild as HTMLImageElement);
				slider.appendChild(imgElement); // Append it to the slider div
				//remove the first child element
			}, 1000);
		}, TIME_PER_SLIDE * 1000);

		setInterval(() => {
			pctPixel += 1;
		}, (TIME_PER_SLIDE * 1000) / 468);
	});
</script>

<div class="relative h-[400px] w-[468px] overflow-hidden">
	<div class="absolute h-[400px] w-[936px] flex flex-row" bind:this={slider}>
		<img src={imageURL1} class="w-[468px] h-[400px] object-cover object-center" alt="random" />
		<img src={imageURL2} class="w-[468px] h-[400px] object-cover object-center" alt="random" />
	</div>
</div>
<div class="w-full overflow-hidden">
	<div class=" h-[10px] bg-slate-950" style="width: {pctPixel}px" />
</div>
