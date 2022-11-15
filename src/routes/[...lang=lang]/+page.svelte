<script>
	import { t } from '$lib/translations';
	import PageHead from '$lib/components/PageHead.svelte';

	import Image from '$lib/components/Image.svelte';
	import HornyThumb from './frame81.png?w=540;1280;2048&webp&meta';
	import TwitterWidget from '$lib/components/projects/TwitterWidget/index.svelte';
	import Hero from '$lib/components/Hero.svelte';
</script>

<PageHead title={$t('home.title')} description="An awesome blog about development with Svelte" />

<div>
	<div class="container">
		<p class="meta">{$t('common.selected.projects')}</p>
	</div>
	<TwitterWidget />
	<div class="project">
		<div class="image">
			<Image image={HornyThumb} alt="The Ornithologist poster" />
		</div>
		<h2>Horny</h2>
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
	}

	.project {
		background-color: rgb(var(--color-background-lift));
		border: 1px solid rgba(var(--color-text-primary), 0.05);
		border-radius: 2.4rem;
		padding: 0 1.2rem;
	}

	.project .image {
		border-radius: 1.2rem;
		overflow: hidden;
		margin-top: 1.2rem;
	}

	@media (min-width: 850px) {
		h1 {
			font-size: 7vw;
		}
		.project {
			margin: 0 auto;
			padding: 0 2.2rem;
		}

		.project .image {
			margin-left: -1rem;
			margin-right: -1rem;
		}
	}
</style>
