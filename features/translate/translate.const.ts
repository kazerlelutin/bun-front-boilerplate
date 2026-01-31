import type { UiTranslation } from "@features/translate/translate.types";

export const LS_KEY = 'bun_language';
export const availableLanguages = new Set(['fr', 'en', 'ko']);

export const UI: UiTranslation = {
  "home": {
    "fr": "Accueil",
    "en": "Home",
    "ko": "홈"
  },
  "about": {
    "fr": "À propos",
    "en": "About",
    "ko": "정보"
  },
  "support-me": {
    "fr": "Offrir un café",
    "en": "Buy me a coffee",
    "ko": "커피 사주기"
  },
  "follow-updates": {
    "fr": "Quoi de neuf ?",
    "en": "What's new?",
    "ko": "새로운 기능"
  },
  "multiple-counter": {
    "fr": "Compteur multiple",
    "en": "Multiple counter",
    "ko": "다중 카운터"
  }
} as const;
