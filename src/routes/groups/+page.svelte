<script lang="ts">
	import { groupsListEurope } from '$sharedData';
	import { FnbGroupCard, MiniFnbGroupCard } from '$entities';
	// import { SEO } from '$sharedUtils';
	// groupsByRegion, allGroups, countriesList
	// import {  } from '$sharedData';

	let activeScreen = $state(2);
</script>

<!-- изменить цвета, для каждой кнопки свой цвет -->
<section class="w-full pt-6">
	<div class="grid_project-page-explore mx-auto max-w-4xl">
		<div class="item_project-page-explore wrap_top-creative-container">
			<button
				onclick={() => {
					activeScreen = 1;
				}}
				class="link_project-page-explore w-inline-block"
			>
				<h1 class="h_semi-bold top-creative">List</h1>
			</button>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
		<div class="item_project-page-explore wrap_top-creative-container">
			<button
				onclick={() => {
					activeScreen = 2;
				}}
				class="link_project-page-explore w-inline-block"
			>
				<h1 class="h_semi-bold top-creative">Cards</h1>
			</button>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
		<div class="item_project-page-explore wrap_top-creative-container">
			<button
				onclick={() => {
					activeScreen = 3;
				}}
				class="link_project-page-explore w-inline-block"
			>
				<h1 class="h_semi-bold top-creative">Map</h1>
			</button>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-left"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream bottom-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-right"
			/>
			<img
				src="/images/corner-dot-white.svg"
				loading="lazy"
				alt=""
				class="svg_corner-dot-cream top-left"
			/>
		</div>
	</div>
</section>

{#if activeScreen == 1}{:else if activeScreen == 2}
	{#each groupsListEurope as groupData (groupData.id)}
		<section class="my-20 flex w-full flex-col items-center justify-center">
			<a name={groupData.id}></a>

			<h2>{groupData.id} – {groupData.data.length}</h2>

			<div class="mx-auto grid max-w-6xl grid-cols-1 gap-x-4 gap-y-6 grid-cols-2 lg:grid-cols-3 px-2">
				{#each groupData.data as group (group.id)}
					{#if group.imgCollected}
						<!-- <FnbGroupCard {group} /> -->
						 <MiniFnbGroupCard {group}/>
					{/if}
				{/each}
			</div>
		</section>
	{/each}
{:else if activeScreen == 3}
	<h2>карта в разработке</h2>
{/if}

<style lang="postcss"></style>
