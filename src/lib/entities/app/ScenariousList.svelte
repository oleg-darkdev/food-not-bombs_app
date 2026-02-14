<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { scenarios } from '$sharedData';
	// import { currentScenario } from '$sharedStores';
	import { MiniFnbGroupCard } from '$entitiesApp';
	import { BigBtnText } from '$sharedUi';
	import { selectedLevel, selectedScenario, stepGame } from '$sharedStores';

	let showScenariosList = $state(false);
	// let currentScenario = scenarios.medium;

	// console.log(scenarios);
</script>

<div class="flex h-full flex-col content-center items-center pt-14">
	{#if !showScenariosList}
		<div class="flex h-full w-full flex-col content-center items-center justify-center gap-y-4">
			<!-- <BigBtnText
		text={scenarios.tutorial.id}
		bgColor="bg-army-green"
		onclick={() => {
			$selectedLevel = scenarios.tutorial;
			$stepInstruction += 1;
		}}
	/> -->
			<h2 class=" h1_regular main-headline text-center">
				Choose
				<br />
				<em> your difficulty.</em>
			</h2>
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
		<h2 class="h1_regular main-headline text-center">
			Choose
			<br />
			<em> your scenario.</em>
		</h2>
		<div class="pt-6">
			{#each $selectedLevel.fnbGroups as groupsData}
				{#if groupsData.data.length >= 1}
					<div
						class="mx-auto mb-6 flex h-auto w-full max-w-5xl flex-col items-center justify-center"
					>
						<h2 class=" h1_regular main-headline mb-4 text-center">
							Available scenarios in <br/>
							<em> {groupsData.title}</em>
						</h2>

						<div class="pt-2 grid grid-cols-2 items-center gap-x-2 gap-y-2 px-2 lg:grid-cols-4">
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
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
