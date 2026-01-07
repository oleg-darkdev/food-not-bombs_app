<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { title, onclick, yellow } = $props();
</script>


<!-- Let's talk #contact -->
<div class="flex flex-col items-center justify-center mx-2 transition-transform duration-200 ease-in-out hover:scale-105">
	<button {onclick}
		class="cta_primary bg-yellow  studio-page more-btn w-inline-block"
	>
		<div class="txt_cta-name ">{title}</div>
	</button>
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
