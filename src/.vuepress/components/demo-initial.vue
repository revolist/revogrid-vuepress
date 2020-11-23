<template>
  <div class="tile">
    <component v-if="vGrid" :is="vGrid" class="grid-container" :source="source" :columns="columns" :pinnedTopRows="pinnedTopRows" :pinnedBottomRows="pinnedBottomRows" theme="material" resize="true" rowClass="highlighted"/>
  </div>
</template>

<script>
import generateFakeDataObject from './grid/dataGenerate';


export default {
  name: 'demo-initial',
  data() {
    return {
      vGrid: null,
      source: [],
      pinnedBottomRows: [],
      columns: [],
      pinnedTopRows: []
    };
  },
  mounted() {
    import('./grid/peopleSample.js').then((e) => {
      const newData = generateFakeDataObject(e.default, 100);
      for (let key in newData) {
        this[key] = newData[key];
      }
    });
    import('@revolist/vue-datagrid').then((m) => {
      this.vGrid = m.VGrid;
    });
  }
}
</script>
<style scoped lang="stylus">
  .tile
    width: 100%
    height: 500px
</style>