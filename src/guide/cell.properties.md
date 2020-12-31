# Cell properties

This article explaines how to use cell properties. Any property can be added: tag, style or class.


```js
const columns = [{
  name: 'Person name',
  prop: 'name',

  // apply this for custom properties
  cellProperties: ({prop, model, data, column}) => {
    return {
      style: {
        color: 'red'
      },
      class: {
        'bank': true
      }
    };
  },
}];
```
