<script>
	import Image from '$lib/components/Image.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<Project>
	<div class="image widget">
		<Image src="./TwitterWidget/widget.png" alt="The Ornithologist poster" />
	</div>
	<h2>Twitter Widget</h2>
	<p>Did some code for myself and sharing it with everybody</p>
</Project>

<style>
	.image {
		border-radius: 1.2rem;
		overflow: hidden;
		margin-top: 1.2rem;
	}

	@media (min-width: 850px) {
		.image {
			margin-left: -1rem;
			margin-right: -1rem;
		}
	}

	.widget {
		width: 100%;
		max-width: 800px;
		margin: 8em auto !important;
	}
</style>
