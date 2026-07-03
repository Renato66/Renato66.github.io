<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <main class="min-h-screen bg-gray-950 text-white">
    <header class="fixed top-0 right-0 z-50 p-4">
      <LanguageSwitcher />
    </header>
    <section class="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <NuxtImg
        src="https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3"
        preset="avatar"
        alt="Renato Vicente"
        class="rounded-full mb-6"
      />
      <h1 class="text-5xl font-thin mb-4">Renato Vicente</h1>
      <h2 class="text-2xl text-gray-400 mb-2">{{ $t('description') }}</h2>
      <p class="mt-4 text-sm text-gray-500">
        {{ $t('currentLocale') }}: <strong class="text-gray-300">{{ $t('hrefLang') }}</strong>
      </p>
    </section>
    <section>

    </section>
  </main>
</template>
