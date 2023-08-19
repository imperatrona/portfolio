<script lang="ts">
	import PrimaryButton from '$lib/components/elements/PrimaryButton.svelte';
	import SplitText from './elements/SplitText.svelte';
</script>

<div class="hero">
	<!-- <h1 class="hero_title h1"><SplitText value="Software designer." /></h1>
	<p class="hero_title h1">
		<SplitText value="Building experience users want to repeat" offset={18} />
	</p> -->
	<h1 class="hero_title h1">Software designer.</h1>
	<p class="hero_title h1">Building experience users want to repeat</p>
	<!-- <PrimaryButton text="Contact me" /> -->
</div>

<style>
	.hero {
		margin-bottom: 96px;
	}

	.hero_title {
		text-align: left;
		margin: 0;
	}

	h1.hero_title {
		color: #beacd0;
	}

	p.hero_title {
		margin-bottom: 40px;
	}
</style>
