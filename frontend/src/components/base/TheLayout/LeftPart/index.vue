<template>
	<div class="leftPart">
		<top-part></top-part>
    <menu-group></menu-group>
    <folder-tree></folder-tree>
	</div>
</template>

<script>
// comp
import TopPart from './TopPart/index.vue'
import MenuGroup from './MenuGroup/index.vue'
import FolderTree from './FolderTree/index.vue'

export default {
  name: 'LeftPart',
  components : { TopPart, MenuGroup, FolderTree },
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
.leftPart {
	@include background-color('bg-color__left-part');
	width: 250px;
  display: flex;
  flex-direction: column;
}
</style>
