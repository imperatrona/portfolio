<script lang="ts">
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
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
		--color-background: 240, 240, 240; /* #f9f9f9 */
		--color-background-lift: 245, 245, 245; /* #f5f5f5 */
		--color-text-primary: 33, 33, 33; /* #212121 */
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
		font-family: 'gravity', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		background-color: rgb(var(--color-background));
		color: rgb(var(--color-text-primary));
	}

	:global(h1, h2) {
		font-weight: 300;
		letter-spacing: -1px;
	}

	:global(h3, h4, h5, h6) {
		font-weight: 400;
	}

	:global(a) {
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}

	/* :global(a:hover, a:active, #nav-button_label:hover, #nav-button_label:active) {
		border-radius: 2px;
		background-color: rgba(var(--color-text-primary), 0.1);
		box-shadow: 0 0 0 3px rgba(var(--color-text-primary), 0.1);
	}

	:global(a.def:hover) {
		border-radius: inherit;
		background-color: inherit;
		box-shadow: inherit;
	} */

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
		margin: 0;
	}

	@media screen and (min-width: 860px) {
		:global(.container) {
			margin: 0 auto;
		}

		.root {
			max-width: 1168px;
			margin: 0 16px;
		}
	}

	@media (min-width: 1200px) {
		.root {
			margin: 0 auto;
		}
	}
</style>
