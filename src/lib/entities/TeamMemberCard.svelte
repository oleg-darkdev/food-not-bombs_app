<script lang="ts">
	let { member } = $props();

	import { Tag } from '$sharedUi';
	// import {  } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { SocialRoundIconLink } from '$sharedUi';
</script>

<div role="listitem" class="slider-item w-dyn-item">
	<div class="wrap_squad-member wrap_card-style-1 about-page">
		<div class="wrap_card-content client-projects our-team about-page">
			<div class="w-layout-vflex wrap_card-heading clients new team-member">
				<h3 class="h_semi-bold name team-member italic">{member.fullName}</h3>
			</div>
			<div class="wrap_project-details">
				<div class="wrap_project-card-hero">
					<img src={member.photo} loading="eager" alt="" class="img_project-hero" />
				</div>
				{#if member.fullName != 'PIKACHU'}
					<div class="wrap_title txt_job-title">
						<div class="txt_job-title-line-one mb-2">{member.role}</div>
						<div class="txt_job-title-line-two">
							<!-- <a href={member.organisation.link} class="link_footer" target="_blank"
								>{member.organisation.title}</a
							> -->
							<div class="mx-auto mt-0 w-[180px]">
								<ul class="flex w-full flex-row flex-wrap justify-center">
									{#each member.socialLinks as social}
										<li class="item_social-link mx-auto">
											<SocialRoundIconLink icon={social.icon} alt={social.alt} link={social.link} />
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_project-tags centered w-dyn-items">
						{#each member.tags as tag}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<!-- <div class="cta_primary tag-style">{tag}</div> -->
								<Tag text={tag} bgColor="bg-pink" />
							</div>
						{/each}
					</div>
				</div>
			</div>
			{#if member.fullName != 'PIKACHU'}
				<div class="wrap_project-tags">
					<div class="collection_project-tags centered w-dyn-list">
						<div role="list" class="list_project-tags centered w-dyn-items">
							<div role="listitem" class="item_project-tags w-dyn-item">
								<Tag text={member.country} bgColor="bg-yellow" />
							</div>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style lang="postcss">
</style>
