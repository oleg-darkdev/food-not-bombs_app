<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { SocialRoundIconLink } from '$sharedUi';

	let { groupData, groupsLength, region } = $props();

	console.log(groupData);
</script>

<div class="section meet-our-friends collection w-full">
	<div class="wrap_meet-our-friends w-full">
		<div class="collection_projects w-full">
			<div role="list" class="list_projects w-dyn-items w-full">
				<div role="listitem" class="wrap_project-card w-dyn-item w-full">
					<div class="wrap-banner-img w-full">
						<div class="wrap_card-heading services flex flex-row items-center justify-center py-2">
							<h3 class="h_semi-bold services mr-1 italic">
								{region}: <span class="ml-4">{groupsLength}</span>
							</h3>
							<img
								src="/images/groups/default_logo.png"
								class="h-4 w-4 lg:-mt-8 lg:h-16 lg:w-16"
								alt=""
							/>
						</div>

						<div class="wrap_services-list w-full">
							<ul role="list" class=" w-list-unstyled w-full px-6">
								<!-- (group.id) -->
								{#each groupData.data as group}
									{#each group.data as group}
										<li
											id={group.id}
											class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
										>
											<div
												class="txt_services-list-item caps service flex flex-row items-center justify-between"
											>
												<div class="flex max-w-sm flex-row items-center">
													<div class="mr-4">
														<img
															src={group.logo ? group.logo : '/images/groups/default_logo.png'}
															loading="eager"
															alt=""
															class="h-8 w-8 rounded-full object-cover lg:h-12 lg:w-12"
														/>
													</div>

													<span class="txt_services-list-item caps service"> {group.city} </span>
												</div>

												<div
													role="list"
													class="flex max-w-2xl flex-row items-center justify-between"
												>
													{#if group.facebook}
														<div role="listitem" class="item_project-tags w-dyn-item">
															<SocialRoundIconLink
																icon="/images/icons/facebook.svg"
																alt="Facebook"
																link={group.facebook}
															/>
														</div>
													{/if}

													{#if group.inst}
														<div role="listitem" class="item_project-tags w-dyn-item">
															<SocialRoundIconLink
																icon="/images/icons/instagram.svg"
																alt="Instagram"
																link={group.inst}
															/>
														</div>
													{/if}

													{#if group.twitter}
														<div role="listitem" class="item_project-tags w-dyn-item">
															<SocialRoundIconLink
																icon="/images/icons/twitter.svg"
																alt="twitter"
																link={group.twitter}
															/>
														</div>
													{/if}

													{#if group.website}
														<div role="listitem" class="item_project-tags w-dyn-item">
															<SocialRoundIconLink
																icon="/images/icons/link.svg"
																alt={group.website}
																link={group.website}
															/>
														</div>
													{/if}

													{#if group.email}
														<div role="listitem" class="item_project-tags w-dyn-item">
															<!-- <a
															href={`mailto:${group.email}`}
															target="_blank"
															class=" cta_primary tag-style">email</a
														> -->
															<SocialRoundIconLink
																icon="/images/icons/email.svg"
																alt={group.contactPhone ? group.contactPhone : group.contactName}
																href={`mailto:${group.email}`}
															/>
														</div>
													{/if}

													{#if group.contactPhone}
														<div role="listitem" class="item_project-tags w-dyn-item">
															<SocialRoundIconLink
																icon="/images/icons/phone-call.svg"
																alt={group.contactPhone ? group.contactPhone : group.contactName}
																link={`tel:${group.contactPhone}`}
															/>
														</div>
														<!-- <div role="listitem" class="item_project-tags w-dyn-item">
														<a
															href={`tel:${group.contactPhone}`}
															class="cta_primary yellow tag-style"
														>
															{group.contactPhone ? group.contactPhone : group.contactName}
														</a>
													</div> -->
													{/if}
												</div>
												<!-- {ingredient.count} -->
											</div>
										</li>
									{/each}
								{/each}
							</ul>
						</div>
					</div>
					<div class="w-layout-vflex img_corner-dots">
						<img
							src="/images/corner-dot-army-green.svg"
							loading="lazy"
							alt=""
							class="img_dark-dot"
						/>
						<img
							src="/images/corner-dot-army-green.svg"
							loading="lazy"
							alt=""
							class="img_dark-dot top-lright"
						/>
						<img
							src="/images/corner-dot-army-green.svg"
							loading="lazy"
							alt=""
							class="img_dark-dot bottom-right"
						/>
						<img
							src="/images/corner-dot-army-green.svg"
							loading="lazy"
							alt=""
							class="img_dark-dot bottom-left"
						/>
					</div>
					<!-- <div class="txt_brand-spotlight project-collection">{country}</div> -->
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.wrap-banner {
		/* grid-column-gap: 2em;
		grid-row-gap: 2em;
		flex-flow: column; */
		justify-content: center;
		align-items: center;
		max-width: 50%;
		/* padding-left: 2em;
		padding-right: 1em; */
		display: flex;
	}

	.wrap-banner-img {
		border-radius: 1em;
		max-width: 70em;
		/* max-width: 50%; */
		/* max-height: auto; */
		/* margin-left: 4em;
		margin-right: 4em; */
		overflow: clip;
	}
	@media screen and (max-width: 991px) {
		.wrap-banner-img {
			/* max-width: 40em; */
		}
		.wrap-banner {
			/* padding-left: 1em; */
			padding-right: 0;
		}
	}

	@media screen and (max-width: 767px) {
		.wrap-banner-img {
			width: auto;
			max-width: none;
			/* display: none; */
		}

		.wrap-banner {
			/* grid-column-gap: 0em;
			grid-row-gap: 0em; */
			max-width: none;
			padding-left: 5em;
			padding-right: 5em;
		}

		.wrap-banner.mobile-lanscape-center {
			justify-content: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 479px) {
		.wrap-banner.mobile-lanscape-center {
			padding-left: 9.7em;
			padding-right: 9.7em;
		}
	}

	.txt_services-list-item.caps {
		text-align: left;
	}

	.txt_services-list-item.caps.service {
		letter-spacing: 0.1em;
		font-size: 1.6em;
	}
	.item_services-card {
		border-bottom: 2px solid var(--borders--army-green);
		padding: 1em;
		list-style-type: none;
	}

	.list_services-card {
		font-size: var(--size--em);
		width: 100em;
		max-width: 19em;
		margin-bottom: 0;
		padding-left: 0;
	}
	.wrap_services-list {
		flex-flow: column;
		padding-top: 4.5em;
		padding-bottom: 1em;
		display: flex;
	}

	.wrap_card-style-2 {
		z-index: 30;
		border: 1px none var(--borders--army-green);
		background-color: var(--background--beige);
		box-shadow: 0.4em 0.4em 0em 0em var(--background--pink);
		background-image: url('/images/corner-dot-army-green.svg'),
			url('/images/corner-dot-army-green.svg'), url('/images/corner-dot-army-green.svg'),
			url('/images/corner-dot-army-green.svg');
		background-position:
			5% 5%,
			95% 5%,
			95% 95%,
			5% 95%;
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		/* background-size: 1.5em, 1.5em, 1.5em, 1.5em; */
		border-radius: 1.5em;
		flex-flow: column;
		padding: 3em;
		transition: box-shadow 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		display: flex;
		position: relative;
	}

	.wrap_card-style-2:hover {
		box-shadow: 0em 0em 0em 0em var(--background--pink);
	}

	.wrap_card-style-2.active-shadow {
		z-index: auto;
		box-shadow: none;
		transition: box-shadow 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.wrap_card-content {
		width: 100%;
		height: 100%;
		line-height: 1;
	}

	@media screen and (min-width: 1440px) {
		.item_services-card {
			border-bottom-width: 0.14em;
		}
	}
	@media screen and (min-width: 1280px) {
		.wrap_card-style-2.active-shadow {
			background-size: 1.3em, 1.3em, 1.3em, 1.3em;
		}
	}

	@media screen and (max-width: 991px) {
		.txt_services-list-item.caps.service {
		letter-spacing: 0.1em;
		font-size: 1.8em;
	}

		.wrap_card-content.services,
		.wrap_card-style-2 {
			font-size: 1em;
		}
		.wrap_card-content {
			font-size: 1.3em;
		}
	}

	@media screen and (max-width: 767px) {
		.wrap_card-style-2 {
			border-radius: 2em;
		}
		.wrap_card-content {
			font-size: 2em;
		}
	}

	@media screen and (max-width: 479px) {
		.wrap_card-content {
			font-size: 3.3em;
		}
	}
</style>
