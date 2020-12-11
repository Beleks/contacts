<template>
  <div>
    <div class="header">
      <div @click="comeBack()" class="back">
        <LeftSvg></LeftSvg>
        <div>Контакты</div>
      </div>
      <div class="cancel" @click="returnToThePastState()" :class="{disabled: beforChange === null}">Отменить изменения</div>
    </div>
    <div class="person">
      <div class="name">{{ person.name }}</div>
      <div class="info">
        <div class="title">Дополнителная информация</div>
        <div v-for="(blockInfo, index) in info" :key="index">
          <BlockInfo :indexPerson="indexPerson" :index="index"></BlockInfo>
        </div>
        <div>
          <AddInfo :indexPerson="indexPerson"></AddInfo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftSvg from "../components/svg/LeftSvg";
import AddInfo from "../components/AddInfo";
import BlockInfo from "../components/BlockInfo";

export default {
  components: {
    LeftSvg,
    AddInfo,
    BlockInfo,
  },
  props: {
    indexPerson: Number,
  },
  data: () => {
    return {};
  },
  computed: {
    person() {
      return this.$store.state.contacts[this.indexPerson];
    },
    info() {
      console.log(this.person.info);
      return this.person.info;
    },
    beforChange(){
      return this.$store.state.beforChange
    }
  },
  methods: {
    comeBack() {
      this.$emit("come-back");
    },
    returnToThePastState(){
      this.$store.commit('returnToThePastState')
    }
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  .back {
    display: flex;
    // align-items: center;
    padding: 0.3em 1em;
    background-color: rgba(128, 128, 128, 0.1);
    border-radius: 5px;
    > :last-child {
      margin-left: 0.5em;
    }
  }
  .cancel {
    padding: 0.3em 1em;
    background-color: rgba(128, 128, 128, 0.1);
    border-radius: 5px;
  }
  .disabled{
    color: rgba(128, 128, 128, 0.5);
  }
}
.person {
  margin: 0 1em;
  .name {
    font-size: 1.4rem;
    padding: 1em 1em;
  }
  .info {
    > .title {
      font-size: 0.9rem;
      color: gray;
      margin: 0.3em 0;
    }
  }
}
</style>