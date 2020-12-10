<template>
  <div>
    <div class="header">
      <div @click="comeBack()" class="back">
        <LeftSvg></LeftSvg>
        <div>Назад к контактам</div>
      </div>
      <div>Отменить изменения</div>
    </div>
    <div class="person">
      <div class="name">{{ person.name }}</div>
      <div class="info"></div>
    </div>
  </div>
</template>

<script>
import LeftSvg from "../components/svg/LeftSvg";
export default {
  components: {
    LeftSvg,
  },
  props: {
    indexPerson: Number,
    LeftSvg,
  },
  computed: {
    person() {
      return this.$store.state.contacts[this.indexPerson];
    },
  },
  methods: {
    comeBack() {
      this.$emit("come-back");
    },
  },
};
</script>

<style scoped lang="scss">
.header{
  display: flex;
  justify-content: space-between;
  .back{
    display: flex;
    // align-items: center;
  }
}
</style>