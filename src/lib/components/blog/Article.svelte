<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import Meta from '$lib/components/blog/Meta.svelte';

	export let title;
	export let description;
	export let date;
	export let tags;
	export let readingTime;
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
	<!-- <script
		src="https://utteranc.es/client.js"
		repo="imperatrona/portfolio"
		issue-term="title"
		label="💬 Comments"
		theme="preferred-color-scheme"
		crossorigin="anonymous"
		async></script> -->
</div>

<style>
	:global(.utterances) {
		margin: 40px 0;
		/*		margin: 40px 0 0 -64px;*/
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
