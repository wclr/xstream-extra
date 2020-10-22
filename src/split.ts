import { Stream } from 'xstream'
import split from 'xstream/extra/split'

declare module 'xstream' {
  interface Stream<T> {
    split(separator: Stream<any>): Stream<Stream<T>>
  }
}

Stream.prototype.split = function (separator: any): any {
  return this.compose(split(separator))
}
