<script>
	import { t } from '$lib/translations';
	import ArticleShort from '$lib/components/blog/ArticleShort.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ posts, page } = data);

	$: isFirstPage = page === 1;
	$: hasNextPage = posts[posts.length - 1]?.previous;
</script>

<div class="container">
	<h1>{$t('common.posts')}</h1>

	<div class="feed">
		{#each posts as post}
			<ArticleShort {post} />
		{/each}
	</div>

	<div class="pagination">
		{#if !isFirstPage}
			{#if page - 1 == 1}
				<a href={`/blog`} class="prev">Prev</a>
			{:else}
				<a href={`/blog/page/${page - 1}`} class="prev">Prev</a>
			{/if}
		{/if}

		{#if hasNextPage}
			<a href={`/blog/page/${page + 1}`} class="next">Next</a>
		{/if}
	</div>
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
