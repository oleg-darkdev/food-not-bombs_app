<script lang="ts">
	import basicFaq from '../data/basicFaq';
	// import {  } from '$widgets';
	import { FaqCard } from '$entities';
</script>

<section class="section faq">
	<a name="faq"></a>

	<div class="wrap_faq-heading">
		<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
	</div>

	<div class="wrap_faq-content">
		<nav class="collection_faq w-dyn-list">
			<div role="list" class="list_faq w-dyn-items">
				{#each basicFaq as item, number}
					<div role="listitem" class="item_faq w-dyn-item">
						<FaqCard {item} {number}/>
					</div>
				{/each}
			</div>
		</nav>
	</div>
</section>

<style lang="postcss">
</style>
