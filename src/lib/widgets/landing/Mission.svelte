<script lang="ts">
	// import {  } from '$shared';
	// import {  } from '$widgets';
	// import {  } from '$entities'
</script>

<a name="mission"></a>

<section class="section hero">
	<div class="grid_top-fold-hero _50-50">
		<div class="grid_item">
			<div class="grid-mission centered-vertical about-page">
				<div class="w-layout-vflex wrap_hero-headline about-page">
					<h1 class="h1_regular main-headline small">
						Lorem Ipsum jest <span class="bold italic">tekstem,</span> stosowanym
						<span class="bold italic">jako przykładowy</span>: <br /> przemyśle poligraficznym.
					</h1>
					<h1 class="h1_regular main-headline small">
						Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie
						niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy
						Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje
						Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach
						osobistych, jak Aldus PageMaker
					</h1>
				</div>
			</div>
		</div>
		<div class="grid_video-item">
			<div class="grid-b_top-fold-hero">
				<div class="container_video-background">
					<div
						data-poster-url=""
						data-video-urls=""
						data-autoplay="true"
						data-loop="true"
						data-wf-ignore="true"
						class="video-background_portfolio-showcase w-background-video w-background-video-atom"
					>
						<video
							id="a511caec-46a9-a2be-7d17-9e6687e1eb41-video"
							autoplay=""
							loop=""
							style="background-image:url('')"
							muted=""
							playsinline=""
							data-wf-ignore="true"
							data-object-fit="cover"
						>
							<source
								src="media/646c961743ca6cfd93a0533a_Home%20Page%20Video-transcode.mp4"
								data-wf-ignore="true"
							/>
							<source
								src="media/646c961743ca6cfd93a0533a_Home%20Page%20Video-transcode.webm"
								data-wf-ignore="true"
							/>
						</video>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.grid-mission {
		grid-column-gap: 2em;
		grid-row-gap: 2em;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		height: 100%;
		padding-top: 2em;
		padding-left: 3em;
		padding-right: 3em;
		display: flex;
		position: relative;
		overflow: hidden;
	}

	@media screen and (max-width: 767px) {
		.grid-mission {
			height: 46em;
			font-size: 1.2em;
		}
	}

	@media screen and (max-width: 479px) {
		.grid-mission {
			height: auto;
			padding: 4em;
		}
	}

	.container_video-background {
		background-color: #fd4437;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
		display: flex;
		overflow: hidden;
	}

	.grid_video-item {
		width: 100%;
		height: 100%;
	}

	/* .container_video-background .framed {
		background-color: var(--borders--army-green);
		padding: 3em;
	} */

	@media screen and (max-width: 767px) {
		/* .container_video-background.framed {
			padding: 4.5em;
		} */

		.grid_video-item {
			display: none;
		}
	}
</style>
