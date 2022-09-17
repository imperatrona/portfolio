<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import { t, locale } from '$lib/translations';

	/** @type {import('./$types').PageData} */
	export let data;
	$: ({ posts, page } = data);

	$: isFirstPage = page === 1;
	$: hasNextPage = posts[posts.length - 1]?.previous;
</script>

<PageHead title={$t('common.posts')} description="Blog" />

<div class="container">
	<h1>{$t('common.posts')}</h1>

	<div class="feed">
		{#each posts as post}
			<!-- <ArticleShort {post} /> -->
			<div class="post">
				<p class="date">{post.date}</p>
				<a href={($locale == 'en' ? '' : `/${$locale}`) + `/blog/${post.slug}`} class="title"
					>{post.title}</a
				>
				<p class="category">{post.category ? post.category : ''}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	p {
		margin: 0;
	}

	.feed {
		display: flex;
		flex-direction: column;
	}

	.post {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 0.5em 0;
		border-bottom: 1px solid #ffffff0f;
	}

	@media (min-width: 860px) {
		.post {
			display: grid;
			grid-template-columns: 20% 60% 20%;
			gap: 20px;
		}
	}
</style>
