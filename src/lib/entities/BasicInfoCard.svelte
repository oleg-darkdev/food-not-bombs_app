<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<div class="flex justify-center max-w-2xl  px-4">
	<div class="relative my-10 w-full ">
		<!-- <div class="txt_tag-name top-creative">Boardgame about - Food Not Bombs</div> -->
		<div class="wrap_info-container p-10 ">
			<!-- <h1 class="h_semi-bold top-creative ad-of-the-month">Lorem Ipsum <br /> jest tekstem</h1> -->
			<div class="flex flex-col items-center justify-center ">
				<div class="flex w-full flex-row items-center justify-start">
					<img src="/images/icons/co-op.svg" class="mr-2 h-12 w-12 lg:h-20 lg:w-20" alt="" />
					<h2 class="Info-txt text-yellow pb-2 text-center">Co-op.</h2>
				</div>

				<div class="flex w-full flex-row items-center justify-start">
					<img src="/images/icons/players.svg" class="mr-2 h-12 w-12 lg:h-20 lg:w-20" alt="" />
					<h2 class="Info-txt text-yellow pb-2 text-center">2-8 players.</h2>
				</div>

				<div class="flex w-full flex-row items-center justify-start">
					<img src="/images/icons/time.svg" class="mr-2 h-12 w-12 lg:h-20 lg:w-20" alt="" />
					<h2 class="Info-txt text-yellow pb-2 text-center">42-78 min.</h2>
				</div>

				<div class="mb-6 flex w-full flex-row items-center justify-start">
					<img src="/images/icons/age.svg" class="mr-2 h-12 w-12 lg:h-20 lg:w-20" alt="" />
					<h2 class="Info-txt text-yellow pb-2 text-center">12+ years.</h2>
				</div>

				<div class="flex w-full flex-col items-center justify-start">
					<h4 class="h1_regular main-headline small text-orange pb-2 text-center">
						<!-- This open source project is distributed under license: -->
						CC BY-NC-SA 4.0
						<!-- <span class=""></span> -->
					</h4>
					<img src="/images/cc_logotype.svg" class="mr-2 h-20 w-64" alt="" />
				</div>
			</div>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	.wrap_info-container {
		/* z-index: 30; */
		aspect-ratio: 1;
		background-color: var(--texts--deep-red);
		border-radius: 1.5em;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		/* width: 100em; */
		/* max-width: 90em; */
		/* padding-left: 2em;
		padding-right: 2em; */
		/* padding: 2em 2em; */
		display: flex;
		/* position: inherit; */
	}

	.Info-txt {
		font-family: var(--fonts--primary-typeface);
		margin-top: 0;
		margin-bottom: 0;
		font-size: 2em;
		font-weight: 600;
		line-height: 1;
	}

	@media screen and (max-width: 991px) {
		.Info-txt {
			font-size: 3em;
		}
	}

	@media screen and (max-width: 767px) {
		.Info-txt {
			font-size: 3em;
		}
	}

	@media screen and (max-width: 479px) {
		.Info-txt {
			font-size: 4em;
		}
	}
</style>
