<script>
	export let image;
	export let alt;

	let data = {};

	image.forEach((media) => {
		if (!media.cropped) {
			if (!data[media.format]) {
				data[media.format] = {
					srcset: [],
					nodes: []
				};
			}

			data[media.format].nodes.push(media);
			data[media.format].srcset.push(`${media.src} ${media.width}w`);
		}
	});
</script>

<figure>
	<picture>
		{#each Object.keys(data) as format}
			{#if Object.keys(data)[Object.keys(data).length - 1] == format}
				<img
					sizes="(max-width: 600px) 540px, (max-width: 1400px) 1280px,
	            2048px"
					srcset={data[format].srcset}
					src={data[format].nodes[data[format].nodes.length - 1].src}
					height={data[format].nodes[data[format].nodes.length - 1].height}
					width={data[format].nodes[data[format].nodes.length - 1].width}
					loading="lazy"
					{alt}
				/>
			{:else}
				<source type={`image/${format}`} srcset={data[format].srcset} />
			{/if}
		{/each}
	</picture>
</figure>

<style>
	img {
		display: block;
	}
</style>
