<script lang="ts">
	import { page } from '$app/stores';

	let { data } = $props();
	import { ScrollToTop, BigBtnText } from '$sharedUi';
	import { buildDocsNav } from '$sharedUtils';

	// import { FnbGroupCard, MiniFnbGroupCard, GroupsListCard } from '$entities';
	//
	import {
		AsideNav,
		HeaderNavigation,
		ContriesGroupList,
		ContriesGroupMiniCardsList
	} from '$widgetsLanding';
	const { groupsByRegion, groupsListEurope } = data;

	const docsNav = buildDocsNav(groupsListEurope);

	let activeScreen = $state(2);

	// console.log(groupsByRegion)

	const groupList = true;
</script>

<svelte:head>
	<title>Soup4ALL - groups | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <HeaderNavigation {docsNav} {groupList} /> -->

<section class="section project-page-explore">
	<!-- onclick={() => {
					activeScreen = 1;
				}} -->
	<div class="wrap__project-page-explore-heading">
		<h2 class="h1_semibold project-page-explore">
			<span class="text-orange">Food Not Bombs groups</span>
		</h2>
	</div>
	<!-- grid-cols-3 -->
	<div class="mx-auto mb-4 grid w-fit grid-cols-2 gap-x-4 px-6 pt-6">
		<BigBtnText
			bgColor="bg-red"
			onclick={() => {
				activeScreen = 1;
				// console.log('click ');
			}}
			text="List"
			activeBtn={activeScreen == 1 ? true : false}
		/>

		<BigBtnText
			bgColor="bg-orange"
			onclick={() => {
				activeScreen = 2;
				// console.log('click ');
			}}
			text="Cards"
			activeBtn={activeScreen == 2 ? true : false}
		/>
		<!-- <BigBtnText
		 			bgColor="bg-orange"

			onclick={() => {
				activeScreen = 3;
				console.log('click ,ap');
			}}
			text="Map"
			activeBtn={activeScreen == 3 ? true : false}
		/> -->
	</div>
</section>

{#if activeScreen == 1}
	<!-- <h2>Список в разработке</h2> -->

	<div class="relative flex w-full flex-row justify-between pt-10">
		<!-- <AsideNav {docsNav} /> -->
		<!-- , groupsListRussia] -->
		<ContriesGroupList countryGroups={groupsByRegion}/>
	</div>
{:else if activeScreen == 2}
	<!-- flex-wrap -->
	<div class="relative flex w-full flex-row justify-between py-10">
		<AsideNav {docsNav} />

		<!-- -->
		<ContriesGroupMiniCardsList countryGroups={groupsByRegion} />
	</div>
{:else if activeScreen == 3}
	<!-- <h2>карта в разработке</h2> -->
{/if}

<ScrollToTop />

<style lang="postcss"></style>
