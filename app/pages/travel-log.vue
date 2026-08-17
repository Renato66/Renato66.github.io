<script setup lang="ts">
import { countries } from '@/data/travel'

const { t } = useI18n()
const route = useRoute()

const selectedCode = computed(() => {
  const country = route.query.country
  const code = Array.isArray(country) ? country[0] : country

  if (!code || typeof code !== 'string') {
    return null
  }

  return countries.some(item => item.code === code) ? code : null
})

const selectedCountry = computed(() =>
  countries.find(country => country.code === selectedCode.value) ?? null,
)

const mapSrc = computed(() =>
  selectedCode.value ? `/svg/${selectedCode.value}.svg` : '/svg/map.svg',
)
</script>

<template>
  <section class="mx-auto flex w-full max-w-176.25 flex-col gap-5 md:gap-6">
    <header class="flex flex-col gap-3">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
        {{ t('travelLog.kicker') }}
      </p>

      <h1 class="text-3xl font-light leading-tight text-white md:text-6xl">
        {{ t('travelLog.title') }}
      </h1>

      <p class="max-w-2xl text-sm text-slate-300/80 md:text-lg">
        {{ t('travelLog.description') }}
      </p>
    </header>

    <TravelLogCountryMap
      :src="mapSrc"
      :country-name="selectedCountry?.name ?? null"
    />

    <div>
      <TravelLogCountryChips
        :countries="countries"
        :selected-code="selectedCode"
      />
    </div>

    <DeparturesBoard :countries="countries" />
  </section>
</template>
