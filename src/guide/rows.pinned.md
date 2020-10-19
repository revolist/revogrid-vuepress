# Pinned rows (Fixed rows)

Pinned rows are separate data sources for row at the top and at the bottom.

```js
const pinnedTopSource = [{ name: 'Dixon Hudson' }];
const pinnedBottomSource = [{ name: 'Weber Henderson' }];

const grid = div.querySelector('revo-grid');
grid.pinnedTopSource = pinnedTopSource;
grid.pinnedBottomSource = pinnedBottomSource;
```