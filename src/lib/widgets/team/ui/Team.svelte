<script lang="ts">
	import team from '../data/team';
	// import {  } from '$widgets';
	import { TeamMemberCard } from '$entities';
</script>

<section class="section our-team">
	<div class="wrap_our-team">
		<!-- <h2 class="h_semi-bold our-team italic">Our Team</h2> -->

		<a name="team"></a>

		<div class="list_projects w-dyn-items max-w-6xl">
			<div role="listitem" class="wrap_project-card w-dyn-item">
				<div class="wrap_project-image mobile-lanscape-center">
					<a href="/" class="link_project-card auto-height w-inline-block">
						<h2 class="h2_project-name">Венгрия-Польша, и Пикачу.</h2>
					</a>
					<p class="txt_paragraph project-card-summary _0-em inline">
						Спасибо сообществу фнб ведущим публичную деятельность, если бы не вы - этот проект не
						получился бы
					</p>
					<a aria-label="Project link" href="/" class="link_project-card w-inline-block inline">
						<img src="/images/photos/dream_team/3.JPG" loading="lazy" alt="" />
					</a>
					<div class="wrap_project-category">
						<div class="collection_project-tags w-dyn-list">
							<div role="list" class="list_project-tags w-dyn-items">
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow w-condition-invisible">Creative Direction</div>
									<div class="txt_project-tag">Creative Direction</div>
								</div>
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow w-condition-invisible">Video</div>
									<div class="txt_project-tag">Video</div>
								</div>
								
							</div>
						</div>
					</div>
				</div>
				<div class="wrap_project-info">
					<a href="/" class="link_project-card w-inline-block">
						<img
							src="/images/photos/dream_team/3.JPG"
							style="object-fit: cover;"
							class="h-full w-full"
							loading="lazy"
							alt=""
						/>
					</a>
				</div>
				<div class="w-layout-vflex img_corner-dots">
					<img src="/images/corner-dot-army-green.svg" loading="lazy" alt="" class="img_dark-dot" />
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
				<div class="txt_brand-spotlight project-collection">Dream Team</div>
			</div>
		</div>

		<div class="w-layout-vflex wrap_slider-our-team">
			<!-- <div class="wrap_section-heading studio-page mx-auto mt-20">
				<h1 class="h_regular studio">
					Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
					poligraficznym.
				</h1>
			</div> -->

			<div class="slider-wrapper">
				<div
					role="list"
					class="mx-auto grid max-w-6xl grid-cols-1 gap-x-4 md:grid-cols-2 lg:grid-cols-3 px-6 gap-y-4"
				>
					{#each team as member}
						<TeamMemberCard {member} />
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
</style>
