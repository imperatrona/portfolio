<script>
	import { t } from '$lib/translations';
	import PageHead from '$lib/components/PageHead.svelte';

	import TwitterWidget from '$lib/components/projects/TwitterWidget.svelte';
	import Horny from '$lib/components/projects/Horny.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import SelectedHeader from '$lib/components/SelectedHeader.svelte';
</script>

<PageHead title={$t('home.title')} description="An awesome blog about development with Svelte" />

<div>
	<Hero />
	<Spacer />
	<SelectedHeader />
	<div class="projects">
		<Horny />
		<TwitterWidget />
	</div>
</div>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
</style>
