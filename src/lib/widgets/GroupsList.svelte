<script lang="ts">
	// import { onMount } from "svelte";
	// import { $state, $derived } from 'svelte';

	import { groupsByRegion, allGroups, countriesList } from '$sharedData';

	// let selectedRegion = $state(groupsByRegion[0]);

	// function selectRegion(region) {
	// 	selectedRegion = region;
	// }
	// const filteredGroups = $derived(() => selectedRegion());

	// console.log(selectRegion().data)
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const selectedCountries = $state(() => new Set());

	function toggleCountry(country) {
		const next = new Set(selectedCountries());

		if (next.has(country)) {
			next.delete(country);
		} else {
			next.add(country);
		}

		selectedCountries(next);
	}

	// отфильтрованные группы
	// const filteredGroups = $derived(() => {
	// 	if (selectedCountries().size === 0) {
	// 		return region.data;
	// 	}

	// 	return region.data.filter(group =>
	// 		selectedCountries().has(group.country)
	// 	);
	// });
	// console.log(countriesList)

	let selectedRegion = $state(groupsByRegion[0]);

	function showRegion(region) {
		selectedRegion = region;

		// console.log(selectedRegion.data)
	}
</script>

<main class="mx-auto">
	<h1>Food Not Bombs Chapters</h1>

	{#each groupsByRegion as region}
		<button on:click={() => showRegion(region)}>{region.title}</button>
	{/each}

	<!-- flex justify-between flex-wrap flex-row max-w-4xl -->
	<div class="grid grid-cols-6 gap-4 max-w-4xl ">
		{#each selectedRegion.countries as country}
			<a class='' href="#{country}">{country}</a>
		{/each}
	</div>

	{#if selectedRegion}
		<h3>Группы в регионе: {selectedRegion.length}</h3>
		{#each selectedRegion.data as item}
			<div class="card mx-auto max-w-3xl">
				<a name={item.country}></a>
				<h2>{item.name}</h2>
				<p><strong>Country:</strong> {item.country} | <strong>City:</strong> {item.city}</p>
				{#if item.sharingAddress}<p><strong>Sharing Address:</strong> {item.sharingAddress}</p>{/if}
				{#if item.sharingInfo}<p><strong>Sharing Info:</strong> {item.sharingInfo}</p>{/if}
				{#if item.email}<p>
						<strong>Email:</strong> <a href="mailto:{item.email}">{item.email}</a>
					</p>{/if}
				{#if item.website}<p>
						<strong>Website:</strong> <a href={item.website} target="_blank">{item.website}</a>
					</p>{/if}
				{#if item.facebook}<p>
						<strong>Facebook:</strong> <a href='{item.facebook}' target="_blank">{item.facebook}</a>
					</p>{/if}
				{#if item.twitter}<p>
						<strong>Twitter:</strong> <a href={item.twitter} target="_blank">{item.twitter}</a>
					</p>{/if}
				{#if item.cookingAddress || item.cookingInfo}
					<div class="contact">
						{#if item.cookingAddress}<p>
								<strong>Cooking Address:</strong>
								{item.cookingAddress}
							</p>{/if}
						{#if item.cookingInfo}<p><strong>Cooking Info:</strong> {item.cookingInfo}</p>{/if}
					</div>
				{/if}
				<div class="contact">
					{#if item.contactName}<p><strong>Contact Name:</strong> {item.contactName}</p>{/if}
					{#if item.contactPhone}<p><strong>Phone:</strong> {item.contactPhone}</p>{/if}
					{#if item.notes}<p><strong>Notes:</strong> {item.notes}</p>{/if}
				</div>

				<div class="flex flex-row justify-between">
					<div class="status-item">
						<span class={item.imgCollected ? 'true' : 'false'}>
							{item.imgCollected ? 'Image Collected' : 'Image Not Collected'}
						</span>
					</div>

					<div class="status-item">
						<span class={item.infoChecked ? 'true' : 'false'}>
							{item.infoChecked ? 'Info Checked' : 'Info Not Checked'}
						</span>
					</div>

					<div class="status-item">
						<span class={item.betifyText ? 'true' : 'false'}>
							{item.betifyText ? 'Betify Text Done' : 'Betify Text Pending'}
						</span>
					</div>

					<div class="status-item">
						<span class={item.facebookChecked ? 'true' : 'false'}>
							{item.facebookChecked ? 'Facebook Checked' : 'Facebook Not Checked'}
						</span>
					</div>
				</div>
			</div>
		{/each}
	{/if}
</main>

<style lang="postcss">
	button {
		margin: 5px;
		padding: 8px 12px;
		border-radius: 5px;
		border: 1px solid #ccc;
		background-color: #f5f5f5;
		cursor: pointer;
	}
	button:hover {
		background-color: #e0e0e0;
	}

	.card {
		border: 1px solid #ccc;
		border-radius: 12px;
		padding: 16px;
		margin: 12px 0;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s;
	}
	.card:hover {
		transform: scale(1.02);
	}
	.card h2 {
		margin: 0 0 8px 0;
		font-size: 1.5rem;
	}
	.card p {
		margin: 4px 0;
	}
	.contact {
		margin-top: 8px;
		font-size: 0.9rem;
		color: #555;
	}
	a {
		color: #0077cc;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}

	.status-item {
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}
	.status-item input {
		margin-right: 10px;
	}
	.status-item span {
		font-weight: 500;
	}
	.status-item span.true {
		color: green;
	}
	.status-item span.false {
		color: red;
	}
</style>
