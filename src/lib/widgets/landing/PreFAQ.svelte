<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { RoundedBtnLink, Tag } from '$sharedUi';
	
</script>

<section class="section recent-case-study">
	<div class="grid_recent-case-study  ">
		<div class="item_recent-case-study cream">
			<div id="case-study" class="wrap_recent-case-study texts">
				<h2 class="h_semi-bold section-heading recent-case-study">
					Lorem Ipsum <br />jest tekstem
				</h2>
				<div class="wrap_client-info">
					<div class="w-layout-vflex warp_client-name">
						<div class="txt_case-study-brand-name">Lorem Ipsum:</div>
						<div class="txt_case-study-brand-name">Lorem Ipsum</div>
					</div>
					<div class="w-layout-vflex warp_client-name">
						<div class="txt_case-study-brand-industry">Lorem Ipsum:</div>
						<div class="txt_case-study-brand-industry">Lorem Ipsum</div>
					</div>
				</div>
				<p class="txt_paragraph sans-serif">
					<strong>
						Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem
						próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym,
						pozostając praktycznie niezmienionym.
					</strong>
				</p>
				<div class="space-between flex w-full flex-row">
					<RoundedBtnLink title="Start the game" link="/app" blank={true} />

					<RoundedBtnLink
						title="Print&Play"
						link="https://github.com/oleg-darkdev/food-not-bombs_app/tree/main/static/print-and-play"
						blank={true}
						yellow={true}
					/>
				</div>
			</div>
		</div>

		<div class="item_recent-case-study green">
			<div class="wrap_recent-case-study">
				<div class="w-layout-vflex wrap_card-element-1 past-clients no-max-w">
					<div class="wrap_card-style-1 past-clients">
						<div class="wrap_card-content client-projects more-max-width">
							<div class="w-layout-vflex wrap_card-heading clients organic-page-min-height">
								<h3 class="h_semi-bold name regular italic">Lorem Ipsum jest</h3>
							</div>
							<div class="wrap_project-details">
								<div class="wrap_project-card-hero">
									<a href="/" class="link_project-card w-inline-block">
										<img
											src="/images/photos/boardgame/promo/11.JPG"
											loading="lazy"
											alt=""
											class="img_project-hero"
										/>
									</a>
								</div>
								<div class="wrap_project-tags">
									<Tag text="Co-op" bgColor="bg-yellow" />
									<Tag text="60 minut" bgColor="bg-pink" />
									<Tag text="4 players" bgColor="bg-yellow" />
									<!-- <Tag text='Co-op' bgColor='bg-pink'/> -->
								</div>
							</div>
						</div>
					</div>
					<div class="wrap_card-tags">
						<div class="txt_tag-name more-height">Lorem Ipsum jest tekstem</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- <div class="collection_featured-case-study hide w-dyn-list">
		<div class="w-dyn-empty">
			<div>No items found.</div>
		</div>
	</div> -->
</section>

<style lang="postcss">
</style>
