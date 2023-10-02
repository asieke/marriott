import axios from 'axios';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import { supabase } from '$lib/clients/supabase/supabase';

import {
	PUBLIC_CLOUDINARY_NAME,
	PUBLIC_CLOUDINARY_KEY,
	PUBLIC_CLOUDINARY_SECRET
} from '$env/static/public';

cloudinary.config({
	cloud_name: PUBLIC_CLOUDINARY_NAME,
	api_key: PUBLIC_CLOUDINARY_KEY,
	api_secret: PUBLIC_CLOUDINARY_SECRET,
	secure: true
});

export const POST = async ({ request }) => {
	const { url, filename } = await request.json();

	// search cloudinary for the public_id = filename, if so then continue
	// if not then upload

	const temp = await cloudinary.search.expression('homeSlideshow/' + filename + '*').execute();
	if (temp.total_count > 0) {
		console.log(filename, '...already uploaded');
		return new Response(JSON.stringify({ bones: 'money' }));
	} else {
		const { data: photo } = await axios.get(url + '=w1920-h1080', {
			responseType: 'arraybuffer'
		});

		fs.writeFileSync('/tmp/' + filename, photo);

		try {
			const data = await cloudinary.uploader.upload('/tmp/' + filename, {
				folder: 'homeSlideshow',
				public_id: filename,
				overwrite: false,
				invalidate: false,
				resource_type: 'image',
				use_filename: true,
				unique_filename: false,
				filename_override: filename
			});
			console.log(filename, '...uploaded');

			await supabase.from('slideshow').upsert(
				{
					public_id: data.public_id,
					url: data.url,
					width: data.width,
					height: data.height,
					bytes: data.bytes,
					format: data.format
				},
				{ onConflict: 'public_id' }
			);
		} catch (err) {
			console.log(err);
		}
	}

	return new Response(JSON.stringify({ bones: 'money' }));
};
