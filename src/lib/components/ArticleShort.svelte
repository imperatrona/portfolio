<script>
	import Meta from '$lib/components/Meta.svelte'
	export let post;
	const href = `/posts/${post.slug}`;
</script>

<article>
	<h2 class="heading">
		<a {href} sveltekit:prefetch>{post.title}</a>
	</h2>
	
	{#if 'description' in post}
		<p class="description">{post.description}</p>
	{/if}
	
	<Meta date={post.date} tags={post.tags} />
</article>

<style>
	h2{
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
