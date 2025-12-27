<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const items = ['', '', '', ''];
</script>

<section class="section meet-our-friends">
	<div class="wrap_section-heading biege">
		<h2 class="h_semi-bold section-heading">Lorem Ipsum jest</h2>
	</div>
</section>
<section class="section past-clients biege match-made-in-ad-heaven">
	<div class="w-layout-vflex wrap_section-heading studio-page match-made-in-ad-heaven"></div>
	<div class="collection_past-clients w-dyn-list">
		<!-- list_past-clients w-dyn-items -->
		<div role="list" class=" flex flex-row flex-wrap justify-center">
			{#each items as item}
				<div role="listitem" class="item_past-clients max-width w-dyn-item mx-2 my-6">
					<div class="w-layout-vflex wrap_card-element-1 past-clients no-max-w">
						<div class="wrap_card-style-1 past-clients">
							<div class="wrap_card-content client-projects more-max-width">
								<div class="w-layout-vflex wrap_card-heading clients">
									<a aria-label="" href="/" class="link_project-card auto-height w-inline-block">
										<h3 class="h_semi-bold name regular italic">Lorem Ipsum</h3>
									</a>
								</div>
								<div class="wrap_project-details">
									<div class="wrap_project-card-hero">
										<a href="/" class="link_project-card w-inline-block">
											<img
												src="/images/671567bf876d15f5abd337b0_Lifelines%20%2826%29.jpg"
												loading="lazy"
												alt=""
												sizes="(max-width: 479px) 64vw, (max-width: 767px) 735.671875px, (max-width: 991px) 434.71875px, 304px"
												class="img_project-hero"
											/>
										</a>
									</div>
									<div class="wrap_project-tags">
										<div class="collection_project-tags centered w-dyn-list">
											<div role="list" class="list_project-tags centered w-dyn-items">
												<div role="listitem" class="item_project-tags w-dyn-item">
													<div class="cta_primary tag-style yellow w-condition-invisible">
														Creative Direction
													</div>
													<div class="cta_primary tag-style">Creative Direction</div>
												</div>
												<div role="listitem" class="item_project-tags w-dyn-item">
													<div class="cta_primary tag-style yellow w-condition-invisible">
														Video
													</div>
													<div class="cta_primary tag-style">Video</div>
												</div>
												<div role="listitem" class="item_project-tags w-dyn-item">
													<div class="cta_primary tag-style yellow w-condition-invisible">
														Stop motion
													</div>
													<div class="cta_primary tag-style">Stop motion</div>
												</div>
												<div role="listitem" class="item_project-tags w-dyn-item">
													<div class="cta_primary tag-style yellow w-condition-invisible">
														Photography
													</div>
													<div class="cta_primary tag-style">Photography</div>
												</div>
												<div role="listitem" class="item_project-tags w-dyn-item">
													<div class="cta_primary tag-style yellow">Product Launch</div>
													<div class="cta_primary tag-style w-condition-invisible">
														Product Launch
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="wrap_card-tags">
							<div class="txt_tag-name">Title lorem</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="wrap_past-clients-cta">
		<a href="/contact" class="cta_secondary meet-our-friends w-inline-block">
			<div class="txt_cta-name">Contact us</div>
		</a>
	</div>
</section>

<style lang="postcss">
</style>
