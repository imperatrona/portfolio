import { getPosts } from '$lib/posts'

/** @type {import('./__types/[...page]').RequestHandler} */
export async function GET({ params }) {
  let page = 1
  let limit = 2

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

  const posts = getPosts({ limit, page })

  // if page doesn't exist, direct to page 1
  if (posts.length == 0 && page > 1) {
    return {
      status: 302,
      headers: {
        location: `/blog`
      }
    }
  }

  return {
    body: {
      posts,
      page,
      limit
    }
  }
}
