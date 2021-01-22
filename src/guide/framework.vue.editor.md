# Editor as Vue component

Vue-datagrid provides a way to render vue components as editor.
<br>For this porpose we've invented webcomponent vue editor adapter (VGridVueEditor);

::: warning
This functionality is slightly decreasing overall grid render performance. If you are aiming for the faster render we are recommending to stick with native <a href="./cell.editor.html">VNode render</a>.
:::

Define your editor.
::: tip
You can access close and save callbacks in properties.
:::

```vue
// SampleEditor.vue
<template>
  <button v-on:click="iAmClicked">You clicked me {{ count }} times.</button>
</template>

<script>
export default {
  props: ["rowIndex", "model", "close", "save"],
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    iAmClicked(e) {
      this.count++;
    },
  },
};
</script>
```
::: tip
For version vue 3+ use `@revolist/vue3-datagrid` accordingly.
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
<ClientOnly>
  <div class="tile">
    <iframe src="https://codesandbox.io/embed/revogrid-vueeditor-bxpq0?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;"
      title="RevoGrid-VueEditor"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
  </div>
</ClientOnly>



