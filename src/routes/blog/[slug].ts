import { getPosts } from '$lib/posts'

/** @type {import('./__types/[slug]').RequestHandler} */
export async function GET({ params }) {
  const { slug } = params

  // get post with metadata
  const post = getPosts().find((post) => slug === post.slug)

  return {
    body: { post }
  }
}
