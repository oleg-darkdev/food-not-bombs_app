<script lang="ts">
	import { page } from '$app/stores';

	// import {} from '$sharedData';
	import { InsstructionListCard, PlayerRoleCard, BasicInfoCard, PnpStepCard } from '$entities';
	// import { SliderGallery } from '$entitiesLanding';
	import { ScrollToTop, Tag, RoundedBtnLink } from '$sharedUi';
	import { PreFAQ, Footer, AsideNav, PrintAndPlay } from '$widgetsLanding';
	import { PlayerRoleInfo } from '$widgetsApp';

	import {
		// Team,
		// CallingAll,
		// BigLightDivider,
		// Gallery,
		// Marquee,
		FAQ,
		ApiListing,
		// VeganMenu,
		// LangSwitcher,
		// landingPromoPhotos,
		GroupsListingMini
		// ApiListing
	} from '$widgets';

	let { data } = $props();

	const {
		kit,
		pnp,
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
		docsNav,
		fnbFaq,
		boardgameFaq,
		basicFaq,
		appFaq,
		componentsFaq,
		rulesAndInterpretationFaq
	} = data;

	// console.log(kit.playersStuff.items);

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

	// console.log(pnp.steps)
</script>

<svelte:head>
	<title>Soup4ALL - docs | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<AsideNav {docsNav} />

<main class=" flex flex-col items-end">
	<!-- <a name="about"></a> -->

	<div class="max-w-5xl">
		<section id="print-and-play">
			<BasicInfoCard />

			<PrintAndPlay />
			<!-- <h2>print-and-play</h2> -->
			<div class="w-full lg:pl-10"></div>

			<div class="" id="download"></div>
			<div class="" id="box-wrap"></div>

			<div class="flex flex-col gap-y-4 py-10">
				<a name="map"></a>

				<!-- <PnpStepCard pnpStep={pnp.steps.map} />
				<PnpStepCard pnpStep={pnp.steps.foodTokens} />
				<PnpStepCard pnpStep={pnp.steps.canningTokens} />
				<PnpStepCard pnpStep={pnp.steps.awardTokens} />
				<PnpStepCard pnpStep={pnp.steps.blockTokens} />
				<PnpStepCard pnpStep={pnp.steps.сlothingTokens} />
				<PnpStepCard pnpStep={pnp.steps.eventTokens} />
				<PnpStepCard pnpStep={pnp.steps.fnbGroupsTokens} />
				<PnpStepCard pnpStep={pnp.steps.playerTokens} />
				<PnpStepCard pnpStep={pnp.steps.playerTablets} /> -->
				<!-- <PnpStepCard pnpStep={pnp.steps.map} /> -->
			</div>
		</section>

		<section id="game-rules" class="mb-20">
			<!-- <h2>game-rules</h2> -->

			<div class="" id="download"></div>
			<div class="" id="box-wrap"></div>
			<div class="" id="map"></div>
			<div class="" id="food-tokens"></div>
			<div class="" id="canning-tokens"></div>
			<div class="" id="award-tokens"></div>
			<div class="" id="player-tokens"></div>
			<div class="" id="player-tablets"></div>
			<!-- <div class="" id=''></div>
				<div class="" id=''></div>
				<div class="" id=''></div>
				<div class="" id=''></div>
				<div class="" id=''></div> -->
		</section>

		<h2 class=" h1_regular main-headline text-center">
			Boardgame
			<em> components</em>
		</h2>

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
											class="h-8 w-8 rounded-lg object-cover lg:h-12 lg:w-24"
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

		<section class="pt-20">
			<h2 class=" h1_regular main-headline text-center">
				Players
				<em> roles.</em>
			</h2>
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

		<!-- Pnp -->

		<a name="updates"></a>

		<section id="groups">
			<h2 class=" h1_regular main-headline text-center">
				Groups
				<em> list.</em>
			</h2>

			<div class="pb-10">
				<div class="mx-auto my-10 flex flex-col justify-center">
					<GroupsListingMini groupsData={promoFnbGroups.slice(0, 8)} />
				</div>
				<RoundedBtnLink title="Complete list of FNB collectives" link="/groups" blank={true} />
			</div>
			<a name="api"></a>

			<ApiListing />

			<!-- вывесте черещ groups list - ссылки на api, и ссылку группы с указанием количества групп в базее и стран входящих -->
			<div class="" id="c-s-america"></div>
		</section>
	</div>
</main>
<PreFAQ />

<section id="faq" class="section faq">
	<div class="wrap_faq-heading">
		<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
	</div>
	<FAQ faqData={fnbFaq} />
	<FAQ faqData={boardgameFaq} />
	<!-- <FAQ faqData={basicFaq} /> -->
	<FAQ faqData={appFaq} />
</section>

<Footer />

<ScrollToTop />

<style lang="postcss">
	.txt_services-list-item {
		text-align: left;
	}

	.txt_services-list-item.caps {
		text-align: center;
	}

	.txt_services-list-item.caps.service {
		letter-spacing: 0.1em;
		font-size: 1.2em;
	}

	@media screen and (max-width: 991px) {
		.txt_services-list-item.caps.service {
			font-size: 3.2em;
		}
	}
</style>
