<script lang="ts">
	// import {} from '$sharedData';
	import { InsstructionListCard, PlayerRoleCard } from '$entities';
	import { SliderGallery } from '$entitiesLanding';
	import { ScrollToTop, Tag } from '$sharedUi';
	import { PreFAQ, Footer } from '$widgetsLanding';
	import { GroupsListingMini } from '$widgets';
	import { PlayerRoleInfo } from '$widgetsApp';

	import {
		// Team,
		// CallingAll,
		// BigLightDivider,
		// Gallery,
		// Marquee,
		FAQ,
		ApiListing
		// VeganMenu,
		// LangSwitcher,
		// landingPromoPhotos,
		// GroupsListingMini,
		// ApiListing
	} from '$widgets';

	let { data } = $props();

	const {
		kit,
		foodTokens,
		roles,
		preparation,
		promoFnbGroups,
		winTokens,
		loseTokens,
		winLose,
		volunteeringApp,
		volunteeringGame,
		volunteeringFnb,
		docsNav
	} = data;

	console.log(kit.playersStuff.items);

	// console.log(kit); // done

	// console.log(foodTokens);
	// console.log(roles);

	// console.log(preparation);
	// console.log(winTokens);
	// console.log(loseTokens);
	// console.log(winLose);

	// console.log(volunteeringApp);
	// console.log(volunteeringGame);
	// console.log(volunteeringFnb);
</script>

