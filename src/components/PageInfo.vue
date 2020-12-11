<template>
  <div>
    <div class="header">
      <div @click="comeBack()" class="back">
        <LeftSvg></LeftSvg>
        <div>Контакты</div>
      </div>
      <div
        class="cancel"
        @click="returnToThePastState()"
        :class="{ disabled: !beforChange }"
      >
        Отменить изменения
      </div>
    </div>
    <div class="person">
      <div class="name">{{ person.name }}</div>
      <div class="info">
        <div class="title">Дополнительная информация</div>
        <div v-for="(blockInfo, index) in info" :key="index">
          <!-- строка информации "название: значение" 
               Передаем index контакта и index строки
               что бы потом по индексам изменять и удалять строки
          -->
          <BlockInfo :indexPerson="indexPerson" :index="index"></BlockInfo>
        </div>
        <div>
          <!-- копонент для создания новой строки информации -->
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
      // Получаем объект контакта по индексу для отбражения name
      return this.$store.state.contacts[this.indexPerson];
    },
    info() {
      // Получаем объект инфо
      return this.person.info;
    },
    beforChange() {
      // Если true то есть изменения которые можно отменить
      return this.$store.state.beforChange !== null;
    },
  },
  methods: {
    comeBack() {
      // Возрашает на первую страницу с контактами
      this.$emit("come-back");
    },
    returnToThePastState() {
      // Если и
      if (this.beforChange) {
        this.$store.commit("returnToThePastState");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  > div {
    cursor: pointer;
  }
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
  .disabled {
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