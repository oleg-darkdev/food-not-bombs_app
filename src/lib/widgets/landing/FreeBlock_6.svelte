<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let gallery = [
		[
			{
				class: '_1',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',

				alt: ''
			},
			{
				class: '_2 ',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			},
			{
				class: '_3 ',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			},
			{
				class: '_4',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			}
		],

		[
			{
				class: '_1',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			},
			{
				class: '_2 ',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			},
			{
				class: '_3 ',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			},
			{
				class: '_4',
				tall: 'images/678934aee3b424ad031bd1ac_01_9x16-ezgif.com-optimize.gif',
				square: 'images/67893518872892b9b709aae5_Product_20.jpg',
				alt: ''
			}
		]
	];
</script>

<div class="section video-ugc">
	<div class="wrap_page-heading">
		<h1 class="h1_semibold subpage-heading video-ugm">Keep em’ hooked.</h1>
		<p class="h_regular section-paragraph video-ugm">
			Well-researched creative strategy meets our inner circle of highly vetted content creators.
			Let’s get your next campaign going!
		</p>
	</div>
	<div class="w-layout-vflex wrap_video-ugc">
		<div class="w-layout-vflex wrap_video-tag hide">
			<div class="txt_project-video-tag pink">Organic</div>
			<div class="txt_project-video-tag">Performance</div>
		</div>
		<div class="collection_project-videos w-dyn-list">
			<div role="list" class="grid_project-videos full-width w-dyn-items">
				<div role="listitem" class="item_project-videos w-dyn-item">
					<div style="" class="item_project-video no-stroke">
						<video style="" controls="" class="video_frame">
							<source src="media/6nd2gk.mp4" type="video/mp4" />
						</video>
					</div>

					<!-- <div style="background-image:url(" https:="" cdn.prod.website-files.com="" 669fc854dd10d0a0ff0cf032="" 66b9cf0eab0241ae79985a8b_magicscoop%20performance%204.png")"="" class="item_project-video no-stroke">
                    <video style="background-image:url(" https:="" cdn.prod.website-files.com="" 669fc854dd10d0a0ff0cf032="" 66b9cf0eab0241ae79985a8b_magicscoop%20performance%204.png")"="" controls="" class="video_frame">
                      <source src="media/6nd2gk.mp4" type="video/mp4">
                    </video>
                  </div> -->
					<div class="w-dyn-list">
						<div role="list" class="collection_video-tag w-dyn-items">
							<div role="listitem" class="w-dyn-item">
								<div class="w-layout-vflex wrap_video-tag">
									<div class="txt_project-video-tag pink w-condition-invisible">Performance</div>
									<div class="txt_project-video-tag">Performance</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="wrap_video-ucg-cta">
		<a href="#" class="cta_primary video-ugc w-button">Get in touch</a>
	</div>
</div>

<section class="section organic-social-sample-work">
	<div class="wrap_section-heading studio-page">
		<h1 class="h_regular studio">
			Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
		</h1>
	</div>
	<div class="wrap_organic-social-portfolio">
		<!-- сделать 2-3 ряда -->
		{#each gallery as row}
			<div class="grid_organic-social-portfolio pb-2">
				{#each row as img, i}
					<div class="column_organic-social-portfolio {img.class}">
						{#if i % 2 === 0}
							<div class="item_tall">
								<img src={img.tall} loading="eager" alt="" class="img_performance-hero-tall" />
							</div>

							<div class="item_square">
								<img
									src={img.square}
									loading="lazy"
									sizes="(max-width: 479px) 47vw, (max-width: 767px) 48vw, (max-width: 991px) 23vw, (max-width: 1439px) 24vw, 321px"
									alt={img.alt}
									class="img_organic-social-featured-image"
								/>
							</div>
						{:else}
							<div class="item_square">
								<img
									src={img.square}
									loading="lazy"
									sizes="(max-width: 479px) 47vw, (max-width: 767px) 48vw, (max-width: 991px) 23vw, (max-width: 1439px) 24vw, 321px"
									alt={img.alt}
									class="img_organic-social-featured-image"
								/>
							</div>
							<div class="item_tall">
								<img src={img.tall} loading="eager" alt="" class="img_performance-hero-tall" />
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{/each}
	</div>
	<a href="/" class="cta_primary studio-page w-inline-block">
		<div class="txt_cta-name underline">Get in touch</div>
	</a>
</section>

<style lang="postcss">
</style>
