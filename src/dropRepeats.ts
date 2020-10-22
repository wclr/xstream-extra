import { Stream } from 'xstream'
import dropRepeats from 'xstream/extra/dropRepeats'

declare module 'xstream' {
  interface Stream<T> {
    dropRepeats(isEqual?: ((x: T, y: T) => boolean) | undefined): Stream<T>
  }
}

Stream.prototype.dropRepeats = function (isEqual: any): any {
  return this.compose(dropRepeats(isEqual))
}
