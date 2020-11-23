<template>
  <div class="tile">
    <component
        v-if="vGrid"
        :is="vGrid"
        class="grid-container"
        :source="source"
        :columns="columns"
        :columnTypes="columnTypes"
        :pinnedTopRows="pinnedTopRows"
        :pinnedBottomRows="pinnedBottomRows"
        theme="material"
        resize="true"
        rowClass="highlighted"/>
  </div>
</template>

<script>
import {generateFakeDataDemo} from './grid/dataGenerate';


export default {
  name: 'demo-initial',
  data() {
    return {
      vGrid: null,
      columnTypes: {},
      source: [],
      pinnedBottomRows: [],
      columns: [],
      pinnedTopRows: []
    };
  },
  mounted() {
    import('./grid/peopleSample.js').then((e) => {
      const people = e.default;
      const newData = generateFakeDataDemo(people, 100);
      for (let key in newData) {
        this[key] = newData[key];
      }
    });
    import('@revolist/vue-datagrid').then((m) => {
      const types = {};
      Promise.all([
        import('@revolist/revogrid-column-select').then((p) => (types['select'] = new p.default())),
        import('@revolist/revogrid-column-numeral').then((p) => (types['number'] = new p.default('0,0'))),
      ]).then(() => {
        this.columnTypes = types;
        this.vGrid = m.VGrid;
      });
    });
  }
}
</script>
<style scoped lang="stylus">
  .tile
    width: 100%
    height: 500px
</style>