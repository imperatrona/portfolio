<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Meta from '$lib/components/blog/Meta.svelte';

	export let title: string;
	export let description: string;
	export let date: string;
	export let tags: string[];
	export let readingTime: number;
</script>

<PageHead {title} {description} />
<div>
	<div class="box">
		<h1 class="title h1">{title}</h1>
	</div>

	<div class="body">
		<slot />
	</div>

	<Meta {date} {tags} {readingTime} />
</div>

<style>
	@media screen and (min-width: 860px) {
		:global(.body > *) {
			max-width: 860px;
		}

		:global(.body > figure) {
			max-width: 100%;
		}

	}
</style>
