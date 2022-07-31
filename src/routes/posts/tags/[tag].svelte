<script>
	import { page } from '$app/stores';
	import ArticleShort from '$lib/components/ArticleShort.svelte';

	export let posts;
</script>

<div class="container">
	<h1>Tag: {$page.params.tag}</h1>

	<div class="feed">
	{#each posts as post}
		<ArticleShort {post}/>
	{/each}
	</div>
</div>