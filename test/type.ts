import xs, { Stream } from 'xstream-extra'

const s$: Stream<number> = xs.periodic(1000).debounce(1000).dropRepeats()
