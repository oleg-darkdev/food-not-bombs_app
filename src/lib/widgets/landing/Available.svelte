<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	import { BigLinkBtn } from '$entities';
</script>

<section class="section project-page-explore">
	<a name="print-and-play"></a>

	<div class="wrap__project-page-explore-heading">
		<h2 class="h1_semibold project-page-explore">
			Boardgame + <span class="text-orange">Technologies.</span>
		</h2>
	</div>
	<div class="mx-auto mb-4 flex max-w-6xl flex-row justify-between px-6">
		<BigLinkBtn
			text="Print and Play."
			bgColor="bg-orange"
			link="https://github.com/oleg-darkdev/food-not-bombs_app/tree/main/static/print-and-play"
		/>
		<BigLinkBtn text="Web Application" bgColor="bg-red" link="/app" />
	</div>
	<div class="mx-auto flex max-w-6xl flex-row justify-between px-6">
		<BigLinkBtn text="Public API" link="/api" bgColor="bg-red" />
		<BigLinkBtn text="FNB Groups list" link="/groups" bgColor="bg-orange" />
	</div>
</section>

<style lang="postcss">
	.grid_project-page-explore {
		/* grid-column-gap: 1em;
	grid-row-gap: 1em;
	justify-content: center;
	align-items: center;
	display: flex; */
	}
</style>
