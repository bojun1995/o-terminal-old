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
	height: calc(100% - 10px);
	width: calc(100% - 10px);
	position: relative;
	left: 5px;
	top: 5px;
	display: flex;
	box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.55);
  border-radius: $appBorderRadius;
  overflow: hidden;
  @include font-color('font-color-main');
}
.page--container {
	display: flex;
	flex-grow: 1;
	flex-direction: column;
}
</style>
