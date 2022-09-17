import { posts } from '../posts/_posts';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function GET({ url, params }) {
	const filterPosts = posts.filter((post) => {
		if ('tags' in post && post.tags.includes(params.tag)) {
			return true
		}
		return false
	});

	console.log(filterPosts)

	if (filterPosts.length < 1) {
		return{
			status: 400
		}
	}

	return {
		body: {
			posts: filterPosts
		}
	};
}
