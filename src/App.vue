<template>
  <div>
    <DynamicTable
      :headers="headers"
      :data="data"
      :pagination="pagination"
      :is-selectable="isSelectable"
    />
  </div>
</template>

<script setup>
import DynamicTable from "@/components/DynamicTable.vue";
import { ref } from "vue";

const headers = ref([
  {
    text: "Id",
    sortable: false,
  },
  {
    text: "Name",
    sortable: true,
  },
  {
    text: "Email",
    sortable: false,
  },
  {
    text: "Phone",
    sortable: false,
  },
  {
    text: "Company",
    sortable: true,
  },
]);

const data = ref([
  {
    id: 1,
    name: "Leanne Graham",
    email: "Lean@gmail.com",
    phone: "1-770-736-8031 x56442",
    company: "Romaguera-Crona",
  },
  {
    id: 2,
    name: "Ervin Howell",
    email: "Ervin@gmail.com",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
]);

const pagination = ref({
  page: 1,
  limit: 2,
  totalPages: 2,
});

const isSelectable = ref(true);
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
