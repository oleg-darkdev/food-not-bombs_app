<script lang="ts">
	import { page } from '$app/stores';

	import {
		

		Newsletter,
	Features,
	Available,
	FreeBlock_1,
	Header,
	PreHeader,
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
	} from '$widgets';
	// import { SEO } from '$sharedUtils';
</script>

<svelte:head>
	<title>FNB game | {$page.data.locale}</title>
	<meta name="description" content="" />
</svelte:head>

<!-- <SEO title="Home" /> -->


<Header />

<main class="main-wrapper">

	<Hero />

	<Marquee />

	<BigLightDivider />

	<Mission />

	<AboutBoardgame />

	<Features />

	<Available />

	<VeganMenu />

	<Slider />

	<Team />

	<Gallery gallery={landingPromoPhotos}/>


	<PreHeader />

	<FAQ />


	<!-- <FreeBlock_1 /> -->

	<!-- <Newsletter /> -->


	<!-- <FreeBlock_5 /> -->

	<!-- <FreeBlock_6 /> -->

</main>

<Footer />
