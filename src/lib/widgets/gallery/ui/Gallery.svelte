<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { gallery } = $props();

</script>

<section id='gallery' class="section organic-social-sample-work">
	<!-- <div class="wrap_section-heading studio-page">
		<h1 class="h_regular studio">
			Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
		</h1>
	</div> -->
	<div class="wrap_organic-social-portfolio">
		{#each gallery as row}
			<div class="grid_organic-social-portfolio pb-2">
				{#each row as img, i}
					<div class="column_organic-social-portfolio {img.class}">
						{#if i % 2 === 0}
							<div class="item_tall">
								<img src={img.tall.img} loading="eager" alt="{img.tall.alt}" class="img_performance-hero-tall" />
							</div>

							<div class="item_square">
								<img
									src={img.square.img}
									loading="lazy"
									sizes="(max-width: 479px) 47vw, (max-width: 767px) 48vw, (max-width: 991px) 23vw, (max-width: 1439px) 24vw, 321px"
									alt={img.square.alt}
									class="img_organic-social-featured-image"
								/>
							</div>
						{:else}
							<div class="item_square">
								<img
									src={img.square.img}
									loading="lazy"
									sizes="(max-width: 479px) 47vw, (max-width: 767px) 48vw, (max-width: 991px) 23vw, (max-width: 1439px) 24vw, 321px"
									alt={img.square.alt}
									class="img_organic-social-featured-image"
								/>
							</div>
							<div class="item_tall">
								<img src={img.tall.img} loading="eager" alt="{img.tall.alt}" class="img_performance-hero-tall" />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<!-- <a href="/" class="cta_primary studio-page w-inline-block">
		<div class="txt_cta-name underline">Get in touch</div>
	</a> -->
</section>

<style lang="postcss">
</style>
