<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const imgs = [
		{
			altText: '',
			img: '/images/photos/boardgame/promo/2.JPG'
		},
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/3.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/4.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/5.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/6.JPG'
		// },

		{
			altText: '',
			img: '/images/photos/boardgame/promo/8.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/11.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/15.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/9.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/16.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/1.JPG'
		}
	];
</script>

<section class="section ugc-gallery">
	<div class="wrap_ugc-gallery-heading">
		<div class="wrap_section-paragraph center-vertical-padding">
			<h2 class="h_regular section-paragraph">
				Lorem Ipsum jest tekstem <br />
			</h2>

			<h2 class="h_regular section-paragraph">
				Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym.
			</h2>
		</div>
	</div>
	<!-- wrap_slider-buttons -->
	<!-- <div class=" flex w-full justify-center">
		<div class="mx-auto flex w-[200px] justify-between">
			<button aria-label="Slider previous button" class="btn_slider-arrow prev-slide">
				<img
					src="/images/slider-arrow-left.png"
					loading="lazy"
					alt="Previous"
					class="img_slider-arrow-left"
				/>
			</button>
			<button aria-label="Slider next button" class="btn_slider-arrow next-slide">
				<img
					src="/images/slider-arrow-right.png"
					loading="lazy"
					alt="Next"
					class="img_slider-arrow-right"
				/>
			</button>
		</div>
	</div> -->
	<div class="wrap_ugc-gallery">
		<!-- <div class="wrap_slider-buttons video-ugc">
			<button aria-label="Slider previous button" class="btn_slider-arrow prev-slide">
				<img
					loading="lazy"
					src="/images/slider-arrow-left.png"
					alt="Previous"
					class="img_slider-arrow-left"
				/>
			</button>
			<button aria-label="Slider next button" class="btn_slider-arrow next-slide">
				<img
					loading="lazy"
					src="/images/slider-arrow-right.png"
					alt="Next"
					class="img_slider-arrow-right"
				/>
			</button>
		</div> -->
		<div class="img_floating-element high-roas">
			<div class="txt_floating-element uppercase">
				<span class="text-orange">F</span>ood <br />
				<span class="text-yellow">N</span>ot <br />
				<span class="text-orange">B</span>ombs
			</div>
		</div>
		<div class="img_floating-element low-cta">
			<div class="txt_floating-element">
				<span class="text-orange">F</span>ood <br />
				<span class="text-red">N</span>ot <br />
				<span class="text-orange">B</span>ombs
			</div>
		</div>
		<div class="ugc_video-gallery slider-wrapper w-dyn-list">
			<div role="list" class="list_video-ugc slider-list w-dyn-items">
				{#each imgs as img}
					<div style="" role="listitem" class="item_video-wrap slider-item">
						<!-- <a href="#" class="link_lightbox w-inline-block w-lightbox"> -->
						<div class="item-tail">
							<img src={img.img} alt="" class="img_performance-hero-tall" />
						</div>

						<!-- <video
							src="media/sc16vw.mp4"
							autoplay="autoplay"
							data-video="header"
							playsinline="true"
							muted=""
							loop=""
							class="video_frame lazy full-size"
						>
							<source src="media/sc16vw.mp4" type="video/mp4" class="video_source" />
						</video> -->
						<!-- </a> -->
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="wrap_ugc-gallery-cta">
		<a href="#contact" class="cta_primary keep-em-hooked w-inline-block">
			<div class="txt_cta-name">get in touch</div>
		</a>
	</div>
</section>

<style lang="postcss">
</style>
