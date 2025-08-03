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
  <div class="relative max-w-[700px] mx-auto pt-8">
    <section
      class="game relative grid place-items-center h-[30rem] pt-16 before:absolute before:w-full before:h-full before:left-[28%] before:top-[35%] before:bg-[url('/images/bg-triangle.svg')] before:bg-no-repeat before:z-0"
    >
      <button
        v-for="choice in choices"
        :key="choice.name"
        :class="[
          'choice-btn',
          `choice-${choice.name}`,
          'relative',
          'before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:z-[1]',
          'focus:after:content-[\'\'] focus:after:absolute focus:after:-left-[15%] focus:after:-top-[15%] focus:after:w-[130%] focus:after:h-[130%] focus:after:rounded-full focus:after:shadow-[0_0_0_2rem_#223351] focus:after:z-0',
        ]"
        :style="{ gridArea: choice.gridArea }"
        @click="handleChoiceClick(choice.name)"
      >
        <div
          :class="[
            'choice',
            'relative w-40 h-40 bg-white rounded-full grid place-items-center shadow-[inset_0_0.5rem_#00000026] z-[2]',
          ]"
        >
          <img :src="choice.img" :alt="choice.alt" class="scale-150 relative z-[1]" />
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

