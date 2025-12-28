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
					<!-- marquee-image -->
					 <!-- rounded-full bg-beige p-2 -->
					<div class="w-layout-vflex " >
						<!-- img_client-logo -->
						<img
							src={logo.img}
							loading="lazy"
							width="69"
							alt={logo.alt}
							class="h-24 w-24 rounded-full object-cover"
						/>
					</div>
					<!-- </a> -->
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.img_client-logo {
		max-width: 6em;
	}

	.marquee-image {
		background-color: var(--background--beige);
		border-radius: 50em;
		justify-content: center;
		align-items: center;
		width: 100em;
		max-width: 12em;
		height: 100%;
		padding: 0.2em 1em;
	}
	@media screen and (max-width: 991px) {
		.img_client-logo {
			max-width: 7em;
		}
	}
	@media screen and (max-width: 767px) {
		.marquee-image {
			max-width: 20em;
		}
		.img_client-logo {
			max-width: 10em;
		}
	}

	@media screen and (max-width: 479px) {
		.img_client-logo {
			max-width: 15em;
		}
		.marquee-image {
			padding: 0.8em 2.1em;
		}
	}
</style>
