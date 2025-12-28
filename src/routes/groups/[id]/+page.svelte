<script lang="ts">
	// import {  } from '$sharedData';
	import { GroupBanner, BasicInfo } from '$entitiesApp';
	import { Footer, Header, FAQ, Gallery } from '$widgetsLanding';

	let { data } = $props();

	let {
		// basic data
		logo,
		since,
		facebook,
		inst,
		notes,
		country,
		city,
		sharingAddress,
		sharingInfo,
		email,
		website,
		videos,
		twitter,
		cookingAddress,
		cookingInfo,
		contactPhone,
		contactName,

		// other
		gallery,
		photos,
		name,

		banner,
		mailingAddress
	} = data.group;

	// console.log(gallery)
</script>

<Header />

<section class="section subpage-heading projects">
	<h1 class="h1_semibold subpage-heading">{name}</h1>
</section>

<GroupBanner {banner} {country} />

<!-- <section class="section subpage-heading projects">
	<h1 class="h1_semibold subpage-heading">Lorem impsum.</h1>
</section> -->

<BasicInfo
	{logo}
	{since}
	{facebook}
	{inst}
	{country}
	{city}
	{sharingAddress}
	{sharingInfo}
	{email}
	{website}
	{videos}
	{twitter}
	{cookingAddress}
	{cookingInfo}
	{contactPhone}
	{contactName}
	{notes}
/>

<!-- <FreeBlock_4 /> -->

{#if gallery.length >= 1}
	<Gallery {gallery} />
{/if}
<!-- <Team /> -->

<FAQ />

<Footer />

<style lang="postcss">
</style>
