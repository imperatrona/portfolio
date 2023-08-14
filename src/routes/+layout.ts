import { get } from 'svelte/store';
import { redirect } from '@sveltejs/kit';
import { defaultLocale, locales, loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ url, params }) => {
	const { pathname } = url;
	let route = pathname;
	let lang = defaultLocale;

	const path = pathname.match(/\w+?(?=\/|$)/);
	if (path) {
		const pathLang = get(locales).find((lang) => lang == path);
		if (pathLang == 'en') {
			// redirect to path without en
			const path = pathname.replace(new RegExp(`^/${pathLang}`), '');
			throw redirect(307, path || '/');
		}
		if (pathLang) {
			const cleanPath = pathname.replace(new RegExp(`^/${pathLang}`), '');
			route = cleanPath == '' ? '/' : cleanPath;
			lang = pathLang;
		}
	}

	await loadTranslations(lang, route);
	return { i18n: { route, lang } };
};
