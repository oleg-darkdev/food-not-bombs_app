<script lang="ts">
	// import {} from '$sharedData';
	// import { GroupsList } from '$widgets';
	// import { SEO } from '$sharedUtils';
	import { AppFooterBtn } from '$entities';

	let activeScreen = $state(1),
		stepInstruction = $state(0);
</script>

<div class="h-screen">
	<!-- <GroupsList /> -->
	<main
		class="flex h-[90vh] flex-col content-center items-center justify-center overflow-x-hidden overflow-y-scroll py-20"
	>
		{#if activeScreen == 1}{:else if activeScreen == 2}{/if}
	</main>

	<footer class="fixed bottom-0 left-0 w-full">
		<div class="mx-auto w-full max-w-4xl py-6">
			{#if activeScreen == 1}
				<div class="grid grid-cols-2 gap-x-8 px-4">
					<AppFooterBtn
						onclick={() => {
							stepInstruction = 1;
							// console.log('click ');
						}}
						text="Preview"
						
					/>

					<AppFooterBtn
						onclick={() => {
							activeScreen = 2;
							// console.log('click ');
						}}
						text="Instruction"
					/>
				</div>
			{:else if activeScreen == 2}
				<!-- grid grid-cols-3 gap-x-4 -->
				<div class="grid grid grid-cols-[35%_35%] gap-x-4">
					{#if activeScreen == 1}
						<h2>///</h2>
					{:else if activeScreen == 2 && stepInstruction <= 9}
						<AppFooterBtn
							onclick={() => {
								stepInstruction = 1;
								// console.log('click ');
							}}
							text="Preview"
						/>

						<AppFooterBtn
							onclick={() => {
								stepInstruction = 2;
								// console.log('click ');
							}}
							text="Next"
						/>
						<!-- <div class="grid grid-cols-2 gap-6 my-20"> -->
						<!-- <PrevStepBtn bind:step={stepInstruction} text="Poprzedni slajd" />

					<NextStepBtn bind:step={stepInstruction} text="Następny slajd" /> -->
						<!-- </div> -->
					{/if}
				</div>
			{/if}
		</div>
	</footer>
</div>

<style lang="postcss"></style>
