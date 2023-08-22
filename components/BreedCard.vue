<script setup lang="ts">
import type { Breed } from "types";

defineProps<{
  breed: Breed;
}>();

const categories = [
  { name: "good_with_children", traduction: "Gosta de crianças?" },
  { name: "good_with_other_dogs", traduction: "Gosta de outros cães?" },
  { name: "grooming", traduction: "Cuidados higiênicos" },
  { name: "drooling", traduction: "Baba muito?" },
  { name: "good_with_strangers", traduction: "Gosta de estranhos?" },
  { name: "playfulness", traduction: "Gosta de brincar?" },
  { name: "protectiveness", traduction: "Cão de guarda" },
  { name: "trainability", traduction: "Treinabilidade" },
  { name: "energy", traduction: "Energia" },
  { name: "barking", traduction: "Late muito?" }
];
</script>

<template>
  <li class="card w-full overflow-hidden rounded-3xl bg-stone-800 shadow-lg md:w-[24rem]">
    <div class="relative">
      <NuxtImg
        :src="breed.image_link"
        :alt="breed.name"
        format="jpg"
        quality="80"
        fit="contain"
        class="w-full"
      />

      <div class="absolute bottom-0 left-0 flex w-full justify-around p-2 text-sm backdrop-blur-xl">
        <span>
          {{ (breed.min_height_female * 2.54).toFixed() }} –
          {{ (breed.max_height_male * 2.54).toFixed() }} cm
        </span>

        <span
          >{{ (breed.min_weight_female * 0.45).toFixed() }} –
          {{ (breed.max_weight_male * 0.45).toFixed() }} kg
        </span>

        <span
          >{{ breed.min_life_expectancy }} –
          {{ breed.max_life_expectancy }}
          anos
        </span>
      </div>
    </div>

    <div class="p-4 backdrop-opacity-60">
      <h2 class="mb-4 text-xl font-bold tracking-tight">{{ breed.name }}</h2>
      <div class="grid grid-cols-2 gap-x-8 gap-y-4">
        <Category
          v-for="category in categories"
          :key="category.name"
          :breed="breed"
          :category="category"
        />
      </div>
    </div>
  </li>
</template>

<style scoped>
.card {
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
}
</style>
