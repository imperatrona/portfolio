<script>
	export let description;
	export let slug = '';

	const href = slug && `/posts/${slug}`;
</script>


<p>{description}</p>

{#if slug}
	<a {href}>Read More &rarr;</a>
{/if}
