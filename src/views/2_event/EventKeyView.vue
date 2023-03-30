<template>
  <div>
    <!-- <input type="search" v-model="searchText" @keyup="checkEnter($event)"> -->

    <input type="search" v-model="searchText" @keyup.enter="doSearch">
    <button @click="doSearch">search</button>
  </div>
</template>
<script>
// .stop - event.stopPropagation()
// .prevent - event.preventDefault()
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
