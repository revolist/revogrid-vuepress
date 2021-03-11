# Row headers

Excel like feature. Shows row number at the left side of the table. 
If `row-headers` is `true` then it's available. `false` by default.

```js
<revo-grid row-headers="true"/>
```

Or from the code:
```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = true;
```

Alternatively you can use `rowHeaders` as additional fixed column on the left. `rowHeaders` accept all params as regular column does (`size`, `cellTemplate` etc).

```js
const grid = document.querySelector('revo-grid');
grid.rowHeaders = {
  size: 200
};
```
