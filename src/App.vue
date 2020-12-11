<template>
  <div id="app">
    <PageContacts v-if="page === 'PageContacts'" @more-info="toInfo"></PageContacts>
    <PageInfo v-else :indexPerson="index" @come-back="toContacts"></PageInfo>
  </div>
</template>

<script>
import PageContacts from "./components/PageContacts.vue";
import PageInfo from "./components/PageInfo.vue";

export default {
  name: "App",
  data: () => {
    return {
      page: "PageContacts",
      index: 0,
    };
  },

  components: {
    PageContacts,
    PageInfo,
  },
  methods: {
    toInfo: function (index) {
      // Получает индекс и переключается на вторую страницу
      this.page = "PageInfo";
      this.index = index;
    },
    toContacts() {
      this.page = "PageContacts";
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
  margin: auto;
  max-width: 800px;
}
</style>
