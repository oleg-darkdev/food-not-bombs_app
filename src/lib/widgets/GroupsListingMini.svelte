<script lang="ts">
	import { MiniFnbGroupCard } from '$entities';

	let { groupsData } = $props();
</script>

<div class="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-2 px-2">
	{#each groupsData as group (group.id)}
		{#if group.imgCollected}
			<!-- <FnbGroupCard {group} /> -->
			<MiniFnbGroupCard {group} />
		{/if}
	{/each}
</div>

<style lang="postcss"></style>
