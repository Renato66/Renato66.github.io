<script setup lang="ts">
import type { SelectItem } from '~/components/Base/Select.vue'

const { locale, setLocale } = useI18n()

const locales: SelectItem[] = [
  {
    id: 'en',
    image: 'https://flagcdn.com/us.svg',
    text: 'English (US)',
  },
  {
    id: 'pt-BR',
    image: 'https://flagcdn.com/br.svg',
    text: 'Português (BR)',
  },
  {
    id: 'es-ES',
    image: 'https://flagcdn.com/es.svg',
    text: 'Español (ES)',
  },
]

const current = computed(() =>
  locales.find((l) => l.id === locale.value),
)

async function handleSelect(item: SelectItem) {
  await setLocale(item.id as 'en' | 'pt-BR' | 'es-ES')
}
</script>

<template>
  <BaseSelect id="language-select" :items="locales" :current="current" @select="handleSelect" />
</template>
