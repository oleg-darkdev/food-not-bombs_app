<script lang="ts">
	// import { slide } from 'svelte/transition';

	// import {  } from '$widgetsApp';
	// import { } from '$widgets';
	// import {  } from '$entities';
	// import {  } from '$entitiesApp';

	import { AppFooterBtn } from '$sharedUi';
	import { maxPnpStep } from '$sharedData';
	import { stepPnp } from '$sharedStores';

	import { goto } from '$app/navigation';

	function clearQuery() {
		goto('/app', {
			replaceState: true,
			keepFocus: true,
			noScroll: true
		});
	}
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
					onclick={() => {
						// $stepInstruction -= 1;
						stepPnp.update((n) => n - 1);
						// console.log($stepPnp);
					}}
					icon="/images/icons/left_arrow.svg"
					text="Prev"
					bg="bg-yellow"
				/>
			{/if}

			{#if $stepPnp < maxPnpStep}
				<AppFooterBtn
					onclick={() => {
						stepPnp.update((n) => n + 1);
					}}
					icon="/images/icons/right_arrow.svg"
					text="Next"
					bg="bg-yellow"
				/>
			{/if}
		</div>
	</div>
</footer>

<style lang="postcss">
</style>
