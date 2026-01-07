<script lang="ts">
	import basicFaq from '../data/basicFaq';
	import appFaq from '../data/appFaq';
	import boardgameFaq from '../data/boardgameFaq';
	import fnbFaq from '../data/fnbFaq';
	import { RoundedBtn } from '$sharedUi';
	// import {  } from '$widgets';
	import { FaqCard } from '$entities';

	let showFullBoardgameFaq = $state(false),
		showFullBasicFaq = $state(false),
		showFullFnbFaq = $state(false),
		showFullAppFaq = $state(false);
</script>

<section id="faq" class="section faq">
	<div class="wrap_faq-heading">
		<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
	</div>

	<div id='boardgame-faq' class="wrap_faq-content">
		<div class="wrap__project-page-explore-heading">
			<h2 class="h1_semibold project-page-explore">
				<span class="text-army-green">Boardgame FAQ</span>
			</h2>
		</div>
		<nav class="collection_faq w-dyn-list mb-6">
			<div role="list" class="list_faq w-dyn-items">
				{#each showFullBoardgameFaq ? boardgameFaq : boardgameFaq.slice(0, 4) as item, number}
					<div role="listitem" class="item_faq w-dyn-item">
						<FaqCard {item} {number} />
					</div>
				{/each}
			</div>
		</nav>

		{#if boardgameFaq}
			<RoundedBtn
				title="Show full boardgame faq"
				onclick={() => (showFullBoardgameFaq = !showFullBoardgameFaq)}
			/>
		{/if}
	</div>

	<div id='app-faq' class="wrap_faq-content">
		<div class="wrap__project-page-explore-heading">
			<h2 class="h1_semibold project-page-explore">
				<span class="text-army-green">App FAQ</span>
			</h2>
		</div>
		<nav class="collection_faq w-dyn-list mb-6">
			<div role="list" class="list_faq w-dyn-items">
				{#each showFullAppFaq ? appFaq : appFaq.slice(0, 4) as item, number}
					<div role="listitem" class="item_faq w-dyn-item">
						<FaqCard {item} {number} />
					</div>
				{/each}
			</div>
		</nav>
		{#if appFaq}
			<RoundedBtn title="Show full app faq" onclick={() => (showFullAppFaq = !showFullAppFaq)} />
		{/if}
	</div>

	<div id='fnb-faq' class="wrap_faq-content">
		<div class="wrap__project-page-explore-heading">
			<h2 class="h1_semibold project-page-explore">
				<span class="text-army-green">FNB FAQ</span>
			</h2>
		</div>
		<nav class="collection_faq w-dyn-list mb-6">
			<div role="list" class="list_faq w-dyn-items">
				{#each showFullFnbFaq ? fnbFaq : fnbFaq.slice(0, 4) as item, number}
					<div role="listitem" class="item_faq w-dyn-item">
						<FaqCard {item} {number} />
					</div>
				{/each}
			</div>
		</nav>
		{#if fnbFaq}
			<RoundedBtn title="Show full FNB faq" onclick={() => (showFullFnbFaq = !showFullFnbFaq)} />
		{/if}
	</div>

	<!-- <div id='basic-faq' class="wrap_faq-content">
		<div class="wrap__project-page-explore-heading">
			<h2 class="h1_semibold project-page-explore">
				<span class="text-army-green">Basic FAQ</span>
			</h2>
		</div>
		<nav class="collection_faq w-dyn-list mb-6">
			<div role="list" class="list_faq w-dyn-items">
				{#each showFullBasicFaq ? basicFaq : basicFaq.slice(0, 4) as item, number}
					<div role="listitem" class="item_faq w-dyn-item">
						<FaqCard {item} {number} />
					</div>
				{/each}
			</div>
		</nav>
		{#if basicFaq}
			<RoundedBtn
				title="Show full basic faq"
				onclick={() => (showFullBasicFaq = !showFullBasicFaq)}
			/>
		{/if}
	</div> -->
</section>

<style lang="postcss">
</style>
