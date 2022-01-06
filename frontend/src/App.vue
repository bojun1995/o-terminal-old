<template>
	<div id="app">
		<the-layout></the-layout>
	</div>
</template>

<script>
// comp
import TheLayout from '@/views/base/TheLayout/index'

export default {
	name: 'App',
	components: { TheLayout },
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
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	height: 100%;
}
</style>
