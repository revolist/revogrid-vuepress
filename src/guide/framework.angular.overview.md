# Quick start

The easiest way just to use [angular-datagrid](https://www.npmjs.com/package/@revolist/angular-datagrid) adaptor.

Install with `npm i @revolist/angular-datagrid --save`


After just use as a component:

```ts
// app.module.ts
 
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
// import loader
import {defineCustomElements} from '@revolist/revogrid/loader';
// import grid
import {RevoGrid} from '@revolist/angular-datagrid';

// register grid element
defineCustomElements();

@NgModule({
  // define component
  declarations: [AppComponent, RevoGrid],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

```ts
// app.component.ts

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  columns = [
    {  name: "Greeting", prop: "name" },
    { prop: "details" }
  ];
  rows = [{ name: "I am", details: "Angular" }, { name: "Hello", details: "Angular" }];
}
```

```html
<!-- app.component.html -->
<revo-grid [source]="rows" [columns]="columns" theme="material"></revo-grid>

```
Check [Sandbox](https://codesandbox.io/s/angular-datagrid-overview-d5i0b?fontsize=14&hidenavigation=1&theme=dark) for real live sample.
<ClientOnly>
  <iframe src="https://codesandbox.io/embed/angular-datagrid-overview-d5i0b?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Angular-datagrid-overview"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
</ClientOnly>
