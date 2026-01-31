import { cloneTemplate, getTemplate } from "@/features/router/router.template";
import { counterStore } from "@/features/counter/counter.store";
import { CounterCtrl } from "@/features/counter/counter.type";
import { cook } from '@/utils/kitchen';

const COUNTER_TEMPLATE_ID = 'counter';
const COUNTER_CONTAINER_ID = 'counter-container';
const COUNTER_BUTTONS_ID = 'counter-increment-button';

export const counterCtrl: CounterCtrl = {

  init(id: string) {
    this.unsubscribe = counterStore.subscribe(this.UI);
    const element = document.getElementById(id);
    if (!element) throw new Error(`Element not found: ${id}`);

    const template = getTemplate(COUNTER_TEMPLATE_ID);
    element.appendChild(cloneTemplate(template));

    const containerBtn = document.getElementById(COUNTER_BUTTONS_ID);
    if (!containerBtn) throw new Error('Container not found');

    containerBtn.addEventListener('click', this.action);

    this.UI();
  },
  UI() {
    const container = document.getElementById(COUNTER_CONTAINER_ID);
    if (container) cook(COUNTER_CONTAINER_ID, () => {
      container.textContent = counterStore.count.toString()
    });

  },
  action(event: Event) {

    const target = event.target as HTMLButtonElement;
    if (!target) throw new Error('Target not found');

    if (target.dataset.action === 'increment') {
      counterStore.count++;
    } else if (target.dataset.action === 'decrement') {
      counterStore.count--;
    }

  },
  cleanUp() {
    this.unsubscribe?.();
    const containerBtn = document.getElementById(COUNTER_CONTAINER_ID);
    if (containerBtn) containerBtn.removeEventListener('click', this.action);
  },
}

export default counterCtrl;