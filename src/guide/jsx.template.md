# JSX/TSX - Custom content render

It is called JSX, and it is a syntax extension to JavaScript.
We strongly recommend to use it during template rendering. It'll simplify your life a lot.

Probably you always associated it with React, but it's not. It is just a way to render things. 
You can add it to any project you like.

We are using it in all projects, it makes things easier. For example this is regular column header rendering with createElement:

```js
const columnTemplate = (createElement, column) => {
    return createElement('span', {
      style: {
        color: 'red'
      },
    }, createElement('div', {
        class: 'me'
    }, column.name));
};
const columns = [{
  name: 'Person name',
  prop: 'name',
  columnTemplate 
}];
```

Imagine what will happened if you have 10 children nodes and more. 
And now let's make it with JSX or TSX.

Let's create `myJsx.jsx` file:

```jsx
export const myTemplate = (h, column) => {
    return <span style={{color: 'red'}}><div class="me">{column.name}</div></span>;
}
```

Then in our main file:

```js
import { myTemplate } from "./myJsx";
const columns = [{
  name: 'Person name',
  prop: 'name',
  columnTemplate: myTemplate
}];
```

Quite simple, right?


[Check sample](https://codesandbox.io/s/revo-grid-vanilla-jsx-zj0q6?file=/src/index.js).
We use here `babel-jsx` with minimal config settings.

<ClientOnly>
  <iframe src="https://codesandbox.io/embed/revo-grid-vanilla-jsx-zj0q6?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="revo-grid-vanilla-jsx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
</ClientOnly>
