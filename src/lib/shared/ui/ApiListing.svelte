<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { apiListingData } = $props();
</script>

<ul role="list" class="list_studio-featured-work w-list-unstyled">
	{#each apiListingData as api}
		<li class="item_studio-featured-work">
			<div class="txt_studio-featured-work">
				{api.title}:
				<a href={api.api.route} class="truncate-6 ml-4" target="_blank">{api.api.route}</a>
			</div>
		</li>
	{/each}
</ul>

<style lang="postcss">
	.item_studio-featured-work {
		border: 5px solid var(--background--pink);
		background-color: var(--background--cream);
		text-transform: uppercase;
		border-radius: 6em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-left: 1.3em;
		font-size: 1.6em;
	}

	.list_studio-featured-work {
		grid-column-gap: 0.7em;
		grid-row-gap: 0.7em;
		flex-flow: column;
		width: 100%;
		/* max-width: 26em; */
		margin-top: 1em;
		padding-left: 0;
		display: flex;
	}

	@media screen and (min-width: 1440px) {
		.item_studio-featured-work {
			border-width: 0.3em;
		}
	}

	@media screen and (max-width: 767px) {
		/* .list_studio-featured-work {
		max-width: 40em;
	} */
		.item_studio-featured-work {
			/* padding-left: 0; */
		}
	}
	@media screen and (max-width: 479px) {
		.list_studio-featured-work {
			/* max-width: 25em; */
			font-size: 1.4em;
		}
	}
</style>
