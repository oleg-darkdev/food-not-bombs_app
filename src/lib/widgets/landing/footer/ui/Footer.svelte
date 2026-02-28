<script lang="ts">
	import { SocialRoundIconLink } from '$sharedUi';
	// import {  } from '$widgets';
	// import {  } from '$entities'

	import { groupsByRegion } from '$sharedData';
	let { nav, socialLinks } = $props();
</script>

<footer class="section footer">
	<div id="contact" class="wrap_footer">
		<div class="wrap_footer-logo">
			<a href="/" class="link_footer-logo w-inline-block">
				<!-- footer-logo -->
				<img
					src="/images/logo_footer.svg"
					loading="lazy"
					alt="Food Not Bombs logo"
					class="img_footer-logo"
				/>
			</a>
			<div class="txt_footer">
				We cook food, not wars.

				<br /> For everyone in need.
			</div>
		</div>
		<!-- wrap_footer-links -->
		<div class="flex flex-row gap-x-6">
			<ul role="list" class="list_footer-links footer-menu w-list-unstyled">
				{#each nav as navigation}
					<li class="item_footer-links">
						<a href={navigation.link} class="link_footer">{navigation.title}</a>
					</li>
				{/each}
			</ul>
			<!-- 				id="w-node-_1072bbd0-9134-708c-95df-818abc896cf3-bc896cec"
 -->
			<ul role="list" class="list_footer-links footer-menu w-list-unstyled">
				{#each groupsByRegion as region}
					<li class="item_footer-links">
						<a href={region.link} class="link_footer" target="_blank">{region.title}</a>
					</li>
				{/each}
			</ul>
		</div>

		<!-- <div class="wrap_footer-contact-info">
			<ul role="list" class="list_footer-links contact-info w-list-unstyled">
				<li class="item_footer-contact-info">
					<a href="mailto:darkdev_brand@riseup.net" class="ico_footer-icon w-inline-block">
						<img
							src="/images/icons/email.svg"
							loading="lazy"
							alt="email icon"
							class="img_footer-icon"
						/>
					</a>
					<a href="mailto:darkdev_brand@riseup.net" class="txt_footer link"
						>
						darkdev_brand@riseup.net
						</a
					>
				</li>
				<li class="item_footer-contact-info">
					<a href="" target="_blank" class="ico_footer-icon w-inline-block">
						<img src="/images/map-pin.png" loading="lazy" alt="map icon" class="img_footer-icon" />
					</a>
					<a href="" target="_blank" class="txt_footer link">Gdansk <br />Poland </a>
				</li>
			</ul>
		</div> -->
		<div class="wrap_footer-social-links">
			<ul role="list" class="list_footer-links social w-list-unstyled">
			<li class="item_social-link mx-auto">
					<a href="mailto:darkdev_brand@riseup.net" class="ico_footer-icon w-inline-block">
						<img
							src="/images/icons/email.svg"
							loading="lazy"
							alt="email icon"
							class="img_footer-icon"
						/>
					</a>
				</li>
				{#each socialLinks as social}
					<li class="item_social-link mx-auto">
						<SocialRoundIconLink icon={social.icon} alt={social.alt} link={social.link} />
					</li>
				{/each}
				
			</ul>
		</div>
	</div>
	<div class="txt_footer foot-notes px-10">
		<div class="">
			Development by <a
				href="https://oleg-darkdev.vercel.app/"
				target="_blank"
				class="txt_footer-notes text-pink link">oleg_darkDev</a
			> (2025)
		</div>

		<div>
			An
			<a
				href="https://github.com/oleg-darkdev/food-not-bombs_app"
				class="txt_footer link"
				target="_blank">open source project</a
			>
		</div>

		<div class="">
			licensed under
			<a
				href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
				class="txt_footer-notes link text-orange"
				target="_blank">CC BY-NC-SA 4.0</a
			>
		</div>
	</div>
</footer>

<style lang="postcss">
	.section.footer {
		background-color: var(--borders--army-green);
		padding-bottom: 1em;
	}

	.link_footer-logo.w--current {
		margin-bottom: 1em;
	}

	.img_footer-logo {
		width: 22em;
		font-size: 0.8em;
	}

	.txt_footer {
		color: var(--background--cream);
	}
	.txt_footer-notes,
	.txt_footer {
		font-size: 1.3em;
		line-height: 1.4;
	}

	.txt_footer.foot-notes {
		text-align: center;
		font-size: 1.1em;
		font-weight: 400;
	}

	.txt_footer.link,
	.txt_footer-notes.link {
		transition: border 0.2s;
	}

	.txt_footer.link:hover,
	.txt_footer-notes.link:hover {
		border-bottom: 1px solid var(--background--cream);
	}

	.list_footer-links {
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		grid-template-rows: auto auto auto auto;
		grid-template-columns: 1fr 1fr;
		grid-auto-columns: 1fr;
		margin-bottom: 0;
		padding-left: 0;
		display: grid;
	}

	.list_footer-links.social,
	.list_footer-links.contact-info {
		grid-template-rows: auto auto auto;
		grid-template-columns: 1fr;
		margin-bottom: 0;
		padding-left: 0;
	}

	.list_footer-links.footer-menu {
		grid-column-gap: 1em;
		grid-row-gap: 2em;
		grid-template-rows: auto auto auto auto auto;
		grid-auto-flow: column;
	}

	.link_footer {
		color: var(--background--cream);
		text-transform: uppercase;
		cursor: pointer;
		font-size: 1.3em;
		transition: border 0.2s;
	}

	.link_footer:hover {
		border-bottom: 1px solid var(--background--cream);
	}

	.item_footer-contact-info {
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		justify-content: flex-start;
		align-items: center;
		display: flex;
	}

	.ico_footer-icon {
		aspect-ratio: 1;
		background-color: var(--background--cream);
		cursor: pointer;
		border-radius: 2em;
		justify-content: center;
		align-items: center;
		width: 3.5em;
		padding: 0.2em;
		display: flex;
		overflow: hidden;
	}

	.wrap_footer {
		grid-column-gap: 7em;
		grid-row-gap: 1em;
		justify-content: space-between;
		padding: 4.6em 3.5em 4em;
		font-size: 0.9vw;
		display: flex;
	}

	.wrap_footer-logo {
		grid-column-gap: 0.9em;
		grid-row-gap: 0.9em;
		flex-flow: column;
		width: 30%;
		padding-right: 0;
		display: flex;
	}

	.wrap_footer-links {
		width: 35%;
	}

	.wrap_footer-contact-info {
		width: 30%;
	}

	.wrap_footer-social-links {
		width: 5%;
	}

	@media screen and (max-width: 991px) {
		.section.footer {
			padding-bottom: 3em;
		}
		.txt_footer.foot-notes {
			font-size: 1.6em;
		}
		.wrap_footer {
			grid-column-gap: 4em;
			padding-bottom: 6.5em;
			font-size: 1.3em;
		}
	}

	@media screen and (max-width: 767px) {
		.section.footer {
			padding-bottom: 4em;
		}
		.txt_footer.foot-notes {
			font-size: 2.1em;
		}

		.list_footer-links.footer-menu {
			grid-row-gap: 1.5em;
			grid-column-gap: 3em;
			/* grid-row-gap: 1em; */
			margin-top: 1em;
		}

		.wrap_footer {
			grid-column-gap: 3em;
			grid-row-gap: 5em;
			flex-flow: column;
			/* flex-direction: column-reverse; */
			grid-template-rows: auto auto;
			grid-template-columns: 1fr;
			grid-auto-columns: 1fr;
			font-size: 2em;
			display: grid;
		}

		.wrap_footer-logo {
			flex-flow: column;
			width: 100%;
		}
		.wrap_footer-links,
		.wrap_footer-contact-info,
		.wrap_footer-social-links {
			width: auto;
		}
	}

	@media screen and (max-width: 479px) {
		.section.footer {
			padding-bottom: 4.7em;
		}
		.txt_footer,
		.txt_footer-notes {
			font-size: 1.5em;
		}
		.txt_footer.foot-notes {
			font-size: 2.8em;
		}

		.link_footer {
			font-size: 1.6em;
		}
		.wrap_footer {
			font-size: 3em;
		}

		.wrap_footer-contact-info {
			width: 20em;
		}
	}
</style>
