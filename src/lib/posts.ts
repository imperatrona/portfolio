import { browser } from '$app/environment';
import { parse } from 'node-html-parser';
import readingTime from '$lib/readingTime';

// we require some server-side APIs to parse all metadata
if (browser) {
	throw new Error(`get-posts.js should not be used on the browser`);
}

/**
 * Gets all of the posts with added metadata .
 *
 * This should only be used on the server, as some of the metadata we add requires
 * being on node (see `posts` below).
 *
 * For getting posts from the client, fetch from the /posts.json endpoint instead
 */
export function getPosts({
	page = 1,
	limit,
	language
}: { page?: number; limit?: number; language?: string } = {}) {
	let res = posts;

	if (language) {
		res = res.filter((post) => {
			return post.lang === language;
		});
	}

	if (res.length > 2) {
		res = res.map((post, index, allPosts) => ({
			...post,
			next: allPosts[index - 1],
			previous: allPosts[index + 1]
		}));
	}

	if (limit) {
		res.slice((page - 1) * limit, page * limit);
	}

	return res;
}

// Get all posts and add metadata
const posts = Object.entries(import.meta.glob('/posts/**/*.md', { eager: true }))
	.map(([filepath, post]) => {
		return {
			...post.metadata,

			// generate the slug from the file path
			slug: filepath
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop(),

			// whether or not this file is `my-post.md` or `my-post/index.md`
			// (needed to do correct dynamic import in posts/[slug].svelte)
			isIndexFile: filepath.endsWith('/index.md'),

			// remove timezone from date
			date: post.metadata.date ? new Date(post.metadata.date).toLocaleDateString() : undefined,

			// the svelte component
			component: post.default
		};
	})
	// Filter only published
	.filter((post) => post.published === true)
	// parse HTML output for content metadata (preview, reading time, toc)
	.map((post) => {
		const parsedHtml = parse(post.component.render().html);
		// get the first paragaph of the post to use for the preview
		const preview = parsedHtml.querySelector('p');

		delete post.component;

		return {
			...post,
			preview: {
				html: preview.toString(),
				// text-only preview (i.e no html elements), used for SEO
				text: preview.structuredText
			},

			// get estimated reading time for the post
			readingTime: readingTime(parsedHtml.structuredText)
		};
	})
	// sort by date
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
