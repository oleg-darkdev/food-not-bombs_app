<script lang="ts">
	import { nav } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<header class="header">
	<!-- <a href="/" class="link_header-logo w-inline-block">
		<div class="h-10 w-auto">
			<img src="/images/logo_row_light_full.svg" class="h-full w-64 lg:w-full" alt="FNB Logo" />
		</div>
	</a> -->
	<button class='bg-black h-20 w-20'></button>

	<nav class="wrap_main-nav">
		<div class="wrap_main-nav-container">
			<div class="block_main-nav">
				<ol role="list" class="list_main-nav w-list-unstyled">
					{#each nav as item}
						<li class="item_main-nav">
							<a href={item.link} class="item_nav-link">{item.title}</a>
						</li>
					{/each}
					<li class="item_main-nav">
						<a href="/app" aria-current="page" class="item_nav-link w--current">App</a>
					</li>
					<li class="item_main-nav contact">
						<a href="#contact" class="item_nav-link contact">Contact</a>
					</li>
				</ol>
				<!-- <ol role="list" class="list_main-nav w-list-unstyled">
					<li class="item_main-nav">
						<div data-hover="true" data-delay="100" class="dropdown w-dropdown">
							<div class="item_nav-link w-dropdown-toggle">
								<div class="img_drop-down-icon hide w-icon-dropdown-toggle"></div>
								<div class="text-block">Services</div>
							</div>
							<article class="list_dropdown-list w-dropdown-list">
								<div class="w-layout-vflex list_dropdown-list">
									<a href="/service/content" class="item_drop-down-link w-dropdown-link">Content</a>
									<a href="/service/organic-social" class="item_drop-down-link w-dropdown-link"
										>Organic</a
									>
									<a href="/service/performance" class="item_drop-down-link w-dropdown-link"
										>PERFORMANCE</a
									>
								</div>
							</article>
						</div>
					</li>
					<li class="item_main-nav">
						<a href="/about" aria-current="page" class="item_nav-link w--current">About</a>
					</li>
					<li class="item_main-nav contact">
						<a href="/contact" class="item_nav-link contact">Contact</a>
					</li>
				</ol> -->
			</div>
			<!-- <div class="btn_menu-close"></div> -->

		</div>

		<!-- <div class="bg-black h-20 w-20">
			<button aria-label="Menu close" class="btn_nav-menu---close">
				<div
					data-is-ix2-target="1"
					class="lottie_pophaus-menu"
					data-w-id="5b4a0c96-d3ca-6991-b71d-0eb8ba1e7ab6"
					data-animation-type="lottie"
					data-src="https://cdn.prod.website-files.com/669fc854dd10d0a0ff0cf009/669fc854dd10d0a0ff0cf062_lottie_pophaus-menu.json"
					data-loop="0"
					data-direction="1"
					data-autoplay="0"
					data-renderer="svg"
					data-default-duration="6.016666666666667"
					data-duration="0"
					data-ix2-initial-state="10"
				></div>
			</button>
			<button aria-label="Menu open" class="btn_nav-menu---open">
				<div
					data-is-ix2-target="1"
					class="lottie_pophaus-menu"
					data-w-id="5b4a0c96-d3ca-6991-b71d-0eb8ba1e7ab8"
					data-animation-type="lottie"
					data-src="https://cdn.prod.website-files.com/669fc854dd10d0a0ff0cf009/669fc854dd10d0a0ff0cf062_lottie_pophaus-menu.json"
					data-loop="0"
					data-direction="1"
					data-autoplay="0"
					data-renderer="svg"
					data-default-duration="6.016666666666667"
					data-duration="0"
					data-ix2-initial-state="10"
				></div>
			</button> -->
		</div>
	</nav>

</header>

<style lang="postcss">
	.btn_menu-close {
		background-color: #efefef00;
		display: none;
	}

	.btn_nav-menu---open {
		aspect-ratio: 1;
		background-color: var(--background--cream);
		cursor: pointer;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		width: 5em;
		/* display: none; */
		position: relative;
		overflow: hidden;
	}

	@media screen and (max-width: 991px) {
		.btn_menu-close {
			background-color: #f1bc4800;
			width: 100vw;
			height: 100vh;
			padding-bottom: 0;
			padding-right: 0;
			/* display: none; */
			position: fixed;
			inset: -4em auto 0% -90em;
		}

		.btn_nav-menu---close {
			background-color: #fef4de00;
			width: 7em;
			/* display: none; */
			z-index: 30 !important;
		}

		.btn_nav-menu---close:active {
			z-index: 30;
		}

		.btn_nav-menu---open {
			background-color: #fef4de00;
			width: 7em;
			display: flex;
			z-index: 30 !important;
		}

		.btn_nav-menu---open:active {
			z-index: 30;
		}
	}

	@media screen and (max-width: 767px) {
		.btn_nav-menu---open {
			width: 8em;
		}
	}

	@media screen and (max-width: 479px) {
		.btn_nav-menu---open {
			width: 15em;
		}
	}
</style>
