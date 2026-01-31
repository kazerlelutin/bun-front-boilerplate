import { activeFooterLink } from '@/utils/active-footer-link';
import type { Ctrl } from '@features/routes/routes.type';
import counterCtrl from '@/features/counter/counter.ctrl';
import { multipleCounterCtrl } from '@/features/multiple-counter/multiple-counter.ctrl';

const homeCtrl: Ctrl = {
  init() {
    activeFooterLink('/');
    counterCtrl?.init?.('counter-home');
    multipleCounterCtrl?.init?.('multiple-counter-home');
  },
  cleanUp() {
    counterCtrl?.cleanUp?.();
  }
}

export default homeCtrl;