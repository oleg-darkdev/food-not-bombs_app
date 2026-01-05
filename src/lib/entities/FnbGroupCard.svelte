<script lang="ts">
	import { getSocialHandle } from '$sharedUtils';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { group } = $props();

	// console.log(group);
</script>

<div role="listitem" class="slider-item w-dyn-item">
	<div class="wrap_squad-member wrap_card-style-1 about-page">
		<div class="wrap_card-content client-projects our-team about-page">
			<a href="./groups/{group.id}" class="" target="_blank">
				<!-- group-name -->
				<div class="w-layout-vflex wrap_card-heading h-auto px-4">
					<h3 class="h_semi-bold group-name group mb-20 h-full italic">{group.name}</h3>
				</div>
				<div class="wrap_project-details">
					<div class="wrap_project-card-hero">
						<img
							src={group.logo ? group.logo : '/images/groups/default_logo.png'}
							loading="eager"
							alt=""
							class="img_project-hero"
						/>
					</div>
					<div class="wrap_title txt_job-title">
						<div class="txt_job-title-line-one mb-2">{group.country}, {group.city}</div>
						<!-- <div class="txt_job-title-line-two">
								<a href={group.organisation.link} class="link_footer" target="_blank"
							>{group.organisation.title}</a
						>
							</div> -->
					</div>
				</div>
			</a>

			<div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_project-tags centered w-dyn-items">
						{#if group.facebook}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.facebook} target="_blank" class="cta_primary yellow tag-style">
									<div class="truncate-30 flex flex-row">
										<span class="mr-1">FB:</span>
										{getSocialHandle(group.facebook, 'facebook.com')}
									</div></a
								>
							</div>
						{/if}

						{#if group.inst}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.inst} target="_blank" class="cta_primary tag-style">
									<div class="truncate-30 flex flex-row">
										<span class="mr-1">IG:</span>
										{getSocialHandle(group.inst, 'instagram.com')}
									</div></a
								>
							</div>
						{/if}

						{#if group.website}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.website} target="_blank" class="cta_primary yellow tag-style"
									>website</a
								>
							</div>
						{/if}

						{#if group.email}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={`mailto:${group.email}`} target="_blank" class="cta_primary tag-style"
									>{group.email}</a
								>
							</div>
						{/if}

						{#if group.twitter}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.twitter} target="_blank" class="cta_primary tag-style">
									<div class="truncate-30 flex flex-row">
										<span class="mr-1">X:</span>
										{getSocialHandle(group.twitter, 'twitter.com')}
									</div>
								</a>
							</div>
						{/if}

						{#if group.contactPhone}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={`tel:${group.contactPhone}`} class="cta_primary yellow tag-style">
									{group.contactPhone ? group.contactPhone : group.contactName}
								</a>
							</div>
						{/if}
					</div>
				</div>
			</div>
			<div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_project-tags centered w-dyn-items">
						<div role="listitem" class="item_project-tags w-dyn-item">
							<div class="cta_primary tag-style yellow">{group.country}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.h_semi-bold.italic.group {
		text-align: center;
		/* text-transform: uppercase; */
		/* max-height: 1.9em; */
		margin-top: 0;
		margin-bottom: 0;
		font-size: 2.1em;
		line-height: 0.9;
		overflow: hidden;
	}

	.group-name {
		/* max-height: 6.5em; */
	}
	.h_semi-bold.italic.name.group-name {
		max-width: 7em;
		margin-left: auto;
		margin-right: auto;
		font-style: normal;
		font-weight: 400;
	}

	@media screen and (max-width: 767px) {
		.h_semi-bold.italic.name.group-name {
			max-width: 7em;
			margin-left: auto;
			margin-right: auto;
			font-style: normal;
			font-weight: 400;
		}
	}
</style>
