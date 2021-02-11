 # Row size

To define row sizes use `rowDefinitions` property. 
<br>Size definition is quite straightforward:

```js
const grid = div.querySelector('revo-grid');
const rowDefinitions = [{ type: 'row', index: 0, size: 45 }]; // row with index 0 will receive size of 45px.
grid.rowDefinitions = rowDefinitions;
```


[Demo](https://codesandbox.io/s/revo-infinity-list-select-all-custom-row-size-6ql68).

<ClientOnly>
  <iframe src="https://codesandbox.io/embed/revo-infinity-list-select-all-custom-row-size-6ql68?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="revo-infinity-list-select-all-custom-row-size"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</ClientOnly>
