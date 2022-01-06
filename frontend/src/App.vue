<template>
	<div id="app">
		<the-layout></the-layout>
	</div>
</template>

<script>
// comp
import TheLayout from '@/components/base/TheLayout/index'

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
	height: 100%;
}
</style>
