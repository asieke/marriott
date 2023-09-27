<script lang="ts">
	import { PUBLIC_REDIR } from '$env/static/public';

	import DailyWeather from './components/DailyWeather.svelte';
	import DateTime from './components/DateTime.svelte';
	import Masterpiece from './components/Masterpiece.svelte';
	import WordOfTheDay from './components/WordOfTheDay.svelte';
	import MathProblems from './components/MathProblems.svelte';
	import Calendar from './components/Calendar.svelte';
	import Photo from './components/Photo.svelte';
	import UpdatePhotos from './components/UpdatePhotos.svelte';

	import { onMount } from 'svelte';
	import localforage from 'localforage';
	import axios from 'axios';

	export let data;
	const { dailyWeather, masterpiece, word, supabase, session } = data;

	// console.log(data);

	// const login = async () => {
	// 	supabase.auth.signInWithOAuth({
	// 		provider: 'google',
	// 		options: {
	// 			queryParams: { access_type: 'offline', prompt: 'consent' },
	// 			redirectTo: PUBLIC_REDIR,
	// 			scopes:
	// 				'https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/photoslibrary.readonly https://www.googleapis.com/auth/gmail.readonly'
	// 		}
	// 	});
	// };

	// const updateTokens = async () => {
	// 	console.log('running token update');
	// 	const localRefreshToken = await localforage.getItem('provider_refresh_token');
	// 	const localProviderToken = await localforage.getItem('provider_token');

	// 	if (!localProviderToken && session?.provider_token) {
	// 		localforage.setItem('provider_token', session.provider_token);
	// 		localforage.setItem('provider_refresh_token', session.provider_refresh_token);
	// 	}

	// 	const res = await axios.get(
	// 		'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + localProviderToken
	// 	);
	// 	console.log(res.data);

	// 	console.log('it expires soonnn!!!!');
	// 	const { data } = await axios.post('/auth/refresh', {
	// 		refresh_token: localRefreshToken
	// 	});

	// 	console.log(data);

	// 	await localforage.setItem('provider_token', data.access_token);
	// };

	// onMount(async () => {
	// 	updateTokens();
	// 	setInterval(async () => {
	// 		await updateTokens();
	// 	}, 1000 * 60 * 5);
	// });
</script>

<div class="flex flex-row h-12" />
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

<style lang="postcss">
	button {
		@apply bg-black text-white w-16 ml-4 hover:bg-black/50;
	}
</style>
