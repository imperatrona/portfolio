import { parse } from 'node-html-parser';
import readingTime from '$lib/readingTime';

interface MarkdownImport {
	render: () => RenderFunc;
	$$render: () => string;
}

interface RenderFunc {
	html: string;
	css: {
		code: string;
		map: undefined;
	};
	head: string;
}

interface Metadata {
	title: string;
	description: string;
	date: string;
	layout: string;
	published: boolean;
	tags: string[];
}

/**
 * Gets all of the posts with added metadata .
 *
 * This should only be used on the server, as some of the metadata we add requires
 * being on node (see `posts` below).
 *
 * For getting posts from the client, fetch from the /posts.json endpoint instead
 */
export function getPosts({ page = 1, limit }: { page?: number; limit?: number } = {}) {
	let res = posts;

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
export const posts = Object.entries<{ default: MarkdownImport; metadata: Metadata }>(
	import.meta.glob('/posts/**/*.md', { eager: true })
)
	.map(([filepath, post]) => {
		const parsedHtml = parse(post.default.render().html);
		const preview = parsedHtml.querySelector('p');
		const slug = filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop();

		return {
			...post.metadata,
			slug,
			isIndexFile: filepath.endsWith('/index.md'),
			date: new Date(post.metadata.date).toLocaleDateString(),
			readingTime: readingTime(parsedHtml.structuredText),
			preview: {
				html: preview?.toString() ?? '',
				text: preview?.structuredText ?? ''
			}
		};
	})
	.filter((post) => post.published === true)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
