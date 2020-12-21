# Cell as React component

RevoGrid provide a way to render react elements inside of cells.

::: warning
This functionality is slightly decreasing overall grid render performance.
If you are aiming for the faster render we are recommending to stick with native <a href="./cell.renderer.html">VNode render</a>.
:::


Create component which be presented as cell:

```js
import React from "react";
export default class Sample extends React.Component {
  render() {
    return <div>{this.props.val}</div>;
  }
}
```

Create an adapter function for React binding or trigger component update.
<br>A primitive sample of adapter:

```js
function adapter(parent, props) {
  let wrapper;
  if (parent.childNodes.length) {
    wrapper = parent.childNodes[0];
    ReactDOM.unmountComponentAtNode(wrapper);
  } else {
    wrapper = document.createElement("span");
    parent.appendChild(wrapper);
  }
  ReactDOM.render(<MyReactComponent val={props.model[props.prop]} />, wrapper);
}
```

Apply Adapter during virtual DOM render:

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    defineCustomElements();
    this.state = {
      columns: [
        {
          prop: "name",
          cellTemplate(h, p) => h("span", { ref: (el) => adapter(el, p) })
        }
      ],
      source: [{ name: "Item 1" }]
    };
  }

  render() {
    return (
      <div>
        <RevoGrid
          theme="compact"
          columns={this.state.columns}
          source={this.state.source}
        />
      </div>
    );
  }
}
```

Check [Sandbox](https://codesandbox.io/s/revogrid-react-component-hrgrx?file=/src/App.js:0-247) for real live sample.
<demo-react-component/>