<template>
  <div class="add_block">
    <div class="add_button" v-if="!creation" @click="creation = true">
      <AddSvg></AddSvg>
    </div>
    <div class="input_block" v-else>
      <div>
        <input type="text" v-model="name" />
      </div>
      <div class="chose_buttons">
        <div class="cancel" @click="creation = false">Отмена</div>
        <div class="add" @click="addPerson()">Сохранить</div>
      </div>
    </div>
  </div>
</template>

<script>
import AddSvg from "../components/svg/AddSvg";
export default {
  data: () => {
    return {
      creation: false,
      name: "",
    };
  },
  components: {
    AddSvg,
  },
  methods: {
    addPerson() {
      this.$store.commit("addPerson", this.name);
      this.name = "";
      this.creation = false;
    },
  },
};
</script>

<style scoped lang="scss">
.add_block {
  // display: flex;
  margin: 1em;
  .add_button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    // border: 1px solid gray;
    border-radius: 5px;
    // padding: 0.6em;
    height: 40px;
    background-color: rgba(66, 184, 131, 0.5);
  }
  .input_block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    input {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      // border: 1px solid rgb(0, 148, 174);
      // font-family: Avenir, Helvetica, Arial, sans-serif;
      border: none;
      display: flex;
      align-items: center;
      background-image: none;
      background-color: transparent;
      box-shadow: none;
      outline: none;
      font-size: 1.2rem;
      padding: 0.3em 0.2em;
      color: #2c3e50;
      border: 1px solid gray;
      border-radius: 5px;
    }
    .chose_buttons {
      display: flex;
      // justify-content: space-between;
      font-size: 0.9rem;
      > div {
        cursor: pointer;
        padding: 0.4em 0.4em;
        border-radius: 5px;
      }
      > :first-child {
        background-color: rgba(239, 83, 80, 0.3);
        color: rgba(239, 83, 80, 1);
      }
      > :last-child {
        background-color: rgba(66, 184, 131, 0.3);
        color: rgba(66, 184, 131, 1);
        margin-left: 1em;
      }
    }
  }
}
</style>