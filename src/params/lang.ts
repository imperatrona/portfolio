import type { ParamMatcher } from '@sveltejs/kit';
import { locales } from '$lib/translations';
import { get } from 'svelte/store';

export const match: ParamMatcher = (param) => {
  if (param == '' || get(locales).find(lang => lang === param)) {
    return true;
  }
  
  return false;
}