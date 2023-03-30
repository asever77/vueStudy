<template>
  <div>
    <div>
      <input type="checkbox" name="" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" name="" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">css</label>
    </div>
    <div>
      <!-- checked랑 양방향 바인딩 -->
      <input type="checkbox" name="" id="js" value="JS" v-model="favoriteLang">
      <label for="js">javascript</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['JS']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
