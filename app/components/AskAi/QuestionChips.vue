<script setup lang="ts">
defineProps<{
  questions: readonly {
    id: string
    text: string
  }[]
  selectedText: string
  suggestionsLabel: string
}>()

const emit = defineEmits<{
  select: [text: string]
}>()
</script>

<template>
  <ul
    class="flex flex-wrap gap-2"
    role="list"
    :aria-label="suggestionsLabel"
  >
    <li
      v-for="question in questions"
      :key="question.id"
    >
      <button
        type="button"
        class="inline-flex cursor-pointer items-center rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 md:px-3.5 md:py-2 md:text-sm"
        :class="selectedText === question.text
          ? 'border-cyan-200/80 bg-cyan-300/30 text-cyan-50 ring-1 ring-cyan-200/40'
          : 'border-cyan-200/25 bg-cyan-300/10 text-cyan-50 hover:border-cyan-200/45 hover:bg-cyan-300/20'"
        :aria-pressed="selectedText === question.text"
        @click="emit('select', question.text)"
      >
        {{ question.text }}
      </button>
    </li>
  </ul>
</template>
