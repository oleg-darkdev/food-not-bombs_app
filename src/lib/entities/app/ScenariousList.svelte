<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { scenarios } from '$sharedData';
	// import { currentScenario } from '$sharedStores';
	import { MiniFnbGroupCard } from '$entitiesApp';
	import { BigBtnText } from '$entities';
	import { selectedLevel, selectedScenario, stepGame } from '$sharedStores';

	let showScenariosList = $state(false);
	// let currentScenario = scenarios.medium;

	// console.log(scenarios);
</script>

{#if !showScenariosList}
	<div class="flex w-full flex-col justify-center gap-y-4 pt-10">
		<!-- <BigBtnText
		text={scenarios.tutorial.id}
		bgColor="bg-army-green"
		onclick={() => {
			$selectedLevel = scenarios.tutorial;
			$stepInstruction += 1;
		}}
	/> -->
		<BigBtnText
			text={scenarios.easy.id}
			bgColor="bg-army-green"
			onclick={() => {
				$selectedLevel = scenarios.easy;
				showScenariosList = true;
				// stepGame.update((n) => n + 1);
			}}
		/>
		<BigBtnText
			text={scenarios.medium.id}
			bgColor="bg-pink"
			onclick={() => {
				$selectedLevel = scenarios.medium;
				showScenariosList = true;

				// stepGame.update((n) => n + 1);
			}}
		/>
		<BigBtnText
			text={scenarios.hard.id}
			bgColor="bg-orange"
			onclick={() => {
				$selectedLevel = scenarios.hard;
				showScenariosList = true;

				// stepGame.update((n) => n + 1);
			}}
		/>
	</div>
{:else}
	{#each $selectedLevel.fnbGroups as groupsData}
		{#if groupsData.data.length >= 1}
			<div class="mx-auto mb-6 flex h-auto w-full max-w-5xl flex-col items-center justify-center">
				<h2 class=" h1_regular main-headline mb-4 text-center">
					Available scenarios in
					<em> {groupsData.title}</em>
				</h2>

				<div class="grid grid-cols-2 items-center gap-x-2 gap-y-2 px-2 lg:grid-cols-4">
					{#each groupsData.data as group (group.id)}
						<MiniFnbGroupCard
							{group}
							onclick={() => {
								$selectedScenario = group;
								showScenariosList = false;
								stepGame.update((n) => n + 1);
							}}
						/>
					{/each}
				</div>
			</div>
		{/if}
	{/each}
{/if}

<style lang="postcss">
</style>
