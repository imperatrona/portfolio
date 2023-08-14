import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import lqip from 'vite-plugin-lqip';

const supportedExtensions = ['png', 'jpg', 'jpeg'];

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		lqip(),
		imagetools({
			defaultDirectives: (url) => {
				const extension = url.pathname.substring(url.pathname.lastIndexOf('.') + 1);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension,
						picture: true,
						w: '540;780;1400',
						quality: 90,
						as: 'picture'
					});
				}
				return new URLSearchParams();
			}
		})
	],
	server: {
		fs: {
			allow: ['./']
		}
	}
};

export default config;
