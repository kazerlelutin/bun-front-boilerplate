import { translateStore } from "@features/translate/translate.store";
import type { Translation } from "@features/translate/translate.types";

export const t = (translations: Translation): string => {
  return translations?.[translateStore.currentLanguage] || translations?.fr || 'Not found';
}

