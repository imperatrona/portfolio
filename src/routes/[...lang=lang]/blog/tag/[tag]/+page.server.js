// import { error } from '@sveltejs/kit';
// import { posts } from '../../posts/_posts';

// /** @type {import('@sveltejs/kit').PageServerLoad} */
// export async function load({ url, params }) {
// 	const filterPosts = posts.filter((post) => {
// 		if ('tags' in post && post.tags.includes(params.tag)) {
// 			return true
// 		}
// 		return false
// 	});

// 	console.log(filterPosts)

// 	if (filterPosts.length < 1) {
// 		throw error(400, 'No Posts')
// 	}

// 	return {
// 		posts: filterPosts
// 	};
// }


import { redirect } from '@sveltejs/kit';
import { getPosts } from '$lib/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
  let page = 1
  let limit = 8

  if (params.page) {
    try {
      // a url of /posts/page/2 will come through as 'page/2' for params.page
      const index = params.page.split('page/').pop()

      if (index) {
        page = parseInt(index)
      }
    } catch (e) {
      console.error(e)
    }
  }

  const posts = getPosts({ limit, page }).filter((post) => {
		if ('tags' in post && post.tags.includes(params.tag)) {
			return true
		}
		return false
	});

  // if page doesn't exist, direct to page 1
  if (posts.length == 0 && page > 1) {
    throw redirect(302, '/blog');
  }

  return {
    posts,
    page,
    limit
  }
}
