# Installing

Integrating a component to a project without a JavaScript framework is straight forward.
If you're using a simple HTML page, you can add RevoGrid via a script tag.


### Simple cdn script import
For example, we could load the component through unpkg like this:
```js
<script src="https://unpkg.com/@revolist/revogrid@latest/dist/revo-grid/revo-grid.js"></script>
```


### ES cdn module import
Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement.
Note that in this scenario `applyPolyfills` is needed if you are targeting Edge or IE11.


```js
<script type="module">
    import { applyPolyfills, defineCustomElements } from "https://unpkg.com/@revolist/revogrid@latest/loader";
    defineCustomElements();
</script>
```

### Webpack module import
Or you can install RevoGrid with [NPM](https://www.npmjs.com/package/@revolist/revogrid):

- NPM: `npm i @revolist/revogrid --save`

And import it as ES Module or from local node_modules directory:

```js
import { applyPolyfills, defineCustomElements } from '@revolist/revogrid/loader';

defineCustomElements();
```