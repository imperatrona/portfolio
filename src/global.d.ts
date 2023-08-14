// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '*?lqip' {
	const lqip: {
		lqip: string;
		width: number;
		height: number;
		src: string;
	};
	export default lqip;
}

export {};
