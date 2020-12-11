<template>
  <div class="contacts">
    <div v-for="(person, index) in contacts" :key="index" class="contact_line">
      <div class="person" @click="moreInfo(index)">{{ person.name }}</div>
      <div class="delete_button">
        <Delete :deleteObj="{ type: 'person', i1: `${index}` }"></Delete>
      </div>
    </div>
    <AddPerson></AddPerson>
  </div>
</template>

<script>
import Delete from "../components/Delete";
import AddPerson from "../components/AddPerson";

export default {
  name: "HelloWorld",
  components: { Delete, AddPerson },
  props: {},
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
  methods: {
    moreInfo(index) {
      this.$emit("more-info", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.person {
  display: flex;
  height: 40px;
  padding: 0 1em;
  border: 1px solid gray;
  align-items: center;
  flex-grow: 1;
  border-radius: 5px;
  font-size: 1.2rem;
}
.contact_line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5em;
  padding: 0 1em;
  > :last-child {
    cursor: pointer;
    margin: 0 1em;
  }
}
.delete_button {
  // padding: 0.7em 1em;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 83, 80, 0.3);
  border-radius: 5px;
  color: rgba(239, 83, 80, 1);
}
</style>
