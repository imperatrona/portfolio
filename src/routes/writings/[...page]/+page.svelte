<script lang="ts">
	import ArticleShort from '$lib/components/blog/ArticleShort.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ posts, page } = data);

	$: isFirstPage = page === 1;
	$: hasNextPage = posts[posts.length - 1]?.previous;
</script>

<h1>Posts</h1>

<div class="feed">
	{#each posts as post}
		<ArticleShort {post} />
	{/each}
</div>

<div class="pagination">
	{#if !isFirstPage}
		{#if page - 1 == 1}
			<a href={`/writings`} class="prev">Prev</a>
		{:else}
			<a href={`/writings/page/${page - 1}`} class="prev">Prev</a>
		{/if}
	{/if}

	{#if hasNextPage}
		<a href={`/writings/page/${page + 1}`} class="next">Next</a>
	{/if}
</div>

<style>
	.feed {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
	}

	.pagination {
		display: flex;
	}
</style>
