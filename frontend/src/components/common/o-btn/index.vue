<template>
	<div class="o-btn">
		<span>{{ label }}</span>
	</div>
</template>

<script>
export default {
	name: 'OBtn',
	props: {
		label: {
			type: String,
			default: '',
		},
	},
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
.o-btn {
  display: inline-block;
	height: 26px;
  font-size: 14px;
  line-height: 26px;
  padding: 0px 12px;
  user-select: none;
  border-radius: 3px;
  cursor: pointer;
	@include background-color('theme-color-main');
	@include font-color('font-color-main');
}
</style>
