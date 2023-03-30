import { createStore } from 'vuex'

export default createStore({
  state: {
    // 상태
    // 공통으로 사용할 변수 정의
    // 컴포넌트 간 동일한 Data 사용
  },
  getters: {
    // 변환
    // state를 computed와 같이 이용할 수 있게 도움주는 함수
    // 각 컴포넌트의 공통 사용정의
    // this.$sotre.getters['경로명/함수명']
  },
  mutations: {
    // 변이
    // state의 동기적 변이, vuex저장소에서  state를 변경하는 유일한 방법
  },
  actions: {
    // 액션
    // 비동기적 작업포함, 변이에 commit
    // dispatch('함수명', '전달인자')를 통해 실행
  },
  modules: {
  }
})
