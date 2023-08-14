<script>
	import PrimaryButton from '$lib/components/elements/PrimaryButton.svelte';
</script>

<header class="header">
	<div class="logo">
		<a class="name" href="/">Valentina</a>
	</div>
	<a href="/writings">Articles</a>
	<PrimaryButton text="Contact me" />
</header>

<style>
	.header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 24px;
	}

	.logo {
		display: flex;
		flex-direction: column;
	}
	.name {
		font-size: 2.2rem;
		font-weight: 400;
		line-height: 32px;
		letter-spacing: -0.12em;
		text-align: left;
	}
</style>
