<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);

const levels = [1, 2, 3, 4, 5];
</script>

<template>
  <select
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    :class="{
      'border-yellow-500': modelValue,
      'border-transparent': !modelValue
    }"
    class="cursor-pointer rounded-xl border-2 bg-stone-700 p-2 outline-0 backdrop-opacity-40"
  >
    <option value="">
      <slot></slot>
    </option>
    <option v-for="level in levels" :value="level">{{ level }}</option>
  </select>
</template>
