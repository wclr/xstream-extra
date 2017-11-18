import { Stream } from 'xstream';
import pairwise from 'xstream/extra/pairwise';

declare module 'xstream' {
  interface Stream<T> {
    pairwise(): Stream<[T, T]>;
  }
};

Stream.prototype.pairwise = function (): any {
  return this.compose(pairwise);
};
