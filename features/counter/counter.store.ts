import { createStore } from "@/utils/proxy-sub";

export const counterStore = createStore({
  count: 0,
}, {
  notifyOnProps: ['count'],
});