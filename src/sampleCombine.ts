import { Stream } from 'xstream';
import sampleCombine from 'xstream/extra/sampleCombine';

export interface SampleCombineSignature<T> {
  (): Stream<[T]>;
  <T1>(s1: Stream<T1>): Stream<[T, T1]>;
  <T1, T2>(s1: Stream<T1>, s2: Stream<T2>): Stream<[T, T1, T2]>;
  <T1, T2, T3>(s1: Stream<T1>, s2: Stream<T2>, s3: Stream<T3>): Stream<[T, T1, T2, T3]>;
  <T1, T2, T3, T4>(s1: Stream<T1>, s2: Stream<T2>, s3: Stream<T3>, s4: Stream<T4>): Stream<[T, T1, T2, T3, T4]>;
  <T1, T2, T3, T4, T5>(s1: Stream<T1>, s2: Stream<T2>, s3: Stream<T3>, s4: Stream<T4>, s5: Stream<T5>): Stream<[T, T1, T2, T3, T4, T5]>;
  <T1, T2, T3, T4, T5, T6>(s1: Stream<T1>, s2: Stream<T2>, s3: Stream<T3>, s4: Stream<T4>, s5: Stream<T5>, s6: Stream<T6>): Stream<[T, T1, T2, T3, T4, T5, T6]>;
  <T1, T2, T3, T4, T5, T6, T7>(s1: Stream<T1>, s2: Stream<T2>, s3: Stream<T3>, s4: Stream<T4>, s5: Stream<T5>, s6: Stream<T6>, s7: Stream<T7>): Stream<[T, T1, T2, T3, T4, T5, T6, T7]>;
  <T1, T2, T3, T4, T5, T6, T7, T8>(s1: Stream<T1>, s2: Stream<T2>, s3: Stream<T3>, s4: Stream<T4>, s5: Stream<T5>, s6: Stream<T6>, s7: Stream<T7>, s8: Stream<T8>): Stream<[T, T1, T2, T3, T4, T5, T6, T7, T8]>;
  (...streams: Array<Stream<any>>): Stream<Array<any>>;
}

declare module 'xstream' {
  interface Stream<T> {
    sampleCombine: SampleCombineSignature<T>;
  }
};

Stream.prototype.sampleCombine = function (...args: any[]): any {
  return this.compose(sampleCombine(...args));
};
