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
								<img
									src="/images/corner-dot-army-green.svg"
									loading="lazy"
									alt=""
									class="mr-2 h-2 w-2"
								/>
								<span class="txt_services-list-item caps service">{navItem.title} </span>
							</p>
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
								<div role="list" class="flex w-full flex-row items-center justify-start">
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
							<div role="listitem" class="item_project-tags w-dyn-item flex flex-row items-center">
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
							<div role="listitem" class="item_project-tags w-dyn-item flex flex-row items-center">
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

<section id="map-tablets" class="section bg-army-green my-20">
	<h2 class="text-center">{kit.tablets.map.category}</h2>

	<SliderGallery imgs={kit.tablets.map.items} />
</section>

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

<PreFAQ />
<FAQ />

<Footer />

<ScrollToTop />

<style lang="postcss">
	.txt_services-list-item {
		text-align: left;
	}
</style>
