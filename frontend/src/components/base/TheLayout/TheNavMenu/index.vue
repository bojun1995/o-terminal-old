<template>
	<div class="the-nav-menu">
    <the-logo></the-logo>
    <the-menu-group></the-menu-group>
    <the-terminal-group></the-terminal-group>
    <the-bottom-group></the-bottom-group>
  </div>
</template>

<script>
// comp
import TheLogo from './TheLogo/index.vue'
import TheMenuGroup from './TheMenuGroup/index.vue'
import TheTerminalGroup from './TheTerminalGroup/index.vue'
import TheBottomGroup from './TheBottomGroup/index.vue'

export default {
	name: 'TheNavMenu',
	components: { TheLogo, TheMenuGroup, TheTerminalGroup, TheBottomGroup },
	data() {
		return {}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {},
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.the-nav-menu {
	width: 200px;

	display: flex;
  flex-direction: column;
}
</style>
