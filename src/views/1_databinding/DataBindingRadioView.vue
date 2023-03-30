<template>
  <div>
    <div>
      <input type="radio" name="favoriteLang" id="html" value="HTML" v-model="favoriteLang">
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" name="favoriteLang" id="css" value="CSS" v-model="favoriteLang">
      <label for="css">css</label>
    </div>
    <div>
      <!-- checked랑 양방향 바인딩 -->
      <input type="radio" name="favoriteLang" id="js" value="JS" v-model="favoriteLang">
      <label for="js">javascript</label>
    </div>
    <div>선택한 지역: {{ favoriteLang }}</div>

    <div>
      <input type="radio" name="favoriteLang2" id="aaa" value="aaa" v-model="favoriteLang2">
      <label for="aaa">aaa</label>
    </div>
    <div>
      <input type="radio" name="favoriteLang2" id="bbb" value="bbb" v-model="favoriteLang2">
      <label for="bbb">bbb</label>
    </div>
    <div>
      <input type="radio" name="favoriteLang2" id="ccc" value="ccc" v-model="favoriteLang2">
      <label for="ccc">ccc</label>
    </div>
    <div>선택한 지역: {{ favoriteLang2 }}</div>

  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: '',
      favoriteLang2: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
