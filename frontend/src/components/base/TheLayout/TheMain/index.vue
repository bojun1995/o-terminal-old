<template>
	<div class="the-main">
    <the-top-bar></the-top-bar>
  </div>
</template>

<script>
// comp
import TheTopBar from './TheTopBar/index.vue'

export default {
	name: 'TheMain',
	components: { TheTopBar },
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
.the-main {
	display: flex;
	flex-grow: 1;
}
</style>
