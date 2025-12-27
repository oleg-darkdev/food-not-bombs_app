<script lang="ts">
	import { apiListing } from '$sharedData';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	const tags = ['Солидарность', 'Активизм', 'Разумное потребление', 'Эко-стабильность', 'Open-source', '', ''];
	
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
					poligraficznym.
				</p>

				<p class="txt_paragraph sans-serif performance-service">
					Проект с открытым исходным кодом, распространяется по лицензиями <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target='_blank'>CC BY-NC-SA 4.0</a>
				</p>

				<p class="txt_paragraph sans-serif performance-service">
					Публичное api с данными различными групп fnb. Есди вы заметили ошибку или у вас есть отсутствующие данные, свяжитесь с нами ...
				</p>
				<ul role="list" class="list_studio-featured-work w-list-unstyled">
					{#each apiListing as api}
						<li class="item_studio-featured-work">
							<div class="txt_studio-featured-work">{api.title}: <a href='{api.api.route}' class='ml-4 truncate-6' target="_blank">{api.api.route}</a></div>
						</li>
					{/each}
					<!-- <li class="item_studio-featured-work">
						<div class="txt_studio-featured-work">
							<strong>Retail Buzz</strong>
						</div>
					</li> -->
				</ul>
			</div>
			<!-- 				id="w-node-f3a09ed2-07d5-258e-c19b-6095dc9a38e5-ff0cf01d"
 -->
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
							alt="A holistic way to a healthier you."
							class="img_featured-service"
						/>
					</div>
					<div
						id="w-node-_1c7bdb57-c74a-5ae4-a116-7343a02858ae-ff0cf01d"
						class="item_video-wrap slider-item no-stroke service-hero"
					>
						<img src="" loading="eager" alt="" class="img_performance-hero-tall" />
					</div>
					<div
						id="w-node-b24406bf-994d-3729-5a34-206d25df844d-ff0cf01d"
						class="item_video-wrap slider-item no-stroke service-hero"
					>
						<img src="" loading="eager" alt="" class="img_performance-hero-tall" />
					</div>
					<div
						id="w-node-_822cc2d8-252c-97aa-f4a1-6e54ab8f97f6-ff0cf01d"
						class="wrap_featured-image"
					>
						<img
							src=""
							loading="eager"
							width="213"
							alt="I threw away my chalky protiens"
							class="img_featured-service"
						/>
					</div>
					<div class="txt_video-tags performance-3 slide-scroll-animation">#hasttag-1</div>
					<div class="txt_video-tags performance-2 slide-scroll-animation">#hasttag-2</div>
					<div class="txt_video-tags performance-1 slide-scroll-animation">#hasttag-3</div>
				</div>
			</div>
		</div>
		<div class="w-layout-vflex wrap_performance-serivces-cta">
			<a href="#contact" class="cta_primary studio-page view-more w-inline-block">
				<div class="txt_cta-name underline">Let's talk</div>
			</a>
		</div>
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
