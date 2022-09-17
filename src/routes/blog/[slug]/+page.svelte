<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ props }) {
		if (!props.post) {
			return {
				status: 404,
				error: 'Post not found'
			};
		}

		// load the markdown file based on slug
		const component = props.post.isIndexFile
			? // vite requires relative paths and explicit file extensions for dynamic imports
			  await import(`../../../posts/${props.post.slug}/index.md`)
			: await import(`../../../posts/${props.post.slug}.md`);

		return {
			props: {
				post: props.post,
				component: component.default
			}
		};
	}
</script>

<script>
	export let post;
</script>

<div class="container">
	<!-- <a href={post.next?.slug}> prev </a> -->
	<div class="pagination">
		<ul>
		{#if 'previous' in post}
			<li>
				<div class="meta">⌥← Previous</div>
				<a href={post.previous.slug}> {post.previous.title} </a>
			</li>
		{/if}
		{#if 'next' in post}
			<li>
				<div class="meta">Next →⌥</div>
				<a href={post.next.slug}> {post.next.title} </a>
			</li>
		{/if}
		</ul>
	</div>

	<code><pre>{JSON.stringify(post, null, 2)}</pre></code>
</div>

<style>
	.pagination > ul {
		display: flex;
	}
	li {
		flex: 1;
	}
</style>
