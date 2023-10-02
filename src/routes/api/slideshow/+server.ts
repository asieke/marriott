import { supabase } from '$lib/clients/supabase/supabase';

export const GET = async () => {
	//select a random image from the slideshow table
	const { data, error } = await supabase.rpc('get_random_slideshow_image');

	if (error) return new Response(JSON.stringify({ error }), { status: 500 });

	return new Response(JSON.stringify({ ...data[0] }));
};
