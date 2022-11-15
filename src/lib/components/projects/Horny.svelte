<script>
	import WidgetImage from './Horny/IMG-01.png?w=540;780;1280&format=avif;webp;png&meta';
	import Image from '$lib/components/Image.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<Project>
	<div class="image">
		<Image image={WidgetImage} alt="The Ornithologist poster" />
	</div>
	<h2>Twitter Widget</h2>
	<p>Did some code for myself and sharing it with everybody</p>
</Project>

<style>
	.image {
		border-radius: 1.2rem;
		overflow: hidden;
		margin-top: 1.2rem;
		background-color: rgb(28, 28, 28);
	}

	@media (min-width: 850px) {
		.image {
			margin-left: -1rem;
			margin-right: -1rem;
		}
	}
</style>
