<template>
  <div>
    <div class="add_button" v-if="!creation" @click="creation = true">
      <AddSvg></AddSvg>
    </div>
    <div class="input" v-else>
      <InputInfo
        @close-change="creation = false"
        :indexPerson="indexPerson"
        :infoObj="{ type: 'add', i1: `${indexPerson}` }"
        :objTitle="''"
        :objValue="''"
      ></InputInfo>
    </div>
  </div>
</template>

<script>
import AddSvg from "../components/svg/AddSvg";
import InputInfo from "../components/InputInfo";
export default {
  data: () => {
    return {
      creation: false,
      name: "",
    };
  },
  props: {
    indexPerson: Number,
  },
  components: {
    AddSvg,
    InputInfo,
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
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
</style>