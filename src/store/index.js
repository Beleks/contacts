import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        name: 'Алексей',
        info: [
          { title: 'Телефон', value: '89149805085' }
        ]
      }
    ],
    beforChange: null
  },
  mutations: {
    deleteElement(state, deleteObj) {
      if (deleteObj.type === 'person') {
        state.contacts.splice(deleteObj.i1, 1)
      } else if (deleteObj.type === 'personInfo') {
        state.beforChange = JSON.parse(JSON.stringify(state.contacts));
        state.contacts[deleteObj.i1].info.splice(deleteObj.i2, 1)
      }
    },
    addPerson(state, name) {
      let newPerson = {
        name,
        info: []
      }
      state.contacts.push(newPerson)
    },
    saveChange(state, infoLine) {
      state.beforChange = JSON.parse(JSON.stringify(state.contacts));
      console.log(state.beforChange, 'befor')
      let newMas = state.contacts[infoLine.i1].info.slice()
      newMas[infoLine.i2] = infoLine.params
      state.contacts[infoLine.i1].info = newMas
    },
    addInfo(state, newInfo) {
      state.beforChange = JSON.parse(JSON.stringify(state.contacts));
      state.contacts[newInfo.i1].info.push(newInfo.params)
    },
    returnToThePastState(state) {
      state.contacts = JSON.parse(JSON.stringify(state.beforChange));
      state.beforChange = null
    }
  },
  actions: {
  },
  modules: {
  }
})
