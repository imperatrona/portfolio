import { getPosts } from '$lib/server/posts';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const posts = getPosts();
	return { posts };
}) satisfies PageServerLoad;
