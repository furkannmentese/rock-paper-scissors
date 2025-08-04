<script setup lang="ts">
import { useGameStore } from '../stores/game.store'
const gameStore = useGameStore()
</script>

<template>
  <div class="relative max-w-[700px] mx-auto pt-8">
    <header
      class="flex justify-between items-center h-[150px] border-[3px] border-[var(--color-border-white)] rounded-[20px] px-6 pl-8 py-4"
    >
      <img src="/images/logo.svg" alt="logo" class="h-[92.68px] w-[155.47px] relative top-1" />
      <div
        class="flex flex-col items-center justify-center bg-white rounded-[10px] w-[150px] h-full leading-none"
      >
        <div class="text-[1.1rem] font-bold tracking-[1.5px] text-[var(--color-paper-shadow)] uppercase font-display">
          score
        </div>
        <div class="text-[4rem] text-center font-bold text-[var(--color-text-dark)] font-display">
          {{ gameStore.score }}
        </div>
      </div>
    </header>
  </div>
</template>
