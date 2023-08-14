<script lang="ts">
	import Article from '$lib/components/blog/Article.svelte';
	import PostNav from '$lib/components/blog/PostNav.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Article {...data.post}>
	<svelte:component this={data.component} />
</Article>

<PostNav next={data.post.next} prev={data.post.previous} />
