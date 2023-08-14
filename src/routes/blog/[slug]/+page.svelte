<script lang="ts">
	import Article from '$lib/components/blog/Article.svelte';
	import PostNav from '$lib/components/blog/PostNav.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ post, component } = data);
</script>

<div class="container">
	<Article {...post}>
		<svelte:component this={component} />
	</Article>

	<PostNav next={post.next} prev={post.previous} />
</div>
