# Column types

`RevoGrid` provides a way to define [your own editors](./cell.editor.html).

Yet it comes with plugins with different column types.
<br>All additional column types based on plugin idea:
- They have to be imported to project in order to avoid extra data for users not interested in it;
- You can create your own plugin types and refer to it. Just clone any existing type, it's simple as it is.

Check our [demo](/demo/) for live examples. 

You can define your own plugins or use default one:
- [String (default)](#string);
- [Number](#number);
- [Select](#select);
- [Date](#date).


## String

Primitive default data type. 
Accepts any data entry and read it as string.


## Number

Primitive [numeric data type plugin](https://github.com/revolist/revogrid-column-numeral) based on [numeraljs](http://numeraljs.com) library.
Accept data in numeric format.

<b>Installation</b>

`npm i @revolist/revogrid-column-numeral`

<b>Basic usage</b>

```js
import NumberColumnType from '@revolist/revogrid-column-numeral'; // import library
const plugin = { 'numeric': new NumberColumnType('0,0') }; // create plugin entity
const columns = [{ prop: 'num', columnType: 'numeric' }]; // defint column type
const rows = [{ 'num': 1000 }];

const grid = document.querySelector('revo-grid');
grid.columnTypes = plugin;
grid.source = rows;
grid.columns = columns;

// '1,000'
```

<b>Advance usage</b>

Check [plugin page](https://github.com/revolist/revogrid-column-numeral) and [numeraljs](http://numeraljs.com).


## Select

Complex [selection data type plugin](https://github.com/revolist/revogrid-column-select) based on [revo-dropdown](https://github.com/revolist/revodropdown) library.

In order to improve dropdown functionality please contribute with [revo-dropdown](https://github.com/revolist/revodropdown).

Accept data in Array format. Item in array can be represented as a string[] or an object[].

<b>Installation</b>

`npm i @revolist/revogrid-column-select`

<b>Basic usage</b>

- Import Select Column type;
- Specify table data;
- Per column specify column type;
- Register your column type.


```js
// do Select class import
import SelectTypePlugin from "@revolist/revogrid-column-select";

const dropdown = {
    labelKey: 'label',
    valueKey: 'value',
    source: [
        { label: 'According', value: 'a' },
        { label: 'Over', value: 'b' },
        { label: 'Source', value: 's' }
    ],
};
const columns = [{
    ...dropdown,
    prop: 'name',
    columnType: 'select' // column type specified as 'select'
}];
const rows = [{ name: 'New item' }, { name: 'New item 2' }];

// register column type
const plugin = { 'select': new SelectTypePlugin() };

// apply data to grid per your framework approach
<revo-grid source={rows} columns={columns} columnTypes={plugin}/>
```



## Date

Date [column type plugin](https://github.com/revolist/revogrid-column-date) based on based on [duetds-date-picker](https://github.com/duetds/date-picker) library.

In order to improve datepicker functionality please contribute with [duetds-date-picker](https://github.com/duetds/date-picker).
Accept data as formated string or date format.

You can access any [duetds-date-picker](https://github.com/duetds/date-picker) properties in Column Definition:

```js

const columns = [{
    prop: 'birthdate',
    columnType: 'date',
    direction: 'left',
    required: 'true',
    valueAsDate: 'true'
}];

```
<b>Installation</b>

`npm i @revolist/revogrid-column-date`

<b>Basic usage</b>

- Import column type;
- Specify table data;
- Per column specify column type;
- Register your column type.

```js

// do import
import Plugin from "@revolist/revogrid-column-date";

const columns = [{ prop: 'birthdate', columnType: 'date' }];
const rows = [{ name: '2020-08-24' }, { name: '2022-08-24' }];

// register column type
const columnTypes = { 'date': new Plugin() };

// apply data to grid per your framework approach
<revo-grid source={rows} columns={columns} columnTypes={columnTypes}/>
```