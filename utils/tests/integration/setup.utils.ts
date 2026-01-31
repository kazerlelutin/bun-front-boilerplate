import { GlobalRegistrator } from "@happy-dom/global-registrator"

GlobalRegistrator.register()

import {
  After,
  Before,
  setDefaultTimeout,
  setWorldConstructor,
} from "@cucumber/cucumber"
import { BunFrontBoilerplateWorld } from "./world.utils.js"

setDefaultTimeout(60 * 1000)
setWorldConstructor(BunFrontBoilerplateWorld)

Before(async function () {
  document.title = 'Bun Front Boilerplate'
  document.body.innerHTML = `
    <main id="main-content" class="app-main"></main>
    <nav class="app-footer-nav">
      <a href="/" data-internal data-translate="home">Home</a>
      <a href="/about" data-internal data-translate="about">About</a>
    </nav>
    <div id="PAGES">
      <template id="home"><div id="home-content"><div id="counter-container"></div><div id="counter-increment-button"><button data-action="decrement">-</button><button data-action="increment">+</button></div></div></template>
      <template id="about"><div id="about-container"></div></template>
    </div>
    <div id="counter-home"></div>
    <div id="multiple-counter-home"></div>
    <span id="version"></span>
  `
  if (typeof window.history.replaceState === 'function') {
    window.history.replaceState({}, '', '/')
  }
})

After(async function () {
  // Here we can do something after each scenario
})

