import { error } from '@sveltejs/kit';

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export async function load({ data: props }) {
	if (!props.post) {
		throw error(404, 'Post not found');
	}

	// load the markdown file based on slug
	const component = props.post.isIndexFile
		? // vite requires relative paths and explicit file extensions for dynamic imports
		  await import(`../../../../posts/${props.post.slug}/index.md`)
		: await import(`../../../../posts/${props.post.slug}.md`);

	return {
		post: props.post,
		component: component.default
	};
}
