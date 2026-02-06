<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { AsideMenuNavListItem } from '$entitiesLanding';

	let { docsNav } = $props();
</script>

<aside id="docs-navigation" class="docs-navigation">
	<nav class="docs-navigation-inner">
		<ul class="docs-nav-list">
			{#each docsNav as navItem}
				<AsideMenuNavListItem {navItem} />
			{/each}
		</ul>
	</nav>
</aside>

<style lang="postcss">
	.docs-navigation {
		/* width: 22rem; */
		/* max-height: calc(100vh - 8rem); */
		/* overflow-y: auto; */
		/* z-index: 100; */
	}
	@media screen and (min-width: 991px) {
		.docs-navigation {
			position: fixed;
			top: 6rem; /* ниже header */
			left: 1rem;
			width: 22rem;
			max-height: calc(100vh - 8rem);
			overflow-y: auto;
			z-index: 100;
		}
	}

	.docs-navigation-inner {
		border: 1px solid var(--borders--army-green);
		border-radius: 1.5rem;
		background-color: var(--background--beige);
		padding: 1.5rem;
	}

	.docs-nav-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
