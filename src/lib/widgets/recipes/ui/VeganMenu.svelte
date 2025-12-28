<script lang="ts">
	import recipes from '../data/recipes';
	// import {  } from '$widgets';
	import { RecipeCard } from '$entities'

	const recipesPromo = [recipes[0], recipes[3], recipes[5]];
</script>

<section class="section services">
	<div class="wrap_section-paragraph">
		<h2 class="h_regular section-paragraph mx-auto max-w-4xl">
			<!-- Каждый раунд игры игроки стараются <span class="text-span-3"
				>спасти как можно больше еды перед утилизацией, 
			</span> и готовят исключительно <span class="text-span-3">вегетаринскую еду</span> для нуждающихся:

			<span class="flex flex-col">
				<em class="italic-text">60 литров супа </em>
				<em class="italic-text-2">10 кг салата </em>
				<em class="italic-text">15 литров компота</em>
			</span> -->
			Each round of the game, players try to
			<span class="text-span-3"> save as much food as possible from disposal, </span>
			and prepare exclusively <span class="text-span-3">vegetarian food</span> for those in need:

			<span class="flex flex-col">
				<em class="italic-text">60 liters of soup</em>
				<em class="italic-text-2">10 kg of salad</em>
				<em class="italic-text">15 liters of compote</em>
			</span>
		</h2>
	</div>
	<div class="wrap_services-cards">
		{#each recipesPromo as recipe}
			<RecipeCard {recipe}/>
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
