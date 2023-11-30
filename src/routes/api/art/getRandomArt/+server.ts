import { supabase } from '$lib/clients/supabase/supabase';
import axios from 'axios';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

import { AMAZON_KEY, AMAZON_SECRET, AMAZON_REGION } from '$env/static/private';

const client = new S3Client({
	credentials: {
		accessKeyId: AMAZON_KEY,
		secretAccessKey: AMAZON_SECRET
	},
	region: AMAZON_REGION
});

async function uploadToS3(url: string, sk: string) {
	try {
		const res = await axios.get(url, {
			responseType: 'arraybuffer', // Ensure binary response data
			timeout: 20000 // sets timeout to 20 seconds
		});
		// Insert the image downloaded from the axios request into s3
		const params = {
			Bucket: 'sieke-marriott',
			Key: sk + '.jpg',
			Body: res.data, // res.data is now an ArrayBuffer
			ContentType: res.headers['content-type'] // Set the correct content type
		};
		console.log('successfully uploaded...', url, sk);
		await client.send(new PutObjectCommand(params));
	} catch (error) {
		console.log('error uploading...', url, sk);
	}
}

export const GET = async () => {
	// Select a random artist from the artist table
	const { data, error } = await supabase.rpc('get_random_art');
	if (error) return new Response(JSON.stringify({ error }), { status: 500 });

	const artist = data[0];

	//update the view count
	await supabase
		.from('images')
		.update({ view_count: artist.view_count + 1 })
		.match({ id: artist.image_id });

	//save the full res image to s3
	//const url = 'https://mdl.artvee.com/sftb/' + artist.sk + '.jpg';

	// Call uploadToS3 without awaiting its completion
	//uploadToS3(url, artist.sk);

	return new Response(JSON.stringify({ ...artist }));
};
