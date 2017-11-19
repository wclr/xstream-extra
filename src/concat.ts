import { Stream } from 'xstream';
import concat from 'xstream/extra/concat';

declare module 'xstream' {
  interface Stream<T> {
    concat(...streams: Array<Stream<T>>): Stream<T>
  }
};

Stream.prototype.concat = function (...other: Array<Stream<any>>): any {
  return concat(this, ...other);
};
