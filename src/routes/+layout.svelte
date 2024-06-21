<script>
	import '../styles/app.css';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	let random = 1;

	onMount(() => {
		//pick a random number 1-12
		random = Math.floor(Math.random() * 12) + 1;

		//initialize supabase session
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange((event, _session) => {
			if (_session?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => subscription.unsubscribe();
	});
</script>

<!-- Set the background image to /images/backgrounds/random.jpg -->
<div
	class="h-[1080px] w-[1920px] pr-8"
	style="background: url('/backgrounds/{random}.jpg') no-repeat center center fixed; background-size: cover;"
>
	<slot />
</div>
