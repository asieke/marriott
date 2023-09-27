<script lang="ts">
	import { page } from '$app/stores';
	import axios from 'axios';

	const getPhotos = async () => {
		const { supabase } = $page.data;
		const { data, error } = await supabase.storage.from('pictures').list('', {
			limit: 100
		});

		const { data: urlData } = await supabase.storage.from('pictures').getPublicUrl(data[0].name);

		console.log(data);
		console.log(urlData);
	};
</script>

<button class="w-full h-full" on:click={getPhotos}>Photos</button>
