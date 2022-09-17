import { redirect } from '@sveltejs/kit';
import { getPosts } from '$lib/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = getPosts({ language: params.lang ? params.lang : 'en' });

	return { posts };
}
