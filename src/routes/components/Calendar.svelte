<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { page } from '$app/stores';

	onMount(() => {
		const provider_token = $page.data.session?.provider_token;
		const refresh_token = $page.data.session?.refresh_token;
		fetch('https://www.googleapis.com/calendar/v3/users/me/calendarList', {
			headers: {
				Authorization: `Bearer ${provider_token}`
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Calendars:', data);
			})
			.catch((error) => {
				console.log('An error occurred:', error);
			});
	});
</script>

<div>Hello</div>
