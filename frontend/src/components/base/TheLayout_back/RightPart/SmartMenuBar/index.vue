<template>
	<div class="smart-menu-bar">
		<o-btn label="matrix" @click.native="onThemeChg('matrix')"></o-btn>
		<o-btn label="sunlight" @click.native="onThemeChg('sunlight')"></o-btn>
	</div>
</template>

<script>
// comp
import OBtn from '@/components/common/o-btn/index.vue'

export default {
	name: 'SmartMenuBar',
	components: { OBtn },
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		onThemeChg(themeName) {
			this.$tool.vuex.changeThemeName(themeName)
		},
	},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.smart-menu-bar {
	height: 30px;
	display: flex;
	flex-direction: row;
  padding: 0px 10px;
	@include background-color('bg-color-main');
  .o-btn {
    margin-right: 10px;
  }
}
</style>
