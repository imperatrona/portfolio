<script>
	export let image;
	export let alt;

	const srcset = image.map(media => {
		if (!media.cropped) {
			return `${media.src} ${media.width}w`
		}
	})
</script>
<figure>
<img
	sizes="(max-width: 600px) 540px, (max-width: 1400px) 1280px,
	            2048px"
	srcset={srcset}
	src={image[image.length - 1].src}
	height={image[image.length - 1].height}
	width={image[image.length - 1].width}
	loading="lazy"
	alt={alt}>
</figure>

<style>
	img{display: block;}
</style>