<script lang="ts">
	// import {} from '$sharedData';
	// import {} from '$sharedUi';
	// import {} from '$widgetsLanding';

	let { banner, country } = $props();
</script>

<section class="section meet-our-friends collection">
	<div class="wrap_meet-our-friends">
		<div class="collection_projects">
			<div role="list" class="list_projects w-dyn-items">
				<div role="listitem" class="wrap_project-card w-dyn-item">
					<div class="wrap-banner mobile-lanscape-center"></div>
					<div class="wrap-banner-img mx-auto">
						<img
							src={banner ? banner : '/images/groups/default_banner_1.jpg'}
							loading="lazy"
							alt=""
						/>
					</div>
					<div class="w-layout-vflex img_corner-dots">
						<img
							src="/images/corner-dot-army-green.svg"
							loading="lazy"
							alt=""
							class="img_dark-dot"
						/>
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
					<div class="txt_brand-spotlight project-collection">{country}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.wrap-banner {
		/* grid-column-gap: 2em;
		grid-row-gap: 2em;
		flex-flow: column; */
		justify-content: center;
		align-items: center;
		max-width: 50%;
		/* padding-left: 2em;
		padding-right: 1em; */
		display: flex;
	}

	.wrap-banner-img {
		border-radius: 1em;
		max-width: 70em;
		/* max-width: 50%; */
		max-height: 500px;
		/* margin-left: 4em;
		margin-right: 4em; */
		overflow: clip;
	}
	@media screen and (max-width: 991px) {
		.wrap-banner-img {
			/* max-width: 40em; */
		}
		.wrap-banner {
			/* padding-left: 1em; */
			padding-right: 0;
		}
	}

	@media screen and (max-width: 767px) {
		.wrap-banner-img {
			width: auto;
			max-width: none;
			display: none;
		}

		.wrap-banner {
			/* grid-column-gap: 0em;
			grid-row-gap: 0em; */
			max-width: none;
			padding-left: 5em;
			padding-right: 5em;
		}

		.wrap-banner.mobile-lanscape-center {
			justify-content: center;
			align-items: center;
		}
	}

	@media screen and (max-width: 479px) {
		.wrap-banner.mobile-lanscape-center {
			padding-left: 9.7em;
			padding-right: 9.7em;
		}
	}
</style>
