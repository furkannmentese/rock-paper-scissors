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
  <footer class="absolute bottom-8 right-8 max-sm:right-auto max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 z-10">
    <button
      class="cursor-pointer border-1 border-white text-white uppercase tracking-[2.5px] text-sm font-display px-6 py-2 rounded-lg hover:bg-white hover:text-[var(--color-text-dark)]"
      @click="openDialog"
    >
      Rules
    </button>

    <Teleport to="body">
      <div 
          v-if="dialog"
          class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 max-sm:bg-white max-sm:flex-col max-sm:justify-start"
      >
        <div class="bg-white rounded-2xl max-w-md w-full mx-12 p-8 relative max-sm:bg-transparent max-sm:rounded-none max-sm:max-w-full max-sm:mx-0 max-sm:h-full max-sm:flex max-sm:flex-col max-sm:justify-between max-sm:p-0">
          
          <div class="sm:block hidden">
            <button
              class="cursor-pointer absolute top-10 right-6 w-8 h-8 flex items-center justify-center hover:opacity-70"
              @click="closeDialog"
            >
              <img 
                src="/images/icon-close.svg"
                alt="Close"
                class="w-5 h-5"
              />
            </button>

            <h2
              class="text-[var(--color-text-dark)] text-[32px] font-bold font-display uppercase tracking-wider text-left mb-10"
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

          <div class="sm:hidden flex flex-col h-full">
            <div class="flex-none pt-12 pb-8">
              <h2 class="text-[var(--color-text-dark)] text-[32px] font-bold font-display uppercase tracking-wider text-center">
                Rules
              </h2>
            </div>
            
            <div class="flex-1 flex items-center justify-center px-8">
              <img
                src="/images/image-rules.svg"
                alt="Game Rules"
                class="w-full max-w-sm h-auto"
              />
            </div>
            
            <div class="flex-none pb-12 pt-8">
              <button
                class="mx-auto block w-8 h-8 flex items-center justify-center opacity-60 hover:opacity-80"
                @click="closeDialog"
              >
                <img 
                  src="/images/icon-close.svg"
                  alt="Close"
                  class="w-6 h-6"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </footer>
</template>
