<script setup lang="ts">
import { choices } from '../data/choices'
import { useGameStore, type GameChoice } from '../stores/game.store'

const gameStore = useGameStore()

function handleChoiceClick(choiceName: string) {
  if (gameStore.isChoosing) {
    gameStore.makeChoice(choiceName as GameChoice)
  }
}
</script>

<template>
  <div class="relative max-w-[700px] mx-auto pt-8 px-6 sm:px-0">
    <section
      class="game relative grid place-items-center h-[30rem] pt-16 before:absolute before:w-full before:h-full before:left-[28%] before:top-[35%] before:bg-[url('/images/bg-triangle.svg')] before:bg-no-repeat before:z-0 max-sm:before:left-[50%] max-sm:before:top-[55%] max-sm:before:-translate-x-1/2 max-sm:before:-translate-y-1/2 max-sm:before:bg-center max-sm:before:bg-[length:200px_180px] max-sm:before:bg-[url('/images/bg-triangle-mobile.svg')]"
    >
      <button
        v-for="choice in choices"
        :key="choice.name"
        :class="[
          'choice-btn',
          `choice-${choice.name}`,
          'relative',
          'cursor-pointer',
          'before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:z-[1]',
          'hover:after:content-[\'\'] hover:after:absolute hover:after:-left-[15%] hover:after:-top-[15%] hover:after:w-[130%] hover:after:h-[130%] hover:after:rounded-full hover:after:shadow-[0_0_0_2rem_var(--color-focus-ring)] hover:after:z-0',
        ]"
        :style="{ gridArea: choice.gridArea }"
        @click="handleChoiceClick(choice.name)"
      >
        <div
          :class="[
            'choice',
            'relative w-30 h-30 sm:w-40 sm:h-40 bg-white rounded-full grid place-items-center shadow-[inset_0_0.5rem_var(--color-shadow-black)] z-[2]',
          ]"
        >
          <img :src="choice.img" :alt="choice.alt" class="scale-90 sm:scale-150 relative z-[1]" />
        </div>
      </button>
    </section>
  </div>
</template>

<style scoped>
.game {
  grid-template-areas:
    'paper scissors'
    'rock rock';
}
</style>

