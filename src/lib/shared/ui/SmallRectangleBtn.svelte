<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { text, onclick, activeBtn } = $props();
</script>

<div  {onclick}
	class="item_project-page-explore wrap_small-rectangle-btn {activeBtn ? "bg-orange" : "bg-red"} transition-transform duration-200 ease-in-out hover:scale-105"
>
	<div class="link_project-page-explore w-inline-block">
		<h1 class="h_semi-bold top-creative">{text}</h1>
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
		aspect-ratio: 16 / 9;
		padding-left: 2.5em;
		padding-right: 2.5em;
	}

	.wrap_small-rectangle-btn {
		z-index: 2;
		aspect-ratio: 1;
		/* background-color: var(--texts--deep-red); */
		border-radius: 1.5em;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		width: 200px;
		/* max-width: 40em; */
		padding-left: 2em;
		padding-right: 2em;
		display: flex;
		position: relative;
	}

	@media screen and (max-width: 479px) {
		.item_project-page-explore.wrap_small-rectangle-btn {
			max-width: 30em;
		}
	}
</style>
