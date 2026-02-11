<script lang="ts">
	import { socialLinks } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { SocialRoundIconLink } from '$sharedUi';
</script>

<div class="mt-0 w-[180px]">
	<ul class="flex w-full flex-row flex-wrap justify-center">
		{#each socialLinks as social}
			<li class="item_social-link mx-auto">
				<SocialRoundIconLink icon={social.icon} alt={social.alt} link={social.link} />
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
</style>
