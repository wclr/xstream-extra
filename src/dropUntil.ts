import { Stream } from 'xstream'
import dropUntil from 'xstream/extra/dropUntil'

declare module 'xstream' {
  interface Stream<T> {
    dropUntil(other: Stream<any>): Stream<T>
  }
}

Stream.prototype.dropUntil = function (other: any): any {
  return this.compose(dropUntil(other))
}
