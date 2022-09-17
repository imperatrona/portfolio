<script>
	import WidgetImage from './widget.png?w=540;780;1280&webp&meta';
	import Image from '$lib/components/Image.svelte';
</script>

<div class="project">
	<div class="image widget">
		<Image image={WidgetImage} alt="The Ornithologist poster" />
	</div>
	<h2>Twitter Widget</h2>
	<p>Did some code for myself and sharing it with everybody</p>
</div>

<style>
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
		.project {
			margin: 0 auto;
			padding: 0 2.2rem;
		}

		.project .image {
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
