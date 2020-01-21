import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    timer: {
      isOnlyRest: false,
      workTime: 0,
      restTime: 0,
      loop: 0,
      title: "",
      notes: "",
      isWorking: false,
    },
    app: {
      controllerCenterText: ''
    }
  },
  mutations: {
    setTimer(state, timer) {
      state.timer.workTime = timer.workTime;
      state.timer.restTime = timer.restTime;
      state.timer.loop = timer.loop;
      state.timer.title = timer.title;
      state.timer.notes = timer.notes;
    },
    setIsOnlyRest(state, b) {
      state.timer.isOnlyRest = b;
    },
    setIsWorking(state, b) {
      state.timer.isWorking = b;
    },
    setNowPage(state, s) {
      state.app.controllerCenterText = s;
    }
  }
})
