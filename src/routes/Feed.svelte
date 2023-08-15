<script lang="ts">
	import OnMount from '$lib/components/OnMount.svelte';
	import type { Post } from '$lib/server/posts';

	import { fly } from 'svelte/transition';

	export let posts: Post[];
</script>

<div class="posts">
	<h1>Posts {posts.length}</h1>

	<div class="grid">
		{#each posts as post, key}
			<OnMount>
				<div class="post" in:fly={{ y: 10, duration: 600, delay: key * 150 }}>
					<a href="/writings/{post.slug}" title={post.title} data-sveltekit-prefetch>
						<span class="title">{post.title}</span>
						<div class="meta">
							<span>{post.readingTime} min to read</span>
							<span>{post.date}</span>
						</div>
					</a>
				</div>
			</OnMount>
		{/each}
	</div>
</div>

<!-- 
<div class="feed">
	{#each posts as post}
		<ArticleShort {post} />
	{/each}
</div>

<style>
	.feed {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 40px;
		margin-bottom: 168px;
	}
</style> -->

<style>
	:root {
		--post-feed-columns: 3;
	}
	.posts {
		min-height: 800px;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(var(--post-feed-columns), 1fr);
		gap: var(--feed-gap);
		max-width: 1200px;
	}

	.post {
		display: inline-block;
		width: 100%;
		margin-bottom: 40px;
		will-change: transform;
	}

	span + span::before {
		display: inline-block;
		content: ' · ';
	}

	a {
		text-decoration: none;
	}
	a .title {
		color: inherit;

		text-decoration-line: underline;
		text-decoration-color: var(--text-decoration-color);
		text-decoration-style: solid;
		text-decoration-thickness: 1px;
		text-underline-offset: 0.35em;

		transition: all ease-in-out 0.15s;
	}

	a:hover .title {
		color: var(--accent-color);
		text-decoration-color: var(--accent-color);
	}
</style>
