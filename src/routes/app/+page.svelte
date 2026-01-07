<script lang="ts">
	import { Hero } from '$widgetsApp';
	import { FAQ, GroupsListingMini, ApiListing } from '$widgets';
	import { StatsList, AppFooterBtn } from '$entities';
	import { promoFnbGroups } from '$sharedData';

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

	let activeScreen = $state(0),
		stepInstruction = $state(0),
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
		class="bg-yellow flex h-[87vh] flex-col content-center items-center justify-center overflow-x-hidden overflow-y-scroll lg:h-[90vh]"
	>
		{#if activeScreen == 0}
			<Hero />
		{:else if activeScreen == 1}
		<!-- open source & social links data -->
			{#if stepWelcome}{:else if stepWelcome == 2}
				<GroupsListingMini groupsData={promoFnbGroups.slice(0, 8)} />
			{:else if stepWelcome == 3}
				<ApiListing />
			{:else if stepWelcome == 4}
				<StatsList />
			{:else if stepWelcome == 5}
				<FAQ />
			{/if}
		{:else if activeScreen == 2}{/if}
	</main>

	<footer class="fixed bottom-0 left-0 z-30 w-full px-10 pb-4">
		<div class="mx-auto w-full max-w-4xl">
			{#if activeScreen == 0}
				<div class="mx-auto grid w-fit grid-cols-2 gap-x-8">
					<AppFooterBtn
						onclick={() => {
							activeScreen = 1;
						}}
						icon="/images/icons/"
						text="Start"
					/>

					<AppFooterBtn
						onclick={() => {
							activeScreen = 2;
						}}
						icon="/images/icons/"
						text="Instruction"
					/>
				</div>
			{:else if activeScreen == 1}
				<div class="mx-auto grid grid grid-cols-3 gap-x-4">
					<AppFooterBtn
						onclick={() => {
							stepWelcome = 1;
							activeScreen = 0;
						}}
						icon="/images/icons/"
						text="="
					/>

					<AppFooterBtn
						onclick={() => {
							stepWelcome -= 1;
						}}
						icon="/images/icons/"
						text=">"
					/>

					<AppFooterBtn
						onclick={() => {
							stepWelcome += 1;
						}}
						icon="/images/icons/"
						text="<"
					/>
				</div>
			{:else if activeScreen == 2}
				<!-- grid grid-cols-3 gap-x-4 -->
				<div class="mx-auto grid grid grid-cols-3 gap-x-4">
					{#if activeScreen == 1}
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
								console.log('activeScreen == 1');
							}}
							icon='/images/icons/' text="Next"
						/> -->
					{:else if activeScreen == 2 && stepInstruction <= 9}
						<AppFooterBtn
							onclick={() => {
								activeScreen = 0;
								stepInstruction = 1;
							}}
							icon="/images/icons/"
							text="="
						/>

						<AppFooterBtn
							onclick={() => {
								stepInstruction = 1;
							}}
							icon="/images/icons/"
							text="<"
						/>

						<AppFooterBtn
							onclick={() => {
								stepInstruction = 2;
							}}
							icon="/images/icons/"
							text=">"
						/>
						<!-- <div class="grid grid-cols-2 gap-6 my-20"> -->
						<!-- <PrevStepBtn bind:step={stepInstruction} icon='/images/icons/' text="Poprzedni slajd" />

					<NextStepBtn bind:step={stepInstruction} icon='/images/icons/' text="Następny slajd" /> -->
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
