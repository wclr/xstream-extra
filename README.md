# xstream-extra

> Embedded xstream extra operators.

```bash
yarn add xstream-extra
```

```ts
import 'xstream-extra'

...
stream$.sampleCombine(sample$)

```

Instead of:

```ts
import sampleCombine from 'xstream/extra/sampleCombine'

...

stream$.compose(sampleCombine(sample$))

```
