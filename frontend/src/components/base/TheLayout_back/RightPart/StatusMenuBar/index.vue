<template>
  <div class="right-bottom-part">StatusMenuBar</div>
</template>

<script>
export default {
  name: 'StatusMenuBar',
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
.right-bottom-part {
  height: 20px;
  @include background-color('bg-color-main');
  @include font-color('theme-color-main')
}
</style>