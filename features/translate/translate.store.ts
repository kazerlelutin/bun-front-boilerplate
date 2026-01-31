import { createStore } from "@utils/proxy-sub";
import type { Language, TranslateStore } from "@features/translate/translate.types";
import { getLanguageFromLS } from "@features/translate/translate.utils";
import { UI } from "@features/translate/translate.const";
import { t } from "@features/translate/translate";

export const setCurrentLanguage = (language: Language) => {
  translateStore.currentLanguage = language;
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach((element) => {
    const translate = element.getAttribute('data-translate') ?? '';
    if (translate) (element as HTMLElement).innerText = t(UI[translate as keyof typeof UI]);

  });
}



export const translateStore = createStore<TranslateStore>({
  currentLanguage: getLanguageFromLS() || 'fr',
  setCurrentLanguage,
}, {
  notifyOnProps: ['currentLanguage'],
  transformData: (_prop, value) => value
});