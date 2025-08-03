<script setup lang="ts">
import Header from '../components/Header.vue'
import Game from '../components/Game.vue'
import Footer from '../components/Footer.vue'
import ResultStepOne from '../components/ResultStepOne.vue'
import { useGameStore } from '../stores/game.store'

const gameStore = useGameStore()
</script>

<template>
  <div class="min-h-screen bg-gradient-radial relative overflow-hidden pb-32">
    <Header />
    <Game v-if="gameStore.gameState === 'choosing'" />
    <ResultStepOne v-if="gameStore.gameState === 'playing' || gameStore.gameState === 'house-playing'" />
    <Footer />
  </div>
</template>

<style scoped></style>
