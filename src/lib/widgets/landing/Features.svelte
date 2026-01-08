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

	const targetAudience = [
		'People interested in issues of social and environmental sustainability',
		'Participants in and supporters of initiatives such as Food Not Bombs, Food Sharing,  as well as anti-war and humanitarian movements',
		'People with experience in self-organization and participation in horizontal communities, as well as those who wish to gain such experience',
		'NGOs, educational centers, and cultural spaces where workshops are held and access to open libraries is available',
		'Educators and facilitators who use educational board games as learning tools',
		'Suitable for running workshops in NGOs working in the field of food sharing, food banks, and related initiatives'
	];

	const gameTasks = [
		'Locate and collect surplus food from various city locations',
		'Calculate the optimal amount of food waste',
		'Minimize food waste at all stages of the game',
		'Discuss and make collective decisions as a team',
		'Practice horizontal decision-making and shared responsibility',
		"Adapt strategy without disrupting the team's overall work",
		'Manage resources between food collection, preparation, and distribution',
		'Decide what to cook now based on the needs of those in need and what can be saved for future rounds'
	];

	const webAppFeatures = {
		title: 'Web Application Features',
		aims: [
			'Display information from the database through the user interface (UI).',
			'Public API for data access.',
			'Interactive instruction for the rules of the board game.',
			"Interactive assistant: 'How to Become a Volunteer.'",
			'Interactive assistant for preparing the board game.',
			'Assistant during the gameplay.'
		]
	};

	const ecoGoals = {
		title: 'Aims of the Project for Environmental and Social Sustainability 🌍',
		aims: [
			'Promote discussions about the impact of food waste on the environment and social equity.',
			'Encourage the development of rational and ethical food consumption.',
			'Motivate users to participate in volunteer initiatives and develop skills for collective responsibility.',
			"Demonstrate how food waste can be reduced using the examples of the 'Food Sharing' and 'Food Not Bombs' initiatives."
		]
	};
	const fnbAimsPart = {
		title: 'Goals of the Soup4All Project',
		aims: [
			'Showcase all stages of activity using the example of a specific Food Not Bombs group.',
			'Preserve historical information about the activities of Food Not Bombs groups in different countries.',
			'Facilitate networking and collaboration between groups.',
			'Unite the community around the activities of Food Not Bombs groups.',
			'Motivate project users to participate in Food Not Bombs initiatives.',
			'Promote the ideas of mutual aid and food sharing.',
			'Use an educational board game and interactive materials to clearly demonstrate the processes of organizing free food distribution and the work of Food Not Bombs groups.',
			'Familiarize users with the history, principles, and key initiatives of the Food Not Bombs movement.'
		]
	};

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
				<!-- <h1 class="h1_regular main-headline small">
					<span class="bold italic">Food Not Bombs (FNB)</span> is a loose-knit group of independent
						collectives. 
					In <span class="bold italic"> Soup4All boardgame,</span>
					players collects food, primarily surplus food that would otherwise go to waste and be thrown
					away.
				</h1> -->

				<div class="wrap_client-info">
					<div class="w-layout-vflex warp_client-name">
						<div class="txt_case-study-brand-name">The game is suitable for:</div>
						<!-- <div class="txt_case-study-brand-name">Lorem Ipsum</div> -->
					</div>
					<!-- <div class="w-layout-vflex warp_client-name">
						<div class="txt_case-study-brand-industry">
							Oleg Medvedev <a href="https://github.com/oleg-darkdev" target="_blank"
								>(@oleg_darkdev)</a
							>
						</div>
						<div class="txt_case-study-brand-industry">Lorem Ipsum</div>
					</div> -->
				</div>
				<ul class="txt_paragraph sans-serif mb-10">
					{#each targetAudience as target, i}
						<li class="mb-2"><em>{i + 1}. {target} </em></li>
					{/each}
				</ul>
				<p class="txt_paragraph sans-serif">
					<strong> Tasks to be solved by players in the game:</strong>
				</p>
				<ul class="txt_paragraph sans-serif">
					{#each gameTasks as tasks, i}
						<li class="mb-2"><em>{i + 1}. {tasks} </em></li>
					{/each}
				</ul>

				<p class="txt_paragraph sans-serif">
					An open source project licensed under
					<a href="“https://creativecommons.org/licenses/by-nc-sa/4.0/”" target="_blank"
						>CC BY-NC-SA 4.0</a
					>
				</p>

				<!-- This food is used to prepare meals
						that are offered free of charge to anyone who is hungry. -->

				<!-- <p class="h1_regular main-headline small">
						FNB's principles include veganism, vegetarianism, the distribution of free food, group
						autonomy, consensus decision-making, and nonviolent direct action.
					</p>
					<p class="h1_regular main-headline small"></p>
					<p class="h1_regular main-headline small"></p>
					<p class="h1_regular main-headline small"></p> -->
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
