# Row class binding

Define property which is going to be your `rowClass` simply with `rowClass` attribute `<revo-grid rowClass="myRowClass"/>`.
After this in source row model add this property `myRowClass` in example below.


```tsx
// tsx
const columns = [{
  name: 'Person',
  prop: 'name'
}];

const source = [
  { name: 'Steve', myRowClass: 'blue' },
  { name: 'John', myRowClass: 'green' }
];
return '<revo-grid rowClass="myRowClass" source={source} columns={columns}/>';
```