 # Column resize and width

Column resize is straighforward: set `resize` property to `true`.
Don't make minimal size smaller than total sum of side padding.


<br/>


#### Column resize
```js
const grid = div.querySelector('revo-grid');
grid.resize = true;
```


<br/>

If you want to predefine column size add column property `size` with numeric value.

#### Column width
```tsx
const columns = [{ name: 'Name', prop: 'name', size: 500 }];
<revo-grid columns={columns}/> // and then in tsx
```
