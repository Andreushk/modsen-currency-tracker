import { ChartEventsType } from '@/constants/chartEvents';

type ObserverType = (...args: unknown[]) => void;

class Observer {
  private observers: { [event: string]: ObserverType[] } = {};

  subscribe(event: ChartEventsType, observer: ObserverType) {
    if (!this.observers[event]) {
      this.observers[event] = [];
    }

    this.observers[event].push(observer);
  }

  unsubscribe(event: ChartEventsType, observer: ObserverType) {
    if (!this.observers[event]) {
      return;
    }

    this.observers[event] = this.observers[event].filter(
      (observerFromArray) => observerFromArray !== observer,
    );
  }

  event(event: ChartEventsType, ...args: unknown[]) {
    if (!this.observers[event]) {
      return;
    }

    this.observers[event].forEach((observer) => observer(...args));
  }
}

export default new Observer();
