<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
	import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const europeCountUp = new CountUp('europeCountUp', 200, { enableScrollSpy: true, duration: 8 }),
			africaCountUp = new CountUp('africaCountUp', 80, { enableScrollSpy: true, duration: 12 }),
			asiaCountUp = new CountUp('asiaCountUp', 60, { enableScrollSpy: true, duration: 15 }),
			canadaCountUp = new CountUp('canadaCountUp', 28, { enableScrollSpy: true, duration: 15 }),
			latinAmericaCountUp = new CountUp('latinAmericaCountUp', 44, {
				enableScrollSpy: true,
				duration: 15
			}),
			mexicoCountUp = new CountUp('mexicoCountUp', 17, { enableScrollSpy: true, duration: 12 }),
			russiaCountUp = new CountUp('russiaCountUp', 32, { enableScrollSpy: true, duration: 15 }),
			usaCountUp = new CountUp('usaCountUp', 90, { enableScrollSpy: true, duration: 15 }),
			// russiaCountUp = new CountUp('russiaCountUp', 40, { enableScrollSpy: true, duration: 15 }),
			// russiaCountUp = new CountUp('russiaCountUp', 40, { enableScrollSpy: true, duration: 15 }),
			allGroupsCountUp = new CountUp('allGroups', 417, { enableScrollSpy: true, duration: 15 }),
			countriesCountUp = new CountUp('countries', 38, { enableScrollSpy: true, duration: 15 });
		// appsProgectsCountUp = new CountUp('apps_progects', 48, { enableScrollSpy: true, duration: 15 }),
		// partnersCountUp = new CountUp('partners', 2, { enableScrollSpy: true, duration: 12 });
	});

	//    const impactData = [
	//     {
	//         text: 'Realizowane projekty',
	//         id: 'progects',
	//         reverse: false,

	//         link: '/ngo#trello',
	//         img: '/images/landing/impact/projects_impact.svg'
	//     },

	// ]
</script>

<div class="wrap__project-page-explore-heading flex flex-col pb-4">
	<h2 class="h1_semibold project-page-explore pb-2 text-center">
		A very large <br /> list of collectives <br />
		<span class="">Food Not Bombs.</span>
	</h2>

	<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
		We have gathered information for you, about
		<span class="text-span-3"> <em id="allGroups"></em>+ local Food Not Bombs collectives </span>
		from more than <span class="text-span-3"><em id="countries">+</em> countries.</span>
	</p>

	<ul class="h_regular section-paragraph flex flex-col pb-2">
		<li>
			Europe - <em class="italic-text">
				<span class="change-this-class" id="europeCountUp"></span> collectives.
			</em>
		</li>
		<li>
			Africa - <em class="italic-text">
				<span class="change-this-class" id="africaCountUp"></span> collectives.
			</em>
		</li>
		<li>
			Asia - <em class="italic-text">
				<span class="change-this-class" id="asiaCountUp"></span> collectives.
			</em>
		</li>
		<li>
			Canada - <em class="italic-text">
				<span class="change-this-class" id="canadaCountUp"></span> collectives.
			</em>
		</li>
		<li>
			Latin America - <em class="italic-text">
				<span class="change-this-class" id="latinAmericaCountUp"></span> collectives.
			</em>
		</li>
		<li>
			Mexico - <em class="italic-text">
				<span class="change-this-class" id="mexicoCountUp"></span> collectives.
			</em>
		</li>
		<li>
			Russia - <em class="italic-text">
				<span class="change-this-class" id="russiaCountUp"></span> collectives.
			</em>
		</li>
		<li>
			U.S.A. - <em class="italic-text">
				<span class="change-this-class" id="usaCountUp"></span> collectives.
			</em>
		</li>
		<!-- <li>
						Europe - <em class="italic-text">
							<span class="change-this-class" id='europeCountUp'></span>
						</em>
					</li> -->
	</ul>
	<p class="h_regular section-paragraph mx-auto mb-2 max-w-3xl">
		We have also prepared contact details so that you can ask your questions.
	</p>
</div>

<style lang="postcss">
</style>
