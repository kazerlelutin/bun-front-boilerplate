import type { Route } from "@features/routes/routes.type";
import homeCtrl from "@features/routes/home/home.ctrl";
import aboutCtrl from "@features/routes/about/about.ctrl";

export const routes: Map<string, Route> = new Map([
  ['/', { path: '/', title: 'Home', templateId: 'home', ctrl: homeCtrl }],
  ['/about', { path: '/about', title: 'About', templateId: 'about', ctrl: aboutCtrl }],
])