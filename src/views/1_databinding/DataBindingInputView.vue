<template>
  <div>
    <input type="text" name="" id="" v-model="userId" />
    <button type="button" @click="myFunction">쿨릭</button>
    <button type="button" @click="changeData">변경</button>
    <br>
    <input type="tel" name="" id="" v-model="num1"> +
    <input type="tel" name="" id="" v-model="num2"> =
    <span>{{ num1 + num2 }}</span>
    <br>
    <input type="tel" name="" id="" v-model.number="num3"> +
    <input type="tel" name="" id="" v-model.number="num4"> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'asever.go',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'jo'
    }
  }
}
</script>
