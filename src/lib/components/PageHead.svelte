<script>
	import { t } from '$lib/translations';
	export let title;
	export let description;
	let formatedTitle;
	$: formatedTitle = title ? `${title} · ${$t('common.title')}` : $t('common.title');
</script>

<svelte:head>
	<title>{formatedTitle}</title>

	<meta property="og:site_name" content={$t('common.title')} />
	<meta property="og:title" content={formatedTitle} />
	<meta property="og:description" content={description} />
</svelte:head>
