# Vue

Ignore web-component as part of vuejs template.
```js
Vue.config.ignoredElements = [/revo-\w*/];
```
Define webcomponent `<revo-grid/>` and you can access it in a "Vue way".
```
<revo-grid :source.prop="source"/>
```