import { Stream } from 'xstream';
import flattenSequentially from 'xstream/extra/flattenSequentially';

declare module 'xstream' {
  interface Stream<T> {
    flattenSequentially<R, S extends Stream<R>>(this: Stream<S>): S;
  }
};

Stream.prototype.flattenSequentially = function (): any {
  return this.compose(flattenSequentially);
};
