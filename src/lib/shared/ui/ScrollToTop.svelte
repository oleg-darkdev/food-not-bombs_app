<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	let showButton = writable(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		const handleScroll = () => {
			showButton.set(window.scrollY > 300);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if $showButton}
	<button
		class="scroll-top bg-army-green z-40 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full"
		on:click={scrollToTop}
		aria-label="Scroll to top"
	>
		<img src="/images/icons/scroll_top.svg" class="text-beige text-2xl" alt="↑" />
	</button>
{/if}

<style>
	.scroll-top {
		position: fixed;
		bottom: 40px;
		right: 40px;
		cursor: pointer;
		transition:
			opacity 0.3s ease,
			transform 0.3s ease;
	}

	.scroll-top.hide {
		opacity: 0;
		transform: translateY(20px);
		pointer-events: none;
	}
</style>
