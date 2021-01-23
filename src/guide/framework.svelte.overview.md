# Quick start

RevoGrid provide advanced wrapper for Svelte based on [stenciljs svelte adapter](https://www.npmjs.com/package/@stencil/svelte-output-target). 
<br>Just import it to your project and it can be used as part of react system.

:::tip
If you are using npm modules don't forget to import and define custom component `defineCustomElements` as part of environment
:::


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
import {RevoGrid} from '../dist/revogrid';
import {defineCustomElements} from '@revolist/revogrid/loader';

let source;
let headers;

// define webcomponent element in DOM
defineCustomElements().then(() => {
  // then apply data or rerender
  source = [{
      prop: "name",
      name: "First",
    },
    {
      prop: "details",
      name: "Second",
  }];
  headers = [{
    name: "1",
    details: "Item 1",
  }];
});
</script>


<RevoGrid source={source} resize="true" columns={headers} theme="material"/>
```

Check [Sandbox](https://codesandbox.io/s/revogrid-svelte-d3zhi?file=/Grid.svelte) for real live sample.
<demo-react/>

<ClientOnly>
  <div class="tile">
   <iframe src="https://codesandbox.io/embed/revogrid-svelte-d3zhi?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="RevoGrid-Svelte"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
  </div>
</ClientOnly>