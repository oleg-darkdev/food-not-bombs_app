<script lang="ts">
	// import { slide } from 'svelte/transition';

	// import {  } from '$widgetsApp';
	// import { } from '$widgets';
	// import {  } from '$entities';
	// import {  } from '$entitiesApp';

	import { AppFooterBtn } from '$sharedUi';
	import { nextRound } from '$sharedUtils';

	import {
		// stepGame,
		stepInstruction,
		// selectedMenu,
		// actualRound,
		stepPnp
		// actualScreen
	} from '$sharedStores';

	// let maxGameStep = $state(7);

	// let showPnp = $state(false);

	// console.log($stepInstruction);

	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	function clearQuery() {
		const cleanPath = $page.url.search;

		goto(cleanPath, {
			replaceState: true, 
			keepFocus: true,
			noScroll: true
		});
	}

	// console.log($page.url.search)
</script>

<footer class="fixed bottom-0 left-0 z-30 w-full px-10 pb-4">
	<div class="mx-auto w-full max-w-4xl">
		<div class="mx-auto grid grid grid-cols-3 gap-x-4">
			<AppFooterBtn
				onclick={() => {
					clearQuery();
				}}
				icon="/images/icons/menu.svg"
				text="menu"
				bg="bg-pink"
			/>

			{#if $stepPnp >= 1}
				<AppFooterBtn
					onclick="{() => {
						// $stepInstruction -= 1;
						stepPnp.update((n) => n - 1);
						console.log($stepPnp);
					}}}"
					icon="/images/icons/left_arrow.svg"
					text="Prev"
					bg="bg-yellow"
				/>
			{/if}

			<AppFooterBtn
				onclick={() => {
					stepPnp.update((n) => n + 1);
				}}
				icon="/images/icons/right_arrow.svg"
				text="Next"
				bg="bg-yellow"
			/>
		</div>
	</div>
</footer>

<style lang="postcss">
</style>
