export class Event {
  event: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  run: (...args: any[]) => Promise<void>;
}
