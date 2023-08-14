<script>
	export let title;
	export let description;
	let formatedTitle;
	$: formatedTitle = title ? `${title} · Valentina` : 'Valentina';
</script>

<svelte:head>
	<title>{formatedTitle}</title>

	<meta property="og:site_name" content="Valentina" />
	<meta property="og:title" content={formatedTitle} />
	<meta property="og:description" content={description} />
</svelte:head>
