<template>
  <div class="menu-group">
    <left-btn label="文件库" icon="ri-folder-line" :isSelected="true"></left-btn>
    <left-btn label="收藏夹" icon="ri-star-line"></left-btn>
    <left-btn label="历史" icon="ri-time-line"></left-btn>
  </div>
</template>

<script>
// comp
import LeftBtn from './LeftBtn/index.vue'

export default {
  name: 'MenuGroup',
  components: { LeftBtn },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.menu-group {
  padding: 10px;
  ::v-deep.left-btn {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0px;
    }
  }
}
</style>