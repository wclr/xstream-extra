import { Stream } from 'xstream'
import concat from 'xstream/extra/concat'

declare module 'xstream' {
  interface Stream<T> {
    concat<C = T>(...streams: Array<Stream<C>>): Stream<T | C>
  }
}

Stream.prototype.concat = function (...other: Array<Stream<any>>): any {
  return concat(this, ...other)
}
