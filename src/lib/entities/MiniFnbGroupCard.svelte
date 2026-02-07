<script lang="ts">
	import { getSocialHandle } from '$sharedUtils';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { group } = $props();

	// console.log(group);
</script>

<div role="listitem" id={group.id} class=" w-dyn-item z-1">
	<div class="wrap_squad-member wrap_card-style-1 about-page">
		<div class="wrap_card-content client-projects our-team about-page">
			<div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_mini-fnb-card-tags centered w-dyn-items">
						<div role="listitem" class="item_project-tags w-dyn-item">
							<div class="cta_primary tag-style yellow">{group.country}</div>
						</div>
					</div>
				</div>
			</div>

			<a href="./groups/{group.id}" class="" target="_blank">
				<div class="w-layout-vflex wrap_card-heading h-auto px-4">
					<h3 class="h_semi-bold group-name group mx-auto mb-20 h-full px-4 italic">
						{group.city}
					</h3>
				</div>
				<div class="wrap_project-details">
					<!-- wrap_project-card-hero -->
					<div class="">
						<img
							src={group.logo ? group.logo : '/images/groups/default_logo.png'}
							loading="eager"
							alt=""
							class="h-24 w-24 rounded-full object-cover"
						/>
					</div>
				</div>
			</a>

			<div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_mini-fnb-card-tags centered w-dyn-items">
						{#if group.facebook}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.facebook} target="_blank" class="cta_primary yellow tag-style">
									<div class="truncate-15 flex flex-row">
										<span class="mr-1">FB:</span>
										{getSocialHandle(group.facebook, 'facebook.com')}
									</div></a
								>
							</div>
						{/if}

						{#if group.inst}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.inst} target="_blank" class="cta_primary tag-style">
									<div class="truncate-15 flex flex-row">
										<span class="mr-1">IG:</span>
										{getSocialHandle(group.inst, 'instagram.com')}
									</div></a
								>
							</div>
						{/if}

						{#if group.website}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.website} target="_blank" class=" cta_primary yellow tag-style"
									>website</a
								>
							</div>
						{/if}

						{#if group.email}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={`mailto:${group.email}`} target="_blank" class=" cta_primary tag-style"
									>email</a
								>
							</div>
						{/if}

						{#if group.twitter}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<a href={group.twitter} target="_blank" class="cta_primary tag-style">
									<div class="truncate-15 flex flex-row">
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
		</div>
	</div>
</div>

<style lang="postcss">
	.cta_primary.tag-style {
		border-style: solid;
		border-width: 2px;
		padding: 0.5em 0.7em 0.4em;
		font-size: 0.8em;
	}

	.cta_primary.tag-style.yellow {
		background-color: var(--background--yellow);
	}

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

	.list_mini-fnb-card-tags {
		grid-column-gap: 0.6em;
		grid-row-gap: 0.6em;
		flex-flow: wrap;
		display: flex;
		flex-direction: column;
	}

	.list_mini-fnb-card-tags.centered {
		grid-column-gap: 0.3em;
		grid-row-gap: 0.3em;
		justify-content: center;
		align-items: center;
	}

	.list_mini-fnb-card-tags.centered.project-page {
		grid-column-gap: 0.4em;
		grid-row-gap: 0.4em;
	}

	@media screen and (max-width: 767px) {
		.list_mini-fnb-card-tags {
			justify-content: center;
			align-items: center;
		}

		.h_semi-bold.italic.group {
			text-align: center;

			margin-top: 0;
			margin-bottom: 0;
			font-size: 1.7em;
			line-height: 1.4;
			overflow: hidden;
		}

		.list_mini-fnb-card-tags.centered.project-page {
			grid-column-gap: 0.7em;
			grid-row-gap: 0.7em;
		}
	}

	@media screen and (max-width: 479px) {
		.list_mini-fnb-card-tags.centered.project-page {
			grid-column-gap: 1.2em;
			grid-row-gap: 1.2em;
		}
	}
</style>
