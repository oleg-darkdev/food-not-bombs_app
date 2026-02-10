<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { navItem, showMenu = $bindable() } = $props();
</script>

<li class="docs-nav-item cursor-pointer">
	<!-- a href="#{navItem.anchor}" -->
	<button
		onclick={() => {
			showMenu = !showMenu;
			// console.log(showMenu);
		}}
		class="docs-nav-link flex w-full
		items-center
		justify-between
		gap-4"
	>
		<img
			src="/images/icons/down_arrow.svg"
			class="mr-2 h-8 w-8 lg:h-4 lg:w-4 {showMenu
				? 'rotate-180'
				: ''} transition-transform duration-300"
			alt=""
		/>
		<!-- <img src="/images/corner-dot-army-green.svg" alt="" class="docs-nav-dot" /> -->
		<span>{navItem.title}</span>

		<img
			src="/images/icons/down_arrow.svg"
			class="mr-2 h-8 w-8 lg:h-4 lg:w-4 {showMenu
				? 'rotate-180'
				: ''} transition-transform duration-300"
			alt=""
		/>
	</button>

	{#if showMenu}
		{#if navItem.subNav}
			<ul class="docs-subnav">
				{#each navItem.subNav as subNav}
					<li class="docs-subnav-item mb-4">
						<a href="#{subNav.anchor}" class="docs-nav-link">
							<img src="/images/corner-dot-army-green.svg" alt="" class="docs-nav-dot" />
							<span>{subNav.title}</span>
						</a>

						{#if subNav.subSubNav}
							<ul class="docs-subsubnav">
								{#each subNav.subSubNav as subSubNav}
									<li class="docs-subsubnav-item">
										<a href="#{subSubNav.anchor}" class="docs-nav-link">
											<img src="/images/corner-dot-army-green.svg" alt="" class="docs-nav-dot" />
											<span>{subSubNav.title}</span>
										</a>
									</li>
								{/each}
							</ul>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</li>

<style lang="postcss">
	.docs-subnav,
	.docs-subsubnav {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.docs-nav-item {
		margin-bottom: 1rem;
	}

	.docs-subnav {
		padding-left: 1rem;
		margin-top: 0.5rem;
	}

	.docs-subsubnav {
		padding-left: 1.5rem;
		margin-top: 0.25rem;
	}
	@media screen and (min-width: 991px) {
		.docs-nav-link {
			gap: 0.5rem;
			font-size: 0.9rem;
			font-weight: 600;
			text-transform: uppercase;
			transition: transform 0.2s ease;
		}
	}
	@media screen and (max-width: 991px) {
		.docs-nav-link {
			gap: 0.5rem;
			font-size: 1.3rem;
			font-weight: 600;
			text-transform: uppercase;
			transition: transform 0.2s ease;
		}
	}
	.docs-nav-link:hover {
		transform: translateX(4px);
	}

	.docs-nav-dot {
		width: 0.5rem;
		height: 0.5rem;
	}
</style>
