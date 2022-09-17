<script>
	import { goto } from '$app/navigation';
	import { t, locales, locale, defaultLocale } from '$lib/translations';
	import { route } from '$lib/stores';

	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	let loaded = false;
	let coords = spring(
		{ height: 42, width: 100, top: 0, left: 0 },
		{
			stiffness: 0.3,
			damping: 0.8
		}
	);

	onMount(() => {
		let active = document.querySelector('.active');
		coords.set({
			height: active.offsetHeight,
			width: active.offsetWidth,
			top: active.offsetTop,
			left: active.offsetLeft
		});
	});
</script>

{#if !$route.match(/\/blog\/\w+?(?=\/|)/)}
	<div class={'switcher' + (loaded ? ' loaded' : '')}>
		<div
			class="pointer"
			style={`height:${$coords.height}px;width:${$coords.width}px;top:${$coords.top}px;left:${$coords.left}px;`}
		/>
		{#each $locales as lang}
			<a
				class={'btn ' + (!loaded && $locale == lang ? 'active' : '')}
				href={lang === defaultLocale ? $route : `/${lang}${$route !== '/' ? $route : ''}`}
				on:click={({ target }) => {
					loaded = true;
					coords.set({
						height: target.offsetHeight,
						width: Math.floor(target.offsetWidth),
						top: target.offsetTop,
						left: target.offsetLeft
					});
				}}>{$t(`lang.${lang}`)}</a
			>
		{/each}
	</div>
{/if}

<style>
	.switcher {
		display: flex;
		padding: 0.2em;
		border-radius: 100px;
		box-shadow: 0px 0px 0px 1px rgba(var(--color-text-primary), 0.05) inset;
		position: relative;
	}

	.pointer {
		position: absolute;
		z-index: 0;
		box-sizing: border-box;
	}

	.loaded .pointer {
		background-color: rgb(var(--color-background-lift));
		border-radius: 100px;
	}

	.btn {
		cursor: default;
		position: relative;
		border-radius: 100px;
		border: 0;
		border-radius: 100px;
		padding: 0.667em 1.112em;
		background-color: inherit;
		line-height: 1em;

		font-size: 0.9rem;
		color: var(--color-text-primary);
	}

	.btn:disabled::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
	}

	.active {
		background-color: rgb(var(--color-background-lift));
	}

	.btn:hover {
		background-color: rgba(var(--color-background-lift), 0.4);
	}

	@media (max-width: 860px) {
		.switcher {
			display: none;
		}
	}
</style>
