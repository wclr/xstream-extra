import { Stream } from 'xstream'
import flattenConcurrently from 'xstream/extra/flattenConcurrently'

declare module 'xstream' {
  interface Stream<T> {
    flattenConcurrently<R, T>(this: Stream<Stream<R> & T>): Stream<R> & T
  }
}

Stream.prototype.flattenConcurrently = function (): any {
  return this.compose(flattenConcurrently)
}
