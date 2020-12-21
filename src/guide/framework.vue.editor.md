# Editor as Vue component

Vue-datagrid provides a way to render vue components as editor.
<br>For this porpose we've invented webcomponent vue editor adapter (VGridVueEditor);

::: warning
This functionality is slightly decreasing overall grid render performance. If you are aiming for the faster render we are recommending to stick with native <a href="./cell.editor.html">VNode render</a>.
:::


```vue
<template>
  <div id="app">
    <v-grid
      :editors="gridEditors"
      :source="rows"
      :columns="columns"
    ></v-grid>
  </div>
</template>

<script>
import VGrid, { VGridVueEditor } from "@revolist/vue-datagrid";
import VueEditor from "./SampleEditor";
import Vue from "vue";
const editor = VGridVueEditor(Vue.component("vueEditor", VueEditor));

export default {
  name: "App",
  data() {
    return {
      gridEditors: { button: editor },
      columns: [
        {
          prop: "id",
          editor: "button",
        },
        {
          prop: "details",
        },
      ],
      rows: [
        {
          id: "My vue",
          details: "My neighbour is Vue editor",
        },
      ],
    };
  },
  components: {
    VGrid,
  },
};
</script>
```

Check [Sandbox](https://codesandbox.io/s/revogrid-vueeditor-bxpq0?file=/src/App.vue) for real live sample.
<demo-vue-component-editor/>

