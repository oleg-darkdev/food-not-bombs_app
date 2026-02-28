<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { fade, fly } from 'svelte/transition';

	const { item, number } = $props();

	let showAnswer = $state(false);
</script>

<div class="wrap_faq ">
	<div class="faq_question cursor-pointer" onclick={() => (showAnswer = !showAnswer)}>
		<div class="w-layout-vflex wrap_faq-item-question">
			<div class="txt_faq-question"><p class='flex flex-row'>Q <span class='text-pink'>{number}</span></p></div>
			<div class="txt_faq-question">{item.q}</div>
		</div>
		<img src="/images/icons/down_arrow.svg" loading="lazy" alt="" class="h-10 w-10 {showAnswer ? '-rotate-180' : ''}" />


		<!-- groups -->
	</div>

	{#if showAnswer}
		<div class="faq_answer " in:fly={{ y: 200 }} out:fade>
			<div class="txt_faq-answer w-richtext">
				{#each item.a as answer}
					<p class='mb-2'>
						{answer}
					</p>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="postcss">
</style>
