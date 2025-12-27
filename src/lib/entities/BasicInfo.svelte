<script lang="ts">
	// import {  } from '$shared';
	import { getSocialHandle } from '$sharedUtils';

	// import {  } from '$widgets';
	// import {  } from '$entities'

	let {
		logo,
		since,
		facebook,
		inst,
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
		notes
	} = $props();
</script>

<section class="section faq recent-case-study mt-20">
	<div class="wrap_faq-heading">
		<h2 class="h_semi-bold section-heading small faq">Info</h2>
	</div>
	<div class="grid_recent-case-study">
		<div class="item_recent-case-study cream">
			<div id="case-study" class="wrap_recent-case-study texts">
				<h2 class="h_semi-bold section-heading recent-case-study">
					Lorem Ipsum <br />jest tekstem
				</h2>
				<div class="wrap_client-info mb-2">
					{#if sharingAddress}
						<div class="w-layout-vflex warp_client-name">
							<div class="txt_case-study-brand-name">Sharing address:</div>
							<div class="txt_case-study-brand-name">{sharingAddress}</div>
						</div>
					{/if}
					{#if sharingInfo}
						<div class="w-layout-vflex warp_client-name">
							<div class="txt_case-study-brand-industry">sharing Info:</div>
							<div class="txt_case-study-brand-industry">{sharingInfo}</div>
						</div>
					{/if}
				</div>

				<div class="wrap_client-info">
					{#if cookingAddress}
						<div class="w-layout-vflex warp_client-name">
							<div class="txt_case-study-brand-name">Kitchen address:</div>
							<div class="txt_case-study-brand-name">{cookingAddress}</div>
						</div>
					{/if}
					{#if cookingInfo}
						<div class="w-layout-vflex warp_client-name">
							<div class="txt_case-study-brand-industry">Kitchen Info:</div>
							<div class="txt_case-study-brand-industry">{cookingInfo}</div>
						</div>
					{/if}
				</div>
				<p class="txt_paragraph sans-serif">
					<strong>
						{notes}
					</strong>
				</p>
				<div class="wrap_project-category">
					<div class="collection_project-tags w-dyn-list">
						<div role="list" class="list_project-tags w-dyn-items">
							{#if facebook}
								<div role="listitem" class="item_project-tags w-dyn-item">
									<a href={facebook} target="_blank" class="yellow txt_project-tag">
										<div class="truncate-30 flex flex-row">
											<span class="mr-1">FB:</span>
											{getSocialHandle(facebook, 'facebook.com')}
										</div>
									</a>
								</div>
							{/if}

							{#if inst}
								<div role="listitem" class="item_project-tags w-dyn-item">
									<a href={inst} target="_blank" class="txt_project-tag">
										<div class="truncate-30 flex flex-row">
											<span class="mr-1">IG:</span>
											{getSocialHandle(inst, 'instagram.com')}
										</div>
									</a>
								</div>
							{/if}

							{#if website}
								<div role="listitem" class="item_project-tags w-dyn-item">
									<a href={website} target="_blank" class=" txt_project-tag">{website}</a>
								</div>
							{/if}

							{#if email}
								<div role="listitem" class="item_project-tags w-dyn-item">
									<a href={`mailto:${email}`} target="_blank" class="  txt_project-tag">{email}</a>
								</div>
							{/if}

							{#if twitter}
								<div role="listitem" class="item_project-tags w-dyn-item">
									<a href={twitter} target="_blank" class="txt_project-tag">
										<div class="truncate-30 flex flex-row">
											<span class="mr-1">X:</span>
											{getSocialHandle(twitter, 'twitter.com')}
										</div>
									</a>
								</div>
							{/if}

							{#if contactPhone}
								<div role="listitem" class="item_project-tags w-dyn-item">
									<a href={`tel:${contactPhone}`} class="yellow txt_project-tag">
										{contactPhone ? contactPhone : contactName}
									</a>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="item_recent-case-study green">
			<div class="wrap_recent-case-study">
				<div class="w-layout-vflex wrap_card-element-1 past-clients no-max-w">
					<div class="wrap_card-style-1 past-clients">
						<div class="wrap_card-content client-projects more-max-width">
							<div class="w-layout-vflex wrap_card-heading clients organic-page-min-height">
								<h3 class="h_semi-bold name regular italic">{city}</h3>
							</div>
							<div class="wrap_project-details">
								<div class="wrap_project-card-hero">
									<a href="/" class="link_project-card w-inline-block">
										<!-- images/669fc854dd10d0a0ff0cf0cb_Superjelly.jpg -->
										<img
											src={logo ? logo : '/images/groups/default_logo.png'}
											loading="lazy"
											alt=""
											class="img_project-hero"
										/>
									</a>
								</div>
								<div class="wrap_project-tags">
									<!-- <div class="cta_primary tag-style">Lorem Ipsum</div>
									<div class="cta_primary tag-style yellow">Lorem Ipsum</div> -->

									<div role="list" class="list_project-tags centered w-dyn-items">
										{since ? `- ${since} - 2026` : ''}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="wrap_card-tags">
					<div class="txt_tag-name more-height">{country}</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="collection_featured-case-study hide w-dyn-list">
		<div class="w-dyn-empty">
			<div>No items found.</div>
		</div>
	</div> -->
</section>

<style lang="postcss">
</style>
