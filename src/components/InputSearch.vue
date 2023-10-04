<template>
  <div>
    <input
      type="text"
      placeholder="Search"
      :value="modelValue"
      @input="onInput"
    />
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

function onInput(e) {
  emit("update:modelValue", e.target.value);
}
</script>

<style scoped>
input {
  width: 200px;
  max-width: 90vw;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  margin-bottom: 1rem;
}
</style>
