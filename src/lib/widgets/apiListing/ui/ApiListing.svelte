<script lang="ts">
	// import team from '../data/team';
	import { apiListingData } from '$widgets';
	import { RoundedBtnLink, ApiListing } from '$sharedUi';
</script>

<div class="list_projects w-dyn-items mx-auto max-w-4xl">
	<div role="listitem" class="wrap_project-card">
		<!-- <div class="wrap_project-image mobile-lanscape-center">
			<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
				Public API with data from various FNB groups. If you notice an error or have missing data, <a
					href="/#contact">contact us.</a
				>
			</p>
			<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
				We have also prepared contact details so that you can ask your questions.
			</p>
		</div> -->
		<div class="wrap_api-listing py-8">
			<div class="">
				<p class="h-api mx-auto mb-2 max-w-3xl">
					Public API with data from various FNB groups. If you notice an error or have missing data, <a
						href="/#contact">contact us.</a
					>
				</p>
			</div>
			<ApiListing {apiListingData} />
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
	.h-api {
		text-align: center;
		font-size: 2.5em;
		font-weight: 400;
		line-height: 1.2;
	}

	.wrap_api-listing {
		border-radius: 1em;
		width: 100em;
		/* max-width: 100%; */
		margin-left: 4em;
		margin-right: 4em;
		overflow: clip;
	}

	@media screen and (max-width: 991px) {
		.wrap_api-listing {
			/* max-width: 40em; */
			max-width: 100%;
		}
	}

	@media screen and (max-width: 767px) {
		.wrap_api-listing {
			width: auto;
		}
		.h-api {
			font-size: 5em;
		}
	}
</style>
