<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { member } = $props();
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
							<a href={member.organisation.link} class="link_footer" target="_blank"
								>{member.organisation.title}</a
							>
						</div>
					</div>
				{/if}
			</div>

			<div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_project-tags centered w-dyn-items">
						{#each member.tags as tag}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<div class="cta_primary tag-style">{tag}</div>
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
								<div class="cta_primary tag-style yellow">{member.country}</div>
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
