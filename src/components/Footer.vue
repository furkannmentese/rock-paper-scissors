<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref<boolean>(false)

const openDialog = () => {
  dialog.value = true
}

const closeDialog = () => {
  dialog.value = false
}
</script>

<template>
  <footer class="absolute bottom-8 right-8 z-10">
    <button
      class="border-1 border-white text-white uppercase tracking-[2.5px] text-sm font-display px-6 py-2 rounded-lg hover:bg-white hover:text-[#3B4363]"
      @click="openDialog"
    >
      Rules
    </button>

    <div 
        v-if="dialog"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-2xl max-w-md w-full mx-12 p-8 relative">
        <button
          class="absolute top-10 right-6 w-8 h-8 flex items-center justify-center hover:opacity-70"
          @click="closeDialog"
        >
          <img 
            src="/images/icon-close.svg"
            alt="Close"
            class="w-5 h-5"
          />
        </button>

        <h2
          class="text-[#3B4363] text-[32px] font-bold font-display uppercase tracking-wider text-left mb-10"
        >
          Rules
        </h2>

        <div class="flex justify-center mb-4">
          <img
            src="/images/image-rules.svg"
            alt="Game Rules"
            class="w-full max-w-xs h-auto"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
