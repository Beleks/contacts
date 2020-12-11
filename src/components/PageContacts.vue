<template>
  <div class="contacts">
    <div v-for="(person, index) in contacts" :key="index" class="contact_line">
      <div class="person" @click="moreInfo(index)">{{ person.name }}</div>
      <div class="delete_button">
        <!-- 
          type отвечает за то, что мы удаляем. 
          person: передаем только один index для удаления
          personInfo: передаем индекс контакта и индекс поля которое мы удаляем 
          -->
        <ButtonDelete :deleteObj="{ type: 'person', i1: `${index}` }"></ButtonDelete>
      </div>
    </div>
    <!-- компонет создания контакта -->
    <AddPerson></AddPerson>
  </div>
</template>

<script>
import ButtonDelete from "../components/ButtonDelete";
import AddPerson from "../components/AddPerson";

export default {
  name: "HelloWorld",
  components: { ButtonDelete, AddPerson },
  props: {},
  computed: {
    contacts() {
      return this.$store.state.contacts;
    },
  },
  methods: {
    moreInfo(index) {
      // Передаем индекс контакта для отрисовки другой страницы с информацей о контакте
      this.$emit("more-info", index);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.person {
  cursor: pointer;
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
