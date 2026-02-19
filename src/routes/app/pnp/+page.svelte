<script lang="ts">
	import { FooterPnp } from '$widgetsApp';
	import { PnpStepCard } from '$entities';
	import { page } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { maxPnpStep } from '$sharedData';
	import { stepPnp } from '$sharedStores';

	let { data } = $props();

	const { pnp } = data;
</script>

<svelte:head>
	<title>Soup4ALL - app | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<div class="bg-army-green h-screen">
	<!-- <GroupsList /> -->
	<main
		class="bg-yellow flex h-[87vh] w-full flex-col content-center items-center overflow-x-hidden overflow-y-scroll pt-10 lg:h-[90vh]"
	>
		<div class="mb-10">
			<h2 class=" h1_semibold project-page-explore">
				<span class="text-orange transition-transform duration-200 ease-in-out">{$stepPnp} /</span>
				<span class="text-orange"> {maxPnpStep} </span>
			</h2>
		</div>

		{#if $stepPnp == 0}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.map} />
			</div>
		{:else if $stepPnp == 1}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.foodTokens} />
			</div>
		{:else if $stepPnp == 2}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.canningTokens} />
			</div>
		{:else if $stepPnp == 3}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.awardTokens} />
			</div>
		{:else if $stepPnp == 4}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.blockTokens} />
			</div>
		{:else if $stepPnp == 5}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.сlothingTokens} />
			</div>
		{:else if $stepPnp == 6}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.eventTokens} />
			</div>
		{:else if $stepPnp == 7}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.fnbGroupsTokens} />
			</div>
		{:else if $stepPnp == 8}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.playerTokens} />
			</div>
		{:else if $stepPnp == 9}
			<div class="w-full" transition:slide></div>
		{:else if $stepPnp == 10}
			<div class="w-full" transition:slide></div>
		{:else if $stepPnp == 11}
			<div class="w-full" transition:slide>
				<PnpStepCard pnpStep={pnp.steps.playerTablets} />
			</div>
		{/if}
	</main>
</div>

<FooterPnp />

<style lang="postcss">
	main {
		border-top: 1px solid var(--borders--army-green);
		border-bottom: 1px solid var(--borders--army-green);
	}
</style>
