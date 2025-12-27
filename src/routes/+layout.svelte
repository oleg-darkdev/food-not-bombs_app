<script lang="ts">
	// import LL, { setLocale } from '$i18n/i18n-svelte';
	import '../app/app.css';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	type Props = {
		data: LayoutData;
		children: Snippet;
	};

	let { data, children }: Props = $props();

	// at the very top, set the locale before you access the store and before the actual rendering takes place
	// setLocale(data.locale);
</script>

<svelte:head>
	<title></title>
	<!-- <html lang={data.locale} /> -->
	<!-- <HeadHrefLangs /> -->
</svelte:head>

<div class="page-wrapper">
	{@render children?.()}
</div>
