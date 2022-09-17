<script>
	import Article from '$lib/components/blog/Article.svelte';
	import PostNav from '$lib/components/blog/PostNav.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ post, component } = data);
</script>

<div class="container">
	<Article {...post}>
		<svelte:component this={component} />
	</Article>

	<PostNav next={post.next} prev={post.previous} />

	<script
		src="https://utteranc.es/client.js"
		repo="jonaaronru/portfolio"
		issue-term="title"
		label="💬 Comments"
		theme="preferred-color-scheme"
		crossorigin="anonymous"
		async>
	</script>
</div>
