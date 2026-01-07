<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { SocialRoundIconLink } from '$sharedUi';
</script>

<section class="grid-hero-app">
	<div class="grid_item">
		<div class="grid-hero">
			<div class="w-layout-vflex wrap_hero-headline pt-6 lg:pt-20">
				<h1 class="h1_regular main-headline">
					We cook <em> for everyone in need until the very last day </em> — while wars are still going
					on.
				</h1>
				<h1 class="h1_regular main-headline body-copy performance-page">
					Soup4All is <span class="bold italic">a cooperative educational board game </span>
					supplemented by a web application.

					<br />
					It was created to demonstrate the
					<span class="bold italic">
						real-life practices of the international mutual aid movement “Food Not Bombs.”</span
					>
				</h1>

				<div class="wrap_hero-cta">
					<a
						href="https://github.com/oleg-darkdev/food-not-bombs_app/tree/main/static/print-and-play"
						target="_blank"
						class="cta_primary w-inline-block"
					>
						<div class="txt_cta-name">Print & Play</div>
					</a>
					<a href="/#about" target="_blank" class="cta_primary orange hero-cta w-inline-block">
						<div class="txt_cta-name">About Soup4All</div>
					</a>
				</div>

				<div class="mt-4">
					<ul class="flex flex-row justify-center">
						<li class="item_social-link mx-auto">
							<SocialRoundIconLink icon="/images/instagram.png" alt="Instagram" link="/" />
						</li>
						<li class="item_social-link mx-auto">
							<SocialRoundIconLink icon="/images/linkedIn.png" alt="Linkedin" link="/" />
						</li>
						<li class="item_social-link mx-auto">
							<SocialRoundIconLink icon="/images/pinterest.png" alt="Pinterest" link="/" />
						</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>

	<div class="grid_item overflow-hide top-border-on-mobile hidden-mobile-app">
		<div class="grid-b_top-fold-hero transparent-bg">
			<div class="wrap_performance-hero">
				<div class="grid_performance-hero">
					<div class="column_performance-hero left">
						<div class="item_tall">
							<div class="img_performance-hero-tall bg-army-green"></div>
							<!-- <img src="/images/photos/boardgame/promo/1.JPG" loading="eager" alt="" class="img_performance-hero-tall" /> -->
						</div>
						<div class="item_square">
							<img
								src="/images/photos/boardgame/promo/3.JPG"
								loading="eager"
								sizes="(max-width: 479px) 244.421875px, (max-width: 767px) 45vw, (max-width: 991px) 16vw, (max-width: 1279px) 18vw, 196.328125px"
								alt=""
								class=""
							/>
						</div>

						<!-- bg-deep-red bg-orange bg-army-green -->
						<div class="item_tall">
							<div class="img_performance-hero-tall bg-yellow"></div>

							<!-- <img src="/images/photos/boardgame/promo/2.JPG" loading="eager" alt="" class="img_performance-hero-tall" /> -->
						</div>
						<div class="item_square">
							<div class="bg-deep-red h-full w-full"></div>
							<!-- <img
									src="/images/photos/boardgame/promo/4.JPG"
									loading="eager"
									sizes="(max-width: 479px) 244.421875px, (max-width: 767px) 45vw, (max-width: 991px) 16vw, (max-width: 1279px) 18vw, 196.328125px"
									alt=""
									class=""
								/> -->
						</div>
					</div>
					<div class="column_performance-hero center">
						<div class="item_tall">
							<!-- <img
									src="/images/photos/boardgame/promo/1.JPG"
									loading="eager"
									alt=""
									class="img_performance-hero-tall"
								/> -->
							<div class="img_performance-hero-tall bg-deep-gray"></div>
						</div>
						<!-- 									sizes="(max-width: 479px) 244.4375px, (max-width: 767px) 45vw, (max-width: 991px) 16vw, (max-width: 1279px) 18vw, 196.328125px"
 -->
						<!-- item_square -->
						<div class="item_square">
							<!--  -->
							<img src="/images/photos/boardgame/promo/4.JPG" loading="eager" alt="" class="" />
						</div>
						<div class="item_tall">
							<!-- <img
									src="/images/photos/boardgame/promo/1.JPG"
									loading="eager"
									alt=""
									class="img_performance-hero-tall"
								/> -->
							<div class="img_performance-hero-tall bg-orange"></div>
						</div>
					</div>
					<div class="column_performance-hero right">
						<div class="item_tall">
							<!-- <img
									src="/images/photos/boardgame/promo/1.JPG"
									loading="eager"
									alt=""
									class="img_performance-hero-tall"
								/> -->
							<div class="img_performance-hero-tall bg-deep-red"></div>
						</div>
						<div class="item_square">
							<img src="/images/photos/boardgame/promo/9.JPG" loading="eager" alt="" class="" />
						</div>
						<div class="item_tall">
							<div class="img_performance-hero-tall bg-yellow"></div>

							<!-- <img
									src="/images/photos/boardgame/promo/1.JPG"
									loading="eager"
									alt=""
									class="img_performance-hero-tall"
								/> -->
						</div>
						<div class="item_square">
							<img
								src="/images/photos/boardgame/promo/8.JPG"
								loading="eager"
								sizes="(max-width: 479px) 244.4375px, (max-width: 767px) 45vw, (max-width: 991px) 16vw, (max-width: 1279px) 18vw, 196.328125px"
								alt=""
								class=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- </section> -->

<style lang="postcss">
	.grid-hero-app {
		grid-column-gap: 0em;
		grid-row-gap: 0em;
		grid-template-rows: auto;
		grid-template-columns: 0.75fr 1fr;
		grid-auto-columns: 1fr;
		display: grid;
	}

	.grid-hero {
		grid-column-gap: 2em;
		grid-row-gap: 2em;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100%;
		padding-top: 2em;
		padding-left: 3em;
		padding-right: 3em;
		display: flex;
		position: relative;
		overflow: hidden;
	}

	@media screen and (max-width: 767px) {
		.grid-hero {
			height: 46em;
			font-size: 1.2em;
		}

		.hidden-mobile-app {
			display: none;
		}
		.grid-hero-app {
			grid-template-columns: 1fr;
		}
	}

	@media screen and (max-width: 479px) {
		.grid-hero {
			height: auto;
			padding: 4em;
		}
	}
</style>
