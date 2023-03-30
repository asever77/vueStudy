<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly >
    <input type="text" name="" id="" :value="userId" readonly >
    <br>
    <img :src="imgSrc" alt="" style="width:100px; height:auto;">
    <br>
    <input type="search" name="" id="" v-model="txt1">
    <button :disabled="txt1 === ''">조회</button>
    <p>{{ txt1 }}</p>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'hyunmin',
      imgSrc: 'https://joshua1988.github.io/images/posts/web/vuejs/logo.png',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
