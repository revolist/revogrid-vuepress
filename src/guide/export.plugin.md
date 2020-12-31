# Export to file

## Overview

With `revo-grid` starting from version `2.1.0` you can export data to file. Currently only `csv` file format supported.

For plugin access you need:

- Setup `export` option on `revo-grid` to `true`:

``` tsx
<revo-grid export="true"/>
``` 

- Access export plugin from plugin list:

``` js
const grid = document.querySelector('revo-grid');
grid.getPlugins().then(plugins => {
 plugins.forEach(p => {
   if (p.exportFile) {
       const exportPlugin = p;
       exportPlugin.exportFile({  filename: 'new file' });
   }
  })
});
``` 

## Public methods

There are next methods available in export plugin and `options` object as `FormatterOptions`:

- `exportFile(options)` - download file;
- `exportBlob(options)` - export Blob object;
- `exportString(options)` - get data string.

## Options

General options are available for export:

```ts
type FormatterOptions = {
  mime: string; // text/csv
  encoding: string;
  fileKind: string; // csv
  bom: boolean;
  columnDelimiter: string; // ','
  rowDelimiter: string; // '\r\n'
  filename?: string;
}
```

:::tip
For the latest information it's recommended to read [export-plugin](https://github.com/revolist/revogrid/blob/master/src/plugins/export/export.plugin.ts) file for better understanding of parameters and options.
:::
