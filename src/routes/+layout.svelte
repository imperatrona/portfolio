<script>
	import { page } from '$app/stores';
	import HeaderSlim from '$lib/components/HeaderSlim.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<HeaderSlim current={$page.url.pathname} />

<main>
	<slot />
</main>

<Footer />

<style>
	:global(:root) {
		--font-size: 18px;
		--spacing-unit: 4px;
		--sidebar: 200px;
		--color-background: 249, 249, 249; /* #f9f9f9 */
		--color-text-primary: 0, 0, 0; /* #212121 */
	}

	@media screen and (prefers-color-scheme: dark) {
		:global(:root) {
			--color-background: 17, 17, 17; /* #111 */
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
		font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		background-color: rgb(var(--color-background));
		color: rgb(var(--color-text-primary));
	}

	:global(h1, h2) {
		font-weight: 300;
	}

	:global(h3, h4, h5, h6) {
		font-weight: 400;
	}

	:global(a) {
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}

	:global(a:hover, a:active, #nav-button_label:hover, #nav-button_label:active) {
		border-radius: 2px;
		background-color: rgba(var(--color-text-primary), 0.1);
		box-shadow: 0 0 0 3px rgba(var(--color-text-primary), 0.1);
	}

	:global(.external) {
		cursor: alias;
	}

	:global(.container) {
		padding: 1.2rem;
	}

	:global(img) {
		max-width: 100%;
		height: auto;
		border-radius: 4px;
	}

	:global(figure) {
		margin: 1em 0;
	}

	@media screen and (min-width: 860px) {
		:global(.container) {
			margin-left: auto;
			margin-right: auto;
			max-width: 932px;
			width: calc(100vw - 96px);
		}
	}
</style>
