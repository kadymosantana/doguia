<script setup lang="ts">
import type { Breed } from "@/types";

defineProps<{
  breed: Breed;
  category: { name: string; traduction: string };
}>();

const icons = [1, 2, 3, 4, 5];
</script>

<template>
  <div>
    <h3 class="mb-1 text-xs md:text-sm">{{ category.traduction }}</h3>
    <div class="flex gap-1">
      <Icon
        v-for="(icon, index) in icons"
        :name="
          breed[category.name] >= index + 1
            ? 'material-symbols:pet-supplies'
            : 'material-symbols:pet-supplies-outline'
        "
        :color="breed[category.name] >= index + 1 ? '#fde047' : '#78716c'"
      />
    </div>
  </div>
</template>
