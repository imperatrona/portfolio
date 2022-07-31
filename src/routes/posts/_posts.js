const modules = {
  ...import.meta.glob(`./*/index.{md,svx,svelte.md}`),
  ...import.meta.glob(`./*.{md,svx,svelte.md}`)
};

const postPromises = [];

for (let [path, resolver] of Object.entries(modules)) {
  const slug = path.split('/')[1].split('.')[0]
  const promise = resolver().then((post) => ({
    slug,
    ...post.metadata
  }));

  postPromises.push(promise);
}

const postsData = await Promise.all(postPromises);
export const posts = postsData.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));