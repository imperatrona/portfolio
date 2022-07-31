<script>
	import ArticleShort from '$lib/components/ArticleShort.svelte';

	export let posts;
</script>

<div class="container">
	<h1>Posts <span class="count">{posts.length}</span></h1>

	<div class="feed">
	{#each posts as post}
		<ArticleShort {post}/>
		<!-- <code><pre>{JSON.stringify(posts, null, 2)}</pre></code> -->
	{/each}
	</div>
</div>


<style>
	.count{
		color: rgba(var(--color-text-primary), .56);
	}
	.feed{
		display: flex;
		flex-direction: column;
		gap: 60px;
		max-width: 640px;
	}
</style>