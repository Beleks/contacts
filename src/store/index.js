import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      {
        name: 'Алексей',
        info: [
          { title: 'Телефон', value: '12345678910' }
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
        // До изменение мы сохраняем что бы сделать откат.
        // JSON.parse(JSON.stringify(...)) - для копирования массива объектов
        // slice() тут работать не будет из-за ссылки на один и тот же объект;
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
      // Если мы просто заменим объект в массиве то его изменение Vue не подхватит
      // Я сделал такой вот обход с созданием копии массива но я думаю что можно сделать как-то по другому что бы Vue подхватил изменения
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
