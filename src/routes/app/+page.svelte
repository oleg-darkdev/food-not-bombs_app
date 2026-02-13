<script lang="ts">
	import { Hero } from '$widgetsApp';
	import { FAQ, GroupsListingMini, ApiListing } from '$widgets';
	import { BigBtnText, BigLinkBtn, BigBtnIconText, PnpStepCard } from '$entities';
	import { page } from '$app/stores';

	import { StatsList, AppFooterBtn, MiniFnbGroupCard } from '$entities';
	import { ScenariousList, RoundCard, ResourcesGenerationResultListCard } from '$entitiesApp';

	import {
		stepGame,
		stepInstruction,
		selectedMenu,
		selectedLevel,
		selectedScenario,
		roundResults,
		actualRound,
		stepPnp
	} from '$sharedStores';
	import { Tag } from '$sharedUi';

	import { slide } from 'svelte/transition';

	let { data } = $props();

	const {
		kit,
		pnp,

		foodTokens,
		roles,
		preparation,
		winTokens,
		loseTokens,
		winLose,
		volunteeringApp,
		volunteeringGame,
		volunteeringFnb,
		promoFnbGroups,
		scenarios,
		locations,
		fnbFaq,
		boardgameFaq,
		basicFaq,
		appFaq,
		componentsFaq,
		rulesAndInterpretationFaq,
		runGame
	} = data;

	let // $selectedMenu = $state(0),
		// $stepInstruction = $state(0),
		stepWelcome = $state(1),
		maxRound = $state(5),
		roundResult = $state(null),
		maxGameStep = $state(7);

	const substepInstruction = stepInstruction.subscribe((value) => {});
	// const subroundResults = roundResults.subscribe((value) => {});

	// let currentScenario = $selectedScenario;

	function nextRound() {
		if ($actualRound < maxRound && $roundResults.length - 1 < maxRound) {
			const roundResult = runGame(locations, $selectedLevel, 1);

			roundResults.update((results) => [...results, roundResult]);

			// console.log($roundResults);
		} else {
			console.log('Достигнут максимальный раунд');
		}
	}

	function clearRoundResults() {
		roundResults.set([]);
	}
	let showFaq = $state(false),
		showPnp = $state(false);

	// <!-- <button on:click={}> Следующий раунд </button> -->
	// nextRound

	// import { GroupsList } from '$widgets';
	// import { SEO } from '$sharedUtils';

	// console.log(kit);
	// console.log(foodTokens);
	// console.log(roles);
	// console.log(preparation);
	// console.log(winTokens);
	// console.log(loseTokens);
	// console.log(winLose);
	// console.log(volunteeringApp);
	// console.log(volunteeringGame);
	// console.log(volunteeringFnb);

	// console.log(kit);
	// console.log(kit);
	// console.log(kit);
	// console.log(kit);
	// console.log(kit);
	// console.log(kit);
	// console.log(kit);
	// console.log(kit);
	// console.log(kit);

	// let showScenariosList = $state(false);

	// import {
	// 	ukraine,} from '$sharedData';
	// const polandFormatted = czechRepublic.map((item) => ({
	// 	logo: item.logo || '',
	// 	facebook: item.facebook || '',
	// 	inst: item.inst || '',

	// 	name: item.name || '',
	// 	country: item.country || '',
	// 	city: item.city || '',

	// 	website: item.website || '',
	// 	notes: item.notes || '',

	// 	id: item.id || '',
	// 	banner: item.banner || ''
	// }));

	// console.log(polandFormatted);
</script>

