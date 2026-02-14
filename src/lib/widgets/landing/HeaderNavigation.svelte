<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { AsideMenuNavListItem } from '$entitiesLanding';

	let { docsNav, groupList } = $props();
	let showNav = $state(false);

	function scrollToAnchor(hash) {
		const id = hash.replace('#', '');
		const el = document.getElementById(id) || document.querySelector(hash);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth' });
			history.replaceState(null, '', hash);
		}
	}

	let showFull = $state(false);
</script>

<header class="header ">
	<nav class="wrap_main-nav">
		<h2 class="h1_regular main-headline">Navigation</h2>
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
</header>

{#if showNav}
	<div class="fixed inset-0 top-14 z-[60] flex ">
		<nav
			class="block_main-nav-sm docs-navigation-inner  relative ml-auto h-[93vh] w-full flex-1 overflow-y-scroll"
		>
			<ul class="docs-nav-list transition-transform duration-200 ease-in-out  ">
				{#each docsNav as navItem}
					<AsideMenuNavListItem {groupList} {navItem} bind:showNav />
				{/each}
			</ul>
		</nav>
	</div>
{/if}

<style lang="postcss">
	.wrap_main-nav {
		justify-content: flex-end;
		align-items: center;
		width: 100%;
		padding-right: 3em;
		display: flex;
	}

	.header {
		position: sticky;
		top: 0;
		z-index: 10;

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

		.block_main-nav-sm {
			z-index: 20;
			grid-column-gap: 1em;
			grid-row-gap: 1em;
			/* border: 1px solid var(--borders--army-green); */
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
			background-size: 2em, 2em, 2em, 2em;
			border-radius: 2em;
			flex-flow: column;
			width: 100em;
			/* max-width: 23em; */
			/* padding: 1em 3em 2em; */
			font-size: 1.4em;
			/* position: absolute;
			bottom: -46em; */
			left: auto;
			/* right: -5.9em; */
		}

		.header {
			z-index: 20;
			justify-content: flex-start;
			align-items: center;
			padding-left: 3em;
			padding-right: 3em;
		}
	}

	@media screen and (max-width: 767px) {
		.block_main-nav-sm {
			border-radius: 1.5em;
			font-size: 2em;

			left: 0;
			width: 100%;
		}
	}

	@media screen and (max-width: 479px) {
		.block_main-nav-sm {
			grid-column-gap: 0.1em;
			grid-row-gap: 0.1em;
			border-radius: 1em;
			font-size: 3em;
		}
	}

	
	@media screen and (min-width: 991px) {
	.no-scrollbar::-webkit-scrollbar {
		display: none;
	}

	.no-scrollbar {
		-ms-overflow-style: none; /* IE и Edge */
		scrollbar-width: none; /* Firefox */
	}
		.docs-navigation {
			position: sticky;
			top: 6rem; /* ниже header */
			left: 1rem;
			width: 18rem;
			max-height: calc(100vh - 8rem);
			overflow-y: auto;

			z-index: 100;
		}
		.header {
			display: none;
		}
	}

	@media screen and (max-width: 991px) {
		.docs-navigation {
			display: none;
		}
	}
	.docs-navigation-inner {
		border: 1px solid var(--borders--army-green);
		/* border-radius: 1.5rem; */
		background-color: var(--background--beige);
		padding: 2.5rem;
	}

	.docs-nav-list {
		list-style: none;
		padding: 20px 0;
		margin: 0;
	}
</style>
