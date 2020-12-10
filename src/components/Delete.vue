<template>
  <div class="delete" @click="deletElement()">
    <DeleteSvg></DeleteSvg>
  </div>
</template>

<script>
import DeleteSvg from "../components/svg/DeleteSvg";
export default {
  components: {
    DeleteSvg,
  },
  props: {
    deleteObj: Object,
  },
  methods: {
    deletElement() {
      if (confirm("Удалить запись ?")) {
        this.$store.commit("deleteElement", this.deleteObj);
      }
    },
  },
};
</script>
<style scoped lang="scss">
</style>