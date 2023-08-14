<script>
	export let src;
	export let alt;
</script>

<picture>
	{#each Object.entries(src.sources) as [format, images]}
		<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
	{/each}
	<img src={src.img.src} {alt} />
</picture>
