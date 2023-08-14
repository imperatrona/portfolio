<script lang="ts">
	interface Image {
		src: string;
		w: string;
		h?: number;
	}
	interface Src {
		sources: {
			[key: string]: Image[];
		};
		img: Image;
	}
	export let src: Src | string;
	export let alt: string;
</script>

{#if typeof src !== 'string'}
	<picture>
		{#each Object.entries(src.sources) as [format, images]}
			<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
		{/each}
		<img src={src.img.src} {alt} />
	</picture>
{/if}
