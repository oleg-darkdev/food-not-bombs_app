<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { RoundedBtnLink, Tag } from '$sharedUi';
	
</script>

<section id="print-and-play" class="section recent-case-study">
	<div class="grid_recent-case-study">
		<div class="item_recent-case-study cream">
			<div id="case-study" class="wrap_recent-case-study texts">
				<h2 class="h_semi-bold section-heading recent-case-study">
					We cook <em> for everyone in need until the very last day </em> — while wars are still going
					on.
				</h2>

				<div class="wrap_client-info">
					<div class="w-layout-vflex warp_client-name">
						<div class="txt_case-study-brand-name">Author introduction letter</div>
						<!-- <div class="txt_case-study-brand-name">Lorem Ipsum</div> -->
					</div>
					<div class="w-layout-vflex warp_client-name">
						<div class="txt_case-study-brand-industry">Oleg Medvedev <a href="https://github.com/oleg-darkdev" target="_blank">(@oleg_darkdev)</a> </div>
						<!-- <div class="txt_case-study-brand-industry">Lorem Ipsum</div> -->
					</div>
				</div>

				<p class="txt_paragraph sans-serif">
					I dedicate this game to the initiatives <em
						>“Food Not Bombs — East” (Minsk) and “Jedzenie Zamiast Bomb” (Gdańsk)</em
					> , where I spent most of my time preparing and distributing food.
				</p>
				<p class="txt_paragraph sans-serif">
					<strong>
						I hope that when my breath is gone, humanity will no longer know the need for food aid
						or the meaning of the word “war.”
					</strong>
				</p>

				<p class="txt_paragraph sans-serif">
					To every Food Not Bombs activist, I wish you steadfast faith in your ideals and the
					strength to continue the revolution.
				</p>
				<div class="space-between flex w-full flex-row">
					<RoundedBtnLink title="Start game" link="/app" blank={true} />

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
								<h3 class="h_semi-bold name regular italic">Soup4All <br/> boardgame </h3>
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
						<div class="txt_tag-name more-height">#Soup4All #FNB #FOODNOTBOMBS</div>
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
