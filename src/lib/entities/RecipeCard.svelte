<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { recipe } = $props();
</script>

<div class="wrap_card-style-2 active-shadow">
	<div class="wrap_card-content services">
		<div class="wrap_card-heading services">
			<h3 class="h_semi-bold services italic">{recipe.title}</h3>
		</div>
		<div class="wrap_services-list">
			<ul role="list" class="list_services-card w-list-unstyled">
				{#each recipe.ingredients as ingredient}
					<li class="item_services-card">
						<div class="txt_services-list-item caps service">
							{ingredient.title}
							<!-- {ingredient.count} -->
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<!-- <div class="w-layout-vflex wrap_service-card-cta">
						<a href="/" class="cta_primary service w-inline-block">
							<div class="txt_cta-name underline">Learn more</div>
						</a>
					</div> -->
	</div>
	<div class="img_active-shadow"></div>
</div>

<style lang="postcss">
</style>
