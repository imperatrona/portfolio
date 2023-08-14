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
		<h1 class="title">{title}</h1>
	</div>

	<div class="body">
		<slot />
	</div>

	<Meta {date} {tags} {readingTime} />
</div>

<style>
	:global(.utterances) {
		margin: 40px 0;
		max-width: 100%;
	}
	@media screen and (min-width: 860px) {
		:global(.body > *) {
			max-width: calc(100% - var(--sidebar) - 1.2rem);
		}

		:global(.body > figure) {
			max-width: 100%;
		}

		:global(.utterances) {
			margin: 40px 0;
			/*		margin: 40px 0 0 -64px;*/
			max-width: calc(100% - var(--sidebar) - 1.2rem);
		}
	}
</style>
