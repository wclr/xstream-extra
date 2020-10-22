import { Stream } from 'xstream'
import debounce from 'xstream/extra/debounce'

declare module 'xstream' {
  interface Stream<T> {
    debounce(period: number): Stream<T>
  }
}

Stream.prototype.debounce = function (period: any): any {
  return this.compose(debounce(period))
}
