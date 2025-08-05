<script setup lang="ts">
import { computed } from 'vue'
import { useGameStore } from '../stores/game.store'
import { choices } from '../data/choices'

const gameStore = useGameStore()

const getChoiceData = (choiceName: string | null) =>
  choices.find((choice) => choice.name === choiceName)

const userChoiceImg = computed(() => getChoiceData(gameStore.userChoice)?.img || choices[0].img)
const houseChoiceImg = computed(() => getChoiceData(gameStore.houseChoice)?.img || choices[0].img)

function playAgain() {
  gameStore.resetGame()
}
</script>

<template>
  <section class="relative max-w-[1000px] mx-auto grid grid-cols-3 gap-8 place-items-center pt-16 max-sm:max-w-[700px] max-sm:grid-cols-2 max-sm:grid-rows-3 max-sm:gap-4 max-sm:pt-32">
    <h2 class="text-2xl text-white uppercase font-bold font-display text-center pb-16 max-sm:pb-0 max-sm:pt-4 max-sm:order-3 max-sm:text-lg">
      YOU PICKED
    </h2>
    <div class="max-sm:hidden"></div>
    <h2 class="text-2xl text-white uppercase font-bold font-display text-center pb-16 max-sm:pb-0 max-sm:pt-4 max-sm:order-4 max-sm:text-lg">
      THE HOUSE PICKED
    </h2>

    <div
      :class="[
        gameStore.userChoice ? `choice-${gameStore.userChoice}` : '',
        'relative max-sm:order-1 max-sm:mt-6',
        'before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:z-[1]',
        'after:absolute after:-left-[15%] after:-top-[15%] after:w-[130%] after:h-[130%] after:rounded-full after:z-[1]',
        'focus:after:shadow-[0_0_0_2rem_var(--color-focus-ring)] focus:after:z-0',
        gameStore.gameResult === 'You Win'
          ? 'after:content-[\'\'] after:absolute after:-left-[15%] after:-top-[15%] after:w-[130%] after:h-[130%] after:rounded-full after:shadow-[0_0_0_60px_rgba(255,255,255,0.05),0_0_0_120px_rgba(255,255,255,0.05),0_0_0_180px_rgba(255,255,255,0.05)] max-sm:after:shadow-[0_0_0_20px_rgba(255,255,255,0.05),0_0_0_60px_rgba(255,255,255,0.05),0_0_0_100px_rgba(255,255,255,0.05)] after:z-0'
          : '',
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

    <div class="grid place-items-center max-sm:order-5 max-sm:col-span-2 max-sm:mt-8">
      <h3 class="text-6xl pb-6 uppercase font-bold text-center text-white max-sm:text-4xl max-sm:pb-4">
        {{ gameStore.gameResult }}
      </h3>
      <button
        class="bg-white border-2 border-transparent rounded-[0.6rem] px-14 py-3 font-display text-xl tracking-[0.1em] cursor-pointer uppercase font-bold hover:border-[var(--color-focus-ring)] focus:border-[var(--color-focus-ring)] focus:outline-none transition-colors max-sm:px-8 max-sm:py-2 max-sm:text-lg"
        :class="[gameStore.gameResult !== 'You Lose' ? 'text-[var(--color-text-dark)]' : 'text-[var(--color-rock-bg)]']"
        @click="playAgain"
      >
        PLAY AGAIN
      </button>
    </div>

    <div
      :class="[
        gameStore.houseChoice ? `choice-${gameStore.houseChoice}` : '',
        'relative max-sm:order-2 max-sm:mt-6',
        'before:absolute before:-left-[15%] before:-top-[15%] before:w-[130%] before:h-[130%] before:rounded-full before:z-[1]',
        'after:absolute after:-left-[15%] after:-top-[15%] after:w-[130%] after:h-[130%] after:rounded-full after:z-[1]',
        'focus:after:shadow-[0_0_0_2rem_var(--color-focus-ring)] focus:after:z-0',
        gameStore.gameResult === 'You Lose'
          ? 'after:content-[\'\'] after:absolute after:-left-[15%] after:-top-[15%] after:w-[130%] after:h-[130%] after:rounded-full after:shadow-[0_0_0_60px_rgba(255,255,255,0.05),0_0_0_120px_rgba(255,255,255,0.05),0_0_0_180px_rgba(255,255,255,0.05)] max-sm:after:shadow-[0_0_0_20px_rgba(255,255,255,0.05),0_0_0_80px_rgba(255,255,255,0.05),0_0_0_120px_rgba(255,255,255,0.05)] after:z-0'
          : '',
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