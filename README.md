# xstream-extra

> Embedded xstream extra operators.

```bash
yarn add xstream-extra
```

```ts
import 'xstream-extra' // or import xs from xstrem


...
stream$
  .sampleCombine(sample$)
  .delay(1000)

```

Instead of:

```ts
import sampleCombine from 'xstream/extra/sampleCombine'
import delay from 'xstream/extra/delay'

...

stream$
  .compose(sampleCombine(sample$))
  .compose(delay(1000))

```
