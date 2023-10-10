<template>
  <div class="modal-container">
    <div class="modal-content">
      <h1>Edit Item</h1>
      <div class="modal-form">
        <div v-for="(value, key) in item" :key="key">
          <label :for="key">{{ key }}</label>
          <input
            type="text"
            :value="value"
            :disabled="key.toString().toLowerCase() === 'id'"
            :name="key"
            @input="handleInputChange"
          />
        </div>
      </div>
      <div class="modal-actions">
        <button @click="handleUpdateItem">Save</button>
        <button>Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["handleUpdate"]);

const itemCopy = ref(props.item);
function handleInputChange(e) {
  itemCopy.value = {
    ...itemCopy.value,
    [e.target.name]: e.target.value,
  };
}

function handleUpdateItem() {
  emit("handleUpdate", itemCopy.value);
}
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal-content {
  position: relative;
  top: 50%;
  left: 50%;
  z-index: 101;
  transform: translate(-50%, -50%);
  padding: 1rem;
  width: 65%;
  height: 65%;
  background-color: #fff;
  border-radius: 0.5rem;
  overflow-y: auto;
}

.modal-form {
  margin-top: 2.5rem;
  display: flex;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.modal-form div {
  width: 50%;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
}

.modal-form label {
  margin-bottom: 0.5rem;
}

.modal-form input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  position: absolute;
  z-index: 102;
  bottom: 1rem;
  right: 1rem;
}

.modal-actions button {
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ced4da;
  background-color: #fff;
  cursor: pointer;
}

.modal-actions button:hover {
  background-color: #f8f9fa;
}

.modal-actions button:active {
  background-color: #e9ecef;
}

@media (max-width: 768px) {
  .modal-content {
    width: 90%;
    height: 90%;
  }

  .modal-form div {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .modal-content {
    width: 100%;
    height: 100%;
  }
}
</style>
