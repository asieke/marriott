<script lang="ts">
	import { db } from '$lib/localdb';

	const deleteDb = async () => {
		if (confirm('Are you sure you want to delete the local database?')) {
			await db.delete();
		}
	};
</script>

<button class="w-24 h-18 bg-black hover:bg-purple-700 text-white" on:click={deleteDb}>
	Delete DB
</button>
