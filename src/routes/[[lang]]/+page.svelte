<script lang="ts">
	import { page } from '$app/stores';
	let { data } = $props();

	const { promoFnbGroups } = data;

	import {
		Features,
		Available,
		Header,
		PreFAQ,
		Mission,
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

	const imgs = [
		{
			altText: '',
			img: '/images/photos/boardgame/promo/2.JPG'
		},
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/3.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/4.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/5.JPG'
		// },
		// {
		// 	altText: '',
		// 	img: '/images/photos/boardgame/promo/6.JPG'
		// },

		{
			altText: '',
			img: '/images/photos/boardgame/promo/8.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/11.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/15.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/9.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/16.JPG'
		},
		{
			altText: '',
			img: '/images/photos/boardgame/promo/1.JPG'
		}
	];

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

	<Marquee logos={getLogosAndIds(promoFnbGroups.slice(0, 15))} />
	<Marquee logos={getLogosAndIds(promoFnbGroups.slice(15, promoFnbGroups.length))} />

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
			<GroupsListingMini groupsData={promoFnbGroups.slice(0, 8)} />
		{/snippet}
	</Features>

	<Available />

	<VeganMenu />

	<Slider {imgs} />

	<Team />

	<Gallery gallery={landingPromoPhotos} />

	<PreFAQ />

	<FAQ />
</main>

<Footer />
