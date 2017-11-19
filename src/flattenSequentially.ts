import { Stream } from 'xstream';
import flattenSequentially from 'xstream/extra/flattenSequentially';

declare module 'xstream' {
  interface Stream<T> {
    flattenSequentially<R, S extends Stream<R>>(this: Stream<S>): Stream<R>;
  }
};

Stream.prototype.flattenSequentially = function (): any {
  return this.compose(flattenSequentially);
};
