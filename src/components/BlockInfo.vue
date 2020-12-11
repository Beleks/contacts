<template>
  <div class="block">
    <div class="block_info" v-if="!change">
      <div class="head">
        <div class="title">{{ blockInfo.title }}</div>
        <div class="buttons">
          <div class="change" @click="change = true">Изменить</div>
          <div class="delete_button">
            <Delete
              :deleteObj="{
                type: 'personInfo',
                i1: `${indexPerson}`,
                i2: `${index}`,
              }"
            ></Delete>
          </div>
        </div>
      </div>
      <div class="value">
        {{ blockInfo.value }}
      </div>
    </div>
    <div class="info_input" v-else>
      <InfoInput
        @close-change="change = false"
        :objTitle="blockInfo.title"
        :objValue="blockInfo.value"
        :infoObj="{
          type: 'change',
          i1: `${indexPerson}`,
          i2: `${index}`,
        }"
      ></InfoInput>
    </div>
  </div>
</template>

<script>
import InfoInput from "../components/InfoInput";
import Delete from "../components/Delete";

export default {
  components: {
    InfoInput,
    Delete,
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
  // justify-content: space-between;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    .buttons {
      display: flex;
      align-items: center;
      .change {
        height: 25px;
        display: flex;
        align-items: center;
        padding: 0 0.5em;
        margin-right: 1em;
        font-size: 0.9rem;
        border-radius: 5px;
        background-color: rgba(247, 223, 30, 0.3);
        color: rgb(164, 147, 17);
      }
      .delete_button {
        height: 25px;
        padding: 0 1.2em;
        display: flex;
        align-items: center;
        border-radius: 5px;
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