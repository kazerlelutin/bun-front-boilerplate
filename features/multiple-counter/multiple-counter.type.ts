import { Unsubscribe } from "@/utils/proxy-sub";
import type { Ctrl } from "@/features/routes/routes.type";

export type MultipleCounterCtrl = Omit<Ctrl, 'init'> & {
  unsubscribe?: Unsubscribe;
  init: (id: string) => void;
  UI: () => void;
}