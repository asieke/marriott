<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { page } from '$app/stores';
	import localforage from 'localforage';

	let imageUrl = '';
	let itemCount = 100;
	let albumId = '';
	let pictures: string[] = [];

	const getAlbumInfo = async () => {
		const provider_token = await localforage.getItem('provider_token');
		const { data } = await axios.get('https://photoslibrary.googleapis.com/v1/albums', {
			headers: {
				Authorization: `Bearer ${provider_token}`
			}
		});
		const album = data.albums.find((album: { title: string }) => album.title === 'Home Slideshow');

		itemCount = album.mediaItemsCount;
		albumId = album.id;

		console.log(album);
	};

	const getPictures = async () => {
		console.log(itemCount);
		const provider_token = await localforage.getItem('provider_token');
		try {
			// Fetch photos from the album
			let nextPageToken = null;
			for (let i = 0; i < itemCount; i += 100) {
				const { data } = await axios.post(
					'https://photoslibrary.googleapis.com/v1/mediaItems:search',
					{
						albumId: albumId,
						pageSize: 100, // Get up to 100 photos from the album
						pageToken: nextPageToken
					},
					{
						headers: {
							Authorization: `Bearer ${provider_token}`
						}
					}
				);
				nextPageToken = data.nextPageToken;
				data.mediaItems.forEach((item: { baseUrl: string }) => {
					pictures.push(item.baseUrl);
				});
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	onMount(async () => {
		await getAlbumInfo();
		await getPictures();

		imageUrl = pictures[Math.floor(Math.random() * pictures.length)];
		setInterval(() => {
			imageUrl = pictures[Math.floor(Math.random() * pictures.length)];
		}, 1000 * 60);
	});
</script>

<div>
	<img src={imageUrl} />
</div>
