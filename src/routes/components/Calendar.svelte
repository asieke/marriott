<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { page } from '$app/stores';
	import localforage from 'localforage';

	let calendars = {};

	const getCalendarData = async () => {
		const url =
			'https://script.google.com/macros/s/AKfycbz2XHjv0ndBmueIm7V5P-K3YYb7lBAhBWbbyfmWuxfuAmlMwPOeMYrFU8kP7Cq3xZX1/exec';
		const params = '?key=test1234&type=calendar';

		const { data } = await axios.get(url + params);

		console.log(data);
	};

	onMount(async () => {
		await getCalendarData();
	});
</script>

<div>
	{@html JSON.stringify(calendars)}
</div>
