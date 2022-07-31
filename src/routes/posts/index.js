import {posts} from './_posts'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url }) {
	return {
		body: {
			posts: posts
		}
	};
}
