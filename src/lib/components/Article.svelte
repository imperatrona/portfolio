<script>
	import PageHead from '$lib/components/PageHead.svelte';
	import Meta from '$lib/components/Meta.svelte';

	export let title;
	export let description;
	export let date;
	export let tags;
</script>

<PageHead title={title} description={description} />

<div class="container">
	<div class="box">
		<h1 class="title">{title}</h1>
	</div>

	<div class="body">
		<slot />
	</div>

	
	<Meta {date} {tags} />
</div>

<style>
	@media screen and (min-width: 860px) {
		:global(.body > *) {
			max-width: calc(100% - var(--sidebar) - 1.2rem);
		}

		:global(.body > figure){
			max-width: 100%;
		}
	}
</style>