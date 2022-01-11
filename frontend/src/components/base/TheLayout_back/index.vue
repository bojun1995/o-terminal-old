<template>
	<div class="the-layout">
		<left-part></left-part>
		<right-part></right-part>
	</div>
</template>

<script>
// comp
import LeftPart from './LeftPart/index.vue'
import RightPart from './RightPart/index.vue'

export default {
	name: 'TheLayout',
	components: { LeftPart, RightPart },
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {
		this.initThemeName()
	},
	mounted() {},
	methods: {
		initThemeName() {
			this.$tool.vuex.changeThemeName('matrix')
		},
	},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-layout {
  height: 100%;
  width: 100%;
	position: relative;
	display: flex;
  // border-radius: $appBorderRadius;
  overflow: hidden;
  @include font-color('font-color-main');
  @include background-color('bg-color-main');
}
.page--container {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
}
</style>
