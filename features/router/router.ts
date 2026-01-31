import { routerState } from '@features/router/router.state';
import { handleRouteChange, handleLinkClick } from '@features/router/router.handlers';

const setupRouteChangeListener = (): void => {
  routerState.onRouteChange = handleRouteChange;
};

const setupNavigation = (): void => {
  document.querySelectorAll('[data-internal]').forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });
};

export const router = {
  init: (): void => {
    setupRouteChangeListener();
    setupNavigation();
    const currentRoute = routerState.routes.get(window.location.pathname);
    if (currentRoute) {
      handleRouteChange(currentRoute);
    }
  },
  navigate: (path: string): void => {
    routerState.currentPage = path;
  },
  addRoute: (path: string, route: { title: string; templateId: string }): void => {
    routerState.routes.set(path, { path, ...route });
  }
};
