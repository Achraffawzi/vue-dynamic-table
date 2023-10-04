<template>
  <div>
    <!-- search -->
    <InputSearch
      v-model="searchQuery"
      @update:modelValue="handleInputSearchUpdate($event)"
    />
    <table>
      <thead>
        <tr>
          <th v-if="isSelectable">
            <input
              type="checkbox"
              name="selectAll"
              id="selectAll"
              :checked="areAllSelected"
              @change="setSelectedItems(null)"
            />
          </th>
          <th
            v-for="{ text, sortable } in headers"
            :key="text"
            :class="[sortable ? 'th-sortable' : '']"
          >
            {{ text }}
            <div class="icon-sort-container" v-if="sortable">
              <span class="icon-sort" @click="sortBy(text, 'asc')">asc</span>
              <span class="icon-sort" @click="sortBy(text, 'desc')">desc</span>
            </div>
          </th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataCopy" :key="item.id">
          <td v-if="isSelectable">
            <input
              type="checkbox"
              :name="`selected-name-${item.id}`"
              :id="`selected-id-${item.id}`"
              @change="setSelectedItems(item.id)"
              :checked="isChecked(item.id)"
            />
          </td>
          <td v-for="{ text } in headers" :key="text">
            {{ item[text.toLowerCase()] }}
          </td>
          <td class="action-dots">
            <div @click="setOpenedAction(item.id)" unselectable="true">...</div>
            <!-- menu -->
            <ul v-if="openedAction === item.id">
              <li>
                <!-- <i class="pi pi-check"></i> -->
                <span>Edit</span>
              </li>
              <li>
                <!-- <i class="pi pi-check"></i> -->
                <span>Delete</span>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import InputSearch from "./InputSearch.vue";

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  pagination: {
    type: Object,
    required: true,
  },
  isSelectable: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const filteredData = computed(() => {
  return props.data.filter((item) => {
    return filteredKeys.some((key) => {
      return String(item[key])
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    });
  });
});

const dataCopy = ref(props.data);
const selectedItems = ref([]);
const areAllSelected = ref(false);
const openedAction = ref(null);
const searchQuery = ref("");
const filteredKeys = ["name", "phone", "email", "company"];

const handleInputSearchUpdate = (value) => {
  searchQuery.value = value;
  dataCopy.value = props.data.filter((item) => {
    return filteredKeys.some((key) => {
      return String(item[key])
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase());
    });
  });
};

const isChecked = (id) => {
  return selectedItems.value.includes(id);
};

const sortBy = (header, order) => {
  dataCopy.value.sort((a, b) => {
    if (a[header.toLowerCase()] < b[header.toLowerCase()]) {
      return order === "asc" ? -1 : 1;
    }
    if (a[header.toLowerCase()] > b[header.toLowerCase()]) {
      return order === "asc" ? 1 : -1;
    }
    return 0;
  });
};

const setSelectedItems = (id) => {
  if (id === null) {
    areAllSelected.value = !areAllSelected.value;
    selectedItems.value = areAllSelected.value
      ? filteredData.value.map((item) => item.id)
      : [];
  } else {
    if (areAllSelected.value) {
      areAllSelected.value = false;
    }
    selectedItems.value = selectedItems.value.includes(id)
      ? selectedItems.value.filter((item) => item !== id)
      : [...selectedItems.value, id];
  }
};

const setOpenedAction = (id) => {
  openedAction.value = openedAction.value === id ? null : id;
};
</script>

<style scoped>
table {
  width: 100%;
  margin-bottom: 1rem;
  background-color: #fff;
  border-collapse: collapse;
  text-align: center;
}

table th,
table td {
  padding: 0.75rem;
  vertical-align: top;
  border-bottom: 1px solid #dee2e6;
}

table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  background-color: #f8f9fa;
}

.th-sortable {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon-sort-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.icon-sort {
  font-size: 10px;
  font-weight: normal;
}

tbody tr:hover {
  background-color: #f8f9fa;
}

.action-dots {
  position: relative;
}

.action-dots > div {
  margin: auto;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  line-height: 27px;
  font-size: 26px;
  transition: all 0.15s linear;
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
}

.action-dots > div:hover {
  background-color: #ececec;
}

.action-dots > div:active {
  background-color: #c2c0c0;
}

.action-dots > ul {
  position: absolute;
  top: 25px;
  right: 65%;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ececec;
  border-radius: 5px;
  padding: 0px;
  margin: 0;
  list-style: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.action-dots > ul > li {
  width: 100%;
  margin: 0;
  padding: 15px;
  text-align: left;
  cursor: pointer;
}

.action-dots > ul > li:hover {
  background-color: #ececec;
}
</style>
