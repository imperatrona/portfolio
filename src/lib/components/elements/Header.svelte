<script>
	import { t, locale, defaultLocale } from '$lib/translations';
	import PrimaryButton from '$lib/components/elements/PrimaryButton.svelte';
	import LanguageSwitcher from '$lib/components/elements/LanguageSwitcher.svelte';
</script>

<header class="header">
	<div class="logo">
		<a class="name" href={$locale == defaultLocale ? '/' : `/${$locale}`}>Valentina</a>
	</div>
	<LanguageSwitcher />
	<PrimaryButton text={$t('common.button.contact')} />
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;

		margin: 0 auto;
		padding: 1.2rem;
	}

	.logo {
		display: flex;
		flex-direction: column;
		/* margin-right: auto; */
	}
	.name {
		font-size: 2.2rem;
		font-weight: 400;
		line-height: 32px;
		letter-spacing: -0.12em;
		text-align: left;
	}

	@media (min-width: 860px) {
		.header {
			margin-top: 16px;
			/* width: calc(100vw - 96px); */
		}
	}
</style>
