<script lang="ts">
	export let date: string;
	export let readingTime: number;
	export let tags: string[] = [];
</script>

<div class="meta">
	<span class="date"
		>{new Date(date).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}</span
	>
	{` · `}
	<span class="reading-time">{readingTime} min</span>
	{#if tags !== undefined && tags.length !== 0}
		{` · `}
		<div class="tags">
			{#each tags as tag}
				<span>{tag}</span>
			{/each}
		</div>
	{/if}
</div>

<style>
	.meta {
		color: rgba(var(--color-text-primary), 0.55);
		font-size: 0.8em;
		display: flex;
		gap: 8px;
	}
	.tags {
		display: flex;
		gap: 8px;
	}
	.tags span {
		text-decoration: underline solid rgba(var(--color-text-primary), 0.2);
		text-underline-offset: 6px;

		text-decoration: none;
	}
</style>
