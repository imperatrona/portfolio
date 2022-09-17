<script>
	import { page } from '$app/stores';
	import ArticleShort from '$lib/components/ArticleShort.svelte';
	import PageHead from '$lib/components/PageHead.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ posts } = data);
</script>

<PageHead
	title={$page.params.tag}
	description="Alex Tatianovich blog"
/>

<div class="container">
	<h1><a href="/blog">Posts</a> → {$page.params.tag}</h1>

	<div class="feed">
	{#each posts as post}
		<ArticleShort {post}/>
	{/each}
	</div>
</div>