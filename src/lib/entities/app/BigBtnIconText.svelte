<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { text, onclick, icon } = $props();
</script>

<div
	{onclick}
	class="item_project-page-explore wrap_small-rectangle-btn bg-pink hover:bg-orange transition-transform duration-200 ease-in-out hover:scale-105"
>
	<div class=" w-inline-block flex flex-row">
		<!-- <h1 class="h_semi-bold top-creative">{text}</h1> -->
		<img src={icon} class="h-10 w-10 lg:h-32 lg:w-32" alt={text} />
		<h1 class="text-green-army font-bold lg:text-5xl text-2xl">{text}</h1>
	</div>
	<img
		src="/images/corner-dot-white.svg"
		loading="lazy"
		alt=""
		class="svg_corner-dot-cream bottom-left"
	/>
	<img
		src="/images/corner-dot-white.svg"
		loading="lazy"
		alt=""
		class="svg_corner-dot-cream bottom-right"
	/>
	<img
		src="/images/corner-dot-white.svg"
		loading="lazy"
		alt=""
		class="svg_corner-dot-cream top-right"
	/>
	<img
		src="/images/corner-dot-white.svg"
		loading="lazy"
		alt=""
		class="svg_corner-dot-cream top-left"
	/>
</div>

<style lang="postcss">
	.item_project-page-explore.wrap_small-rectangle-btn {
		aspect-ratio: 22 / 10;
		padding-left: 2.5em;
		padding-right: 2.5em;
	}

	.wrap_small-rectangle-btn {
		z-index: 30;
		aspect-ratio: 1;
		/* background-color: var(--texts--deep-red); */
		border-radius: 1.5em;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		/* width: 100em; */
		max-width: 40em;
		padding-left: 2em;
		padding-right: 2em;
		display: flex;
		position: relative;
	}

	@media screen and (max-width: 479px) {
		.item_project-page-explore.wrap_small-rectangle-btn {
			max-width: 22em;
		}
	}
</style>
