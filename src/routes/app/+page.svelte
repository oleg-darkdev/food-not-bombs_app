<script lang="ts">
	import { Hero } from '$widgetsApp';
	import { FAQ, GroupsListingMini, ApiListing } from '$widgets';
	import { BigBtnText, BigLinkBtn, BigBtnIconText } from '$entities';
	import { page } from '$app/stores';

	import { StatsList, AppFooterBtn } from '$entities';
	import { ScenariousList, RoundCard, ResourcesGenerationResultListCard } from '$entitiesApp';

	import {
		stepGame,
		stepInstruction,
		selectedMenu,
		roundResults,
		actualRound
	} from '$sharedStores';
	import { Tag } from '$sharedUi';

	import { slide } from 'svelte/transition';

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

	function nextRound() {
		if ($actualRound < maxRound && $roundResults.length - 1 < maxRound) {
			const roundResult = runGame(locations, scenarios.medium, 1);

			roundResults.update((results) => [...results, roundResult]);

			console.log($roundResults);
		} else {
			console.log('Достигнут максимальный раунд');
		}
	}

	function clearRoundResults() {
		roundResults.set([]);
	}
	let currentScenario = scenarios.medium;
	let showFaq = $state(false);

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
			<ScenariousList />

			{#if $stepGame == 0}
				<div class="flex flex-col pt-10" transition:slide>
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
			{:else if $stepGame > 0 && $stepGame <= 5}
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
							class="mx-auto flex h-full max-w-2xl flex-row flex-wrap justify-between gap-x-4 gap-y-4 px-6"
						>
							<BigBtnText
								text="Print&Play"
								bgColor="bg-red"
								onclick={() => {
									location.href = './docs#print-and-play';
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
							<div class="wrap_faq-heading">
								<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
							</div>
							{#if showFaq}
								<FAQ faqData={fnbFaq} />
								<FAQ faqData={boardgameFaq} />
								<FAQ faqData={rulesAndInterpretationFaq} />
								<FAQ faqData={componentsFaq} />
								<FAQ faqData={appFaq} />
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
									// console.log('click prev');
									// console.log($stepInstruction);
								}}
								icon="/images/icons/left_arrow.svg"
								text="Prev"
								bg="bg-yellow"
							/>

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
