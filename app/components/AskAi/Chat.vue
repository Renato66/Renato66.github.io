<script setup lang="ts">
const { t } = useI18n()

const questionIds = ['who', 'work', 'travel', 'contact'] as const
const origin = shallowRef('')
const copied = shallowRef(false)
const question = shallowRef(t('askAi.questions.who'))

let copiedTimeout: ReturnType<typeof setTimeout> | undefined

const questions = computed(() =>
  questionIds.map(id => ({
    id,
    text: t(`askAi.questions.${id}`),
  })),
)

const llmsUrl = computed(() => (
  origin.value ? `${origin.value}/llms.txt` : '/llms.txt'
))

const instruction = computed(() =>
  t('askAi.instruction', { url: llmsUrl.value }),
)

const prompt = computed(() => {
  if (!question.value) {
    return instruction.value
  }

  return `${instruction.value}\n\n${question.value}`
})

function selectQuestion(text: string) {
  question.value = text
}

async function copyPrompt() {
  if (!import.meta.client) {
    return
  }

  try {
    await navigator.clipboard.writeText(prompt.value)
  }
  catch {
    return
  }

  copied.value = true

  if (copiedTimeout) {
    clearTimeout(copiedTimeout)
  }

  copiedTimeout = setTimeout(() => {
    copied.value = false
  }, 1500)
}

onMounted(() => {
  origin.value = window.location.origin
})

onUnmounted(() => {
  if (copiedTimeout) {
    clearTimeout(copiedTimeout)
  }
})
</script>

<template>
  <div class="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/4 p-4 shadow-xl shadow-black/20 md:p-6">
    <AskAiPromptBubble
      :instruction="instruction"
      :question="question"
      :copied="copied"
      :you-label="t('askAi.you')"
      :copy-label="t('askAi.copy')"
      :copied-label="t('askAi.copied')"
      :copy-aria="t('askAi.copyAria')"
      @copy="copyPrompt"
    />

    <div class="flex max-w-md flex-col items-start gap-2">
      <p class="px-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        {{ t('askAi.assistant') }}
      </p>
      <p class="rounded-2xl rounded-tl-md border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-slate-300">
        {{ t('askAi.pasteHint') }}
      </p>
    </div>

    <AskAiQuestionChips
      :questions="questions"
      :selected-text="question"
      :suggestions-label="t('askAi.suggestionsLabel')"
      @select="selectQuestion"
    />
  </div>
</template>
