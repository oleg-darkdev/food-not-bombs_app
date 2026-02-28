<script lang="ts">
	import { GroupsListCard } from '$entities';

	const { countryGroups } = $props();

</script>

<div class="">
<!-- (data.id) -->
	{#each countryGroups as groupsData}
		<section class="flex h-auto w-full flex-col items-end justify-end">
			<a name={groupsData.id}></a>

			<!-- <CountryListDataCard countryTitle={groupsData.title} groupsLength="">
				
				{#snippet miniGroupsCards()}
					<div class="flex h-auto w-full max-w-4xl flex-col items-end justify-end pt-1">
						{#each groupsData.data as groups}
							<a name={groups.id}></a>
							{#if groups.partiallyReady}
								<section class="flex h-auto w-full flex-col items-end justify-end pt-1">
									<CountryListDataCard countryTitle={groups.id} groupsLength={groups.data.length}>
										{#if !groups.fullyPrepared}
										{/if}

										{#snippet miniGroupsCards()}
											<div class="grid grid-cols-2 gap-x-4 gap-y-6">
												{#each groups.data as group}
													{#if group.imgCollected}
														<MiniFnbGroupCard {group} />
													{/if}
												{/each}
											</div>
										{/snippet}
									</CountryListDataCard>
								</section>
							{/if}
						{/each}
					</div>
				{/snippet}
			</CountryListDataCard> -->

			<div class="w-full max-w-6xl px-2">
				<GroupsListCard region={groupsData.anchor} groupsLength={groupsData.data.length} groupData={groupsData} />
			</div>
		</section>
	{/each}
</div>

<style lang="postcss"></style>
