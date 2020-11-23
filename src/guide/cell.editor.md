# Cell editor

`RevoGrid` provides a way to define your own editors. Or you can use [predefined column types](./column.types.html).
In order to do so you have to define your class with render method.

### Class format editor sample
```ts

class TextEditor {
    public element: Element|null = null;
    public editCell: Edition.EditCell|null = null;

    /**
      *  @column: {ColumnDataSchemaRegular} - column data
      *  @editCallback: { (val) => void } - callback for finishing edit
      */

    constructor(
        public column: RevoGrid.ColumnDataSchemaRegular,
        saveCallback: (value: any) => void,
        closeCallback: () => void
    ) {}

    // optional, called after editor rendered
    componentDidRender() {}

    // optional, called after editor destroyed
    disconnectedCallback() {}

    /**
     * required, define custom component structure
     * @param createElement: (tagName: string, properties?: object, value?: any, children: Array) => VNode
     */
    render(createComponent: RevoGrid.HyperFunc<VNode>) {
        return createComponent('input');
    }
}
```


### Function format
```js

function TextEditor(column, saveCallback, closeCallback) {
  return {
      element: null, // will be setup up after render
      editCell: null, // will be setup up after render
      /**
       * required, define custom component structure
       * @param createElement: (tagName: string, properties?: object, value?: any, children: Array) => VNode
       */
      render(createElement) {
          return createElement('input');
      },
      componentDidRender() {}, // optional, called after component rendered
      disconnectedCallback() {}, // optional, called after component destroyed

  };
};
```

### Apply editor to grid
```js
const columns = [{
    name: 'Person',
    prop: 'name',

    // define editor name
    editor: 'select',
}];
const grid = div.querySelector('revo-grid');
// define editor component and name
grid.editors = {
    'select': customSelect
};
```