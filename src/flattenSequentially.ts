import { Stream } from 'xstream'
import flattenSequentially from 'xstream/extra/flattenSequentially'

declare module 'xstream' {
  interface Stream<T> {
    flattenSequentially<R, T>(this: Stream<Stream<R> & T>): Stream<R> & T
  }
}

Stream.prototype.flattenSequentially = function (): any {
  return this.compose(flattenSequentially)
}
