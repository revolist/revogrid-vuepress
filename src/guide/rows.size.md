 # Row size

To define row sizes use `rowDefinitions` property. 
<br>Size definition is quite straightforward:

```js
const grid = div.querySelector('revo-grid');
const rowDefinitions = [{ type: 'row', 0, size: 45 }]; // row with index 0 will receive size of 45px.
grid.rowDefinitions = rowDefinitions;
```