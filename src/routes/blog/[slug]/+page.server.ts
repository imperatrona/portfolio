import { getPosts } from '$lib/server/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;

	// get post with metadata
	const post = getPosts().find((post) => slug === post.slug);

	return { post };
}
