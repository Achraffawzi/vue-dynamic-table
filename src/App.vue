<template>
  <div>
    <DynamicTable
      :headers="headers"
      :data="dataCopy"
      :pagination="pagination"
      :is-selectable="isSelectable"
      @row-per-page-change="handleRowsPerPageChange($event)"
      @delete-item="handleDeleteItem($event)"
      @update-item="handleUpdateItem($event)"
    />
  </div>
</template>

<script setup>
import DynamicTable from "@/components/DynamicTable.vue";
import { ref, onBeforeMount } from "vue";

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
  {
    id: 4,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 5,
    name: "Ervin Howell",
    email: "Ervin@gmail.com",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    id: 6,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 7,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 8,
    name: "Ervin Howell",
    email: "Ervin@gmail.com",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    id: 9,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 10,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 11,
    name: "Ervin Howell",
    email: "Ervin@gmail.com",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    id: 12,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 13,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 14,
    name: "Ervin Howell",
    email: "Ervin@gmail.com",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    id: 15,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 16,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 17,
    name: "Ervin Howell",
    email: "Ervin@gmail.com",
    phone: "010-692-6593 x09125",
    company: "Deckow-Crist",
  },
  {
    id: 18,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 19,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
  {
    id: 20,
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
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
  {
    id: 3,
    name: "Clementine Bauch",
    email: "clementine@gmail.com",
    phone: "1-463-123-4447",
    company: "Romaguera-Jacobson",
  },
]);

const dataCopy = ref(data.value);

const pagination = ref({
  page: 1,
  limit: 5,
  totalPages: 73,
  rowsPerPage: [5, 10, 15, 20],
});

const isSelectable = ref(true);

const getPaginatedData = (data, page, limit) => {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return data.slice(startIndex, endIndex);
};
onBeforeMount(() => {
  dataCopy.value = getPaginatedData(
    data.value,
    pagination.value.page,
    pagination.value.limit
  );
});

const handleRowsPerPageChange = (value) => {
  pagination.value.limit = value;
  dataCopy.value = getPaginatedData(
    data.value,
    pagination.value.page,
    pagination.value.limit
  );
};

const handleUpdateItem = (value) => {
  const index = data.value.findIndex((item) => item.id === value.id);
  data.value[index] = value;
  dataCopy.value = getPaginatedData(
    data.value,
    pagination.value.page,
    pagination.value.limit
  );
};

const handleDeleteItem = (item) => {
  data.value = data.value.filter((dataItem) => dataItem.id !== item.id);
  dataCopy.value = getPaginatedData(
    data.value,
    pagination.value.page,
    pagination.value.limit
  );
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
