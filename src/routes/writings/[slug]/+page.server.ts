import { getPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;

	// get post with metadata
	const post = getPosts().find((post) => slug === post.slug);

	return { post };
}) satisfies PageServerLoad;
