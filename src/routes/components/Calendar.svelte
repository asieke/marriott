<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { page } from '$app/stores';
	import localforage from 'localforage';

	let calendars = '';

	onMount(async () => {
		const provider_token = await localforage.getItem('provider_token');

		const { data } = await axios.get(
			'https://www.googleapis.com/calendar/v3/users/me/calendarList',
			{
				headers: {
					Authorization: `Bearer ${provider_token}`
				}
			}
		);

		calendars = data.items.map((item) => item.summary).join('<br>');
	});
</script>

<div>
	{@html calendars}
</div>
