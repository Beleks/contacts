<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Contacts v-if="page === 'Contacts'" @more-info="toInfo"></Contacts>
    <Info v-else :indexPerson="index" @come-back="toContacts"></Info>
    <!-- <component
      :is="page"
      @more-info="chosePerson"
      :indexPerson="index"
    ></component> -->
  </div>
</template>

<script>
import Contacts from "./components/Contacts.vue";
import Info from "./components/Info.vue";

export default {
  name: "App",
  data: () => {
    return {
      page: "Info",
      index: 0,
    };
  },

  components: {
    Contacts,
    Info,
  },
  methods: {
    toInfo: function (index) {
      this.page = "Info";
      this.index = index;
    },
    toContacts() {
      this.page = "Contacts";
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
