<script lang="ts">
	import { Hero } from '$widgetsApp';
	import { FAQ, GroupsListingMini, ApiListing } from '$widgets';
	import { StatsList, AppFooterBtn } from '$entities';
	import { ScenariousList, RoundCard } from '$entitiesApp';

	import { promoFnbGroups } from '$sharedData';
	import {
		stepGame,
		stepInstruction,
		selectedMenu,
		roundResults,
		actualRound
	} from '$sharedStores';
	import { fade, fly } from 'svelte/transition';

	import {
		kit,
		foodTokens,
		roles,
		preparation,
		winTokens,
		loseTokens,
		winLose,
		volunteeringApp,
		volunteeringGame,
		volunteeringFnb
	} from '$sharedData';

	import { scenarios, locations, runGame } from '$sharedData';

	let roundResult = $state(null);

	const substepInstruction = stepInstruction.subscribe((value) => {});
	// const subroundResults = roundResults.subscribe((value) => {});

	function nextRound() {
		roundResult = runGame(locations, scenarios.medium, 1);
		// console.log(roundResult.locations);

		roundResults.update((results) => {
			results.push(roundResult);
			return results;
		});
		console.log($roundResults);
		// console.log($actualRound);
	}

	function clearRoundResults() {
		roundResults.set([]);
	}
	let currentScenario = scenarios.medium;

	// <!-- <button on:click={}> Следующий раунд </button> -->
	// nextRound

	// import { GroupsList } from '$widgets';
	// import { SEO } from '$sharedUtils';

	let // $selectedMenu = $state(0),
		// $stepInstruction = $state(0),
		stepWelcome = $state(1),
		maxRound = $state(5),
		maxGameStep = $state(7);
	console.log(kit);
	console.log(foodTokens);
	console.log(roles);
	console.log(preparation);
	console.log(winTokens);
	console.log(loseTokens);
	console.log(winLose);
	console.log(volunteeringApp);
	console.log(volunteeringGame);
	console.log(volunteeringFnb);
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

<div class="bg-pink h-screen">
	<!-- <GroupsList /> -->
	<main
		class="bg-yellow flex h-[87vh] flex-col content-center items-center overflow-x-hidden overflow-y-scroll lg:h-[90vh]"
	>
		{#if $selectedMenu == 0}
			<Hero />
		{:else if $selectedMenu == 1}
			<ScenariousList />

			{#if $stepGame == 0}
				<div class="" in:fly={{ y: 50 }} out:fade>
					<!-- <h1>hello</h1> -->
					{#if $roundResults.length > 0}
						<button
							on:click={() => {
								clearRoundResults();
								stepGame.update((n) => n + 1);
							}}
						>
							Очистить результаты
						</button>
						<button on:click={() => stepGame.update((n) => n + 1)}>
							Продолжить предыдущую игру
						</button>
					{:else}
						<button
							on:click={() => {
								stepGame.update((n) => n + 1);
								actualRound.update((n) => n + 1);

								nextRound();
							}}
						>
							Начать новую игру
						</button>
					{/if}
				</div>
			{:else if $stepGame == 1 && $stepGame <= 5}
				<div class="" in:fly={{ y: 50 }} out:fade>
					<h2>{$actualRound}</h2>

					{#each $roundResults as roundResult, index}
						{#if index == $actualRound}
							<RoundCard {roundResult} />
						{/if}
					{/each}
					<!-- <h2>{$stepGame} {$stepGame == 2}</h2> -->
				</div>
			{:else if $stepGame == 5}
				<div class="" in:fly={{ y: 50 }} out:fade>
					<!-- <RoundCard {roundResult} /> -->
				</div>

				<!-- <div class="py-40"> -->
				<!-- </div> -->
			{/if}
		{:else if $selectedMenu == 2}
			<div class="pb-40 pt-10">
				<!-- open source & social links data -->
				{#if $stepInstruction == 1}
					<div class="" in:fly={{ y: 50 }} out:fade>
						<h2>{$stepInstruction} {$stepInstruction == 2}</h2>
					</div>
				{:else if $stepInstruction == 2}
					<div class="" in:fly={{ y: 50 }} out:fade>
						<GroupsListingMini groupsData={promoFnbGroups.slice(0, 8)} />
					</div>
				{:else if $stepInstruction == 3}
					<div class="" in:fly={{ y: 50 }} out:fade><ApiListing /></div>
				{:else if $stepInstruction == 4}
					<div class="" in:fly={{ y: 50 }} out:fade>
						<StatsList />
					</div>
				{:else if $stepInstruction == 5}
					<div class="" in:fly={{ y: 50 }} out:fade>
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
					/>

					<AppFooterBtn
						onclick={() => {
							$selectedMenu = 2;
						}}
						icon="/images/icons/instruction.svg"
						text="Instruction"
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
					/>

					{#if $stepGame != 0}
						<AppFooterBtn
							onclick={() => {
								// console.log();
								stepGame.update((n) => n - 1);
								// console.log('click prev');
								// console.log($stepInstruction);
								// console.log($selectedMenu);
							}}
							icon="/images/icons/left_arrow.svg"
							text="Prev"
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
						/>

						<AppFooterBtn
							onclick={() => {
								$stepInstruction += 1;
								// console.log('click prev');
								// console.log($stepInstruction);
							}}
							icon="/images/icons/left_arrow.svg"
							text="Prev"
						/>

						<AppFooterBtn
							onclick={() => {
								$stepInstruction -= 2;
								// console.log('click prev');
								// console.log($stepInstruction);
							}}
							icon="/images/icons/right_arrow.svg"
							text="Next"
						/>
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
