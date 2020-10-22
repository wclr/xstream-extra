import { Stream } from 'xstream'
import throttle from 'xstream/extra/throttle'

declare module 'xstream' {
  interface Stream<T> {
    throttle(period: number): Stream<T>
  }
}

Stream.prototype.throttle = function (period: any): any {
  return this.compose(throttle(period))
}
