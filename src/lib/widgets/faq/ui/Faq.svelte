<script lang="ts">
	import { RoundedBtn } from '$sharedUi';
	import { FaqCard } from '$entities';

	let showFullFaq = $state(false);

	let { faqData } = $props();
</script>

<div id={faqData.anchor} class="wrap_faq-content">
	<div class="wrap__project-page-explore-heading">
		<h2 class="h1_semibold project-page-explore">
			<span class="text-army-green">{faqData.title}</span>
		</h2>
	</div>
	<nav class="collection_faq w-dyn-list mb-6">
		<div role="list" class="list_faq w-dyn-items">
			{#each showFullFaq ? faqData.data : faqData.data.slice(0, 4) as item, number}
				<div role="listitem" class="item_faq w-dyn-item">
					<FaqCard {item} {number} />
				</div>
			{/each}
		</div>
	</nav>

	<RoundedBtn title={faqData.btnTitle} onclick={() => (showFullFaq = !showFullFaq)} />
</div>

<style lang="postcss">
</style>
