# Grouping(Stacked columns)

Columns can be defined either as a group, or as a regular column. To stack columns just define them as a group.
Check interfaces for more information.

``` ts

const columns = [
  { name: 'Name', prop: 'name' }, // regular column

  // stacked column
  {
      name: 'Personal',
      children: [
          { name: 'Eyes', prop: 'eyeColor' }, // regular column
          { name: 'Company', prop: 'company' }, // regular column
      ]
  }
];

```
