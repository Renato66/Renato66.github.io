<script setup lang="ts">
import type { Country } from '@/data/travel'

const props = defineProps<{
  countries: Country[]
}>()

const { t } = useI18n()

const cityQueue = props.countries.flatMap(country => country.cities.map(city => ({
  name: city.name,
  code: country.code,
})))

const shuffledCities = shuffleCities(cityQueue)
const boardSize = 10
const baseTime = useState<number>('travel-log-base-time', () => Date.now())
const threeHoursInMinutes = 180
const destinationCellCount = 19

const departures = shuffledCities.slice(0, boardSize).map((city, rowIndex) => {
  const start = new Date(baseTime.value)
  const roundedMinute = Math.floor(start.getMinutes() / 5) * 5
  start.setMinutes(roundedMinute, 0, 0)

  const minuteStep = boardSize > 1 ? Math.floor(threeHoursInMinutes / (boardSize - 1)) : 0
  const rowTime = new Date(start.getTime() + (rowIndex * minuteStep * 60 * 1000))
  const hour = String(rowTime.getHours()).padStart(2, '0')
  const minute = String(rowTime.getMinutes()).padStart(2, '0')
  const status = ['On Time', 'Gate Open', 'Delayed'][rowIndex % 3]
  const statusKey = status === 'On Time'
    ? 'onTime'
    : status === 'Gate Open'
      ? 'gateOpen'
      : 'delayed'

  return {
    ...city,
    key: `${rowIndex}-${city.code}-${city.name}`,
    flight: `${city.code.toUpperCase()}${String(100 + ((rowIndex * 37) % 900)).padStart(3, '0')}`,
    time: `${hour}:${minute}`,
    status,
    statusKey,
  }
})

function shuffleCities<T>(items: T[]) {
  const copy = [...items]

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = copy[i]
    copy[i] = copy[j]!
    copy[j] = tmp!
  }

  return copy
}

function cityCells(name: string) {
  return Array.from(name.toUpperCase().padEnd(destinationCellCount, ' ')).slice(0, destinationCellCount)
}

function countryFlagImage(code: string) {
  return `https://flagcdn.com/${code.toLowerCase()}.svg`
}
</script>

<template>
  <div class="relative overflow-hidden rounded-2xl border border-cyan-200/15 bg-[#111317]">
    <div class="flex items-center gap-3 border-b border-white/10 px-3 py-3 md:px-4">
      <span
        class="inline-flex h-7 w-7 items-center justify-center rounded-md bg-yellow-400 text-base text-black md:h-8 md:w-8 md:text-lg"
        aria-hidden="true"
      >
        ✈
      </span>
      <p class="text-xl font-semibold text-slate-50 md:text-2xl">
        {{ t('travelLog.departures.title') }}
      </p>
    </div>

    <div class="-mx-4 overflow-x-auto overflow-y-hidden px-4 touch-pan-x md:mx-0 md:px-0">
      <div class="w-max min-w-170">
        <div
          class="grid grid-cols-[4.6rem_1fr_5.4rem_5.2rem] gap-x-3 border-b border-white/10 px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-slate-200 md:px-4 md:text-[0.66rem]"
        >
          <span>{{ t('travelLog.departures.columns.time') }}</span>
          <span>{{ t('travelLog.departures.columns.destination') }}</span>
          <span>{{ t('travelLog.departures.columns.status') }}</span>
          <span>{{ t('travelLog.departures.columns.flight') }}</span>
        </div>

        <ul
          role="list"
          :aria-label="t('travelLog.departures.aria.cities')"
        >
          <li
            v-for="row in departures"
            :key="row.key"
            class="depart-row grid grid-cols-[4.6rem_1fr_5.4rem_5.2rem] items-center gap-x-3 border-b border-white/5 px-3 py-2.5 last:border-b-0 md:px-4"
          >
            <span class="font-mono text-xl tracking-wide text-slate-300/90 md:text-2xl">
              {{ row.time }}
            </span>

            <div class="flex min-w-0 items-center gap-3">
              <img
                :src="countryFlagImage(row.code)"
                :alt="t('travelLog.departures.flagAlt', { code: row.code.toUpperCase() })"
                class="h-4 w-5 rounded-xs object-cover"
                loading="lazy"
              >
              <div class="flex min-w-0 flex-1 gap-[0.3ch] overflow-hidden px-1 py-0.5">
                <span
                  v-for="(char, cellIndex) in cityCells(row.name)"
                  :key="`${row.key}-${cellIndex}`"
                  class="inline-flex h-6 w-[1.3ch] items-center justify-center border border-white/10 bg-white/5 font-mono text-base uppercase leading-none text-yellow-400 md:h-8 md:text-xl"
                >{{ char === ' ' ? '\u00A0' : char }}</span>
              </div>
            </div>

            <span
              class="rounded-full px-2 py-1 text-center text-[0.55rem] font-semibold uppercase tracking-[0.08em] md:text-[0.62rem]"
              :class="{
                'bg-emerald-300/15 text-emerald-200': row.statusKey === 'onTime',
                'bg-cyan-300/15 text-cyan-200': row.statusKey === 'gateOpen',
                'bg-amber-300/20 text-amber-200': row.statusKey === 'delayed',
              }"
            >
              {{ t(`travelLog.departures.status.${row.statusKey}`) }}
            </span>

            <span class="font-mono text-xl uppercase tracking-wide text-yellow-400 md:text-2xl">
              {{ row.flight }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.depart-row {
  animation: board-enter 340ms ease;
}

@keyframes board-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .depart-row {
    animation: none;
  }
}
</style>
