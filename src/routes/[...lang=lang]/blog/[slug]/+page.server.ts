import { getPosts } from '$lib/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug, lang } = params;

	// get post with metadata
	const post = getPosts({ language: lang }).find((post) => slug === post.slug);

	return { post };
}
