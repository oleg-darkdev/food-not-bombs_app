<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { apiListing } = $props();
</script>

<ul role="list" class="list_studio-featured-work w-list-unstyled">
	{#each apiListing as api}
		<li class="item_studio-featured-work">
			<div class="txt_studio-featured-work">
				{api.title}:
				<a href={api.api.route} class="truncate-6 ml-4" target="_blank">{api.api.route}</a>
			</div>
		</li>
	{/each}
</ul>

<style lang="postcss">
</style>
