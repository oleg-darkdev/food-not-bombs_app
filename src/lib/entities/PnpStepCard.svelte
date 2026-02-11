<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { pnpStep } = $props();

	// console.log(groupData);
</script>

<!-- 

recommendations
-->

<!-- id={pnpStep.id} -->
<div  class="meet-our-friends collection w-full max-w-3xl">
	<div class="wrap_meet-our-friends w-full">
		<div class="collection_projects w-full">
			<div role="list" class="list_projects w-dyn-items w-full">
				<div role="listitem" class="wrap_project-card w-dyn-item w-full">
					<div class="wrap-banner-img w-full">
						<div class="wrap_card-heading services flex flex-row items-center justify-center py-2">
							<h3 class="h_semi-bold pnp-steps mr-1 italic">
								{pnpStep.title}:
								<span class="ml-4">{pnpStep.time} min.</span>
							</h3>
							<!-- <img
								src="/images/groups/default_logo.png"
								class="h-4 w-4 lg:-mt-8 lg:h-16 lg:w-16"
								alt=""
							/> -->
						</div>

						<div class=" w-full">
							<div class="max-w-xl pl-4 pt-14 lg:pl-10">
								<div class="wrap_services-list">
									<ul role="list" class=" w-list-unstyled w-full">
										<li class="-mb-1 pt-4">
											<p class="h1_regular main-headline body-copy performance-page">
												For this type of component you will need the <span class="bold italic">
													following materials.
												</span>
											</p>
										</li>

										<div class="pl-6">
											{#each pnpStep.materials as materials}
												<li
													class=" flex flex-row items-center transition-transform duration-200 ease-in-out hover:scale-105"
												>
													<img src="/images/icons/yes.svg" class="mr-2 h-8 w-8" alt="" />
													<div class="item_services-card">
														<div class="txt_services-list-item caps service">
															<div class="flex max-w-sm">
																<span class="txt_services-list-item caps service">
																	{materials}</span
																>
															</div>
														</div>
													</div>
												</li>
											{/each}
										</div>
									</ul>
								</div>
								<div class="wrap_services-list">
									<ul role="list" class=" w-list-unstyled w-full">
										<li class="-mb-2 pt-4">
											<p class="h1_regular main-headline body-copy performance-page">
												All the necessary files for this stage are stored
												<span class="bold italic">
													in the folder: {pnpStep.print.directory}
												</span>
											</p>
											<p class="h1_regular main-headline body-copy performance-page">
												Print settings:
												<br />
												<span class="bold italic">
													copies: {pnpStep.print.copies}
												</span>
												<br />
												<span class="bold italic">
													paper density: {pnpStep.print.paperDensity}.
												</span>
											</p>

											<p class="h1_regular main-headline body-copy performance-page">
												Print the following files:
											</p>
										</li>
										<div class="pl-6">
											{#each pnpStep.print.files as file}
												<li
													class=" flex flex-row items-center transition-transform duration-200 ease-in-out hover:scale-105"
												>
													<img src="/images/icons/list_item.svg" class="mr-2 h-10 w-10" alt="" />
													<div class="item_services-card">
														<div class="txt_services-list-item caps service">
															<div class="flex max-w-sm">
																<span class="txt_services-list-item caps service"> {file}</span>
															</div>
														</div>
													</div>
												</li>
											{/each}
										</div>
									</ul>
								</div>
								<div class="wrap_services-list">
									<ul role="list" class=" w-list-unstyled w-full">
										<li class="-mb-1 pt-4">
											<p class="h1_regular main-headline body-copy performance-page">
												<span class="bold italic"> After printing </span>, please follow these
												steps:
											</p>
										</li>
										<div class="pl-6">
											{#each pnpStep.postProcessing as postProcessing}
												<li
													class=" flex flex-row items-center transition-transform duration-200 ease-in-out hover:scale-105"
												>
													<img src="/images/icons/list_item_star.svg" class="mr-2 h-8 w-8" alt="" />
													<div class="item_services-card">
														<div class="txt_services-list-item caps service">
															<div class="flex max-w-sm">
																<span class="txt_services-list-item caps service">
																	{postProcessing}</span
																>
															</div>
														</div>
													</div>
												</li>
											{/each}
										</div>
									</ul>
								</div>

								<div class="mb-6 px-6 py-6">
									<p class="h1_regular main-headline body-copy performance-page">
										Full <span class="bold italic">video instruction</span> for this step.
									</p>

									<div class="mx-auto max-w-6xl bg-black">
										<!-- pt-[41.8%] -->
										<div class="relative w-full">
											<iframe
												class="h-full w-full"
												width="100%"
												height=""
												title="{pnpStep.title} video guide"
												allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
												referrerpolicy="strict-origin-when-cross-origin"
												allowfullscreen
												src={pnpStep.video}
												frameborder="0"
											>
											</iframe>
										</div>
									</div>
								</div>
							</div>
						</div>
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
					<!-- <div class="txt_brand-spotlight project-collection">{country}</div> -->
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.h_semi-bold.italic.pnp-steps {
		text-align: center;
		margin-top: 0;
		margin-bottom: 0;
		padding-bottom: 0.5em;
	}

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
		/* max-height: auto; */
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

		.h_semi-bold.italic.pnp-steps {
			font-size: 4.5em;
		}
	}

	@media screen and (min-width: 991px) {
		.h_semi-bold.italic.pnp-steps {
			font-size: 2.5em;
		}
	}

	@media screen and (max-width: 767px) {
		.wrap-banner-img {
			width: auto;
			max-width: none;
			/* display: none; */
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

	.txt_services-list-item.caps {
		text-align: left;
	}

	.txt_services-list-item.caps.service {
		letter-spacing: 0.1em;
		font-size: 18px;
	}
	.item_services-card {
		border-bottom: 2px solid var(--borders--army-green);
		padding: 0.4em;
		list-style-type: none;
	}

	.list_services-card {
		font-size: var(--size--em);
		width: 100em;
		max-width: 19em;
		margin-bottom: 0;
		padding-left: 0;
	}
	.wrap_services-list {
		flex-flow: column;
		padding-top: 1.5em;
		padding-bottom: 1em;
		display: flex;
	}

	.wrap_card-style-2 {
		z-index: 30;
		border: 1px none var(--borders--army-green);
		background-color: var(--background--beige);
		box-shadow: 0.4em 0.4em 0em 0em var(--background--pink);
		background-image: url('/images/corner-dot-army-green.svg'),
			url('/images/corner-dot-army-green.svg'), url('/images/corner-dot-army-green.svg'),
			url('/images/corner-dot-army-green.svg');
		background-position:
			5% 5%,
			95% 5%,
			95% 95%,
			5% 95%;
		background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
		/* background-size: 1.5em, 1.5em, 1.5em, 1.5em; */
		border-radius: 1.5em;
		flex-flow: column;
		padding: 3em;
		transition: box-shadow 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
		display: flex;
		position: relative;
	}

	.wrap_card-style-2:hover {
		box-shadow: 0em 0em 0em 0em var(--background--pink);
	}

	.wrap_card-style-2.active-shadow {
		z-index: auto;
		box-shadow: none;
		transition: box-shadow 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}

	.wrap_card-content {
		width: 100%;
		height: 100%;
		line-height: 1;
	}

	@media screen and (min-width: 1440px) {
		.item_services-card {
			border-bottom-width: 0.14em;
		}
	}
	@media screen and (min-width: 1280px) {
		.wrap_card-style-2.active-shadow {
			background-size: 1.3em, 1.3em, 1.3em, 1.3em;
		}
	}

	@media screen and (max-width: 991px) {
		.wrap_card-content.services,
		.wrap_card-style-2 {
			font-size: 1em;
		}
		.wrap_card-content {
			font-size: 1.3em;
		}
		.h_semi-bold {
			font-size: 6em;
		}
	}

	@media screen and (max-width: 767px) {
		.wrap_card-style-2 {
			border-radius: 2em;
		}
		.wrap_card-content {
			font-size: 2em;
		}
	}

	@media screen and (max-width: 479px) {
		.wrap_card-content {
			font-size: 3.3em;
		}
	}
</style>
