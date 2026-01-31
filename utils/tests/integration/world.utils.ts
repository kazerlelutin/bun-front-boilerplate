import { World } from "@cucumber/cucumber"

export class BunFrontBoilerplateWorld extends World {
  private context: {
    apiUrl: string
    currentPath: string
    currentLanguage: string
  }

  constructor(props: {
    attach: (data: unknown, mediaType: string) => void
    parameters: { [key: string]: string }
  }) {
    super(props as any)
    this.context = {
      apiUrl: '',
      currentPath: '/',
      currentLanguage: 'fr',
    }
  }

  get apiUrl() {
    return this.context.apiUrl
  }
  set apiUrl(url: string) {
    this.context.apiUrl = url
  }

  get currentPath() {
    return this.context.currentPath
  }
  set currentPath(path: string) {
    this.context.currentPath = path
  }

  get currentLanguage() {
    return this.context.currentLanguage
  }
  set currentLanguage(lang: string) {
    this.context.currentLanguage = lang
  }
}
