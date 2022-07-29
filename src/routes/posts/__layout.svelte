<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({ url, fetch }) {
		const post = await fetch(`${url.pathname}.json`).then((res) => res.json());

		if (!post || !post.published) {
			return {
				status: 404,
				error: new Error('Post could not be found')
			};
		}

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import ArticleTitle from '$lib/components/ArticleTitle.svelte';
	import ArticleMeta from '$lib/components/ArticleMeta.svelte';

	export let post;
</script>

<PageHead title={post.title} description={post.description} />

<div class="container">
	<div class="box">
		<ArticleTitle title={post.title} />
		<ArticleMeta author={post.author} date={post.date} />
	</div>

	<div class="body">
		<slot />
	</div>
</div>

<style>
	@media screen and (min-width: 860px) {
		/*.box {
			max-width: calc(100% - var(--sidebar) - 1.2rem);
			margin-left: auto;
		}*/

		:global(.body > *) {
			max-width: calc(100% - var(--sidebar) - 1.2rem);
/*			margin-left: auto;*/
		}
	}
</style>
