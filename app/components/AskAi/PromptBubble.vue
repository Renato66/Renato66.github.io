<script setup lang="ts">
import { Check, Copy } from '@lucide/vue'

defineProps<{
  instruction: string
  question: string
  copied: boolean
  youLabel: string
  copyLabel: string
  copiedLabel: string
  copyAria: string
}>()

const emit = defineEmits<{
  copy: []
}>()
</script>

<template>
  <div class="flex flex-col items-end gap-2">
    <p class="px-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-200/80">
      {{ youLabel }}
    </p>

    <button
      type="button"
      class="group w-full max-w-xl cursor-pointer rounded-2xl rounded-tr-md border border-teal-200/25 bg-linear-to-br from-teal-400/20 to-cyan-500/10 px-4 py-3 text-left shadow-xl shadow-black/20 transition hover:border-teal-200/50 hover:bg-teal-300/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
      :aria-label="copyAria"
      @click="emit('copy')"
    >
      <p class="text-sm leading-6 text-slate-100 md:text-base">
        {{ instruction }}
      </p>

      <p
        v-if="question"
        class="mt-3 whitespace-pre-wrap text-sm font-medium leading-6 text-white md:text-base"
      >
        {{ question }}
      </p>

      <span class="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">
        <Check
          v-if="copied"
          class="h-3.5 w-3.5"
          :stroke-width="2.2"
        />
        <Copy
          v-else
          class="h-3.5 w-3.5"
          :stroke-width="2.2"
        />
        {{ copied ? copiedLabel : copyLabel }}
      </span>
    </button>
  </div>
</template>
