<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	// import logos from '../data/logos'

	let { logos } = $props();
</script>

<section class="section marquee">
	<div class="wrap_client-logos">
		<div class="marquee">
			<div class="marquee-content scroll">
				{#each logos as logo}
					<!-- <a href="" target="_blank"> -->
					<div class="w-layout-vflex marquee-image">
						<img src={logo.img} loading="lazy" width="69" alt={logo.alt} class="img_client-logo" />
					</div>
					<!-- </a> -->
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
