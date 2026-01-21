<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	let { player } = $props();

	import { Tag } from '$sharedUi';

	console.log(player);
</script>

<div class="wrap_our-team">
	<!-- <h2 class="h_semi-bold our-team italic">Our Team</h2> -->

	<div id="team" class="list_projects w-dyn-items max-w-6xl">
		<div role="listitem" class="wrap_project-card w-dyn-item">
			<div class="wrap_project-image mobile-lanscape-center">
				<!-- <a href="/" class="link_project-card auto-height w-inline-block"> -->

				<div class="flex flex-row items-center justify-between">
					<img
						src={player.token.img}
						loading="eager"
						alt=""
						class="mr-4 h-16 w-16 rounded-full object-cover"
					/>

					<h2 class="h2_project-name">{player.title}</h2>
				</div>
				<!-- </a> -->
				<div class="wrap_client-info">
					<div class="flex flex-col">
						<div class="txt_case-study-brand-industry">
							Color of game components: <em>{player.color} </em>
						</div>
						<div class="txt_case-study-brand-industry">Capacity: <em>{player.capacity} </em></div>
						<!-- <div class="txt_case-study-brand-name">Capacity: {player.capacity}</div> -->
					</div>
				</div>

				<!-- <p class="txt_paragraph sans-serif">
					Color of game components: <em>{player.color} </em>
				</p>
				<p class="txt_paragraph sans-serif">
					Capacity: <em>{player.capacity} </em>
				</p> -->
				<div class="">
					<!-- <p class="txt_paragraph project-card-summary _0-em inline">Starter kit:</p> -->
					<ul role="list" class=" w-list-unstyled w-full px-6">
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<img
										src="/images/corner-dot-army-green.svg"
										loading="lazy"
										alt=""
										class="mr-2 h-2 w-2"
									/>
									<!-- <div class="ml-4 flex flex-row items-center"> -->
									<span class="txt_services-list-item caps service mr-2">tokens: </span>
									<img
										src={player.token.img}
										loading="eager"
										alt=""
										class="mr-2 h-6 w-6 rounded-full object-cover"
									/>
									<span class="txt_services-list-item caps service">x{player.token.quantity} </span>
									<!-- </div> -->
								</div>
							</div>
						</li>
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<img
										src="/images/corner-dot-army-green.svg"
										loading="lazy"
										alt=""
										class="mr-2 h-2 w-2"
									/>
									<!-- <div class="ml-4 flex flex-row items-center"> -->
									<span class="txt_services-list-item caps service mr-2">tablet: </span>
									<img
										src={player.tablet.img}
										loading="eager"
										alt=""
										class="mr-2 h-6 w-auto object-cover"
									/>
									<span class="txt_services-list-item caps service"
										>x{player.tablet.quantity}
									</span>
									<!-- </div> -->
								</div>
							</div>
						</li>
						<li
							class="item_services-card transition-transform duration-200 ease-in-out hover:scale-105"
						>
							<div
								class="txt_services-list-item caps service flex flex-row items-center justify-between"
							>
								<div class="flex max-w-sm flex-row items-center">
									<img
										src="/images/corner-dot-army-green.svg"
										loading="lazy"
										alt=""
										class="mr-2 h-2 w-2"
									/>
									<!-- <div class="ml-4 flex flex-row items-center"> -->
									<span class="txt_services-list-item caps service mr-2">figure: </span>
									<img
										src={player.tablet.img}
										loading="eager"
										alt=""
										class="mr-2 h-6 w-auto object-cover"
									/>
									<span class="txt_services-list-item caps service"
										>x{player.tablet.quantity}
									</span>
									<!-- </div> -->
								</div>
							</div>
						</li>
					</ul>
				</div>
				
				<p class="txt_paragraph sans-serif">
					<strong>
						{player.ability}
					</strong>
				</p>
				<!-- Лор героя -->

				<!-- <p class="txt_paragraph project-card-summary _0-em inline">
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
					printer took a galley of type and scrambled it to make a type specimen book.
				</p> -->

				<!-- <ul>
						{#each lookingFor as spec}
							<li>
								<h2>{spec.position}</h2>

								<p>{spec.tasks}</p>
								<p>{spec.stack}</p>
							</li>
						{/each}
					</ul> -->
				<!-- <div class="">
						<div class=" w-inline-block inline">
							<img src={player.tablet.img} class='h-[200px]' loading="lazy" alt="" />
						</div>
					</div> -->
				<!-- <div class="wrap_project-category">
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
					</div> -->
			</div>
			<div class="wrap_project-info">
				<a href="/" class="link_project-card w-inline-block">
					<img
						src={player.tablet.img}
						style="object-fit: cover;"
						class="h-[450px] w-auto"
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
			<div class="txt_brand-spotlight project-collection">{player.name}</div>
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
