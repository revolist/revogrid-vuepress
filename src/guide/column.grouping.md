# Grouping(Stacked columns)

Column can be defined as group or as regular column. To stack column just define it as a group.
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
