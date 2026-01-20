<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { imgs } = $props();
</script>

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
				<div style="" role="listitem" class="item_img-wrap slider-item">
					<!-- <a href="#" class="link_lightbox w-inline-block w-lightbox"> -->
					<div class="w-full h-full">
						<img src={img.img} alt={img.altText} class="img_performance-hero-tall" />
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

<style lang="postcss">
	.img_performance-hero-tall {
		aspect-ratio: 9 / 16;
		object-fit: cover;
	}
	.list_video-ugc {
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		width: 100%;
		margin-left: auto;
		margin-right: auto;
		display: flex;
	}

	.txt_floating-element {
		font-size: 1em;
	}

	.wrap_ugc-gallery {
		flex-flow: column;
		justify-content: flex-end;
		align-items: center;
		display: flex;
		position: relative;
	}

	.img_floating-element {
		z-index: 35;
		aspect-ratio: 1;
		border: 0.1em solid var(--borders--army-green);
		background-color: var(--background--yellow);
		font-family: var(--fonts--primary-typeface);
		text-align: center;
		border-radius: 20em;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		padding-left: 0.5em;
		padding-right: 0.5em;
		font-size: 3.1em;
		font-weight: 600;
		line-height: 1;
		display: flex;
		position: absolute;
	}

	.img_floating-element.high-roas {
		border-color: var(--background--pink);
		background-color: var(--texts--deep-red);
		color: var(--background--pink);
		inset: -2.5em 1.5em auto auto;
		transform: rotate(14.18deg);
	}

	.img_floating-element.low-cta {
		inset: auto auto -1em 4em;
		transform: rotate(-18.15deg);
	}

	.item_img-wrap.slider-item {
		aspect-ratio: 9 / 15.9;
		/* background-color: var(--texts--army-green); */
		cursor: pointer;
		/* background-image: url('/images/hand.svg'); */
		background-position: 50%;
		background-repeat: no-repeat;
		/* background-size: cover; */
		flex-flow: row;
		justify-content: center;
		align-self: stretch;
		align-items: stretch;
		width: 100em;
		max-width: 23em;
		/* transition: transform 0.2s; */
		display: flex;
		overflow: clip;
	}

	.item_img-wrap.slider-item:hover {
		transform: scale(1.09);
	}

	.list_video-ugc.slider-list {
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		justify-content: center;
		align-items: center;
		padding: 2.6em 0;
	}

	.slider-list {
		grid-column-gap: 2em;
		grid-row-gap: 2em;
		padding-top: 1em;
		padding-left: 2em;
		padding-right: 2em;
		display: flex;
	}

	.slider-wrapper {
		width: 100em;
		padding-top: 9em;
		padding-bottom: 1em;
		position: relative;
		overflow: clip;
	}

	.ugc_video-gallery {
		flex-flow: row;
		width: 100em;
		padding-left: 1.3em;
		padding-right: 1.3em;
		position: relative;
		overflow: auto;
	}

	.ugc_video-gallery.slider-wrapper {
		object-fit: fill;
		padding-top: 0;
		padding-bottom: 0;
	}

	@media screen and (min-width: 1440px) {
		.item_img-wrap.slider-item {
			border-width: 0.1em;
		}
	}
	@media screen and (max-width: 991px) {
		.slider-list {
			padding-left: 3em;
			padding-right: 3em;
		}
		.item_img-wrap.slider-item {
			border-radius: 2em;
			max-width: 27.7em;
		}

		.item_img-wrap.slider-item:hover {
			transform: none;
		}
	}

	@media screen and (max-width: 767px) {
		.img_floating-element {
			font-size: 4em;
		}

		.img_floating-element.high-roas {
			top: -1.3em;
		}
		.slider-wrapper {
			padding-top: 10em;
		}
		.item_img-wrap.slider-item {
			border-radius: 2.5em;
			max-width: 32em;
		}
		.slider-list {
			padding-left: 4.5em;
			padding-right: 4.5em;
		}
	}

	@media screen and (max-width: 479px) {
		.img_floating-element {
			font-size: 5.6em;
		}

		.img_floating-element.low-cta {
			left: 0.6em;
		}

		.slider-wrapper {
			padding-top: 7em;
		}
		.item_img-wrap.slider-item {
			border-radius: 5em;
			max-width: 65em;
		}
		.slider-list {
			padding-left: 5em;
			padding-right: 5em;
		}

		.list_video-ugc.slider-list {
			grid-column-gap: 3em;
			grid-row-gap: 3em;
		}

		.ugc_video-gallery.slider-wrapper {
			padding-left: 3em;
			padding-right: 3em;
		}
	}
</style>
