<template>
	<div class="the-layout">
		<the-nav-menu></the-nav-menu>
    <the-main></the-main>
	</div>
</template>

<script>
// comp
import TheNavMenu from './TheNavMenu/index.vue'
import TheMain from './TheMain/index.vue'

export default {
	name: 'TheLayout',
	components: { TheNavMenu, TheMain },
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
	background-color: #fff;

  display: flex;
  flex-direction: row;

  @include font-color('font-color-main');
  @include background-color('bg-color-main');
}
</style>
