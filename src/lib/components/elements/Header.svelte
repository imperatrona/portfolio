<script>
	import { t, locale, defaultLocale } from '$lib/translations';
	import PrimaryButton from '$lib/components/elements/PrimaryButton.svelte';
	import LanguageSwitcher from '$lib/components/elements/LanguageSwitcher.svelte';
</script>

<div class="box">
	<div class="logo">
		<a class="name" href={$locale == defaultLocale ? '/' : `/${$locale}`}>Valentina</a>
		<!-- <span class="status">
			<span class="active" role="presentation">⦁</span> Avaliable
		</span> -->
	</div>
	<div class="blog">
		<a href={($locale == defaultLocale ? '' : `/${$locale}`) + '/blog'}>{$t('common.blog')}</a>
	</div>
	<LanguageSwitcher />
	<PrimaryButton text={'✶ ' + $t('common.button.contact')} />
</div>

<style>
	@media (max-width: 860px) {
		.blog {
			display: none;
		}
	}
	.box {
		display: flex;
		align-items: center;
		gap: 32px;

		margin: 0 auto;
		padding: 1.2rem;
	}

	.logo {
		display: flex;
		flex-direction: column;
		margin-right: auto;
	}
	.name {
		font-size: 2.2rem;
		font-weight: 400;
		line-height: 32px;
		letter-spacing: -0.12em;
		text-align: left;
	}

	@media (min-width: 860px) {
		.box {
			margin: 16px auto;
			width: calc(100vw - 96px);
		}
	}
</style>
