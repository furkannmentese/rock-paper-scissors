<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/game.store'
import { choices } from '../data/choices'

const gameStore = useGameStore()

const getChoiceData = (choiceName: string | null) =>
  choices.find((choice) => choice.name === choiceName)

const userChoiceImg = computed(() => getChoiceData(gameStore.userChoice)?.img || choices[0].img)
const houseChoiceImg = computed(() => getChoiceData(gameStore.houseChoice)?.img || choices[0].img)
</script>

<template>
  <section class="relative max-w-[700px] mx-auto grid grid-cols-2 gap-8 place-items-center pt-16 max-sm:grid-rows-2 max-sm:gap-4 max-sm:pt-32">

    <h2 class="text-2xl text-white uppercase font-bold font-display text-center pb-16 max-sm:pb-0 max-sm:pt-4 max-sm:order-3 max-sm:text-lg">
      YOU PICKED
    </h2>
    <h2 class="text-2xl text-white uppercase font-bold font-display text-center pb-16 max-sm:pb-0 max-sm:pt-4 max-sm:order-4 max-sm:text-lg">
      THE HOUSE PICKED
    </h2>

    <div
      :class="[
        gameStore.userChoice ? `choice-${gameStore.userChoice}` : '',
        'relative max-sm:order-1 max-sm:mt-6',
        'before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:z-[1]',
        'after:absolute after:-left-[15%] after:-top-[15%] after:w-[130%] after:h-[130%] after:rounded-full after:z-[1]',
        'focus:after:shadow-[0_0_0_2rem_var(--color-focus-ring)] focus:after:z-0'
      ]"
    >
      <div
        class="choice relative w-60 h-60 max-sm:w-30 max-sm:h-30 bg-white rounded-full grid place-items-center shadow-[inset_0_0.5rem_var(--color-shadow-black)] z-[2]"
        :class="[gameStore.userChoice]"
      >
        <img 
          :src="userChoiceImg"
          :alt="gameStore.userChoice || ''"
          class="scale-150 max-sm:scale-100 relative z-[1]"
        />
      </div>
    </div>

    <div
      v-if="!gameStore.houseChoice"
      class="relative max-sm:order-2 max-sm:mt-6 before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:bg-[var(--color-dark-blue)]"
    >
      <div class="choice relative w-50 h-50 max-sm:w-25 max-sm:h-25"></div>
    </div>

    <div
      v-else
      :class="[
        gameStore.houseChoice ? `choice-${gameStore.houseChoice}` : '',
        'relative max-sm:order-2 max-sm:mt-6',
        'before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:z-[1]',
        'after:absolute after:-left-[15%] after:-top-[15%] after:w-[130%] after:h-[130%] after:rounded-full after:z-[1]',
        'focus:after:shadow-[0_0_0_2rem_var(--color-focus-ring)] focus:after:z-0'
      ]"
    >
      <div
        class="choice relative w-60 h-60 max-sm:w-30 max-sm:h-30 bg-white rounded-full grid place-items-center shadow-[inset_0_0.5rem_var(--color-shadow-black)] z-[2]"
        :class="[gameStore.houseChoice]"
      >
        <img 
          :src="houseChoiceImg"
          :alt="gameStore.houseChoice || ''"
          class="scale-150 max-sm:scale-100 relative z-[1]"
        />
      </div>
    </div>
  </section>
</template>
