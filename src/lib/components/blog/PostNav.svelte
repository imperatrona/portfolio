<script lang="ts">
	import type { Post } from '$lib/server/posts';
	import { shortcut } from '$lib/shortcut';

	export let next: Post | undefined;
	export let prev: Post | undefined;
</script>

<nav class="post-nav">
	<ul>
		{#if prev}
			<li class="previous">
				<a
					data-sveltekit-prefetch
					use:shortcut={{ alt: true, code: 'ArrowLeft' }}
					rel="prev"
					class="prev-post"
					href={`/writings/${prev.slug}`}
					><div class="meta">⌥← Previous</div>
					<div>{prev.title}</div></a
				>
			</li>
		{/if}
		{#if next}
			<li class="next">
				<a
					data-sveltekit-prefetch
					use:shortcut={{ alt: true, code: 'ArrowRight' }}
					rel="next"
					class="next-post"
					href={`/writings/${next.slug}`}
					><div class="meta">Next →⌥</div>
					<div>{next.title}</div></a
				>
			</li>
		{/if}
	</ul>
</nav>

<style>
	.post-nav {
		margin: 1.2rem 0;
		border-top: 1px solid rgba(var(--color-text-primary), 0.1);
	}
	ul {
		margin: 1.2rem 0;
		list-style: none;
		display: flex;
		padding: 0;
	}
	li {
		/*		flex: 1;*/
		width: 50%;
	}
	a > div {
		max-width: 24ch;
	}

	.meta {
		display: block;
		color: rgba(var(--color-text-primary), 0.55);
		font-size: 0.65rem;
		text-transform: uppercase;
		margin-bottom: var(--nudge);
	}
	.next {
		margin-left: auto;
	}
</style>
