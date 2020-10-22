import { Stream } from 'xstream'
import delay from 'xstream/extra/delay'

declare module 'xstream' {
  interface Stream<T> {
    delay(period: number): Stream<T>
  }
}

Stream.prototype.delay = function (period: any): any {
  return this.compose(delay(period))
}
