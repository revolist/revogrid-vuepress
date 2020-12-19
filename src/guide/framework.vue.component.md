# Cell as Vue component

Vue-datagrid provides a way to render vue components inside of cells.
<br>For this porpose we've invented webcomponent vue template adapter (VGridVueTemplate);

::: warning
This functionality is slightly decreasing overall grid render performance. If you are aiming for the faster render we are recommending to stick with native <a href="./cell.renderer.html">VNode render</a>.
:::

Create component which you would like to be presented as cell.
You can use `props` to access row model object, column property or other props described in `ColumnDataSchemaModel`.
<br>Check [interfaces](https://github.com/revolist/revogrid/blob/master/src/interfaces.d.ts) for mode information about types.

```vue
<template>
  <button v-on:click="iAmClicked">You clicked me {{ count }} times.</button>
</template>
<script>
// myVue.vue
import Vue from "vue";

// your vue component
export default {
  // access any cell properties here
  props: ["rowIndex", "prop"],
  name: "myVue",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    iAmClicked(e) {
      this.count++;
    },
  }
};
</script>
```

Import your vue component as cell template using `VGridVueTemplate` adapter:

```vue
<template>
  <div id="app">
    <v-grid :source="rows" :columns="columns" @beforeCellFocus="beforeFocus"></v-grid>
  </div>
</template>

<script>
// VGridVueTemplate is adapter for webcomponent
import VGrid, { VGridVueTemplate } from "@revolist/vue-datagrid";
import myVue from './myVue.vue';

export default {
  name: "App",
  data() {
    return {
      columns: [
        {
          name: "Vue",
          cellTemplate: VGridVueTemplate(myVue),
        },
        {
          prop: "details",
          autoSize: true,
        },
      ],
      rows: [{}],
    };
  },
  methods: {
    beforeFocus(e) {
      e.preventDefault();
    },
  },
  components: {
    VGrid,
  },
};
</script>
```

Check [Sandbox](https://codesandbox.io/s/revogrid-vuecomponent-9yh0o?file=/src/App.vue) for real live sample.
<demo-vue-component-cell/>

