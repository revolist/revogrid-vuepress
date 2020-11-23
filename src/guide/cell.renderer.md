# Cell renderer

This article explaines how to use custom cell function to display HTML content in a cell.
<br>Or you can use [predefined column types](./column.types.html).


`Remember` to escape any HTML code that could be used for XSS attacks.

```js
const columns = [{
  name: 'Person name',
  prop: 'name',
  cellTemplate: (createElement, props) => {
    return createElement('span', {
      style: {
        color: 'red'
      },
    }, props.model[props.prop]);
  },
}];
```