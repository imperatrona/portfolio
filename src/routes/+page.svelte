<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';

	import Hero from '$lib/components/Hero.svelte';
	import type { PageData } from './$types';
	import Feed from './Feed.svelte';

	export let data: PageData;
</script>

<PageHead title="Software designer" description="Building experience users want to repeat" />
<Hero />
{#if data.posts.length > 0}
	<Feed posts={data.posts} />
{/if}
