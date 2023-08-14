<script lang="ts">
	import mediumZoom from 'medium-zoom';
	import type { Zoom, ZoomOptions } from 'medium-zoom';

	interface Image {
		src: string;
		w: string;
		h?: number;
	}
	interface Source {
		src: {
			sources: {
				[key: string]: Image[];
			};
			img: Image;
		};
		lqip: string;
		width: number;
		height: number;
	}
	export let src: Source | string;
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

{#if typeof src !== 'string' && src.src}
	<picture>
		{#if src.src.sources}
			{#each Object.entries(src.src.sources) as [format, images]}
				<source
					srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')}
					type={'image/' + format}
				/>
			{/each}
		{/if}
		{#if src.lqip && src.src.img}
			<img
				src={src.src.img.src}
				{alt}
				height={src.height}
				width={src.width}
				style="background: url({src.lqip}) no-repeat center/cover"
				loading="lazy"
				decoding="async"
				use:attachZoom={options}
			/>
		{/if}
	</picture>
{/if}

<!-- {#if typeof src !== 'string' && src.src.sources}
	<picture>
		{#each Object.entries(src.src.sources) as [format, images]}
			<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
		{/each}
		<img src={src.src.img.src} {alt} use:attachZoom={options} />
	</picture>
{/if} -->

<!-- {#if typeof src !== 'string'}
	<picture>
		{#each Object.entries(src.src.sources) as [format, images]}
			<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
		{/each}
		<img src={src.src.img.src} {alt} use:attachZoom={options} />
	</picture>
{/if} -->
