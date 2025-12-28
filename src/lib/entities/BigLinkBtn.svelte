<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { link, text, bgColor } = $props();
</script>

<div class="item_project-page-explore wrap_big-link-btn {bgColor} transition-transform duration-200 ease-in-out hover:scale-105">
	<a href={link} target="_blank" class="link_project-page-explore w-inline-block">
		<h1 class="h_semi-bold top-creative">{text}</h1>
	</a>
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
	.item_project-page-explore.wrap_big-link-btn {
		aspect-ratio: 16 / 9;
		padding-left: 4.5em;
		padding-right: 4.5em;
	}

	.wrap_big-link-btn {
		z-index: 30;
		aspect-ratio: 1;
		/* background-color: var(--texts--deep-red); */
		border-radius: 1.5em;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		width: 100em;
		max-width: 36em;
		padding-left: 2em;
		padding-right: 2em;
		display: flex;
		position: relative;
	}

	@media screen and (max-width: 479px) {
		.item_project-page-explore.wrap_big-link-btn {
			max-width: 44em;
		}
	}
</style>
