# Filtering

## Quick start

From version `2.0` `revo-grid` supports Filtering Plugin.
<br>To enable Filtering just setup property `filter` to `true`.
<br>By default there are sevaral types available:

- <b>string</b> 
  - `notEmpty`
  - `empty`
  - `eq`
  - `notEq`
  - `begins`
  - `contains`
  - `notContains`
- <b>number</b>
  - `notEmpty`
  - `empty`
  - `eqN`
  - `neqN`
  - `gt`
  - `gte`
  - `lt`
  - `lte`

With their names accordingly:

  ```js
    const filterNames = {
      none: 'None',
      empty: 'Not set',
      notEmpty: 'Set',

      eq: 'Equal',
      notEq: 'Not equal',
      begins: 'Begins with',
      contains: 'Contains',
      notContains: 'Does not contain',

      eqN: '=',
      neqN: '!=',
      gt: '>',
      gte: '>=',
      lt: '<',
      lte: '<=',
  };
  ```



```tsx
// tsx
const columns = [{ prop: 'name' }];
const source = [{ name: 'Steve' }, { name: 'John' }];
return '<revo-grid rowClass="myRowClass" source={source} columns={columns} filter={true}/>';
```


## Filter per column

If you wish to disable filter for selected column all you have to do setup  `filter` on your column to `false`.

```tsx
const columns = [{ prop: 'name', filter: false }]; // filter icon will be disabled for column with property `name`
const source = [{ name: 'Steve' }];
return '<revo-grid rowClass="myRowClass" source={source} columns={columns} filter={true}/>';
```

Alternatively you can setup filter type `filter: 'number'`:
```tsx
// tsx
const columns = [{ prop: 'name', filter: 'number' }]; // filter type 'number' (string by default)
const source = [{ name: 'Steve' }];
return '<revo-grid rowClass="myRowClass" source={source} columns={columns} filter={true}/>';
```


## Advance usage

If you consider more advanced filter usage you have to look into `<revo-grid/>` `filter` property.
`filter: boolean|ColumnFilterConfig` - can be `boolean` or `ColumnFilterConfig` type.

```ts
type ColumnFilterConfig = {
  // preserved filters collection
  collection?: FilterCollection;
  // names of filters to be included include = ['eq', 'contains']
  include?: string[];
  // you can create your own filters here
  customFilters?: Record<string, CustomFilter>;
};

```


Advance filter usage:
```tsx
const columns = [{ prop: 'name', filter: 'myFilterType' }];
const source = [{ name: 'Steve' }];

// @extraValue available if filterFunc.extra set to input
const filterFunc = (cellValue, extraValue) => {
    if (!cellValue) {
        return false;
    }
    if (typeof cellValue !== 'string') {
      cellValue = JSON.stringify(cellValue);
    }
    return cellValue === 'A';
};
// if you want extra input field for @extraValue
filterFunc.extra = 'input';

const filterConfig = {
  include: ['newEqual'],
  customFilters: {
    'newEqual': {
      columnFilterType: 'myFilterType', // column filter type id
      name: 'Equal to A',
      func: filterFunc
    }
  }
};
return '<revo-grid rowClass="myRowClass" source={source} columns={columns} filter={filterConfig}/>';
```


:::tip
`ColumnFilterConfig` is powerful option for the latest information it's recommended to read [filter-plugin](https://github.com/revolist/revogrid/blob/master/src/plugins/filter/filter.plugin.tsx) file for better understanding what parameters filter accepts.
:::
