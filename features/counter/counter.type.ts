import { Unsubscribe } from "@/utils/proxy-sub";
import type { Ctrl } from "@features/routes/routes.type";

export type CounterStore = {
  count: number;
}

export type CounterCtrl = Omit<Ctrl, 'init'> & {
  unsubscribe?: Unsubscribe;
  init: (id: string) => void;
  UI: () => void;
  action: (event: Event) => void;
}