<svelte:head>
	<title>Soup4ALL - app | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<div class="bg-army-green h-screen">
	<!-- <GroupsList /> -->
	<main
		class="bg-yellow flex h-[87vh] flex-col content-center items-center overflow-x-hidden overflow-y-scroll lg:h-[90vh]"
	>
		{#if $selectedMenu == 0}
			<Hero />
		{:else if $selectedMenu == 1}
			{#if $stepGame == 0}
				<ScenariousList />
			{:else if $stepGame == 1}
				<div class="flex flex-col pt-10 " transition:slide>
					<!-- <h1>hello</h1> -->
					{#if $roundResults.length > 0}
						<BigBtnIconText
							onclick={() => {
								clearRoundResults();
								stepGame.set(1);
								actualRound.set(1);
								nextRound();
							}}
							icon="/images/icons/close.svg"
							text="Delete previous game"
						/>
						<BigBtnIconText
							onclick={() => {
								// stepGame.update((n) => n + 1);
							}}
							icon="/images/icons/play.svg"
							text="Continue previous game"
						/>
					{:else}
						<BigBtnIconText
							onclick={() => {
								stepGame.update((n) => n + 1);
								actualRound.update((n) => n + 1);
								nextRound();
							}}
							icon="/images/icons/play.svg"
							text="Start new game"
						/>
					{/if}
				</div>
			{:else if $stepGame > 1 && $stepGame <= 6}
				<!-- {#if $selectedPlayMenu == 1}
					{#if $basicMode.progress < $basicMode.data.length}
					
					-->
				<div class="" transition:slide>
					<h2>{$actualRound}</h2>

					{#each $roundResults as roundResult, index}
						{#if index + 1 == $actualRound}
							<div class="" transition:slide>
								<h2>round info {index + 1}</h2>

								<div class="flex flex-col justify-between">
									{#each roundResult.locationEvents as e}
										<div role="listitem" class="item_project-tags w-dyn-item">
											<!-- roundResult.locationEvents -->

											<span class="text-red text-2xl">#{e.locationId} {e.eventId}</span>
										</div>
									{/each}
								</div>

								<!-- <RoundCard {roundResult} /> -->

								<!-- {#if roundResult.globalBalance}
									<div class="event balance">
										⚖️ <strong>Глобальный баланс</strong>
										<span>
											{roundResult.globalBalance.totalBefore} → {roundResult.globalBalance
												.totalAfter}
										</span>
									</div>
								{/if} -->

								<ResourcesGenerationResultListCard locations={roundResult.locations} />
							</div>
						{/if}
					{/each}
					<!-- <h2>{$stepGame} {$stepGame == 2}</h2> -->
				</div>
			{:else if $stepGame == 5}
				<div class="" transition:slide>
					<!-- <RoundCard {roundResult} /> -->
				</div>

				<!-- <div class="py-40"> -->
				<!-- </div> -->
			{/if}
		{:else if $selectedMenu == 2}
			<div class="pb-40 pt-10">
				<!-- open source & social links data -->
				{#if $stepInstruction == 1}
					<div class="" transition:slide>
						<div
							class="mx-auto flex h-full max-w-3xl flex-row flex-wrap justify-between gap-x-4 gap-y-4 px-6"
						>
							<BigBtnText
								text="Print&Play"
								bgColor="bg-red"
								onclick={() => {
									// location.href = './docs#print-and-play';
									showPnp = !showPnp;
									$stepInstruction += 1;
								}}
							/>

							<BigBtnText
								text="FAQ"
								bgColor="bg-orange"
								onclick={() => {
									showFaq = !showFaq;
									$stepInstruction += 1;
								}}
							/>

							<BigBtnText
								text="Game rules"
								bgColor="bg-red"
								onclick={() => {
									location.href = './docs#game-rules';
								}}
							/>

							<BigBtnText
								text="API"
								bgColor="bg-orange"
								onclick={() => {
									location.href = './docs#api';
								}}
							/>

							<BigBtnText
								text="Boardgame kit"
								bgColor="bg-red"
								onclick={() => {
									location.href = './docs#components';
								}}
							/>
						</div>

						<!-- <h2>{$stepInstruction} {$stepInstruction == 2}</h2> -->
					</div>
				{:else if $stepInstruction == 2}
					<div class="" transition:slide>
						<div class="">
							{#if showFaq}
								<div class="wrap_faq-heading">
									<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
								</div>
								<FAQ faqData={fnbFaq} />
								<FAQ faqData={boardgameFaq} />
								<FAQ faqData={rulesAndInterpretationFaq} />
								<FAQ faqData={componentsFaq} />
								<FAQ faqData={appFaq} />
							{:else if showPnp}
								{#if $stepPnp == 0}
									<PnpStepCard pnpStep={pnp.steps.map} />
								{:else if $stepPnp == 1}
									<PnpStepCard pnpStep={pnp.steps.foodTokens} />
								{:else if $stepPnp == 2}
									<PnpStepCard pnpStep={pnp.steps.canningTokens} />
								{:else if $stepPnp == 3}
									<PnpStepCard pnpStep={pnp.steps.awardTokens} />
								{:else if $stepPnp == 4}
									<PnpStepCard pnpStep={pnp.steps.blockTokens} />
								{:else if $stepPnp == 5}
									<PnpStepCard pnpStep={pnp.steps.сlothingTokens} />
								{:else if $stepPnp == 6}
									<PnpStepCard pnpStep={pnp.steps.eventTokens} />
								{:else if $stepPnp == 7}
									<PnpStepCard pnpStep={pnp.steps.fnbGroupsTokens} />
								{:else if $stepPnp == 8}
									<PnpStepCard pnpStep={pnp.steps.playerTokens} />
								{:else if $stepPnp == 9}{:else if $stepPnp == 10}{:else if $stepPnp == 11}
									<PnpStepCard pnpStep={pnp.steps.playerTablets} />
								{/if}
							{/if}
						</div>

						<!-- <GroupsListingMini groupsData={promoFnbGroups.slice(0, 8)} /> -->
					</div>
				{:else if $stepInstruction == 3}
					<div class="" transition:slide><ApiListing /></div>
				{:else if $stepInstruction == 4}
					<div class="" transition:slide>
						<StatsList />
					</div>
				{:else if $stepInstruction == 5}
					<div class="" transition:slide>
						<FAQ />
					</div>

					<!-- <div class="py-40"> -->
					<!-- </div> -->
				{/if}
			</div>
		{/if}
	</main>

	<footer class="fixed bottom-0 left-0 z-30 w-full px-10 pb-4">
		<div class="mx-auto w-full max-w-4xl">
			{#if $selectedMenu == 0}
				<div class="mx-auto grid w-fit grid-cols-2 gap-x-8">
					<AppFooterBtn
						onclick={() => {
							$selectedMenu = 1;
						}}
						icon="/images/icons/play.svg"
						text="Start"
						bg="bg-yellow"
					/>

					<AppFooterBtn
						onclick={() => {
							$selectedMenu = 2;
						}}
						icon="/images/icons/instruction.svg"
						text="Instruction"
						bg="bg-pink"
					/>
				</div>
			{:else if $selectedMenu == 1}
				<div
					class="mx-auto grid grid {maxGameStep == 6 ? 'grid-cols-2' : 'grid-cols-3'} {$stepGame ==
					0
						? 'grid-cols-2'
						: 'grid-cols-3'} gap-x-4"
				>
					<AppFooterBtn
						onclick={() => {
							$stepGame = 0;
							$selectedMenu = 0;
							actualRound.set(0);

							// console.log('click MEnu');
						}}
						icon="/images/icons/menu.svg"
						text="menu"
						bg="bg-pink"
					/>

					{#if $stepGame != 0}
						<AppFooterBtn
							onclick={() => {
								// console.log();
								actualRound.update((n) => n - 1);
								stepGame.update((n) => n - 1);
								// console.log('click prev');
								// console.log($stepInstruction);
								// console.log($selectedMenu);
							}}
							icon="/images/icons/left_arrow.svg"
							text="Prev"
							bg="bg-yellow"
						/>
					{/if}

					{#if $stepGame > 0 && $stepGame <= maxGameStep}
						<AppFooterBtn
							onclick={() => {
								nextRound();

								actualRound.update((n) => n + 1);
								stepGame.update((n) => n + 1);

								// actualRound.update((n) => {
								// 	if (n <= maxRound) {
								// 		return n + 1;
								// 	}
								// 	return n;
								// });
								// console.log('click next');
								// console.log($stepInstruction);
								// console.log($selectedMenu);
							}}
							icon="/images/icons/right_arrow.svg"
							text="Next"
							bg="bg-yellow"
						/>
					{/if}
				</div>
			{:else if $selectedMenu == 2}
				<!-- grid grid-cols-3 gap-x-4 -->
				<div
					class="mx-auto grid grid {$stepInstruction == 0 ? 'grid-cols-2' : 'grid-cols-3'} gap-x-4"
				>
					{#if $selectedMenu == 1}
						<!-- <AppFooterBtn
							onclick={() => {
								stepWelcome = stepWelcome - 1;
								// console.log('click ');
							}}
							icon='/images/icons/' text="Preview"
						/>

						<AppFooterBtn
							onclick={() => {
								stepWelcome = stepWelcome + 1;
								console.log('$selectedMenu == 1');
							}}
							icon='/images/icons/' text="Next"
						/> -->
					{:else if $selectedMenu == 2 && $stepInstruction <= 9}
						<AppFooterBtn
							onclick={() => {
								$selectedMenu = 0;
								$stepInstruction = 1;
							}}
							icon="/images/icons/menu.svg"
							text="menu"
							bg="bg-pink"
						/>
						{#if $stepInstruction > 1}
							<AppFooterBtn
								onclick={() => {
									$stepInstruction -= 1;
									showFaq = false;

									if (showPnp) {
										stepPnp.update((n) => n - 1);
									}
								}}
								icon="/images/icons/left_arrow.svg"
								text="Prev"
								bg="bg-yellow"
							/>

							{#if showPnp}
								<AppFooterBtn
									onclick={() => {
										if (showPnp) {
											stepPnp.update((n) => n + 1);
											console.log($stepPnp);
										}
									}}
									icon="/images/icons/right_arrow.svg"
									text="Next"
									bg="bg-yellow"
								/>
							{/if}

							<!-- <AppFooterBtn
								onclick={() => {
									$stepInstruction += 2;
								}}
								icon="/images/icons/right_arrow.svg"
								text="Next"
								bg="bg-yellow"
							/> -->
						{/if}

						<!-- <div class="grid grid-cols-2 gap-6 my-20"> -->
						<!-- <PrevStepBtn bind:step={$stepInstruction} icon='/images/icons/' text="Poprzedni slajd" />

					<NextStepBtn bind:step={$stepInstruction} icon='/images/icons/' text="Następny slajd" /> -->
						<!-- </div> -->
					{/if}
				</div>
			{/if}
		</div>
	</footer>
</div>

<style lang="postcss">
	main {
		border-top: 1px solid var(--borders--army-green);
		border-bottom: 1px solid var(--borders--army-green);
	}
</style>
