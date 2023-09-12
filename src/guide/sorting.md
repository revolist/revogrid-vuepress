# Sorting

Adding sorting is quite straightforward:
 - Add `sortable` property to column - enables sorting triggering on header click;
 - Add `order` property to column - makes column sorted in `asc` or `desc` order by default;


## Sorting events

- `beforeSorting` - `CustomEvent<{ column: RevoGrid.ColumnRegular, order: 'desc'|'asc' }>`. Triggered after header click before sorting started. Use `e.preventDefault()` in case you want prevent any further sorting chain, `beforeSortingApply` will not be triggered.
- `beforeSortingApply` - `CustomEvent<{ column: RevoGrid.ColumnRegular, order: 'desc'|'asc' }>`.
Triggered before data sorting is applied. Use `e.preventDefault()` in case you want avoid data sorting and apply your own, in this case don't forget to look at `beforeSourceSortingApply` to prevent additionaly sorting during source apply.
- `beforeSourceSortingApply` - `CustomEvent`. Triggered before sorting is applied on `source` data change.  Use `e.preventDefault()` in case you don't need auto sorting to be applied on `source` change.

For more details please look at API section and column data schema interfaces.

```js
const columns = [{
  name: 'Person name',
  prop: 'name',
  sortable: true,
  order: 'asc'
}];
```