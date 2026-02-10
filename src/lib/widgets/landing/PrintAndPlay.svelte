<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<section class="">
	<div class="">
		<div class="grid-hero">
			<div class="w-layout-vflex wrap_hero-headline">
				<h1 class="h1_regular main-headline">
					We are glad that you are interested in the.
					<em> Soup4All: Food Not Bombs</em> boardgame.
				</h1>

				<p class="h1_regular main-headline body-copy performance-page">
					Soup4All is <span class="bold italic">a cooperative educational board game </span>
					supplemented by a web application.
				</p>

				<p class="h1_regular main-headline body-copy performance-page">
					It was created to demonstrate the
					<span class="bold italic">
						real-life practices of the international mutual aid movement “Food Not Bombs.”</span
					>
				</p>

				<p class="h1_regular main-headline body-copy performance-page">
					You can support the author and the development of the project by buying him some coffee or
					food.
				</p>

				<img src="/images/bmc-button.png" class="-mt-6 mb-6 h-16 w-auto" alt="Buy me a coffee" />

				<p class="h1_regular main-headline body-copy performance-page">
					You can purchase a printed educational board game, as well as a set of high-quality PnP
					materials, in our store.
				</p>
				<a href="/" target="_blank" class="cta_primary orange hero-cta w-inline-block -mt-6 mb-6">
					<div class="txt_cta-name">Buy in store</div>
				</a>

				<p class="h1_regular main-headline body-copy performance-page">
					The game is available for download as an archive, all versions are available at the link
					bellow - the latest version is recommended.
				</p>

				<a
					href="https://github.com/oleg-darkdev/food-not-bombs_app/tree/main/static/print-and-play"
					target="_blank"
					class="cta_primary w-inline-block -mt-6"
				>
					<div class="txt_cta-name">Download PNP</div>
				</a>

				<!-- <div class="wrap_hero-cta"></div> -->
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
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
		/* position: relative; */
		overflow: hidden;
	}

	@media screen and (max-width: 767px) {
		.grid-hero {
			height: 46em;
			font-size: 1.2em;
		}
	}

	@media screen and (max-width: 479px) {
		.grid-hero {
			height: auto;
			padding: 4em;
		}
	}
</style>
