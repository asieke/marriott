<script lang="ts">
	import { page } from '$app/stores';
	import { PUBLIC_REDIR } from '$env/static/public';

	// import { v2 as cloudinary } from 'cloudinary';
	import axios from 'axios';

	const { supabase, session } = $page.data;

	let label = 'Sync Photos';

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

	const syncPhotos = async () => {
		if (!session) return;

		//get the provider_token from the session
		const { provider_token } = session;

		//get the album information
		const { data } = await axios.get('https://photoslibrary.googleapis.com/v1/albums', {
			headers: {
				Authorization: `Bearer ${provider_token}`
			}
		});

		const album = data.albums.find((album) => album.title === 'Home Slideshow');
		const itemCount = album.mediaItemsCount;
		const albumId = album.id;

		//get the photos from the album
		try {
			// Fetch photos from the album
			let nextPageToken = null;
			for (let i = 0; i < itemCount; i += 10) {
				label = i + 10 + ' of ' + itemCount;

				const { data } = await axios.post(
					'https://photoslibrary.googleapis.com/v1/mediaItems:search',
					{
						albumId: albumId,
						pageSize: 10, // Get up to 100 photos from the album
						pageToken: nextPageToken
					},
					{
						headers: {
							Authorization: `Bearer ${provider_token}`
						}
					}
				);
				nextPageToken = data.nextPageToken;
				//create an array of promises to call api/uploadPhotos with a body {url: baseUrl}

				const promises = data.mediaItems.map((item: { baseUrl: string; filename: string }) => {
					return axios.post('/api/uploadPhotos', { url: item.baseUrl, filename: item.filename });
				});

				await Promise.all(promises);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}

		label = 'done';

		console.log('syncing photos', itemCount, albumId);
	};
</script>

{#if session && session.provider_token}
	<button class="bg-slate-700 text-white" on:click={syncPhotos}> {label} </button>
{:else}
	<button class="bg-slate-700 text-white" on:click={login}> Login </button>
{/if}
