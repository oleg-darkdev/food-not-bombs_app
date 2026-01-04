<script lang="ts">
	import { page } from '$app/stores';
	import { promoFnbGroups } from '$sharedData';

	import {
		Newsletter,
		Features,
		Available,
		FreeBlock_1,
		Header,
		PreFAQ,
		Mission,
		FreeBlock_5,
		FreeBlock_4,
		FreeBlock_6,
		Footer,
		Slider,
		Hero,
		// Cta,
		AboutBoardgame
	} from '$widgetsLanding';

	import {
		Team,
		CallingAll,
		BigLightDivider,
		Gallery,
		Marquee,
		FAQ,
		VeganMenu,
		LangSwitcher,
		landingPromoPhotos,
		GroupsListingMini,
		ApiListing
	} from '$widgets';
	// import { SEO } from '$sharedUtils';

	import { StatsList } from '$entities';

	function getLogosAndIds(data) {
		return data.map((item) => ({
			id: item.id,
			img: item.logo,
			alt: item.name
		}));
	}
</script>

<svelte:head>
	<title>FNB game | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->

<Header />

<main class="main-wrapper">
	<Hero />

	<Marquee logos={getLogosAndIds(promoFnbGroups)} />

	<BigLightDivider />

	<Mission />

	<AboutBoardgame />

	<Features>
		{#snippet api()}
			<ApiListing />
		{/snippet}
		{#snippet stats()}
			<StatsList />
		{/snippet}
		{#snippet groups()}
			<GroupsListingMini groupsData={promoFnbGroups.slice(0, 4)} />
		{/snippet}
	</Features>

	<Available />

	<VeganMenu />

	<Slider />

	<Team />

	<Gallery gallery={landingPromoPhotos} />

	<PreFAQ />

	<FAQ />

	<!-- <FreeBlock_1 /> -->

	<!-- <Newsletter /> -->

	<!-- <FreeBlock_5 /> -->

	<!-- <FreeBlock_6 /> -->
</main>

<Footer />
