<script lang="ts">
	import { nav } from '$sharedData';

	import { goto } from '$app/navigation';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let showNav = $state(false);

	function scrollToAnchor(hash) {
		const id = hash.replace('#', '');
		const el = document.getElementById(id) || document.querySelector(hash);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			history.replaceState(null, '', hash); // меняет URL без перезагрузки
		}
	}
</script>

<header class="header">
	<a href="/" class="link_header-logo w-inline-block -ml-3">
		<div class="h-10 w-auto">
			<img src="/images/logo_row_light_full.svg" class="h-full w-full" alt="FNB Logo" />
		</div>
	</a>

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
		</div>

		<div class="btn-carrot-menu -mr-1">
			<button class="h-10 w-10 bg-black" on:click={() => (showNav = !showNav)}></button>
		</div>
	</nav>

	{#if showNav}
		<!-- on:click={() => (showNav = !showNav)} -->
		<nav class="">
			<div class="block_main-nav-sm">
				<ol role="list" class="list_main-nav w-list-unstyled">
					{#each nav as item}
						<li class="item_main-nav">
							<div
								on:click|preventDefault={() => {
									scrollToAnchor(item.link);
								}}
								class="item_nav-link"
							>
								{item.title}
							</div>
						</li>
					{/each}
				</ol>

				<div class="mt-4 flex flex-row">
					<div class="item_main-nav contact mr-2">
						<button
							on:click|preventDefault={() => {
								showNav = false;
								goto('/app');
							}}
							aria-current="page"
							class="item_nav-link w--current">App</button
						>
					</div>
					<div class="item_main-nav contact">
						<button
							on:click|preventDefault={() => {
								scrollToAnchor('#contact');
							}}
							class="item_nav-link contact">Contact</button
						>
					</div>
				</div>
			</div>
		</nav>
	{/if}
</header>

<style lang="postcss">
	.wrap_main-nav {
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		padding-right: 3em;
		display: flex;
	}

	.wrap_main-nav-container {
		justify-content: space-between;
		align-items: center;
		font-size: 0.8vw;
	}

	.list_main-nav {
		grid-column-gap: 0.5em;
		grid-row-gap: 0.5em;
		justify-content: space-around;
		margin-bottom: 0;
		padding-left: 0;
		display: flex;
	}

	.block_main-nav {
		grid-column-gap: 0.5em;
		grid-row-gap: 0.5em;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		display: flex;
	}

	.header {
		z-index: 2147483647;
		border-bottom: 1px solid var(--borders--army-green);
		background-color: var(--background--cream);
		flex-flow: row;
		justify-content: flex-start;
		align-items: center;
		padding-top: 1.2em;
		padding-bottom: 1.2em;
		padding-left: 3em;
		display: flex;
		position: relative;
		inset: 0% 0% auto;
	}

	.link_header-logo {
		z-index: 30;
		position: absolute;
	}

	.link_header-logo:hover {
		z-index: 35;
	}

	/* .link_header-logo.w--current {
		align-self: center;
		inset: 0% auto -10% 3em;
	}

	.btn_menu-close {
		background-color: #efefef00;
		display: none;
	} */

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

	@media screen and (min-width: 1440px) {
		.header {
			border-bottom-width: 0.1em;
		}
	}

	@media screen and (min-width: 991px) {
		.btn-carrot-menu {
			display: none;
		}

		/* .wrap_main-nav-container.wrap_card-style-1 {
			width: 24em;
			height: 32em;
			font-size: 1.2em;
			inset: 110% auto 0% 4%;
		} */
	}

	@media screen and (max-width: 991px) {
		.wrap_main-nav {
			justify-content: flex-end;
			align-items: center;
			padding-right: 0;
		}

		.wrap_main-nav-container {
			z-index: 999999;
			flex-flow: column;
			justify-content: flex-start;
			align-items: center;
			font-size: 1vw;
			/* display: none; */
			position: relative;
			inset: -2.5em auto auto 0%;
		}
		.block_main-nav {
			display: none;
		}
		.list_main-nav {
			grid-column-gap: 0.3em;
			grid-row-gap: 0.3em;
			flex-flow: column;
			width: 100%;
		}

		.block_main-nav-sm {
			z-index: 40;
			grid-column-gap: 1em;
			grid-row-gap: 1em;
			border: 1px solid var(--borders--army-green);
			background-color: var(--background--beige);
			background-image: url('/images/corner-dot-army-green.svg'),
				url('/images/corner-dot-army-green.svg'), url('/images/corner-dot-army-green.svg'),
				url('/images/corner-dot-army-green.svg');
			background-position:
				5% 3%,
				95% 3%,
				95% 97%,
				5% 97%;
			background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
			background-size: 1em, 1em, 1em, 1em;
			border-radius: 2em;
			flex-flow: column;
			width: 100em;
			/* max-width: 23em; */
			padding: 1em 3em 2em;
			font-size: 1.4em;
			position: absolute;
			bottom: -46em;
			left: auto;
			right: -5.9em;
		}

		.header {
			z-index: 999999999;
			justify-content: flex-start;
			align-items: center;
			padding-left: 3em;
			padding-right: 3em;
		}

		/* .link_header-logo.w--current {
			z-index: 40;
			margin-left: auto;
			margin-right: auto;
			top: auto;
			bottom: auto;
		}

		.btn_menu-close {
			background-color: #f1bc4800;
			width: 100vw;
			height: 100vh;
			padding-bottom: 0;
			padding-right: 0;
			display: none;
			position: fixed;
			inset: -4em auto 0% -90em;
		}

		.btn_nav-menu---close {
			background-color: #fef4de00;
			width: 7em;
			display: none;
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
		} */
	}

	@media screen and (max-width: 767px) {
		/* .btn_nav-menu---open {
			width: 8em;
		} */

		.wrap_main-nav-container {
			top: 0;
		}
		.link_header-logo {
			/* top: 2em; */
		}
		.block_main-nav-sm {
			border-radius: 1.5em;
			font-size: 2em;
			/* bottom: -32.8em; */
			/* right: -4.2em; */
			left: 0;
			width: 100%;
		}
	}

	@media screen and (max-width: 479px) {
		.wrap_main-nav-container {
			/* display: none; */
			top: 0;
		}

		.block_main-nav-sm {
			grid-column-gap: 0.1em;
			grid-row-gap: 0.1em;
			border-radius: 1em;
			font-size: 3em;
		}

		.list_main-nav {
			grid-column-gap: 0em;
			grid-row-gap: 0em;
		}

		/* .btn_nav-menu---open {
			width: 15em;
		} */
		.link_header-logo {
			/* padding-top: 1em;
			padding-left: 1em; */
		}
	}
</style>
