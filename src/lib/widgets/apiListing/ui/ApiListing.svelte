<script lang="ts">
	// import team from '../data/team';
	// import {  } from '$widgets';
	import { RoundedBtnLink, ApiListing } from '$sharedUi';
	import { apiListing } from '$sharedData';

	import { TeamMemberCard } from '$entities';
</script>

<div class="list_projects w-dyn-items mx-auto max-w-4xl">
	<div role="listitem" class="wrap_project-card">
		<div class="wrap_project-image mobile-lanscape-center">
			<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
				Публичное api с данными различными групп fnb. Есди вы заметили ошибку или у вас есть
				отсутствующие данные, свяжитесь с нами ...
			</p>
			<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
				We have also prepared contact details so that you can ask your questions.
			</p>

			<a aria-label="Project link" href="/" class="link_project-card w-inline-block inline">
				<img src="/images/lines.jpg" loading="lazy" alt="" />
			</a>
			<div class="wrap_project-category">
				<div class="collection_project-tags w-dyn-list">
					<!-- <div role="list" class="list_project-tags w-dyn-items">
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow w-condition-invisible">Creative Direction</div>
									<div class="txt_project-tag">Creative Direction</div>
								</div>
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow w-condition-invisible">Video</div>
									<div class="txt_project-tag">Video</div>
								</div>
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow w-condition-invisible">Stop motion</div>
									<div class="txt_project-tag">Stop motion</div>
								</div>
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow w-condition-invisible">Photography</div>
									<div class="txt_project-tag">Photography</div>
								</div>
								<div role="listitem" class="item_project-tags w-dyn-item">
									<div class="txt_project-tag yellow">Product Launch</div>
									<div class="txt_project-tag w-condition-invisible">Product Launch</div>
								</div>
							</div> -->
				</div>
			</div>
		</div>
		<div class="wrap_project-info">
			<ApiListing {apiListing} />
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
		<div class="txt_brand-spotlight project-collection">BRAND SPOTLIGHT</div>
	</div>
</div>

<style lang="postcss">
</style>
