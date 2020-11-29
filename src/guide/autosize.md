# Autosize feature

Autosize is aiming to provide intuitive functionality of content dependent entities. Meanwhile some limitations applied.

## Column autosize

In order to achieve column autosize support you have to set `autoSizeColumn` grid property.

`autoSizeColumn` accept different options. The easiest way to start with to use excel like option: `autoSizeColumn = true` (by default it's `false`).
Based on this option every column which has `autoSize: true` property can be recalculated on column header separator double click.

### Quick start

```js
// define autosize per column, if you don't use advance config option allColumns (read below section #Advance usage) 
const columns = [{ prop: 'myField', autoSize: true }];
const rows = [{ 'myField': 'my long-long field' }];

const grid = document.querySelector('revo-grid');
grid.autoSizeColumn = true;
grid.source = rows;
grid.columns = columns;
```

### Advance usage

`autoSizeColumn` can be set up as a config object with optional parameters.

```js
grid.autoSizeColumn = {
    mode: 'autoSizeOnTextOverlap'
};
```

``` ts
type AutoSizeColumnConfig = {
    // ui behavior mode
    mode?: ColumnAutoSizeMode;
    /** 
     * autoSize for all columns
     * if allColumnes true all columns treated as autoSize, worse for performance
     * false by default 
    */
    allColumns?: boolean;
    /** 
     * assumption per characted size 
     * improves performance
     * by default defined as 7px per char, can be changed in this config
     */
    letterBlockSize?: number;
    /** make size calculation exact
     * by default it based on assumption each character takes some space defined in letterBlockSize */
    preciseSize?: boolean;
};
```

### Brief modes description

Column autosize comes in different variation based on user necessity. Each mode has it's own benefits and downsides:

```ts
enum ColumnAutoSizeMode {
    // increases column width on header click according the largest text value
    headerClickAutosize = 'headerClickAutoSize',
    // increases column width on data set and text edit, decreases performance
    autoSizeOnTextOverlap = 'autoSizeOnTextOverlap',
    // increases and decreases column width based on all items sizes, worst for performance
    autoSizeAll = 'autoSizeAll'
}
```

Visit our [demo](/demo/) for real live sample.

::: warning
Currently AutoSize works in Beta mode. Only text autosize supported. Mapped values and custom renders can't be autosized at this moment and require different plugin approach based on per column prerender.
:::

::: tip
It's recommended to check autoSizeColumn.ts plugin for better understanding of all options.
:::