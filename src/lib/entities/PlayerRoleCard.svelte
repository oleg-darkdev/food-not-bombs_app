<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { role } = $props();

	// import { Tag } from '$sharedUi';
</script>

<div role="listitem" class="slider-item w-dyn-item">
	<div class="wrap_squad-member wrap_card-style-1 about-page">
		<div class="wrap_card-content client-projects our-team about-page">
			<div class="w-layout-vflex wrap_card-heading clients new team-member">
				<!-- {role.title} -->
				<h3 class="h_semi-bold name team-member italic">x{role.quantity}</h3>
				<!--  <span class='text-sm'></span> -->
			</div>
			<div class="wrap_project-details">
				<div class="player-role-card">
					<img src={role.img} loading="eager" alt="" class="img_project-hero" />
				</div>
				<!-- <div class="wrap_title txt_job-title"> -->
					<!-- <div class="txt_job-title-line-one mb-2">x{role.quantity}</div> -->
					<!-- <div class="txt_job-title-line-two">
							<a href={member.organisation.link} class="link_footer" target="_blank"
								>{member.organisation.title}</a
							>
						</div> -->
				<!-- </div> -->
			</div>

			<!-- <div class="wrap_project-tags">
				<div class="collection_project-tags centered w-dyn-list">
					<div role="list" class="list_project-tags centered w-dyn-items">
						{#each member.tags as tag}
							<div role="listitem" class="item_project-tags w-dyn-item">
								<div class="cta_primary tag-style">{tag}</div>
								<Tag text={tag} bgColor="bg-pink" />
							</div>
						{/each}
					</div>
				</div>
			</div> -->
			<!-- {#if member.fullName != 'PIKACHU'}
				<div class="wrap_project-tags">
					<div class="collection_project-tags centered w-dyn-list">
						<div role="list" class="list_project-tags centered w-dyn-items">
							<div role="listitem" class="item_project-tags w-dyn-item">
								<Tag text={member.country} bgColor="bg-yellow" />
							</div>
						</div>
					</div>
				</div>
			{/if} -->
		</div>
	</div>
</div>

<style lang="postcss">
	.player-role-card {
		/* aspect-ratio: 1; */
		/* background-color: var(--background--yellow); */
		/* background-image: url('/images/hand.svg'); */
		background-position: 50%;
		background-repeat: no-repeat;
		background-size: 140px;
		border-radius: 1em;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		max-width: 19em;
		display: flex;
		overflow: hidden;
	}
</style>
