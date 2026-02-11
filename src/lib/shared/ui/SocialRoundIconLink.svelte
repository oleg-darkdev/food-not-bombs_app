<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { icon, alt, link } = $props();
</script>

<!-- 
Instagram
/images/instagram.png
-->
<a href={link} target="_blank" class="ico_footer-icon w-10 rounded-full h-auto w-inline-block transition-transform duration-200 ease-in-out hover:scale-105">
	<img src={icon} loading="lazy" {alt} class="img_footer-icon social-media" />
</a>

<style lang="postcss">
	.img_footer-icon {
		width: 100%;
		max-width: 80%;
	}

	.ico_footer-icon {
		aspect-ratio: 1;
		background-color: var(--background--cream);
		cursor: pointer;
		/* border-radius: 2em; */
		justify-content: center;
		align-items: center;
		/* width: 3.5em; */
		padding: 0.2em;
		display: flex;
		overflow: hidden;
	}
</style>
