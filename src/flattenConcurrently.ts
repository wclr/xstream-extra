import { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';

declare module 'xstream' {
  interface Stream<T> {
    flattenConcurrently<R, S extends Stream<R>>(this: Stream<S>): Stream<R>;
  }
};

Stream.prototype.flattenConcurrently = function (): any {
  return this.compose(flattenConcurrently);
};
