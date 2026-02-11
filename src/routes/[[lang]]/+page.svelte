<script lang="ts">
	import { page } from '$app/stores';
	let { data } = $props();

	const {
		promoFnbGroups,
		landingPromoPhotos,
		imgs,
		fnbFaq,
		boardgameFaq,
		basicFaq,
		appFaq,
		socialLinks,
		nav
		// componentsFaq,
		// rulesAndInterpretationFaq
	} = data;

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
		// landingPromoPhotos,
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
	<title>Soup4ALL - app | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>
<!-- <SEO title="Home" /> -->

<Header {nav}/>

<main class="main-wrapper">
	<Hero {socialLinks}/>

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

	<section id="faq" class="section faq">
		<div class="wrap_faq-heading">
			<h2 class="h_semi-bold section-heading small faq">FAQ</h2>
		</div>
		<FAQ faqData={fnbFaq} />
		<FAQ faqData={boardgameFaq} />
		<!-- <FAQ faqData={basicFaq} /> -->
		<FAQ faqData={appFaq} />
	</section>
</main>

<Footer {socialLinks} {nav}/>
