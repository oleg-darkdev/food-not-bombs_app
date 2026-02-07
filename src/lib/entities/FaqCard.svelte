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
		<img
			src="https://cdn.prod.website-files.com/669fc854dd10d0a0ff0cf009/66c8536e8b0452afd83f5e54_png_triangle.png"
			loading="lazy"
			alt=""
			class="img_triangle {showAnswer ? '-rotate-45': ''}"
		/>
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
