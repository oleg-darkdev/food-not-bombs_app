<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { text, bgColor } = $props();
</script>

<!-- yellow -->

<div class="cta_primary tag-style {bgColor}">{text}</div>

<style lang="postcss">
	.cta_primary.tag-style {
		border-style: solid;
		border-width: 2px;
		padding: 0.5em 0.7em 0.4em;
		font-size: 0.8em;
	}

	/* .cta_primary.tag-style.yellow {
	background-color: var(--background--yellow);
} */
</style>
