<script setup lang="ts">
import { useGameStore } from '../stores/game.store'
const gameStore = useGameStore()
</script>

<template>
  <div class="relative max-w-[700px] mx-auto pt-8 px-6 sm:px-0">
    <header
      class="flex justify-between items-center h-[150px] border-2 border-[var(--color-border-white)] rounded-[20px] max-sm:rounded-[6px] px-4 sm:px-6 sm:pl-8 pl-6 py-4"
    >
      <img src="/images/logo.svg" alt="logo" class="h-[92.68px] w-[155.47px] max-sm:h-[65px] max-sm:w-[105px] relative top-1" />
      <div
        class="flex flex-col items-center justify-center bg-white rounded-[10px] max-sm:rounded-[6px] w-[150px] max-sm:w-[120px] h-full leading-none"
      >
        <div class="text-[1.1rem] max-sm:text-[0.9rem] font-bold tracking-[1.5px] text-[var(--color-paper-shadow)] uppercase font-display">
          score
        </div>
        <div class="text-[4rem] max-sm:text-[3.2rem] text-center font-bold text-[var(--color-text-dark)] font-display">
          {{ gameStore.score }}
        </div>
      </div>
    </header>
  </div>
</template>
