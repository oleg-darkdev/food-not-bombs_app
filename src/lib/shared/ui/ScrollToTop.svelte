<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	// Показывать кнопку только после прокрутки вниз
	let showButton = writable(false);

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		const handleScroll = () => {
			showButton.set(window.scrollY > 300); // показать после 300px
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

{#if $showButton}
	<button class="scroll-top bg-army-green w-20 h-20 rounded-full flex justify-center items-center " on:click={scrollToTop} aria-label="Scroll to top"> <img src="/images/icons/scroll_top.svg" class='text-2xl text-beige' alt="↑"> </button>
{/if}

<style>
	.scroll-top {
		position: fixed;
		bottom: 40px;
		right: 40px;
		/* background-color: #0070f3; */
		/* color: white; */
		/* border: none; */
		/* border-radius: 50%; */
		/* width: 50px;
		height: 50px; */
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
