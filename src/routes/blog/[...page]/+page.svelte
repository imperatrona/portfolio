<script>
	import ArticleShort from '$lib/components/ArticleShort.svelte';

	export let posts;
	export let page;

	$: isFirstPage = page === 1;
	$: hasNextPage = posts[posts.length - 1]?.previous;
</script>

<!-- <svelte:head>
	<title>Matt Jennings | Blog</title>
</svelte:head> -->

<div class="container">
  <h1>Blog</h1>

	<div class="feed">
		{#each posts as post}
				<ArticleShort {post} />
		{/each}
	</div>

	<div class="pagination">
		{#if !isFirstPage}
			<a href={`/blog/page/${page - 1}`} sveltekit:prefetch class="prev">Prev</a>
		{/if}

		{#if hasNextPage}
			<a href={`/blog/page/${page + 1}`} sveltekit:prefetch class="next">Next</a>
		{/if}
	</div>
</div>

<style>
  /*.count{
    color: rgba(var(--color-text-primary), .56);
  }*/
  .feed{
    display: flex;
    flex-direction: column;
    gap: 60px;
    max-width: 640px;
  }
</style>
