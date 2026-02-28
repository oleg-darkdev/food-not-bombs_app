<script lang="ts">
	import { CountryListDataCard, MiniFnbGroupCard } from '$entities';

	const { countryGroups } = $props();
</script>

<div class="flex flex-col">
	{#each countryGroups as groupsData}
		<div class="mb-[60px] flex flex-col">
			<!-- (groups.id) -->
			<!-- {groups.id} -->
			<!-- {groups.data.length} -->
			<CountryListDataCard countryTitle={groupsData.title} groupsLength="">
				<!-- api shortDesc -->
				<!-- (group.id) -->
				{#snippet miniGroupsCards()}
					<div class="flex h-auto w-full max-w-4xl flex-col items-end justify-end pt-1">
						{#each groupsData.data as groups}
							<a name={groups.id}></a>
							{#if groups.partiallyReady}
								<section class="flex h-auto w-full flex-col items-end justify-end pt-1">
									<CountryListDataCard countryTitle={groups.id} groupsLength={groups.data.length}>
										{#if !groups.fullyPrepared}
											<!-- part ready card -->
										{/if}

										<!-- (group.id) -->
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
			</CountryListDataCard>
		</div>
	{/each}
</div>

<style lang="postcss"></style>
