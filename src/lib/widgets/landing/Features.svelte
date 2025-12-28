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

	let { groups, api } = $props();
</script>

<a name="about"></a>

<section class="section services">
	<div class="wrap_performance-serivces">
		<h2 class="h_semi-bold section-heading beige small">
			Об игре
			<br />Food Not
			<span class="italic">Bombs.</span>
		</h2>
		<div class="grid_service-showcase performance">
			<div class="wrap_featured-work-texts">
				<p class="txt_paragraph sans-serif performance-service">
					Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle
					poligraficznym. Показать все этапы активности фнб
				</p>

				<ul class="h_regular section-paragraph flex flex-col pb-2">
					<li>
						<em class="italic-text">
							<span class="change-this-class"> 1. Organizing your Food Not Bombs group </span>
						</em>
					</li>
					<li>
						<em class="italic-text">
							<span class="change-this-class"> 2. Build strategy and consensus </span>
						</em>
					</li>
					<li>
						<em class="italic-text">
							<span class="change-this-class"> 3. Collecting resources </span>
						</em>
					</li>
					<li>
						<em class="italic-text">
							<span class="change-this-class"> 4. Transportation </span>
						</em>
					</li>
					<li>
						<em class="italic-text">
							<span class="change-this-class"> 5. Menu planning </span>
						</em>
					</li>
					<li>
						<em class="italic-text">
							<span class="change-this-class"> 6. Distributing to those in need </span>
						</em>
					</li>

					<p class="txt_paragraph sans-serif performance-service">
						Проект с открытым исходным кодом, распространяется по лицензиями <a
							href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
							target="_blank">CC BY-NC-SA 4.0</a
						>
					</p>
				</ul>
			</div>

			<div class="">
				<div class="wrap_featured-work-hero">
					<div class="grid_featured-work-hero">
						<div
							id="w-node-_091448a0-0a1d-f996-854b-efec066e6fce-ff0cf01d"
							class="wrap_featured-image"
						>
							<img
								src=""
								loading="eager"
								width="213"
								alt="Image 1 sign"
								class="img_featured-service"
							/>
						</div>
						<div
							id="w-node-_1c7bdb57-c74a-5ae4-a116-7343a02858ae-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img src="" loading="eager" alt="Image 2 sign" class="img_performance-hero-tall" />
						</div>
						<div
							id="w-node-b24406bf-994d-3729-5a34-206d25df844d-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img src="" loading="eager" alt="Image 3 sign" class="img_performance-hero-tall" />
						</div>
						<div
							id="w-node-_822cc2d8-252c-97aa-f4a1-6e54ab8f97f6-ff0cf01d"
							class="wrap_featured-image"
						>
							<img
								src=""
								loading="eager"
								width="213"
								alt="Image 4 sign"
								class="img_featured-service"
							/>
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
								src=""
								loading="eager"
								width="213"
								alt="Image 5 sign"
								class="img_featured-service"
							/>
						</div>
						<div
							id="w-node-_1c7bdb57-c74a-5ae4-a116-7343a02858ae-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img src="" loading="eager" alt="Image 6 sign" class="img_performance-hero-tall" />
						</div>
						<div
							id="w-node-b24406bf-994d-3729-5a34-206d25df844d-ff0cf01d"
							class="item_video-wrap slider-item no-stroke service-hero"
						>
							<img src="" loading="eager" alt="Image 7 sign" class="img_performance-hero-tall" />
						</div>
						<div
							id="w-node-_822cc2d8-252c-97aa-f4a1-6e54ab8f97f6-ff0cf01d"
							class="wrap_featured-image"
						>
							<img
								src=""
								loading="eager"
								width="213"
								alt="Image 8 sign"
								class="img_featured-service"
							/>
						</div>
						<div class="txt_video-tags performance-3">6. Distributing <br /> to those in need</div>
						<div class="txt_video-tags performance-2">5. Menu planning</div>
						<div class="txt_video-tags performance-1">4. Transportation</div>
					</div>
				</div>
			</div>
		</div>

		{@render api()}

		<div class="mx-auto my-10 flex flex-col justify-center">
			<div class="wrap__project-page-explore-heading flex flex-col pb-4">
				<h2 class="h1_semibold project-page-explore pb-2 text-center">
					A very large <br /> list of collectives <br />
					<span class="">Food Not Bombs.</span>
				</h2>

				<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
					We have gathered information for you, about
					<span class="text-span-3"> 400+ local Food Not Bombs collectives </span>
					from more than <span class="text-span-3">40+ countries.</span>
				</p>

				<ul class="h_regular section-paragraph flex flex-col pb-2">
					<li>
						Europe - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Africa - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Asia - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Canada - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Latin America - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Mexico - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Russia - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						U.S.A. - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
					<li>
						Europe - <em class="italic-text">
							<span class="change-this-class">... collectives.</span>
						</em>
					</li>
				</ul>
				<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
					We have also prepared contact details so that you can ask your questions.
				</p>
			</div>

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
</style>
