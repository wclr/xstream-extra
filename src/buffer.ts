import { Stream } from 'xstream'
import buffer from 'xstream/extra/buffer'

declare module 'xstream' {
  interface Stream<T> {
    buffer(s: Stream<any>): Stream<Array<T>>
  }
}

Stream.prototype.buffer = function (s: any): any {
  return this.compose(buffer(s))
}
