<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { RoundedBtnLink } from '$sharedUi';

	let { apiListingData } = $props();
</script>

<ul role="list" class="list-api w-list-unstyled mx-auto p-1 lg:py-4">
	{#each apiListingData as api}
		<li class="item-api transition-transform duration-200 cursor-pointer ease-in-out hover:scale-105">
			<a href={api.api.route} class="h-full w-full" target="_blank">
				<div class="txt_studio-featured-work">
					{api.title}:
					<span class="truncate-6 ml-4">{api.api.route}</span>
				</div>
			</a>
		</li>
	{/each}

	<div class="pt-8">
		<RoundedBtnLink title="Complete list of API" link="/docs#api" blank={true} />
	</div>
</ul>

<style lang="postcss">
	.item-api {
		border: 5px solid var(--background--pink);
		background-color: var(--background--cream);
		text-transform: uppercase;
		border-radius: 6em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-left: 1.3em;
		font-size: 1.6em;
	}

	.list-api {
		grid-column-gap: 0.7em;
		grid-row-gap: 0.7em;
		flex-flow: column;
		width: 100%;
		justify-content: center;
		max-width: 40em;
		margin-top: 1em;
		padding-left: 0;
		display: flex;
	}

	@media screen and (min-width: 1440px) {
		.item-api {
			border-width: 0.3em;
		}
	}

	@media screen and (max-width: 767px) {
		/* .list-api {
		max-width: 40em;
	} */
		.item-api {
			/* padding-left: 0; */
		}
	}
	@media screen and (max-width: 479px) {
		.list-api {
			/* max-width: 25em; */
			font-size: 1.4em;
			max-width: 90%;
		}
	}
</style>
