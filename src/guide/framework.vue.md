# Vue

The easiest way just to use [vue-datagrid](https://www.npmjs.com/package/@revolist/vue-datagrid) adaptor.

Install with `npm i @revolist/vue-datagrid --save`

After just use VueJst component:

```vue
<template>
  <div id="app">
    <v-grid
      theme="compact"
      :source="rows"
      :columns="columns"
    ></v-grid>
  </div>
</template>
 
<script>
import VGrid from "@revolist/vue-datagrid";
export default {
  name: "App",
  data() {
    return {
      columns: [{
          prop: "name",
          name: "First",
        },
        {
          prop: "details",
          name: "Second",
      }],
      rows: [{
        name: "1",
        details: "Item 1",
      }]
    };
  },
  components: {
    VGrid,
  },
};
</script>
```

Check [Sandbox](https://codesandbox.io/s/data-vue-test-3wkzi?file=/src/App.vue) for real live sample.
<demo-vue/>

## Alternative webcomponent use:

Ignore web-component as part of vuejs template.
```js
Vue.config.ignoredElements = [/revo-\w*/];
```
Define webcomponent `<revo-grid/>` and you can access it in a "Vue way". Just remember properties are DOM properties, not Vue properties there. Hence `:source.prop="source"` access required.
```
<revo-grid :source.prop="source"/>
```