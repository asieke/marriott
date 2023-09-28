import { supabase } from '$lib/clients/supabase/supabase';

function encodeArtistUrl(url: string) {
	const urlParts = url.split('/');
	const filename = urlParts.pop();
	if (filename) {
		const encodedFilename = encodeURIComponent(filename);
		urlParts.push(encodedFilename);
	}
	return urlParts.join('/');
}

export const GET = async ({ url }) => {
	// Select a random artist from the artist table
	const { data, error } = await supabase.rpc('get_random_art');

	if (error) return new Response(JSON.stringify({ error }), { status: 500 });

	const artist = data[0];

	artist.artist_url = encodeArtistUrl(artist.artist_url);

	return new Response(JSON.stringify({ ...artist }));
};
