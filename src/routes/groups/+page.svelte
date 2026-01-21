<script lang="ts">
	let { data } = $props();
	import { ScrollToTop } from '$sharedUi';
	import { FnbGroupCard, MiniFnbGroupCard, GroupsListCard, SmallRectangleBtn } from '$entities';

	const { groupsListEurope } = data;

	console.log(data);

	// import { Newsletter, FreeBlock_1, FreeBlock_5, FreeBlock_4, FreeBlock_6 } from '$widgetsLanding';

	let activeScreen = $state(2);
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
	<div class="mx-auto mb-4 grid max-w-6xl grid-cols-3 gap-x-4 px-6 pt-6">
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
		<SmallRectangleBtn
			onclick={() => {
				activeScreen = 3;
				// console.log('click ');
			}}
			text="Map"
			activeBtn={activeScreen == 3 ? true : false}
		/>
	</div>
</section>

{#if activeScreen == 1}
	<!-- <h2>Список в разработке</h2> -->
	{#each groupsListEurope as groupData (groupData.id)}
		<section class="my-20 flex h-auto w-full flex-col items-center justify-center">
			<a name={groupData.id}></a>

			<div class="mx-auto max-w-6xl px-2">
				<GroupsListCard
					region={groupData.id}
					groupsLength={groupData.data.length}
					groupData={groupData.data}
				/>
			</div>
		</section>
	{/each}
{:else if activeScreen == 2}
	{#each groupsListEurope as groupData (groupData.id)}
		<section class="my-20 flex w-full flex-col items-center justify-center">
			<a name={groupData.id}></a>

			<h2>{groupData.id} – {groupData.data.length}</h2>

			<div
				class="mx-auto grid max-w-6xl grid-cols-1 grid-cols-2 gap-x-4 gap-y-6 px-2 lg:grid-cols-3"
			>
				{#each groupData.data as group (group.id)}
					{#if group.imgCollected}
						<!-- <FnbGroupCard {group} /> -->
						<MiniFnbGroupCard {group} />
					{/if}
				{/each}
			</div>
		</section>
	{/each}
{:else if activeScreen == 3}
	<h2>карта в разработке</h2>
{/if}

<ScrollToTop />

<style lang="postcss"></style>
