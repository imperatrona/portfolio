<script lang="ts">
	import mediumZoom from 'medium-zoom';
	import type { Zoom, ZoomOptions } from 'medium-zoom';

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

	// Medium Zoom
	export let options: ZoomOptions | undefined = {
		margin: 60
	};

	let zoom: Zoom | undefined = undefined;

	function getZoom() {
		if (zoom === undefined) {
			zoom = mediumZoom(options);
		}

		return zoom;
	}

	function attachZoom(image: HTMLImageElement, options?: ZoomOptions) {
		const zoom = getZoom();
		zoom.attach(image);

		return {
			update(newOptions: ZoomOptions) {
				zoom.update(newOptions);
			},
			destroy() {
				zoom.detach();
			}
		};
	}
</script>

{#if typeof src !== 'string'}
	<picture>
		{#each Object.entries(src.sources) as [format, images]}
			<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
		{/each}
		<img src={src.img.src} {alt} use:attachZoom={options} />
	</picture>
{/if}
