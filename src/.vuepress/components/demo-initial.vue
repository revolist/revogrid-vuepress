<template>
  <div class="tile">
    <data-revo-grid class="grid-container" :source="source" :columns="columns" :pinnedTopRows="pinnedTopRows" :pinnedBottomRows="pinnedBottomRows" theme="material" resize="true" rowClass="highlighted"/>
  </div>
</template>

<script>
import DataRevoGrid from './grid/data-grid';
import generateFakeDataObject from './grid/dataGenerate';


export default {
  name: 'demo-initial',
  components: {
    DataRevoGrid
  },
  data() {
    return {
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
  }
}
</script>
<style scoped lang="stylus">
  .tile
    width: 100%
    height: 500px
</style>