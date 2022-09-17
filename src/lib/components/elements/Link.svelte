<script lang="ts">
	import { locale, defaultLocale } from '$lib/translations';

	export let href: string;
</script>

<a href={`${$locale == defaultLocale ? '' + href : '/' + $locale + (href == '/' ? '' : href)}`}
	><slot /></a
>
