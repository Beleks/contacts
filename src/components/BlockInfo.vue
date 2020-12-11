<template>
  <div class="block">
    <div class="block_info" v-if="!change">
      <div class="head">
        <div class="title">{{ blockInfo.title }}</div>
        <div class="buttons">
          <div class="change" @click="change = true">Изменить</div>
          <div class="delete_button">
            <ButtonDelete
              :deleteObj="{
                type: 'personInfo',
                i1: `${indexPerson}`,
                i2: `${index}`,
              }"
            ></ButtonDelete>
          </div>
        </div>
      </div>
      <div class="value">
        {{ blockInfo.value }}
      </div>
    </div>
    <!-- Когда нажимаем на 'изменить' отрисовывается infoInput 
        Передаем title и value и индексы по которым мы сможем изменить данный объект
        _____
        Так как компонет ввода у нас один в зависимости от type он будет создовать новый объект или изменять старый
     -->
    <div class="info_input" v-else>
      <InputInfo
        @close-change="change = false"
        :objTitle="blockInfo.title"
        :objValue="blockInfo.value"
        :infoObj="{
          type: 'change',
          i1: `${indexPerson}`,
          i2: `${index}`,
        }"
      ></InputInfo>
    </div>
  </div>
</template>

<script>
import InputInfo from "../components/InputInfo";
import ButtonDelete from "../components/ButtonDelete";

export default {
  components: {
    InputInfo,
    ButtonDelete,
  },
  props: {
    // blockInfo: Object,
    indexPerson: Number,
    index: Number,
  },
  data: () => {
    return {
      change: false,
    };
  },
  methods: {},
  computed: {
    blockInfo() {
      return this.$store.state.contacts[this.indexPerson].info[this.index];
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  margin-bottom: 0.5em;
}
.block_info {
  height: 65px;
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    .buttons {
      display: flex;
      align-items: center;
      > div {
        cursor: pointer;
        height: 25px;
        height: 25px;
        border-radius: 5px;
        display: flex;
        align-items: center;
      }
      .change {
        padding: 0 0.5em;
        margin-right: 1em;
        font-size: 0.9rem;
        background-color: rgba(247, 223, 30, 0.3);
        color: rgb(164, 147, 17);
      }
      .delete_button {
        padding: 0 1.2em;
        background-color: rgba(239, 83, 80, 0.3);
      }
    }
  }
  .value {
    margin-top: 0.7em;
  }
}
.info_input {
  height: 65px;
}
</style>