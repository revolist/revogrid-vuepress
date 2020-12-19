# Webcomponent installation

Alternative grid can be imported as webcomponent:

Ignore web-component as part of vuejs template.
```js
Vue.config.ignoredElements = [/revo-\w*/];
```

:::tip
If you are using npm modules don't forget to define custom component as part of environment
:::
```js
import {defineCustomElements} from '@revolist/revogrid/loader';
defineCustomElements();
```

Define webcomponent `<revo-grid/>` and you can access it in a "Vue way". Just remember properties are DOM properties, not Vue properties there. Hence `:source.prop="source"` access required.
```
<revo-grid :source.prop="source"/>
```