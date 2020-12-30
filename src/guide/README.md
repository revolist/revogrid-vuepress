# Quick start

Grid works as web component.
All you have to do just to place component on the page and access it properties as an element.

Add revo-grid to your project in your index.html:

```html
<!DOCTYPE html>
<html>
<head>

<script src="https://cdn.jsdelivr.net/npm/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>

</head>
<body>
  <revo-grid style="height: 200px"/>
</body>
</html>

```


After just simply call it properties:

```js
const grid = document.querySelector('revo-grid');
const columns = [
  {
      prop: 'name',
      name: 'First'
  },
  {
      prop: 'details',
      name: 'Second',
      cellTemplate: (createElement, props) => {
        return createElement('div', {
          style: {
            backgroundColor: 'red'
          },
          class: {
            'inner-cell': true
          }
        }, props.model[props.prop] || '');
      }
  }
];
const rows = [{
  name: 'New item',
  details: 'Item description'
}];

grid.columns = columns;
grid.source = rows;
```



Check [Sandbox](http://jsfiddle.net/m2a2x/f4squ90m/5/) for real live sample.

<ClientOnly>
  <div class="tile">
    <iframe
      width="100%"
      height="400"
      src="//jsfiddle.net/m2a2x/f4squ90m/5/embedded/js,html,result/"
      allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
  </div>
</ClientOnly>