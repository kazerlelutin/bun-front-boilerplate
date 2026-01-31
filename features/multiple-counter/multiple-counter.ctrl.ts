import type { MultipleCounterCtrl } from "@/features/multiple-counter/multiple-counter.type"
import { counterStore } from "@/features/counter/counter.store";
import { cloneTemplate, getTemplate } from "@/features/router/router.template";
import { cook } from "@/utils/kitchen";

const MULTIPLE_COUNTER_CONTAINER_ID = 'multiple-counter-container';
const MULTIPLIER_COUNT = 10;

export const multipleCounterCtrl: MultipleCounterCtrl = {
  init(id: string) {
    const container = document.getElementById(id);
    if (!container) throw new Error(`Element not found: ${id}`);
    this.unsubscribe = counterStore.subscribe(this.UI);
    try {
      container.appendChild(cloneTemplate(getTemplate('multiple-counter')));
    } catch (error) {
      throw new Error(`Error cloning template: ${error}`);
    }

  },
  UI() {
    const container = document.getElementById(MULTIPLE_COUNTER_CONTAINER_ID);
    const count = counterStore.count * MULTIPLIER_COUNT;
    if (container) cook(MULTIPLE_COUNTER_CONTAINER_ID, () => {
      container.textContent = count.toString()
    });
  },
}