<script setup lang="ts">
const props = defineProps<{
  src: string
  countryName: string | null
}>()

const { t } = useI18n()
const mapLoaded = shallowRef(false)
const isCountryMap = computed(() => props.src !== '/svg/map.svg')

const mapLabel = computed(() => {
  if (props.countryName && isCountryMap.value) {
    return t('travelLog.countryMap', { country: props.countryName })
  }

  return t('travelLog.map')
})

const imageClasses = computed(() => [
  'block h-full w-full transition duration-700',
  isCountryMap.value
    ? 'object-contain'
    : 'scale-110 object-cover md:scale-[1.12] xl:scale-[1.18]',
  mapLoaded.value ? 'blur-0 saturate-100 contrast-100' : 'blur-lg saturate-0 contrast-75',
])

watch(() => props.src, () => {
  mapLoaded.value = false
})
</script>

<template>
  <div
    class="aspect-376/197 min-h-48 overflow-hidden transition duration-500"
    role="img"
    :aria-label="mapLabel"
  >
    <NuxtImg
      :key="src"
      :src="src"
      alt=""
      class="h-full w-full"
      :class="imageClasses"
      :placeholder="[28, 18, 8, 6]"
      quality="92"
      loading="lazy"
      @load="mapLoaded = true"
    />
  </div>
</template>
