<script lang="ts">
	// import { slide } from 'svelte/transition';

	// import {  } from '$widgetsApp';
	// import { } from '$widgets';
	// import {  } from '$entities';
	// import {  } from '$entitiesApp';

	import { AppFooterBtn } from '$sharedUi';
	import { nextRound } from '$sharedUtils';

	import {
		stepGame,
		stepInstruction,
		selectedMenu,
		actualRound,
		stepPnp,
		actualScreen
	} from '$sharedStores';

	let maxGameStep = $state(7);

	let showPnp = $state(false);
</script>

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
				class="mx-auto grid grid {maxGameStep == 6 ? 'grid-cols-2' : 'grid-cols-3'} {$stepGame == 0
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
				{#if $selectedMenu == 1}{:else if $selectedMenu == 2 && $stepInstruction <= 9}
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
						<!-- <AppFooterBtn
								onclick={() => {
									$stepInstruction += 2;
								}}
								icon="/images/icons/right_arrow.svg"
								text="Next"
								bg="bg-yellow"
							/> -->
					{/if}
				{/if}
			</div>
		{:else if $actualScreen == 'pnp'}
			<div
				class="mx-auto grid grid {$stepInstruction == 0 ? 'grid-cols-2' : 'grid-cols-3'} gap-x-4"
			>
				<AppFooterBtn
					onclick={() => {
						$stepInstruction -= 1;
						// showFaq = false;

						if ($actualScreen == 'pnp') {
							stepPnp.update((n) => n - 1);
						}
					}}
					icon="/images/icons/left_arrow.svg"
					text="Prev"
					bg="bg-yellow"
				/>

				<AppFooterBtn
					onclick={() => {
						if (showPnp) {
							stepPnp.update((n) => n + 1);
							// console.log($stepPnp);
						}
					}}
					icon="/images/icons/right_arrow.svg"
					text="Next"
					bg="bg-yellow"
				/>
			</div>
		{/if}
	</div>
</footer>

<style lang="postcss">
</style>
