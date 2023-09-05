<script setup lang="ts">
import type { Breed } from "types";

const config = useRuntimeConfig();

const breedValue = ref("");
const debouncedBreedValue = refDebounced(breedValue, 300);

const protectivenessValue = ref("");
const energyValue = ref("");
const trainabilityValue = ref("");

const { data: breeds, pending } = await useFetch<Breed[]>("https://api.api-ninjas.com/v1/dogs", {
  headers: {
    // "X-Api-Key": process.env.NUXT_PUBLIC_API_KEY as string
    "X-Api-Key": config.public.apiKey
  },
  query: {
    name: breedValue,
    min_height: 1,
    protectiveness: protectivenessValue,
    energy: energyValue,
    trainability: trainabilityValue
  },
  watch: [debouncedBreedValue, protectivenessValue, energyValue, trainabilityValue]
});
</script>

<template>
  <div
    class="content max-w-screen min-h-screen bg-stone-900 p-4 text-white placeholder:text-stone-500 md:p-8 lg:p-10"
  >
    <div class="flex w-full flex-col gap-12">
      <Header v-model="breedValue" />

      <div class="flex w-full gap-4">
        <SelectInput v-model="protectivenessValue">Cão de guarda</SelectInput>
        <SelectInput v-model="energyValue">Energia</SelectInput>
        <SelectInput v-model="trainabilityValue">Treinabilidade</SelectInput>
      </div>

      <div v-if="pending" class="flex items-center justify-center">
        <Icon name="line-md:loading-twotone-loop" size="5rem" color="#57534E" />
      </div>

      <ul v-else-if="breeds?.length" class="flex w-full flex-wrap gap-12 md:gap-16">
        <BreedCard v-for="breed in breeds" :key="breed.name" :breed="breed" />
      </ul>

      <div v-else class="flex flex-col items-center justify-center gap-6">
        <NuxtImg src="/search-not-found.png" class="w-64 md:w-72" />
        <span class="text-xl text-stone-600">Nenhuma raça encontrada.</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content,
.content label {
  background-image: url("https://www.transparenttextures.com/patterns/cartographer.png");
}
</style>
