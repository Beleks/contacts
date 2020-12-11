<template>
  <div class="main">
    <div class="head">
      <div class="title">
        <input type="text" v-model="title" />
      </div>
      <div class="buttons">
        <div
          class="cancel"
          @click="cancelChange()"
          v-if="infoObj.type === 'change'"
        >
          Отменить
        </div>
        <div class="cancel" @click="cancelAdd()" v-if="infoObj.type === 'add'">
          Отменить
        </div>
        <div
          class="save"
          @click="saveChange()"
          v-if="infoObj.type === 'change'"
        >
          Сохранить
        </div>
        <div class="save" @click="addInfo()" v-if="infoObj.type === 'add'">
          Добавить
        </div>
      </div>
    </div>
    <div class="value">
      <input type="text" v-model="value" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    objTitle: String,
    objValue: String,
    infoObj: Object,
  },
  data: () => {
    return {
      params: {
        title: null,
        value: null,
      },
    };
  },
  computed: {
    title: {
      get: function () {
        if (this.params.title === null) {
          this.params.title = this.objTitle;
        }
        return this.params.title;
      },
      set: function (value) {
        this.params.title = value;
      },
    },
    value: {
      get: function () {
        if (this.params.value === null) {
          this.params.value = this.objValue;
        }
        return this.params.value;
      },
      set: function (value) {
        this.params.value = value;
      },
    },
  },
  methods: {
    addInfo() {
      let infoLine = {
        i1: this.infoObj.i1,
        params: {
          title: this.params.title,
          value: this.params.value,
        },
      };
      this.$store.commit("addInfo", infoLine);
      this.$emit("close-change");
    },
    cancelAdd() {
      this.params.title = null;
      this.params.value = null;
      this.$emit("close-change");
    },
    cancelChange() {
      this.params.title = null;
      this.params.value = null;
      if (confirm("отменить изменения?")) {
        this.$emit("close-change");
      }
    },
    saveChange() {
      let infoLine = {
        i1: this.infoObj.i1,
        i2: this.infoObj.i2,
        params: {
          title: this.params.title,
          value: this.params.value,
        },
      };
      this.$store.commit("saveChange", infoLine);
      this.$emit("close-change");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  font-size: 1rem;
  padding: 0.3em 0.2em;
  width: 150px;
  color: #2c3e50;
  border: 1px solid gray;
  border-radius: 5px;
}
.main {
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.head {
  display: flex;
  justify-content: space-between;
  .buttons {
    font-size: 0.9rem;
    display: flex;
    // align-items: center;
    > div {
      height: 25px;
      display: flex;
      align-items: center;
      padding: 0 0.4em;
      border-radius: 5px;
    }
    .cancel {
      background-color: rgba(239, 83, 80, 0.3);
      color: rgba(239, 83, 80, 1);
    }
    .save {
      background-color: rgba(66, 184, 131, 0.3);
      color: rgba(66, 184, 131, 1);
      margin-left: 1em;
    }
  }
}
</style>