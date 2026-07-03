<script setup lang="ts">
const { t, locale, setLocale } = useI18n()

const locales = [
  {
    id: 'en',
    image: 'https://flagcdn.com/us.svg',
    text: t('language.english'),
  },
  {
    id: 'pt-BR',
    image: 'https://flagcdn.com/br.svg',
    text: t('language.portuguese'),
  },
  {
    id: 'es-ES',
    image: 'https://flagcdn.com/es.svg',
    text: t('language.spanish'),
  },
] as const

const current = computed({
  get: () => locales.find((l) => l.id === locale.value),
  set: (item) => item && setLocale(item.id),
})
</script>

<template>
  <BaseSelect
    id="language-select"
    v-model="current"
    :items="locales"
  />
</template>
