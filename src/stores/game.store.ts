import { defineStore } from 'pinia'

export const GAME_CHOICES = ['rock', 'paper', 'scissors'] as const
export const GAME_RESULTS = ['You Win', 'You Lose', 'Draw'] as const
export const GAME_STATES = ['choosing', 'playing', 'house-playing', 'result'] as const

export type GameChoice = (typeof GAME_CHOICES)[number]
export type GameResult = (typeof GAME_RESULTS)[number]
export type GameState = (typeof GAME_STATES)[number]

const WIN_CONDITIONS: Record<GameChoice, GameChoice> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
} as const

interface GameStoreState {
  gameState: GameState
  userChoice: GameChoice | null
  houseChoice: GameChoice | null
  score: number
}

export const useGameStore = defineStore('game', {
  state: (): GameStoreState => ({
    gameState: 'choosing',
    userChoice: null,
    houseChoice: null,
    score: 0,
  }),

  getters: {
    gameResult(): GameResult | null {
      if (!this.userChoice || !this.houseChoice) return null

      if (this.userChoice === this.houseChoice) return 'Draw'

      return WIN_CONDITIONS[this.userChoice] === this.houseChoice ? 'You Win' : 'You Lose'
    },

    isChoosing(): boolean {
      return this.gameState === 'choosing'
    },

    isPlaying(): boolean {
      return this.gameState === 'playing'
    },

    isHousePlaying(): boolean {
      return this.gameState === 'house-playing'
    },

    isResult(): boolean {
      return this.gameState === 'result'
    },
  },

  actions: {
    async makeChoice(choice: GameChoice): Promise<void> {
      this.userChoice = choice
      this.gameState = 'playing'

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          this.houseChoice = this.generateRandomChoice()
          this.gameState = 'house-playing'
          resolve()
        }, 1000)
      })

      await new Promise<void>((resolve) => {
        setTimeout(() => {
          this.gameState = 'result'

          if (this.gameResult === 'You Win') {
            this.incrementScore()
          }

          resolve()
        }, 1000)
      })
    },

    generateRandomChoice(): GameChoice {
      const randomIndex = Math.floor(Math.random() * GAME_CHOICES.length)
      return GAME_CHOICES[randomIndex]
    },

    incrementScore(): void {
      this.score++
    },

    resetGame(): void {
      this.gameState = 'choosing'
      this.userChoice = null
      this.houseChoice = null
    },
  },
})
