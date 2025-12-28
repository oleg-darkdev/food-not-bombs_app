<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { title, link, blank, yellow } = $props();
</script>

<!-- Let's talk #contact -->
<div class="flex flex-col items-center justify-center mx-2 transition-transform duration-200 ease-in-out hover:scale-105">
	<a
		href={link}
		target={blank ? blank : ''}
		class="cta_primary {yellow ? 'bg-yellow' : 'bg-pink'}  studio-page more-btn w-inline-block"
	>
		<div class="txt_cta-name underline">{title}</div>
	</a>
</div>

<style lang="postcss">
	.more-btn {
		border-style: solid;
	}
	@media screen and (max-width: 767px) {
		.more-btn {
			font-size: 3.5em;
		}
	}

	@media screen and (max-width: 479px) {
		.more-btn {
			font-size: 5.5em;
		}
	}
</style>
