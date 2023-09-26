<script lang="ts">
	import { PUBLIC_REDIR } from '$env/static/public';

	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
	import Masterpiece from './components/Masterpiece.svelte';
	import WordOfTheDay from './components/WordOfTheDay.svelte';
	import MathProblems from './components/MathProblems.svelte';
	import Calendar from './components/Calendar.svelte';
	import Photo from './components/Photo.svelte';
	import { onMount } from 'svelte';
	import localforage from 'localforage';
	import axios from 'axios';

	export let data;
	const { dailyWeather, masterpiece, word, supabase, session } = data;

	console.log(data);

	const login = async () => {
		supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: { access_type: 'offline', prompt: 'consent' },
				redirectTo: PUBLIC_REDIR,
				scopes:
					'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/gmail.readonly'
			}
		});
	};

	const updateTokens = async () => {
		console.log('running token update');
		const localRefreshToken = await localforage.getItem('provider_refresh_token');
		const localProviderToken = await localforage.getItem('provider_token');
		const { data } = await axios.get(
			'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + localProviderToken
		);

		if (parseInt(data.expires_in) < 2000) {
			console.log('it expires soonnn!!!!');
			const { data } = await axios.post('/auth/refresh', {
				refresh_token: localRefreshToken
			});

			await localforage.setItem('provider_token', data.access_token);
		}
	};

	onMount(async () => {
		setInterval(async () => {
			await updateTokens();
		}, 1000 * 60 * 5);
	});
</script>

<button class="w-8 h-8 -mt-16 bg-white" on:click={login}>[G]</button>
<div class="grid grid-cols-2 gap-4 p-4">
	<div class="flex flex-col gap-4">
		<div class="component"><DateTime /></div>
		<div class="component"><DailyWeather {dailyWeather} /></div>
		<div class="component"><Masterpiece {masterpiece} /></div>
		<div class="component"><WordOfTheDay {word} /></div>
		<div class="component"><MathProblems /></div>
	</div>
	<div class="flex flex-col gap-4">
		<div class="component"><Calendar /></div>
		<div class="component"><Photo /></div>
	</div>
</div>