<!-- {#snippet api()}

		{/snippet} -->

<!-- data={kit.tokens} -->

<aside id="docs-navigation" class="docs-navigation">
	<nav class="docs-navigation-inner">
		<ul class="docs-nav-list">
			{#each docsNav as navItem}
				<li class="docs-nav-item">
					<a href="#{navItem.anchor}" class="docs-nav-link">
						<img src="/images/corner-dot-army-green.svg" alt="" class="docs-nav-dot" />
						<span>{navItem.title}</span>
					</a>

					{#if navItem.subNav}
						<ul class="docs-subnav">
							{#each navItem.subNav as subNav}
								<li class="docs-subnav-item">
									<a href="#{subNav.anchor}" class="docs-nav-link">
										<img src="/images/corner-dot-army-green.svg" alt="" class="docs-nav-dot" />
										<span>{subNav.title}</span>
									</a>

									{#if subNav.subSubNav}
										<ul class="docs-subsubnav">
											{#each subNav.subSubNav as subSubNav}
												<li class="docs-subsubnav-item">
													<a href="#{subSubNav.anchor}" class="docs-nav-link">
														<img
															src="/images/corner-dot-army-green.svg"
															alt=""
															class="docs-nav-dot"
														/>
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
				</li>
			{/each}
		</ul>
	</nav>
</aside>
<main class=" flex flex-col items-end justify-end">
	<div class="max-w-5xl">
		<InsstructionListCard title={kit.tokens.category}>
			{#snippet start()}{/snippet}

			{#snippet list()}
				<div class="" id="components">
					<h2 id="package" class="text-center">{kit.package.category}</h2>

					{#each kit.package.items as packageItem}
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<div class="mr-4">
										<img
											src={packageItem.img}
											loading="eager"
											alt=""
											class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
										/>
									</div>

									<span class="txt_services-list-item caps service">{packageItem.title} </span>
								</div>

								<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
									<div
										role="listitem"
										class="item_project-tags w-dyn-item flex flex-row items-center"
									>
										<p>
											x<span class="txt_services-list-item caps service text-2xl font-bold"
												>{packageItem.quantity}</span
											>
										</p>
									</div>
								</div>
								<!-- {ingredient.count} -->
							</div>
						</li>
					{/each}
				</div>
				<a name="tokens"></a>

				<div class="" id="players-tokens">
					<h2 class="text-center">{kit.playersStuff.category}</h2>

					{#each kit.playersStuff.items as item}
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<div class="mr-4">
										<img
											src={item.token.img}
											loading="eager"
											alt=""
											class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
										/>
									</div>

									<span class="txt_services-list-item caps service">{item.title} </span>
								</div>

								<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
									<div
										role="listitem"
										class="item_project-tags w-dyn-item flex flex-row items-center"
									>
										<p class="mr-2">
											x<span class="txt_services-list-item caps service text-2xl font-bold"
												>{item.token.quantity}</span
											>
										</p>
										<div class=" ">
											<a href="#{item.anchor}" class="">
												<Tag text="more" bgColor="" />
											</a>
										</div>
									</div>
								</div>
								<!-- {ingredient.count} -->
							</div>
						</li>
						<!-- {/each} -->
					{/each}
				</div>
				<div class="" id="food-tokens">
					<h2 class="text-center">{kit.tokens.food.category}</h2>

					{#each kit.tokens.food.items as token}
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<div class="mr-4">
										<img
											src={token.img}
											loading="eager"
											alt=""
											class="h-8 w-20 rounded-lg object-cover lg:h-12 lg:w-24"
										/>
									</div>

									<span class="txt_services-list-item caps service">{token.title} </span>
								</div>

								<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
									<div role="listitem" class="item_project-tags w-dyn-item">
										<p>
											x<span class="txt_services-list-item caps service text-2xl font-bold"
												>{token.quantity}</span
											>
										</p>
									</div>
								</div>
								<!-- {ingredient.count} -->
							</div>
						</li>
					{/each}
				</div>

				<div class="" id="other-tokens">
					<h2 class="text-center">{kit.tokens.other.category}</h2>

					{#each kit.tokens.other.items as token}
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<div class="mr-4">
										<img
											src={token.img}
											loading="eager"
											alt=""
											class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
										/>
									</div>

									<span class="txt_services-list-item caps service">{token.title} </span>
								</div>

								<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
									<div role="listitem" class="item_project-tags w-dyn-item">
										<p>
											x<span class="txt_services-list-item caps service text-2xl font-bold"
												>{token.quantity}</span
											>
										</p>
									</div>
								</div>
								<!-- {ingredient.count} -->
							</div>
						</li>
					{/each}
				</div>
			{/snippet}
		</InsstructionListCard>

		<section id="reward-tokens" class="my-10">
			<h2 class="text-center">{kit.tokens.reward.category}</h2>

			<div class=" flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
				{#each kit.tokens.reward.items as role}
					<PlayerRoleCard {role} />
				{/each}
			</div>
		</section>

		<section id="lose-tokens" class="my-10">
			<h2 class="text-center">{kit.tokens.lose.category}</h2>

			<div class=" flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
				{#each kit.tokens.lose.items as role}
					<PlayerRoleCard {role} />
				{/each}
			</div>
		</section>

		<a name="tablets"></a>
		<a name="map-tablets"></a>

		<!-- <section id="map-tablets" class="section bg-army-green my-20">
			<h2 class="text-center">{kit.tablets.map.category}</h2>

			<SliderGallery imgs={kit.tablets.map.items} />
		</section> -->

		<section id="players-tablets" class="">
			<h2 class="text-center">{kit.playersStuff.category}</h2>

			<div class=" flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
				{#each kit.playersStuff.items as role}
					<PlayerRoleCard role={role.tablet} />
				{/each}
			</div>
		</section>

		<section>
			<div class="">
				{#each kit.playersStuff.desc as p}
					<p class="mb-2">{p}</p>
				{/each}
			</div>
			<div class="py-10">
				{#each kit.playersStuff.items as player}
					<div id={player.anchor} class="mb-10">
						<PlayerRoleInfo {player} />
					</div>
				{/each}
			</div>
		</section>

		<a name="updates"></a>

		<!-- <GroupsListingMini groupsData={promoFnbGroups.slice(0, 8)} /> -->

		<section id="groups">
			<ApiListing />

			<!-- вывесте черещ groups list - ссылки на api, и ссылку группы с указанием количества групп в базее и стран входящих -->
			<div class="" id="c-s-america"></div>
		</section>
	</div>
</main>
<PreFAQ />
<FAQ />

<Footer />

<ScrollToTop />

<style lang="postcss">
	.txt_services-list-item {
		text-align: left;
	}
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

	.docs-nav-list,
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

	.docs-nav-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		font-weight: 600;
		text-transform: uppercase;
		transition: transform 0.2s ease;
	}

	.docs-nav-link:hover {
		transform: translateX(4px);
	}

	.docs-nav-dot {
		width: 0.5rem;
		height: 0.5rem;
	}
</style>
