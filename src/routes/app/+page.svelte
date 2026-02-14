<script lang="ts">
	import { Hero, Footer, FooterPnp } from '$widgetsApp';
	import { FAQ, GroupsListingMini, ApiListing } from '$widgets';
	import { PnpStepCard } from '$entities';
	import { page } from '$app/stores';

	import { StatsList, MiniFnbGroupCard } from '$entities';
	import { ScenariousList, RoundCard, ResourcesGenerationResultListCard } from '$entitiesApp';
	import { BigBtnText, BigLinkBtn, BigBtnIconText } from '$sharedUi';
	import {
		stepGame,
		stepInstruction,
		selectedMenu,
		selectedLevel,
		selectedScenario,
		roundResults,
		actualRound,
		actualScreen,
		stepPnp
	} from '$sharedStores';
	// import {  } from '$sharedUi';
	import { nextRound } from '$sharedUtils';
	import { slide } from 'svelte/transition';

	let { data } = $props();

	const {
		pnp,

		fnbFaq,
		boardgameFaq,

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

	function clearRoundResults() {
		roundResults.set([]);
	}
	let showFaq = $state(false);

	let showPnp = $derived(
		$page.url.searchParams.size == 0 ? false : $page.url.searchParams.get('pnp') === 'true'
	);

	// console.log(showPnp);
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
		{#if showPnp}
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
		{:else if $selectedMenu == 0}
			<Hero />
		{:else if $selectedMenu == 1}
			{#if $stepGame == 0}
				<ScenariousList />
			{:else if $stepGame == 1}
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
							<BigLinkBtn link="app/pnp" text="Print&Play" bgColor="bg-red" />
							<BigBtnText
								text="FAQ"
								bgColor="bg-orange"
								onclick={() => {
									$actualScreen == 'faq';
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
							{#if $actualScreen == 'faq'}
								<div class="wrap_faq-heading">
									<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
								</div>
								<FAQ faqData={fnbFaq} />
								<FAQ faqData={boardgameFaq} />
								<FAQ faqData={rulesAndInterpretationFaq} />
								<FAQ faqData={componentsFaq} />
								<FAQ faqData={appFaq} />
								<!-- {:else if showPnp} -->
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
</div>

{#if showPnp}
	<FooterPnp />
{:else}
	<Footer />
{/if}

<style lang="postcss">
	main {
		border-top: 1px solid var(--borders--army-green);
		border-bottom: 1px solid var(--borders--army-green);
	}
</style>
