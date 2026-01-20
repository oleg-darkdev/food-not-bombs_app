<script lang="ts">
	// import {} from '$sharedData';
	import { InsstructionListCard } from '$entities';
	import { SliderGallery } from '$entitiesLanding';
	import { PlayerRoleCard } from '$entities';

	// import { Slider } from '$widgetsLanding';
	// import { SEO } from '$sharedUtils';

	import {
		kit,
		foodTokens,
		roles,
		preparation,
		winTokens,
		loseTokens,
		winLose,
		volunteeringApp,
		volunteeringGame,
		volunteeringFnb
	} from '$sharedData';

	console.log(kit);
	console.log(foodTokens);
	console.log(roles);
	console.log(preparation);
	console.log(winTokens);
	console.log(loseTokens);
	console.log(winLose);
	console.log(volunteeringApp);
	console.log(volunteeringGame);
	console.log(volunteeringFnb);
</script>

<!-- {#snippet api()}

		{/snippet} -->

<!-- data={kit.tokens} -->
<InsstructionListCard title={kit.tokens.category}>
	{#snippet start()}{/snippet}

	{#snippet list()}
		<h2 class="text-center">{kit.tokens.players.category}</h2>

		{#each kit.tokens.players.items as token}
			<li class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105">
				<div class="txt_services-list-item caps service flex flex-row items-center justify-between">
					<div class="flex max-w-sm flex-row items-center">
						<div class="mr-4">
							<img
								src={token.img}
								loading="eager"
								alt=""
								class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
							/>
						</div>

						<span class="txt_services-list-item caps service">{token.title} </span>
					</div>

					<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
						<div role="listitem" class="item_project-tags w-dyn-item">
							<p>
								x<span class="txt_services-list-item caps service text-2xl font-bold"
									>{token.quantity}</span
								>
							</p>
						</div>
					</div>
					<!-- {ingredient.count} -->
				</div>
			</li>
		{/each}
		<h2 class="text-center">{kit.tokens.food.category}</h2>

		{#each kit.tokens.food.items as token}
			<li class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105">
				<div class="txt_services-list-item caps service flex flex-row items-center justify-between">
					<div class="flex max-w-sm flex-row items-center">
						<div class="mr-4">
							<img
								src={token.img}
								loading="eager"
								alt=""
								class="h-8 w-20 rounded-lg object-cover lg:h-12 lg:w-24"
							/>
						</div>

						<span class="txt_services-list-item caps service">{token.title} </span>
					</div>

					<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
						<div role="listitem" class="item_project-tags w-dyn-item">
							<p>
								x<span class="txt_services-list-item caps service text-2xl font-bold"
									>{token.quantity}</span
								>
							</p>
						</div>
					</div>
					<!-- {ingredient.count} -->
				</div>
			</li>
		{/each}
		<h2 class="text-center">{kit.tokens.other.category}</h2>

		{#each kit.tokens.other.items as token}
			<li class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105">
				<div class="txt_services-list-item caps service flex flex-row items-center justify-between">
					<div class="flex max-w-sm flex-row items-center">
						<div class="mr-4">
							<img
								src={token.img}
								loading="eager"
								alt=""
								class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
							/>
						</div>

						<span class="txt_services-list-item caps service">{token.title} </span>
					</div>

					<div role="list" class="flex max-w-2xl flex-row items-center justify-between">
						<div role="listitem" class="item_project-tags w-dyn-item">
							<p>
								x<span class="txt_services-list-item caps service text-2xl font-bold"
									>{token.quantity}</span
								>
							</p>
						</div>
					</div>
					<!-- {ingredient.count} -->
				</div>
			</li>
		{/each}
	{/snippet}
</InsstructionListCard>

<!-- <Slider imgs={} /> -->

<h2 class="text-center">{kit.tablets.map.category}</h2>
<SliderGallery imgs={kit.tablets.map.items} />

<h2 class="text-center">{kit.tablets.players.category}</h2>
<div class=" flex flex-row flex-wrap justify-center gap-x-4 gap-y-2">
	{#each kit.tablets.players.items as role}
		<PlayerRoleCard {role} />
	{/each}
</div>
<a name="api"></a>
<a name="updates"></a>

<style lang="postcss"></style>
