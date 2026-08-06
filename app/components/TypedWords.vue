<script setup lang="ts">
type TypingPhase = 'typing' | 'holding' | 'deleting'

const props = withDefaults(defineProps<{
  words: string[]
  typingDelay?: number
  deletingDelay?: number
  holdDelay?: number
  restartDelay?: number
}>(), {
  typingDelay: 90,
  deletingDelay: 50,
  holdDelay: 1200,
  restartDelay: 300,
})

const wordIndex = shallowRef(0)
const charIndex = shallowRef(0)
const phase = shallowRef<TypingPhase>('typing')
const timeoutId = shallowRef<ReturnType<typeof setTimeout> | null>(null)
const isMounted = shallowRef(false)

const normalizedWords = computed(() => props.words.map(word => capitalizeWord(word.trim())).filter(Boolean))
const currentWord = computed(() => normalizedWords.value[wordIndex.value] ?? '')
const currentLetters = computed(() => Array.from(currentWord.value))
const typedText = computed(() => currentLetters.value.slice(0, charIndex.value).join(''))

function capitalizeWord(word: string) {
  const [firstLetter, ...remainingLetters] = Array.from(word)
  return firstLetter ? `${firstLetter.toUpperCase()}${remainingLetters.join('')}` : ''
}

function clearTypingTimer() {
  if (!timeoutId.value) {
    return
  }

  clearTimeout(timeoutId.value)
  timeoutId.value = null
}

function scheduleTypingStep(delay: number) {
  clearTypingTimer()
  timeoutId.value = setTimeout(runTypingStep, delay)
}

function restartTyping() {
  clearTypingTimer()
  wordIndex.value = 0
  charIndex.value = 0
  phase.value = 'typing'

  if (isMounted.value) {
    scheduleTypingStep(props.restartDelay)
  }
}

function runTypingStep() {
  if (normalizedWords.value.length === 0) {
    charIndex.value = 0
    return
  }

  if (phase.value === 'typing') {
    if (charIndex.value < currentLetters.value.length) {
      charIndex.value += 1
      scheduleTypingStep(props.typingDelay)
      return
    }

    phase.value = 'holding'
    scheduleTypingStep(props.holdDelay)
    return
  }

  if (phase.value === 'holding') {
    phase.value = 'deleting'
    scheduleTypingStep(props.deletingDelay)
    return
  }

  if (charIndex.value > 0) {
    charIndex.value -= 1
    scheduleTypingStep(props.deletingDelay)
    return
  }

  wordIndex.value = (wordIndex.value + 1) % normalizedWords.value.length
  phase.value = 'typing'
  scheduleTypingStep(props.restartDelay)
}

watch(normalizedWords, restartTyping)

onMounted(() => {
  isMounted.value = true
  restartTyping()
})

onBeforeUnmount(() => {
  isMounted.value = false
  clearTypingTimer()
})
</script>

<template>
  <span>
    <span class="sr-only">{{ normalizedWords.join(', ') }}</span>
    <span aria-hidden="true">
      {{ typedText }}<span class="typed-words__cursor">|</span>
    </span>
  </span>
</template>

<style scoped>
.typed-words__cursor {
  display: inline-block;
  margin-left: 0.08em;
  animation: typed-words-cursor 1s steps(2, start) infinite;
}

@keyframes typed-words-cursor {
  0%,
  45% {
    opacity: 1;
  }

  46%,
  100% {
    opacity: 0;
  }
}
</style>
