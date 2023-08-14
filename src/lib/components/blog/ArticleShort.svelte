<script lang="ts">
	import Meta from '$lib/components/blog/Meta.svelte';
	import type { Post } from '$lib/server/posts';
	export let post: Post;
</script>

<article>
	<h2 class="heading">
		<a href="/writings/{post.slug}" data-sveltekit-prefetch>{post.title}</a>
	</h2>

	{#if 'description' in post}
		<p class="description">{post.description}</p>
	{/if}

	<Meta date={post.date} tags={post.tags} readingTime={post.readingTime} />
</article>

<style>
	h2 {
		font-size: 1.2em;
		font-weight: 400;
	}

	.heading {
		margin: 0;
	}

	.description {
		margin: 4px 0 8px;
	}
</style>
