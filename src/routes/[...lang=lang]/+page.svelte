<script>
	import { t } from '$lib/translations';
	import PageHead from '$lib/components/PageHead.svelte';

	import TwitterWidget from '$lib/components/projects/TwitterWidget.svelte';
	import Horny from '$lib/components/projects/Horny.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<PageHead title={$t('home.title')} description="An awesome blog about development with Svelte" />

<div>
	<div class="container">
		<p class="meta">{$t('common.selected.projects')}</p>
	<Spacer />
	</div>
	<TwitterWidget />
	<div class="projects">
		<Horny />
		<TwitterWidget />
	</div>
</div>

<style>
	h1 {
		font-size: calc(7vw + 1vh + 2vmin);
		line-height: 1.2;
		font-weight: 350;
		letter-spacing: -0.05em;
		text-align: left;
		margin: 0;
	.projects {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	}

	}

	@media (min-width: 850px) {
		}
		}
		}
	}
</style>
