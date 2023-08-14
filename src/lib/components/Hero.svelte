<script lang="ts">
	import PrimaryButton from '$lib/components/elements/PrimaryButton.svelte';
</script>

<div class="hero">
	<h1 class="hero_title">Product designer</h1>
	<p class="hero_title">Building experience users want to repeat</p>
	<PrimaryButton text="Contact me" />
</div>

<style>
	.hero {
		margin-bottom: 96px;
		max-width: 860px;
	}

	.hero_title {
		font-family: 'Gambarino', 'Source Serif 4', serif;
		font-size: 80px;
		line-height: 1.2;
		letter-spacing: -0.04em;
		text-align: left;
		margin: 0;
	}

	h1.hero_title {
		color: #beacd0;
	}
</style>
