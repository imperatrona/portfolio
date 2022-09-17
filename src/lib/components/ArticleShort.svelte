<script>
	import Meta from '$lib/components/Meta.svelte';
	import { locale } from '$lib/translations';
	export let post;
</script>

<article>
	<!-- {#if 'thumbnail' in post}
		<img src="~/posts/the-ornithologist/ehS7B0DOTTlAVbJPae54TJybLk1.jpg" />
	{/if} -->

	<h2 class="heading">
		<a
			href={post.slug && ($locale == 'en' ? '' : `/${$locale}`) + `/blog/${post.slug}`}
			sveltekit:prefetch>{post.title}</a
		>
	</h2>

	{#if 'description' in post}
		<p class="description">{post.description}</p>
	{/if}

	<Meta date={post.date} tags={post.tags} />
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
