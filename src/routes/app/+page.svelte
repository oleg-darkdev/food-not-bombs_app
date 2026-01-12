<script lang="ts">
	import { Hero } from '$widgetsApp';
	import { FAQ, GroupsListingMini, ApiListing } from '$widgets';
	import { StatsList, AppFooterBtn } from '$entities';
	import { ScenariousList, RoundCard } from '$entitiesApp';

	import { promoFnbGroups,  } from '$sharedData';
	import { stepInstruction, selectedMenu } from '$sharedStores';
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
	// import { GroupsList } from '$widgets';
	// import { SEO } from '$sharedUtils';

	const substepInstruction = stepInstruction.subscribe((value) => {});

	let // $selectedMenu = $state(0),
		// $stepInstruction = $state(0),
		stepWelcome = $state(1);

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
		{:else if $selectedMenu == 2}
			<ScenariousList />

			<RoundCard />
			{#if $stepInstruction == 1}
				<div class="" in:fly={{ y: 50 }} out:fade>
					<!-- <h2>{$stepInstruction} {$stepInstruction == 2}</h2> -->
				</div>
			{:else if $stepInstruction == 2}
				<div class="" in:fly={{ y: 50 }} out:fade></div>
			{:else if $stepInstruction == 3}
				<div class="" in:fly={{ y: 50 }} out:fade></div>
			{:else if $stepInstruction == 4}
				<div class="" in:fly={{ y: 50 }} out:fade></div>
			{:else if $stepInstruction == 5}
				<div class="" in:fly={{ y: 50 }} out:fade></div>

				<!-- <div class="py-40"> -->
				<!-- </div> -->
			{/if}
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
						icon="/images/icons/"
						text="Start"
					/>

					<AppFooterBtn
						onclick={() => {
							$selectedMenu = 2;
						}}
						icon="/images/icons/"
						text="Instruction"
					/>
				</div>
			{:else if $selectedMenu == 1}
				<div class="mx-auto grid grid grid-cols-3 gap-x-4">
					<AppFooterBtn
						onclick={() => {
							$stepInstruction = 1;
							$selectedMenu = 0;
							console.log('click MEnu');
						}}
						icon="/images/icons/"
						text="="
					/>

					<AppFooterBtn
						onclick={() => {
							stepInstruction.update((n) => n - 1);
							console.log('click prev');
							// console.log($stepInstruction);
							console.log($selectedMenu);
						}}
						icon="/images/icons/"
						text=">"
					/>

					<AppFooterBtn
						onclick={() => {
							stepInstruction.update((n) => n + 1);
							console.log('click next');
							// console.log($stepInstruction);
							console.log($selectedMenu);
						}}
						icon="/images/icons/"
						text="<"
					/>
				</div>
			{:else if $selectedMenu == 2}
				<!-- grid grid-cols-3 gap-x-4 -->
				<div class="mx-auto grid grid grid-cols-3 gap-x-4">
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
							icon="/images/icons/"
							text="="
						/>

						<AppFooterBtn
							onclick={() => {
								$stepInstruction += 1;
								console.log('click prev');
								console.log($stepInstruction);
							}}
							icon="/images/icons/"
							text="<"
						/>

						<AppFooterBtn
							onclick={() => {
								$stepInstruction -= 2;
								console.log('click prev');
								console.log($stepInstruction);
							}}
							icon="/images/icons/"
							text=">"
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
