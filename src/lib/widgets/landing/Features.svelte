<script lang="ts">
	import { RoundedBtnLink } from '$sharedUi';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const tags = [
		'Солидарность',
		'Активизм',
		'Разумное потребление',
		'Эко-стабильность',
		'Open-source',
		'',
		''
	];

	const fnbStages = [
		`Organizing your Food Not Bombs group`,
		`Build strategy and consensus`,
		`Collecting resources`,
		`Menu planning`,
		`Cooking`,
		`Distributing to those in need`
	];

	let { groups, api, stats } = $props();
</script>

<a name="about"></a>

<section class="section services">
	<div class="wrap_performance-serivces">
		<h2 class="h_semi-bold heading-features text-beige small">
			About
			<br />
			boardgame
			<br />

			<span class="text-army-green h_regular sub-heading-features italic"> Soup4All</span>
		</h2>
		<div class="grid_service-showcase performance">
			<div class="wrap_featured-work-texts">
				<p class="txt_paragraph sans-serif performance-service">
					Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
					poligraficznym. Показать все этапы активности фнб
				</p>
				<p class="txt_paragraph sans-serif performance-service">
					An open source project, distributed under licenses <a
						href="“https://creativecommons.org/licenses/by-nc-sa/4.0/”"
						target="_blank">CC BY-NC-SA 4.0</a
					>
				</p>
				<!-- <ul class="h_regular  flex flex-col items-start justify-start pb-2">
					{#each fnbStages as stage, i}
						<li class='mb-4'>
							<em class="italic-text">
								<span class="change-this-class"> <span class="">{i + 1}</span> {stage}</span>
							</em>
						</li>
					{/each}
					<li>
						<p class="txt_paragraph sans-serif performance-service">
							An open source project, distributed under licenses <a
								href="“https://creativecommons.org/licenses/by-nc-sa/4.0/”"
								target="_blank">CC BY-NC-SA 4.0</a
							>
						</p>
					</li>
				</ul> -->
			</div>

			<div class="mb-6">
				<div class="wrap_featured-work-hero">
					<div class="grid_featured-work-hero">
						<div
							id="w-node-_091448a0-0a1d-f996-854b-efec066e6fce-ff0cf01d"
							class="wrap_featured-image mb-2"
						>
							<img
								src="/images/3_stage.jpg"
								loading="eager"
								width="213"
								alt="Image 1 "
								class="img_featured-service"
							/>
						</div>
						<div
							id="w-node-_1c7bdb57-c74a-5ae4-a116-7343a02858ae-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img
								src="/images/1_stage.jpg"
								loading="eager"
								alt="Image 2 "
								class="img_performance-hero-tall"
							/>
						</div>
						<div
							id="w-node-b24406bf-994d-3729-5a34-206d25df844d-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img
								src="/images/2_stage.jpg"
								loading="eager"
								alt="Image 3 "
								class="img_performance-hero-tall"
							/>
						</div>
						<div
							id="w-node-_822cc2d8-252c-97aa-f4a1-6e54ab8f97f6-ff0cf01d"
							class="wrap_featured-image"
						>
							<img src="" loading="eager" width="213" alt="" class="img_featured-service" />
						</div>
						<div class="txt_video-tags performance-3">3. Collecting resources</div>
						<div class="txt_video-tags performance-2">2. Build strategy <br /> and consensus</div>
						<div class="txt_video-tags performance-1">
							1. Organizing your <br /> Food Not Bombs group
						</div>
					</div>
				</div>
				<div class="wrap_featured-work-hero">
					<div class="grid_featured-work-hero">
						<div
							id="w-node-_091448a0-0a1d-f996-854b-efec066e6fce-ff0cf01d"
							class="wrap_featured-image"
						>
							<img
								src="/images/6_stage.jpg"
								loading="eager"
								width="213"
								alt="Image 5 "
								class="img_featured-service"
							/>
						</div>
						<div
							id="w-node-_1c7bdb57-c74a-5ae4-a116-7343a02858ae-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img
								src="/images/4_stage.jpg"
								loading="eager"
								alt="Image 6 "
								class="img_performance-hero-tall"
							/>
						</div>
						<div
							id="w-node-b24406bf-994d-3729-5a34-206d25df844d-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img
								src="/images/5_stage.jpg"
								loading="eager"
								alt="Image 7 "
								class="img_performance-hero-tall"
							/>
						</div>
						<div
							id="w-node-_822cc2d8-252c-97aa-f4a1-6e54ab8f97f6-ff0cf01d"
							class="wrap_featured-image"
						>
							<img src="" loading="eager" width="213" alt="" class="img_featured-service" />
						</div>
						<div class="txt_video-tags performance-3">6. Distributing <br /> to those in need</div>
						<div class="txt_video-tags performance-2">5. Cooking</div>
						<div class="txt_video-tags performance-1">4. Menu planning</div>
					</div>
				</div>
			</div>
		</div>

		<div class="" id="api">
			{@render api()}
		</div>

		<div class="mx-auto my-10 flex flex-col justify-center">
			{@render stats()}

			{@render groups()}
		</div>

		<RoundedBtnLink title="Complete list of FNB collectives" link="/groups" blank={true} />
	</div>
	<div class="img_pink-service-band left">
		<div class="txt_service-pink-band">About</div>
	</div>
	<div class="img_pink-service-band right">
		<div class="txt_service-pink-band right">About</div>
	</div>
</section>

<style lang="postcss">
	.heading-features {
		text-align: center;
		font-size: 5em;
	}

	@media screen and (max-width: 767px) {
		.heading-features {
			font-size: 5em;
		}
	}

	@media screen and (max-width: 479px) {
		.h_regular.sub-heading-features {
			font-size: 3em;
		}
	}

	/* 
.wrap_heading-features {
		font-size: 1.4em;
	} */
</style>
