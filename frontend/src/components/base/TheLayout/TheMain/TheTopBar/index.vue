<template>
  <div class="the-top-bar">TheTopBar</div>
</template>

<script>
export default {
  name: 'TheTopBar',
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
.the-top-bar {
  height: 30px;
  width: 100%;
  background-color: #59f4f5;
  
  -webkit-app-region: drag;
}
</style>