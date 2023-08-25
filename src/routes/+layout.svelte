<script lang="ts">
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';

	import { navigating } from '$app/stores';
	import NProgress from 'nprogress';
	import 'nprogress/nprogress.css';

	NProgress.configure({
		minimum: 0.16,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<div class="root">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	:global(:root) {
		--font-size: 18px;
		--spacing-unit: 4px;
		--padding: 1.2rem;
		--sidebar: 200px;
		--color-background: 249, 249, 249; /* #f9f9f9 */
		--color-background-lift: 245, 245, 245; /* #f5f5f5 */
		--color-text-primary: 33, 33, 33; /* #212121 */
		--duration: 0.2s;
	}

	@media screen and (prefers-reduced-motion) {
		:global(:root) {
			--duration: 0s;
		}
	}

	@media screen and (prefers-color-scheme: dark) {
		:global(:root) {
			--color-background: 15, 15, 15; /* #0f0f0f */
			--color-background-lift: 20, 20, 20; /* #141414 */
			--color-text-primary: 208, 208, 208; /* #212121 */
		}
	}

	@media screen and (min-width: 860px) {
		:global(:root) {
			--font-size: 20px;
		}
	}

	:global(html) {
		font-size: var(--font-size);
		line-height: 1.5;
	}

	:global(body) {
		margin: 0;
		/* font-family: 'gravity', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
		font-family: 'Source Serif 4', serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		background-color: rgb(var(--color-background));
		color: rgb(var(--color-text-primary));
	}

	:global(h3, h4, h5, h6) {
		font-weight: 400;
	}

	:global(.h1) {
		font-size: 64px;
		font-weight: normal;
		font-family: 'Gambarino', 'Source Serif 4', serif;
		line-height: 1.2;
		letter-spacing: -0.04em;
		margin: 0;

		max-width: 860px;
		text-wrap: balance;
	}

	@media screen and (max-width: 550px) {
		:global(.h1) {
			font-size: calc((100vw - 30rem) / 25 + 2rem);
		}
	}

	@media screen and (min-width: 860px) {
		:global(.h1) {
			font-size: 80px;
		}
	}

	:global(a) {
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}

	:global(button) {
		font-family: inherit;
	}

	:global(.external) {
		cursor: alias;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 4px;
	}

	:global(figure) {
		margin: 0;
	}

	.root {
		--padding: 24px;
		display: flex;
		flex-direction: column;
		min-height: calc(100dvh - calc(var(--padding) * 2));
		padding: var(--padding);
	}

	@media screen and (min-width: 860px) {
		.root {
			--padding: 50px;
			margin: 0 auto;
			max-width: 1200px;
		}
	}

	/* Progress Bar */
	:global(#nprogress .bar) {
		background: #beacd0;
	}
</style>
