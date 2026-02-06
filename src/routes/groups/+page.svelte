<script lang="ts">
	let { data } = $props();
	import { ScrollToTop } from '$sharedUi';
	import { FnbGroupCard, MiniFnbGroupCard, GroupsListCard, SmallRectangleBtn } from '$entities';
	import { AsideNav } from '$widgetsLanding';

	const { groupsListEurope } = data;

	function buildDocsNav(groupsListEurope) {
		return groupsListEurope.map((country) => ({
			title: country.id.charAt(0).toUpperCase() + country.id.slice(1), // с большой
			anchor: country.id, // с маленькой
			showFull: false,

			subNav: country.data.map((city) => ({
				anchor: city.id, // id города
				title: city.city, // название города
				subSubNav: []
			}))
		}));
	}

	const docsNav = buildDocsNav(groupsListEurope);
	// console.log(docsNav);

	// import { Newsletter, FreeBlock_1, FreeBlock_5, FreeBlock_4, FreeBlock_6 } from '$widgetsLanding';

	let activeScreen = $state(2);

	// const docsNav = [
	// 	{
	// 		title: groupsListEurope[0].id,
	// 		anchor: groupsListEurope[0].id,
	// 		showFull: false,

	// 		subNav: [
	// 			{
	// 				anchor: 'tokens',
	// 				title: groupsListEurope[0].id,
	// 				subSubNav: []
	// 			}
	// 		]
	// 	}
	// ];
</script>

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
	<div class="mx-auto mb-4 grid max-w-4xl grid-cols-2 gap-x-4 px-6 pt-6">
		<SmallRectangleBtn
			onclick={() => {
				activeScreen = 1;
				// console.log('click ');
			}}
			text="List"
			activeBtn={activeScreen == 1 ? true : false}
		/>

		<SmallRectangleBtn
			onclick={() => {
				activeScreen = 2;
				// console.log('click ');
			}}
			text="Cards"
			activeBtn={activeScreen == 2 ? true : false}
		/>
		<!-- <SmallRectangleBtn
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
		<AsideNav {docsNav} />

		<div class="">
			{#each groupsListEurope as groupData (groupData.id)}
				<section class="flex h-auto w-full flex-col items-end justify-end ">
					<a name={groupData.id}></a>

					<div class="w-full max-w-6xl px-2">
						<GroupsListCard
							region={groupData.id}
							groupsLength={groupData.data.length}
							groupData={groupData.data}
						/>
					</div>
				</section>
			{/each}
		</div>
	</div>
{:else if activeScreen == 2}
	<!-- flex-wrap -->
	<div class="relative flex w-full flex-row justify-between pt-10">
		<AsideNav {docsNav} />

		<div class="">
			{#each groupsListEurope as groupData (groupData.id)}
				<section class="flex h-auto w-full flex-col items-end justify-end max-w-6xl">
					<a name={groupData.id}></a>

					<h2 class="w-full text-center">{groupData.id} – {groupData.data.length}</h2>

					<!-- mx-auto max-w-6xl -->
					<div class=" grid grid-cols-1 grid-cols-2 gap-x-4 gap-y-6 px-2 lg:grid-cols-3 ">
						{#each groupData.data as group (group.id)}
							{#if group.imgCollected}
								<!-- <FnbGroupCard {group} /> -->
								<MiniFnbGroupCard {group} />
							{/if}
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
{:else if activeScreen == 3}
	<!-- <h2>карта в разработке</h2> -->
{/if}

<ScrollToTop />

<style lang="postcss"></style>
