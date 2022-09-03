# Quick start

RevoGrid provide advanced wrapper for Svelte based on [stenciljs svelte adapter](https://www.npmjs.com/package/@stencil/svelte-output-target). 
<br>Just import it to your project and it can be used as part of react system.



With NPM:
```bash
npm i @revolist/svelte-datagrid --save;
```

With Yarn:

```bash
yarn add @revolist/svelte-datagrid;
```


```vue
<script>
import { RevoGrid } from "@revolist/svelte-datagrid";

let source = [{
      prop: "name",
      name: "First",
    },
    {
      prop: "details",
      name: "Second",
}];
let columns = [{
    name: "1",
    details: "Item 1",
}];

</script>


<RevoGrid {source} resize="true" {columns} theme="material"/>
```

Check [Sandbox](https://codesandbox.io/s/revogrid-svelte-latest-7g7vo8?file=/Grid.svelte:1152-1208) for real live sample.
<demo-react/>

<ClientOnly>
  <div class="tile">
   <iframe src="https://codesandbox.io/embed/revogrid-svelte-latest-7g7vo8?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="RevoGrid-Svelte_Latest"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</ClientOnly>
