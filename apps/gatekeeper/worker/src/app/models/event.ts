export class Event {
  event: string;
  run: (...args: any[]) => Promise<void>;
}
