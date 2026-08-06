<script setup lang="ts">
import { countries } from '@/data/travel'

const mapSvg = '/svg/map.svg'
const mapLoaded = ref(false)
const { t } = useI18n()

function countryFlag(code: string) {
  return code
    .toUpperCase()
    .split('')
    .map(char => String.fromCodePoint(127397 + char.charCodeAt(0)))
    .join('')
}
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

    <div
      class="aspect-376/197 min-h-48 overflow-hidden"
      aria-hidden="true"
    >
      <NuxtImg
        :src="mapSvg"
        alt=""
        class="block h-full w-full scale-110 object-cover transition duration-700 md:scale-[1.12] xl:scale-[1.18]"
        :class="mapLoaded ? 'blur-0 saturate-100 contrast-100' : 'blur-lg saturate-0 contrast-75'"
        :placeholder="[28, 18, 8, 6]"
        quality="92"
        loading="lazy"
        @load="mapLoaded = true"
      />
    </div>

    <div>
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
          <span
            class="inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-50 transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/20 md:px-3.5 md:py-2 md:text-sm"
          >
            <span
              class="text-base"
              aria-hidden="true"
            >{{ countryFlag(country.code) }}</span>
            {{ country.name }}
          </span>
        </li>
      </ul>
    </div>

    <DeparturesBoard :countries="countries" />
  </section>
</template>