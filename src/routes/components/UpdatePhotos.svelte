<script lang="ts">
	//A component that loads all of the photos from supabase and saves them to localstorage

	import { page } from '$app/stores';
	import { db } from '$lib/localdb';

	let label = 'Get Photos';

	const getPhotos = async () => {
		const { supabase } = $page.data;
		const { data, error } = await supabase.storage.from('pictures').list();

		for (let i = 1; i < data.length; i++) {
			label = i + '/' + (data.length - 1);
			//Check if image already exists in local db
			const photo = await db.photos.get({ supabaseName: data[i].name });

			if (photo) {
				continue;
			}

			const { data: urlData } = await supabase.storage.from('pictures').getPublicUrl(data[i].name);

			//Convert image to base64
			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.src = urlData.publicUrl;

			await new Promise((resolve) => (img.onload = resolve));

			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = img.width;
			canvas.height = img.height;

			ctx?.drawImage(img, 0, 0);
			const base64Image = canvas.toDataURL('image/jpeg');

			await db.photos.add({ supabaseName: data[i].name, base64Url: base64Image });
		}
		label = 'Get Photos';
	};
</script>

<button class="w-24 h-18 bg-black hover:bg-purple-700 text-white" on:click={getPhotos}>
	{label}
</button>
