<script>
	import { t } from '$lib/translations';
</script>

<div class="hero">
	<h1 class="hero_title">{$t('home.title')}</h1>
	<p class="hero_title">{$t('home.hero')}</p>
</div>

<style>
	.hero {
		padding-left: var(--padding);
		padding-right: var(--padding);
		margin-bottom: 96px;
	}
	.hero_title {
		font-size: calc(7vw + 1vh + 2vmin);
		line-height: 1.2;
		font-weight: 350;
		letter-spacing: -0.05em;
		text-align: left;
		margin: 0;
	}

	h1.hero_title {
		color: #beacd0;
	}

	@media (min-width: 850px) {
		.hero_title {
			font-size: 8vw;
		}
	}

	@media (min-width: 1250px) {
		.hero_title {
			font-size: 100px;
		}
	}
</style>
