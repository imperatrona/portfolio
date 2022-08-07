<script>
	import SplitChar from './SplitChar.svelte';

	export let current;
	let toggle = false;

	function handleLink(){
		toggle = false;
	}
</script>

<div class="header">
	<div class="container">
		<header>
			<div>
				<a href="/" class:active={current === '/'} sveltekit:prefetch on:click={handleLink}>Alex<br />Tatianovich</a>
			</div>
			<input type="checkbox" id="nav-button" bind:checked={toggle} />
			<label for="nav-button" id="nav-button_label">
				<span aria-hidden="true" />
				<span aria-hidden="true" />
			</label>
			<nav>
				<ol>
					<li><a href="/blog" sveltekit:prefetch class:active={current === '/blog'} on:click={handleLink}><SplitChar text="Blog" /></a></li>
					<li>
						<a href="/about" sveltekit:prefetch class:active={current === '/about'} on:click={handleLink}
							><SplitChar text="About" offset={4} /></a
						>
					</li>
					<li>
						<a href="/telegram" sveltekit:prefetch class:active={current === '/telegram'} on:click={handleLink}
							><SplitChar text="Telegram" offset={9} /></a
						>
					</li>
				</ol>
				<ol class="social">
					<li>
						<a href="mailto:hi@0h5imw.ru" class="external" on:click={handleLink}
							><SplitChar text="hi@0h5imw.ru" offset={17} /></a
						>
					</li>
				</ol>
			</nav>
		</header>
	</div>
</div>

<style>
	.header {
		border-bottom: 1px solid rgba(var(--color-text-primary), 0.05);
		transition: border 0.1s ease;
	}

	header {
		display: grid;
		column-gap: 1.2rem;
	}

	nav {
		display: flex;
	}

	ol {
		list-style: none;
		padding: 0;
		margin: 0;

		display: flex;
		flex-direction: column;
	}

	#nav-button {
		display: none;
	}

	@media screen and (max-width: 860px) {
		header {
			grid-template-columns: 1fr 44px;
		}

		nav {
			display: block;

			opacity: 0;
			visibility: hidden;
			max-height: 0;
		}

		nav li {
			margin-top: -38px;
		}

		#nav-button:checked ~ nav {
			opacity: 1;
			visibility: visible;
			max-height: 100%;
		}

		#nav-button:checked ~ nav li {
			margin-top: 0.4rem;
		}

		#nav-button_label {
			position: relative;
			display: block;
			height: 44px;
			width: 44px;
			user-select: none;
		}

		#nav-button_label > span {
			position: absolute;
			height: 1px;
			width: 16px;
			left: 14px;
			background-color: rgb(var(--color-text-primary));
		}

		#nav-button_label > span:first-child {
			top: 19px;
		}
		
		#nav-button_label > span:last-child {
			bottom: 19px;
		}

		#nav-button:checked + #nav-button_label > span:first-child {
			transform: rotate(45deg) translate(1.5px, 2px);
		}

		#nav-button:checked + #nav-button_label > span:last-child {
			transform: rotate(-45deg) translate(1.5px, -2px);
		}
	}

	@media screen and (max-width: 860px) and (prefers-reduced-motion: no-preference) {
		nav {
			transition: max-height ease-in 0.3s;
		}

		nav li {
			transition: 0.3s;
		}

		#nav-button_label > span {
			transition: transform ease 0.15s;
		}

		/* Char animation */
		nav :global(.char) {
			opacity: 0;
			display: inline-block;
			min-width: 4.5px;
			transform: translateY(-5px);
			transition: 0s;
		}

		#nav-button:checked ~ nav :global(.char) {
			opacity: 1;
			transform: translateY(0);
			transition: transform 0.5s cubic-bezier(0.5, 0, 0.5, 1),
				opacity 0.5s cubic-bezier(0.5, 0, 0.5, 1);
			transition-delay: calc(10ms * var(--char-index) + 50ms);
		}
	}

	@media screen and (min-width: 860px) {
		header {
			grid-template-columns: var(--sidebar) 1fr;
		}

		#nav-button_label {
			display: none;
		}

		nav {
			flex-direction: row;
			justify-content: space-between;
		}

		nav ol{
			gap: .4rem;
		}
	}

	/*	Active Mark*/
	.active {
		position: relative;
		opacity: 0.65;
	}

	.active:hover {
		background-color: inherit;
		box-shadow: none;
		cursor: default;
	}

	.active::before {
		content: '';
		left: -1.25em;
		background: url('/icon.svg') no-repeat center/contain;
		height: 1.25em;
		aspect-ratio: 1;
		position: absolute;
		margin-top: 2px;
	}

	@media screen and (prefers-color-scheme: dark) {
		.active::before {
			background: url('/icon-white.svg') no-repeat center/contain;
		}
	}
</style>
