<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { scenarios } from '$sharedData';
	import { currentScenario } from '$sharedStores';

	// let currentScenario = scenarios.medium;

	console.log(scenarios)
</script>

<ul>
	{#each scenarios as scenario}
		<li>{scenario.name}: {scenario.rounds}</li>
	{/each}
</ul>

<style lang="postcss">
</style>
