<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { title, link, blank } = $props();
</script>

<!-- Let's talk #contact -->
<div class="w-layout-vflex wrap_performance-serivces-cta">
	<a
		href={link}
		target={blank ? blank : ''}
		class="cta_primary studio-page view-more w-inline-block"
	>
		<div class="txt_cta-name underline">{title}</div>
	</a>
</div>

<style lang="postcss">
</style>
