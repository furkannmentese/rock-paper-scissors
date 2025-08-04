<script setup lang="ts">
import Header from '../components/Header.vue'
import Game from '../components/Game.vue'
import Footer from '../components/Footer.vue'
import ResultStepOne from '../components/ResultStepOne.vue'
import ResultStepTwo from '../components/ResultStepTwo.vue'
import { useGameStore } from '../stores/game.store'

const gameStore = useGameStore()
</script>

<template>
  <div class="min-h-screen bg-gradient-radial relative overflow-hidden pb-32">
    <Header />
    <Game v-if="gameStore.isChoosing" />
    <ResultStepOne v-if="gameStore.isPlaying || gameStore.isHousePlaying" />
    <ResultStepTwo v-if="gameStore.isResult" />
    <Footer />
  </div>
</template>

<style scoped></style>
