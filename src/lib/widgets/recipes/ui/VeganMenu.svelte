<script lang="ts">
	import recipes from '../data/recipes';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const recipesPromo = [
		recipes[0],
		recipes[3],
		recipes[5],
	]
	
</script>

<section class="section services">
	<div class="wrap_section-paragraph">
		<h2 class="h_regular section-paragraph">
			Готовим исключительно вегетаринскую еду: <span class="text-span-3">60 литров супа </span>
			<em class="italic-text-2">10 кг салата </em>
			<em class="italic-text">15 литров фруктового компота</em>.
		</h2>
	</div>
	<div class="wrap_services-cards">
		{#each recipesPromo as recipe}
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
		{/each}
	</div>
	<div class="img_pink-service-band left">
		<div class="txt_service-pink-band">Recipes</div>
	</div>
	<div class="img_pink-service-band right">
		<div class="txt_service-pink-band right">Recipes</div>
	</div>
</section>

<style lang="postcss">
</style>
