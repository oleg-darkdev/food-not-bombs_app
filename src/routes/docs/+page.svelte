<script lang="ts">
	// import {} from '$sharedData';
	import { InsstructionListCard, PlayerRoleCard } from '$entities';
	import { SliderGallery } from '$entitiesLanding';
	import { ScrollToTop } from '$sharedUi';
	import { PreFAQ, Footer } from '$widgetsLanding';

	import {
		// Team,
		// CallingAll,
		// BigLightDivider,
		// Gallery,
		// Marquee,
		FAQ
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
		winTokens,
		loseTokens,
		winLose,
		volunteeringApp,
		volunteeringGame,
		volunteeringFnb,
		docsNav
	} = data;

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

<InsstructionListCard title={'Navigation'}>
	{#snippet start()}{/snippet}

	{#snippet list()}
		<!-- <h2 class="text-center">{kit.tokens.players.category}</h2> -->
		<div class="" id="navigation">
			{#each docsNav as navItem}
				<li
					class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
				>
					<a href="#{navItem.anchor}" class="">
						<div
							class="txt_services-list-item caps service flex flex-row items-center justify-between"
						>
							<p class="flex max-w-sm flex-row items-center">
								<!-- <div class="mr-4">
								<img
									src={token.img}
									loading="eager"
									alt=""
									class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
								/>
							</div> -->
								<img
									src="/images/corner-dot-army-green.svg"
									loading="lazy"
									alt=""
									class="mr-2 h-2 w-2"
								/>

								<!-- pointer-events: none;
	width: 2em;
	margin: 1em;
	position: absolute; -->

								<span class="txt_services-list-item caps service">{navItem.title} </span>
							</p>

							<!-- <div role="list" class="flex max-w-2xl flex-row items-center justify-between">
							<div role="listitem" class="item_project-tags w-dyn-item">
								<p>
									x<span class="txt_services-list-item caps service text-2xl font-bold"
										>{token.quantity}</span
									>
								</p>
							</div>
						</div> -->
							<!-- {ingredient.count} -->
						</div>
					</a>
				</li>
				<div class="pl-4 lg:pl-6">
					{#each navItem.subNav as subNav}
						<li
							class="item_services-card max-w-md transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<!-- <div class="flex max-w-sm flex-row items-center">
							<div class="mr-4">
								<img
									src={packageItem.img}
									loading="eager"
									alt=""
									class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
								/>
							</div>

							<span class="txt_services-list-item caps service">{packageItem.title} </span>
						</div> -->

								<div role="list" class="flex w-full flex-row items-center justify-between">
									<a href="#{subNav.anchor}" class="">
										<div role="listitem" class="item_project-tags w-dyn-item">
											<img
												src="/images/corner-dot-army-green.svg"
												loading="lazy"
												alt=""
												class="mr-2 h-2 w-2"
											/>

											<span class="txt_services-list-item caps service text-2xl font-bold"
												>{subNav.title}</span
											>
										</div>
									</a>
								</div>
								<!-- {ingredient.count} -->
							</div>
						</li>
						<div class="pl-6 lg:pl-12">
							{#each subNav.subSubNav as subSubNav}
								<li
									class="item_services-card max-w-md transition-transform duration-200 ease-in-out hover:scale-105"
								>
									<div
										class="txt_services-list-item caps service flex flex-row items-center justify-between"
									>
										<!-- <div class="flex max-w-sm flex-row items-center">
							<div class="mr-4">
								<img
									src={packageItem.img}
									loading="eager"
									alt=""
									class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
								/>
							</div>

							<span class="txt_services-list-item caps service">{packageItem.title} </span>
						</div> -->

										<div role="list" class="flex w-full flex-row items-center justify-between">
											<div role="listitem" class="item_project-tags w-dyn-item">
												<img
													src="/images/corner-dot-army-green.svg"
													loading="lazy"
													alt=""
													class="mr-2 h-2 w-2"
												/>
												<a href="#{subSubNav.anchor}" class="">
													<span class="txt_services-list-item caps service text-2xl font-bold"
														>{subSubNav.title}</span
													>
												</a>
											</div>
										</div>
										<!-- {ingredient.count} -->
									</div>
								</li>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	{/snippet}
</InsstructionListCard>


<InsstructionListCard title={kit.tokens.category}>
	{#snippet start()}{/snippet}

	{#snippet list()}
		<div class="" id="components">
			<h2 id='package' class="text-center">{kit.package.category}</h2>

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
							<div role="listitem" class="item_project-tags w-dyn-item">
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
			<h2 class="text-center">{kit.tokens.players.category}</h2>

			{#each kit.tokens.players.items as token}
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

<section id="map-tablets" class="section bg-army-green my-20">
	<h2 class="text-center">{kit.tablets.map.category}</h2>

	<SliderGallery imgs={kit.tablets.map.items} />
</section>

<section id="players-tablets" class="">
	<h2 class="text-center">{kit.tablets.players.category}</h2>

	<div class=" flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
		{#each kit.tablets.players.items as role}
			<PlayerRoleCard {role} />
		{/each}
	</div>
</section>

<a name="api"></a>
<a name="updates"></a>


<ScrollToTop />

<PreFAQ />
<FAQ />

<Footer />

<style lang="postcss">
</style>
