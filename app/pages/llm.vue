<script setup lang="ts">
const { t } = useI18n()

usePageSeo({
  titleKey: 'askAi.title',
  descriptionKey: 'askAi.description',
})
</script>

<template>
  <section class="mx-auto flex w-full max-w-3xl flex-col gap-8">
    <header class="flex flex-col gap-4">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
        {{ t('askAi.kicker') }}
      </p>

      <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div class="max-w-2xl">
          <h1 class="text-3xl font-light leading-tight text-white md:text-6xl">
            {{ t('askAi.title') }}
          </h1>

          <p class="mt-3 text-sm text-slate-300/80 md:text-lg">
            {{ t('askAi.description') }}
          </p>
        </div>

        <a
          href="/llms.txt"
          target="_blank"
          rel="noopener noreferrer"
          class="shrink-0 text-sm font-semibold text-teal-300 transition hover:text-teal-200"
        >
          {{ t('askAi.openFile') }}
        </a>
      </div>
    </header>

    <AskAiChat />
  </section>
</template>
