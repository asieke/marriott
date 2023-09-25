<script lang="ts">
	import type { Masterpiece } from '$lib/types';
	export let masterpiece: Masterpiece;
</script>

<div>
	<div class="w-full">
		<img src={masterpiece.url} alt={masterpiece.name} class="w-full h-full object-cover" />
		<div>
			<div class="pt-2 text-xl font-bold">{masterpiece.name}</div>
			<div class="text-xl">{masterpiece.artist} ({masterpiece.date})</div>
		</div>
	</div>
</div>
