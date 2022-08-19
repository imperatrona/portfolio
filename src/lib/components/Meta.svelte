<script>
	export let date;
	export let tags = [];

	const formattedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<div class="meta">
	<span class="date">{formattedDate}</span>
	{#if tags.length !== 0}
		<div class="tags">
			{#each tags as tag}
				<a href="/tags/{tag}">{tag}</a>
			{/each}
		</div>
	{/if}
</div>

<style>
	.date {
		color: rgba(var(--color-text-primary), 0.55);
	}

	.meta {
		font-size: 0.8em;
		display: flex;
		gap: 8px;
	}
	.tags {
		display: flex;
		gap: 8px;
	}
	.tags a {
		text-decoration: underline solid rgba(var(--color-text-primary), 0.2);
		text-underline-offset: 6px;
	}
	.tags a:hover {
		text-decoration: none;
	}
</style>
