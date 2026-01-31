import { availableLanguages, LS_KEY } from "@features/translate/translate.const";
import type { Language } from "@features/translate/translate.types";

export function getLanguageFromLS(): Language {
  if (typeof localStorage === 'undefined') return 'fr';
  const language = localStorage.getItem(LS_KEY);
  if (!language) {
    const browserLanguage = navigator.language.split('-')[0];

    if (availableLanguages.has(browserLanguage as Language)) {
      localStorage.setItem(LS_KEY, browserLanguage as Language);
      return browserLanguage as Language;
    }

    return 'fr';
  }
  return 'fr';
}