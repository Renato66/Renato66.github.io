<script setup lang="ts">
import type { Country } from '@/data/travel'

const props = defineProps<{
  countries: Country[]
  selectedCode: string | null
}>()

const { t } = useI18n()

function countryFlag(code: string) {
  return code
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join('')
}

function chipTo(country: Country) {
  if (props.selectedCode === country.code) {
    return { path: '/travel-log' }
  }

  return {
    path: '/travel-log',
    query: { country: country.code },
  }
}

function chipClasses(country: Country) {
  const isSelected = props.selectedCode === country.code

  return [
    'border-cyan-200/25 bg-cyan-300/10 text-cyan-50 hover:border-cyan-200/45 hover:bg-cyan-300/20',
    isSelected ? 'border-cyan-200/80 bg-cyan-300/30 ring-1 ring-cyan-200/40' : '',
  ]
}

function chipLabel(country: Country) {
  if (props.selectedCode === country.code) {
    return t('travelLog.deselectCountry')
  }

  return t('travelLog.selectCountry', { country: country.name })
}
</script>

<template>
  <ul
    class="flex flex-wrap justify-center gap-2.5"
    role="list"
    :aria-label="t('travelLog.countriesVisited')"
  >
    <li
      v-for="country in countries"
      :key="country.code + country.name"
      role="listitem"
    >
      <NuxtLink
        :to="chipTo(country)"
        class="inline-flex cursor-pointer items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition hover:-translate-y-0.5 md:px-3.5 md:py-2 md:text-sm"
        :class="chipClasses(country)"
        :aria-current="selectedCode === country.code ? 'page' : undefined"
        :aria-label="chipLabel(country)"
      >
        <span
          class="text-base"
          aria-hidden="true"
        >{{ countryFlag(country.code) }}</span>
        {{ country.name }}
      </NuxtLink>
    </li>
  </ul>
</template>
