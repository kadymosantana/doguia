<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col items-center gap-6 md:flex-row">
    <NuxtImg src="/logo.png" alt="Logo Doguia" format="png" quality="80" class="w-20 md:w-16" />
    <label
      class="flex w-full items-center gap-3 overflow-hidden rounded-2xl border-2 border-transparent bg-stone-700 pl-4 shadow-sm backdrop-opacity-40 focus-within:border-yellow-500"
      for="search"
    >
      <Icon name="solar:magnifer-linear" size="1.5rem" />
      <input
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :value="modelValue"
        class="flex-1 bg-transparent p-4 outline-0"
        type="text"
        id="search"
        placeholder="Pesquisar raça..."
      />
    </label>
  </div>
</template>
