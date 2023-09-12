# Custom header

This article explains how to use custom header function to display HTML content in a header.
This is a powerful feature.


`Remember` to escape any HTML code that could be used for XSS attacks.

```js
const columns = [{
  name: 'Person name',
  prop: 'name',

  // use this to return custom html per column
  columnTemplate: (createElement, column) => {
    return createElement('span', {
      style: {
        color: 'red'
      },
    }, column.name);
  },
}];
```