<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';

	import Hero from '$lib/components/Hero.svelte';
	import type { PageData } from './$types';
	import Feed from './Feed.svelte';

	export let data: PageData;
</script>

<PageHead title="Product designer" description="An awesome blog about development with Svelte" />
<Hero />
{#if data.posts.length > 0}
	<Feed posts={data.posts} />
{/if}
