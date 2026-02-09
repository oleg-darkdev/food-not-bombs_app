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
			history.replaceState(null, '', hash);
		}
	}
</script>

<header class="header">
	<a href="/" class="link_header-logo w-inline-block -ml-3">
		<div class="h-8 w-auto lg:h-10">
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
						<a href="/docs" target="_blank" class="item_nav-link w--current">Docs</a>
					</li>
					<li class="item_main-nav contact">
						<a href="/app" target="_blank" class="item_nav-link contact">App</a>
					</li>
				</ol>
			</div>
		</div>

		<div class="btn-carrot-menu -mr-1">
			<button class="" on:click={() => (showNav = !showNav)}>
				{#if !showNav}
					<img
						src="/images/icons/menu.svg"
						class="h-10 w-10 transition-transform duration-200"
						alt=""
					/>
				{:else}
					<img
						src="/images/icons/close.svg"
						class="h-10 w-10 transition-transform duration-200"
						alt=""
					/>
				{/if}
			</button>
		</div>
	</nav>

	{#if showNav}
		<nav class="">
			<div class="block_main-nav-sm transition-transform duration-200 ease-in-out">
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
								goto('/docs');
							}}
							class="item_nav-link w--current">Docs</button
						>
					</div>
					<div class="item_main-nav contact">
						<button
							on:click|preventDefault={() => {
								showNav = false;
								goto('/app');
							}}
							class="item_nav-link contact">App</button
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
		position: sticky;
		top: 0;
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
	}

	.link_header-logo {
		z-index: 30;
		position: absolute;
	}

	.link_header-logo:hover {
		z-index: 35;
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

	@media screen and (min-width: 1440px) {
		.header {
			border-bottom-width: 0.1em;
		}
	}

	@media screen and (min-width: 991px) {
		.btn-carrot-menu {
			display: none;
		}
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
	}

	@media screen and (max-width: 767px) {
		.wrap_main-nav-container {
			top: 0;
		}
		.link_header-logo {
			/* top: 2em; */
		}
		.block_main-nav-sm {
			border-radius: 1.5em;
			font-size: 2em;

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
	}
</style>
