<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { fade, fly } from 'svelte/transition';

	const { countryTitle, miniGroupsCards, groupsLength } = $props();

	let showGroups = $state(false);
</script>



<div class="wrap_faq max-w-5xl">
	<div class="faq_question cursor-pointer" onclick={() => (showGroups = !showGroups)}>
		<div class="w-layout-vflex wrap_faq-item-question mr-2">
			<div class="txt_faq-question">{countryTitle}</div>

			<div class="txt_faq-question">
				<p class="flex flex-row"><span class="text-pink">{groupsLength}</span></p>
			</div>
		</div>

		<img src="/images/icons/down_arrow.svg" loading="lazy" alt="" class="h-10 w-10 {showGroups ? '-rotate-180' : ''}" />
	</div>

	{#if showGroups}
		<div class="faq_answer w-full" in:fly={{ y: 200 }} out:fade>
			<div
				class="txt_faq-answer  w-richtext px-2 "
			>
			<!-- lg:grid-cols-3 grid grid-cols-1 grid-cols-2 -->
				<!-- <div class=" "> -->

				{@render miniGroupsCards()}

				<!-- {#each item.a as answer}
					<p class='mb-2'>
						{answer}
					</p>
				{/each} -->
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
