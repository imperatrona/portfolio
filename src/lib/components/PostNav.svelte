<!-- <script>
	export let next;
	export let prev;
</script>

<nav class="post-nav">
	<ul>
		{#if prev}
			<li>
				<a
					sveltekit:prefetch
					rel="prev"
					class="prev-post"
					href={`/blog/${prev.slug}`}
					><div class="meta">⌥← Previous</div>
					<div>{prev.title}</div></a
				>
			</li>
		{/if}
		{#if next}
			<li>
				<a
					sveltekit:prefetch
					rel="next"
					class="next-post"
					href={`/blog/${next.slug}`}
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
		flex: 1;
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
</style>
 -->